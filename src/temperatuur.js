import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'

const API = 'http://api.openweathermap.org/data/2.5/weather?q=Parnu&appid=312148cec8dfac78058217072b44201e';
const DEFAULT_QUERY = 'redux';

class Temp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: 0,
        };
    }

    componentDidMount() {
        const res = fetch(API)
        const temp =  res.json()
    }
    render() {
        const { temp } = this.state;

        return (
            <div>
                {temp.main.temp}
            </div>
        );
    }
}

export default Temp;