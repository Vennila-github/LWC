import { LightningElement } from 'lwc';

export default class Course extends LightningElement {
    firstName = "vennila";
    lastName = "ramasamy";
    days = 90;
    course = ['admin','developer','salesforce','lwc'];
    qaslot = {
        session : '9am',
        Timing : '9am',
        Duration : "1 hr"
    };
    isSlotAvl = true;
    handleChange(event){
        this.firstName = event.target.value;
    }
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
    get noOfCoursesChosen(){
        return this.course.length;
    }
}