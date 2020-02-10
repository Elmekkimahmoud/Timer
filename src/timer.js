import React, { Component } from 'react';
class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {

            time: 5000,

            second: 0, minute: 0, hours: 0
        };

    }
        resetFunction = () => {
          this.setState({ hours: 0, minute: 0, second: 0 })
    }



    // calcTime = () => {



    //     var reste = this.state.time;
    //     var result = '';




    //     if ((nbHours > 0) && (nbMinutes > 0) && (nbSeconds > 0))

    //         this.setState({ hours: nbHours, minute: nbMinutes, second: nbSeconds })

    //     increment second + min + hours
    //     var valsec = this.state.second
    //     if (valsec < 60) {
    //         setInterval(() => {
    //             this.setState({ second: this.state.second + 1 })

    //         }, 1000);
    //     }
    //     else { this.setState({ second: 0 }) }




    // }

    /*    setInterval( () => {
            this.setState(  {second:this.state.second +1}) 
            
        }, 1000);
    
    
    setInterval( () => {
        this.setState({minute:this.state.minute +1})
        
    }, 60000);
    setInterval( () => {
        this.setState({hours:this.state.hours +1})
        
    }, 3600000);
}*/
    Time = (reste) => {
        var nbHours = Math.floor(reste / 3600);
        reste -= nbHours * 3600;

        var nbMinutes = Math.floor(reste / 60);
        reste -= nbMinutes * 60;

        var nbSeconds = reste;

        return (
            <div>
                <span>{nbHours} :</span>
                <span>{nbMinutes} :</span>
                <span>{nbSeconds} </span>
            </div>
        )

    }

    render() {


        return (

            <section className='container'>

                <div className='counter'>
                    {/* <span >{this.state.hours}</span>
                        <span> : </span>
                        <span>{this.state.minute}</span>
                        <span> : </span>
                        <span>{this.state.second}</span>    */}
                    {this.Time(this.state.time)}
                </div>
                <div className='time'>
                    <span>Hour </span>
                    <span>Minute </span>
                    <span>Second </span>
                </div>
                <div className='setting'>
                    <button id='start' onClick={this.calcTime}>Start</button>
                    <button id='reset' onClick={this.resetFunction}> Reset</button>
                </div>
            </section>


        );
    }
}

export default Timer;


/*
function conversion_seconde_heure(time) {
				var reste=time;
				var result='';

				var nbJours=Math.floor(reste/(3600*24));
				reste -= nbJours*24*3600;

				var nbHours=Math.floor(reste/3600);
				reste -= nbHours*3600;

				var nbMinutes=Math.floor(reste/60);
				reste -= nbMinutes*60;

                var nbSeconds=reste;
                 result;
			}


*/