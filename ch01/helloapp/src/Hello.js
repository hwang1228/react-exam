import React, { Component } from 'react';


let name='<i>Tom, Hwang</i>';

class Hello extends Component {
    render() {
        return [
            <h1 key="1">
                Hello {name}!!@0@
            </h1>,
            <h2 key="2">How Are You?</h2>
        ];

        // return (
        //     <h1>
        //         Hello {name}!!@0@
        //     </h1>
        // );
    }
}

export default Hello;