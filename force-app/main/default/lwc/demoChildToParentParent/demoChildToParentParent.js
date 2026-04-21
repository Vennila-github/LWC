import { LightningElement } from 'lwc';

export default class DemoChildToParentParent extends LightningElement {
    showChild;
    name;
    handleClick(event){
        this.showChild=true;
    }
    handleCloseChild(event){
        this.showChild=false;
        console.log(event);
        //below is for array
        // let childArray = event.detail; //spread opertator [...event.detail] to avoid the proxy array and do the manipulation of data
        // childArray.forEach(item => {
        //     alert(item);
        // });
        //below is for object
        // let childObject = {...event.detail};//enough just to access the data, spread operator to manipulate the data
        // console.log(event.detail.name);
        this.name=event.detail;
        console.log(this.name);
    }
}