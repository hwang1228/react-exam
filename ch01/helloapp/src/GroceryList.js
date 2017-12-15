import React, { Component } from 'react';
import ListItem from './ListItem';

let data = [
    { no: 1, name: '바나나', quantity:3 },
    { no: 2, name: '딸기', quantity:12 },
    { no: 3, name: '사과', quantity:6 }
];

class GroceryList extends Component {
    render() {
        var list = [];
        for(var i=0; i<data.length; i++) {
            list.push(
                <ListItem name={data[i].name} quantity={data[i].quantity} />
            )
        }
        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default GroceryList;