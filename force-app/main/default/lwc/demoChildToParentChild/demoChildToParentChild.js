import { LightningElement } from 'lwc';

export default class DemoChildToParentChild extends LightningElement {
    handleClick(event){
        //create a custom event
        // const myEvent = new CustomEvent('close',{detail:[1,2,3]});     -- array
        const myEvent = new CustomEvent('close',{detail:this.name});   //obj
        //dispatch the event
        this.dispatchEvent(myEvent);
    }
    name;
    handleNameChange(event){
        this.name=event.target.value;
    }
}