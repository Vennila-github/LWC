import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CasestudyConditionalRendering extends LightningElement {
    isAlreadyMemberChosen = false;
    isNewMemberChosen = false;
    login = '';
    password = '';
    name = '';
    email = '';
    loginError = '';
    errorMessage = '';
    registerError = '';
    handleAlreadyMemberChange(event){
        this.isAlreadyMemberChosen = event.target.checked;
        this.isNewMemberChosen=false;
        this.template.querySelector(".newMemberCheck").checked=false;
        console.log(this.isAlreadyMemberChosen);
    }
    handleNewMemberChange(event){
        this.isNewMemberChosen = event.target.checked;
        this.isAlreadyMemberChosen=false;
        this.template.querySelector(".alreadyMemberCheck").checked=false;
        console.log(this.isNewMemberChosen);
    }
    handleLoginChange(event){
        this.login = event.target.value;
    }
    handlePasswordChange(event){
        this.password = event.target.value;
    };
    handleSubmit() {
        const correctLogin = 'admin';
        const correctPassword = '1234';
        console.log(this.login);
        console.log(this.password)
        if (this.login === correctLogin && this.password === correctPassword) {
            alert('Welcome '+this.login);       
        } else {
            this.loginError = 'Invalid Password';
        }
    }
    handleNameChange(event){
        this.name = event.target.value;
    }
    handleEmailChange(event){
        this.email = event.target.value;
    }
    handleRegister() {
        if (!this.name || !this.email) {
            this.registerError = 'Please enter both UserName and Email for successful Registration';
        } else {
            this.registerError = '';
            alert('Registration successful');
        }
    }
}