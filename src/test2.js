import React, { Component } from 'react';
class Test2 extends Component {
    
    constructor() {
        super();
        this.state = {

            time: 5201,

            second: 0, minute: 0, hours: 0
        };
       
        setInterval( () => {
            this.setState(  {second:this.state.second +1}) 
            
        }, 1000);
    }
    



    calcTime = (reste) => {

         reste = this.state.time;
        var nbHours = Math.floor(reste / 3600);
        reste -= nbHours * 3600;

        var nbMinutes = Math.floor(reste / 60);
        reste -= nbMinutes * 60;
        
        var nbSeconds = reste;
        if ((nbHours > 0) && (nbMinutes > 0) && (nbSeconds > 0))

        this.setState({ hours: nbHours, minute: nbMinutes, second: nbSeconds })
      
        else { this.setState({ second: 0 }) }


    }








alertFunc = ()=>{
    alert("hello mahmoud")
}






//remise a ziro
resetFunction = () => {
    this.setState({ hours: 0, minute:0, second:0 })
}

/*setTimeout(() => {this.calcTime()
            
}, 1000);*/

        
    



    render() { 
        
        return (  
                    
                <section className='container'>

                <div className='counter'>
                    <span>{this.state.hours} :</span>
                    <span>{this.state.minute} :</span>
                    <span >{this.state.second} </span>
                </div>
                <div className='time'>
                    <span>Hour </span>
                    <span>Minute </span>
                    <span>Second </span>
                </div>
                <div className='setting'>
                    <button id='start' onClick={this.calcTime} >Start</button>
                    <button id='reset' onClick={this.resetFunction}> Reset</button>
                </div>
                
                </section>

        );
    }
}
 
export default Test2;