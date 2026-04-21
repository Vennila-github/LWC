import { LightningElement } from 'lwc';

export default class DemoParent extends LightningElement {
    //1.pass the string data
    //dataToChild = 'This is a message from parent component';
    //2.Arrays
    //courses = ["apex","salesforce","javascript","html","css"];
    //3.Objects below (single simple obj)
    // car={
    //     brandname : "Honda",
    //     model : "Civic",
    //     year : "2020"
    // };
    //4.object array below
    cars=[
        {
            brandname : "Benz",
            model : "QA34",
            year : "2020"
        },
        {
            brandname : "Toyota",
            model : "Camry",
            year : "2021"
        },
        {
            brandname : "Ford",
            model : "Mustang",
            year : "2022"
        }
    ];   
}