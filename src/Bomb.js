import React from 'react';

class Bomb extends React.Component{
    constructor(props) {
        super() 
            this.state = {
                secondsLeft: props.initialCount
                
            }
            const secondsLeft = props.initialCount
            if (this.state === 120) {
                return "120 seconds left before I go boom!"
            } 
            if (this.state === 0){
                return "Boom!"
            }
        }
        

    render(){
        return <h1> {this.state.secondsLeft} seconds left before I go boom!'
        </h1>
    }
}

export default Bomb
