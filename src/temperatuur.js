// teine api https://api.darksky.net/forecast/aab089bd99d137d0887988eb420dd8bd/58.3801,24.52?lang=et&units=auto
import React, { Component } from 'react';

const urlForTemp = username => {
    return `https://api.openweathermap.org/data/2.5/weather?q=Parnu&appid=312148cec8dfac78058217072b44201e`
}

class FetchTemp extends Component {

    state = {
        requestFailed: false
    }

    // lifecycle hook
    componentDidMount(){
        // load the API - fetch - that return promise, and then we parse it as json
        setTimeout(() => {
            fetch(
                urlForTemp()
            )
                .then(response => {
                    console.log('Response:',response)
                    if(!response.ok){
                        throw Error('Network request fail')
                    }

                    return response;
                })
                .then( data => data.json())
                .then( data => {
                    this.setState({
                        fetchedData: data
                    })
                }, () => {
                    this.setState({
                        requestFailed: true
                    })
                })
                .catch('Error')
        },3000)

    }

    render(){

        const { fetchedData } = this.state

        if(!this.state.fetchedData) {
            return <p>Laen andmeid!</p>
        }

        if(this.state.requestFailed) {
            return <p>Ei õnnestunud saada andmeid!</p>
        }

        console.log('Saadud andmed:', fetchedData)
        return (
            <div>
                <h2>Hetkel on õues {Math.round(fetchedData.main.temp-273.15)} kraadi.</h2>
            </div>

        )
    }
}

export default FetchTemp;