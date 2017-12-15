import React, { Component } from 'react'
import KanbanBoard from './KanbanBoard'
import update from 'immutability-helper'
import 'babel-polyfill'
import 'whatwg-fetch'



const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type' : 'application/json',
    'Authorization' : 'Hello'
};


export default class KanbanBoardContainer extends Component {
    constructor() {
        super(...arguments);

        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        fetch(`${API_URL}/cards`, {headers: API_HEADERS})
            .then(response => response.json())
            .then(jsonStr => this.setState({cards:jsonStr}))
            .catch(err => {
                console.error('error occured!!', err);
            })
    }
    
    addTask(cardId, taskName) {
        let prevState = this.state;
        let cardIndex = this.state.cards.findIndex((card)=>card.id === cardId);
        let newTask={ id : Date.now(),  name:taskName, done:false };
        let nextState = update(this.state.cards, {
            [cardIndex] : {
                 tasks : { $push : [newTask] }
            }
        });

        this.setState({ cards : nextState });

        fetch(`${API_URL}/cards/${cardId}/tasks`, {
            method : 'post',
            headers : API_HEADERS,
            body : JSON.stringify(newTask)
        }).then((response)=> {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Server response wasn'y OK!!");
            }
        })
        .then((responseData)=> {
            newTask.id = responseData.id;
            this.setState({ cards:nextState });
        }).catch((error)=> {
            this.setState(prevState);
        })
    }

    deleteTask(cardId, taskId, taskIndex) {
        let prevState = this.state;
        let cardIndex = this.state.cards.findIndex((card)=>card.id=== cardId);
        let nextState = update(this.state.cards, {
            [cardIndex] : {
                tasks : { $splice : [[taskIndex, 1]]}
            }
        })
        this.setState({ cards : nextState });

        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method : 'delete',
            headers : API_HEADERS
        }).then((response)=> {
            if (!response.ok) {
                throw new Error("Server response wasn't ok!");
            }
        }).catch((error)=> {
            console.error("Fetch error : ", error);
            this.setState(prevState);
        })
    }

    toggleTask(cardId, taskId, taskIndex) {
        let prevState = this.state;
        let cardIndex = this.state.cards.findIndex((card)=>card.id=== cardId);
        let newDoneValue;
        let nextState = update(
            this.state.cards, {
                [cardIndex] : {
                    tasks : {
                        [taskIndex] : {
                            done : {
                                $apply : (done)=> {
                                    newDoneValue = !done;
                                    return newDoneValue;
                                }
                            }
                        }
                    }
                }
            }
        );

        this.setState({ cards : nextState });
        
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method : 'put',
            headers : API_HEADERS,
            body : JSON.stringify({ done: newDoneValue })
        }).then((response)=> {
            if (!response.ok) {
                throw new Error("Server response wasn't ok!");
            }
        }).catch((error)=>{
            console.log("ERROR : ", error);
            this.setState(prevState);
        })

    }

    render() {
        return (
            <KanbanBoard cards={this.state.cards} 
            taskCallBacks={{
                add: this.addTask.bind(this),
                delete: this.deleteTask.bind(this),
                toggle: this.toggleTask.bind(this)
            }}/>
        )
    }
}
