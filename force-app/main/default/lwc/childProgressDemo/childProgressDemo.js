import { LightningElement,api } from 'lwc';

export default class ChildProgressDemo extends LightningElement {
    progress=0;
    intervalId;
    //setInterval(() => {code},1000);))
    @api start(){
        this.intervalId=setInterval(()=>{
            this.progress=this.progress+10;
            // if(this.progress>=100){
            //     this.progress=100;
            //     this.stop();
            // }        
        },1000);
    }
    @api stop(){
        clearInterval(this.intervalId);
    }
    @api reset(){
        this.progress=0;
    }
}
