import { LightningElement } from 'lwc';

export default class TemplateLoopingWithObjectArray extends LightningElement {
    students = [
        {
            Name:'stu1',
            //Rollno:1,
            Average:90
        },
        {
            Name:'stu2',
            //Rollno:2,
            Average:80
        },
        {
            Name:'stu3',
            //Rollno:3,
            Average:70
        }
    ]
}