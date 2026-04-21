import { LightningElement,track } from 'lwc';

export default class TemplateLooping extends LightningElement {
    newCourseName='';
    @track course = ["Apex"];
    //'admin','developer','salesforce','lwc'
    handleCourseChange(event){
        this.newCourseName=event.target.value;
        console.log(this.newCourseName);
    }
    handleClick(event){
        this.course.push(this.newCourseName);
        console.log(this.course);
        console.log(JSON.stringify(this.course));
    }
    get isArray(){
        return this.course.length>0;
    }
}