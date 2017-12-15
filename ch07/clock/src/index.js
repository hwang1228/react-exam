import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Clock from './Clock'
// import Perf from 'react-addons-perf'

class App extends Component {
    constructor(){
        super(...arguments);
        this.state = this.getTime();
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState(this.getTime());
        },1);
    }
    getTime(){
        let now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
            tenths: parseInt(now.getMilliseconds())
        };
    }
    render(){
        let clocks = [];
        for(let i=0; i< 200; i++) {
            clocks.push(
                <Clock hours={this.state.hours}
                minutes={this.state.minutes}
                seconds={this.state.seconds}
                tenth={this.state.tenths} />
            )
        }
        return (
            <div>
                {clocks}
            </div>
        );
    }
}

// Perf.start();
ReactDOM.render(<App />, document.getElementById('root'));
// Perf.stop();
