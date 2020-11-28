import React from 'react';

class Bomb extends React.Component{
    constructor(props) {
        super() 
            this.state = {
                secondsLeft: props.initialCount
                
            }
            const secondsLeft = props.initialCount
            if (this.state === 120) {
                return<h1>120 seconds left before I go boom!</h1>
            } 
            if (secondsLeft === 0){
                return <h1>"Boom!"</h1>
            }
        }
        

    render(){
        return <h1> {this.state.secondsLeft} seconds left before I go boom!'
        </h1>
    }
}

export default Bomb
