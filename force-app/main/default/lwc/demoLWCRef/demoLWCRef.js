import { LightningElement } from 'lwc';

export default class DemoLWCRef extends LightningElement {
    name;
    age;
    join;
    handleNameChange(event){
        this.name = event.target.value;
         this.refs.refAge.required = true;
    }
    handleAgeChange(event){
        this.age = event.target.value;
       
    }
    handleCheckEligi(event){
        if(this.age >= 18){
            //this.template.querySelector('p').innerHTML = 'Eligible';--OLD
            //this.refs.refEligi.innerText='Eligible';
            this.refs.refEligi.innerHTML = "<p>Eligible</p>";
            this.refs.refJoinButton.disabled = false;

        }else{
            this.refs.refEligi.innerText='Not Eligible';
            this.refs.refJoinButton.disabled = true;
        }
    } 
    handleJoinClick(event){
        alert('Welcome '+this.name);
    }
}