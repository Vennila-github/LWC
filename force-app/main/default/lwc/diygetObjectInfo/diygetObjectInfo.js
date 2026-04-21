import { LightningElement,wire,api } from 'lwc';
import getObjectInfo from 'lightning/uiObjectInfoApi';
export default class DiygetObjectInfo extends LightningElement {
    @api objectApiName;
    objectData={}
    @wire(getObjectInfo,{objectApiName:'$objectApiName'})
    objectInfoHandler({data,error}){
        if (!this.objectApiName) {
            console.warn('objectApiName is undefined');
            return;
        }
        if(data){
            this.objectData = data;
            console.log(data);
        }else if(error){

        }
    }
}