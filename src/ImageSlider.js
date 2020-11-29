import React from 'react';

class ImageSlider extends React.Component {
    constructor() {
        super() 
            this.state = {
                currentSlideIndex: 0
            }
        }
        
        // increment = () => {
        //     const newCount = this.state.currentSlideIndex === 1
        //     this.setState({
        //       count: newCount
        //     })
        //   }
        

    render(){
        return (
        <div>I am on slide 0</div>
        )
    }
  }
  export default ImageSlider
