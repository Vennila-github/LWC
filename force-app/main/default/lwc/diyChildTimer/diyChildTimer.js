import { LightningElement,api } from 'lwc';

export default class DiyChildTimer extends LightningElement {
    timerValue=0;
    intervalId;
    //setInterval(() => {code},1000);))
    @api start(){
        this.intervalId=setInterval(()=>{
            this.timerValue=this.timerValue+1;
            // if(this.progress>=100){
            //     this.progress=100;
            //     this.stop();
            // }        
        },1000);
    }
    get formattedTime() {
        const minutes = Math.floor(this.timerValue / 60);
        const seconds = this.timerValue % 60;
        return `${this.pad(minutes)}:${this.pad(seconds)}`;
    }

    pad(value) {
        return value < 10 ? '0' + value : value;
    }
    @api stop(){
        clearInterval(this.intervalId);
    }
    @api reset(){
        this.timerValue=0;
    }
}