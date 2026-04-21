import { LightningElement,track } from 'lwc';

export default class ReavtivityDemo extends LightningElement {
    @track course = ['admin','developer','salesforce','lwc'];
    @track qaslot = {
        session : '9am',
        Timing : '9am',
        Duration : "1 hr"
    };
    handleChangeSlot(event){
        this.qaslot.session = event.target.value;
    }
}