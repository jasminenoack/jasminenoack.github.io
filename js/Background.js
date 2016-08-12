import React from 'react';
import {queens} from './queens';

var Background = React.createClass({
    getInitialState: function () {
        return {
            queensIndex: Math.floor(Math.random()*queens.length)
        }
    },

    render: function () {
        const currentQueens = queens[this.state.queensIndex];

        return (
            <ul style={{position: "fixed", top: 0, bottom: 0, right: 0, left: 0}}>
                {currentQueens.map((row, index) => {
                    return (
                        row.map((square, jindex) => {
                            return <li
                                key={"" + index + jindex}
                                className={square=="Queen" ? "queen" : "blank"}
                                style={{
                                    width: "calc(100% / 8)",
                                    height:  "calc(100% / 8)",
                                    float: "left"
                            }}/>
                        })

                    )
                })}
            </ul>
        );
    },

    componentDidMount: function () {
        const that = this;
        setInterval(() => {that.setState({queensIndex: Math.floor(Math.random()*queens.length)})}, 1000);
    },
});

export default Background;
