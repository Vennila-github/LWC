import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    handleClose(){
        console.log('grandparent called');
    }
}