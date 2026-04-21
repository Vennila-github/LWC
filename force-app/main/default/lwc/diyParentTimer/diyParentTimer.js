import { LightningElement } from 'lwc';

export default class DiyParentTimer extends LightningElement {
    handleStart(){
        this.refs.child.start();
    }
    handleStop(){
        this.refs.child.stop();
    }
    handleReset(){
        this.refs.child.reset();
    }
}