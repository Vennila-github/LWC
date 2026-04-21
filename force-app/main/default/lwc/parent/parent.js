import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    handleClose(event){
        console.log("parent called");
    }
    handleDivClose(event){
        console.log("parent div called");
        event.stopPropagation();
    }
}