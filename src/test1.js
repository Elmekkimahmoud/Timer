import React, { Component } from 'react';
class Test1 extends Component {

    constructor() {
        super();
        this.state = {

            time:7388,
            isON : false 

         
        };

       
    }
   
    calcTime = (reste) => {
         
        var nbHours = Math.floor(reste / 3600);
        if (nbHours<10){nbHours='0'+nbHours }
        reste -= nbHours * 3600;

        var nbMinutes = Math.floor(reste / 60);
        if (nbMinutes<10){nbMinutes='0'+nbMinutes }
        reste -= nbMinutes * 60;
        
        var nbSeconds = reste;
        if (nbSeconds<10){nbSeconds='0'+nbSeconds }

     
       return (
            <div>
                    <span> {nbHours} :</span>
                    <span>{nbMinutes} :</span>
                    <span >{nbSeconds} </span>
            </div>
        )

    }
           


    //remise a ziro
    resetFunction = () => {
        
        clearInterval(this.interval)
        this.setState({ time: 0 , 
        isON:false})

    }

    //fonction start 
 
    incFunction=() =>{
      
        this.interval = setInterval(()=> {
             this.setState({
                 time : this.state.time + 1
             })
        },1000)
        this.setState({isON:true})
    }
    

    Stop=()=> {
      
    this.setState({
        isON:false
    })
    clearInterval(this.interval)
   
}
   
 


    render() {
        console.log(this.state.isON)


        return (

            <section className='container'>

                <div className='counter'>
                {this.calcTime(this.state.time)}
                </div>
                <div className='time'>
                    <span>Hour </span>
                    <span>Minute </span>
                    <span>Second </span>
                </div>
                <div className='setting'>
                    <button id='start' onClick={this.state.isON ? this.Stop :this.incFunction}>Start</button>
                    <button id='reset' onClick={this.resetFunction}> Reset</button>
          
                </div>
            </section>


        );
    }
}

export default Test1;
