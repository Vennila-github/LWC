import { LightningElement } from 'lwc';
import enrollment from './enrollmentTemplate.html'
import alumni from './alumniTemplate.html'
import demoRender from './demoRender.html' //main component default template

export default class DemoRender extends LightningElement {
    chosenTemplate;
    templateName;
    handleClick(event){//both new enrollment and alumni, and also for back button
        this.chosenTemplate=event.target.label;
        // if(this.chosenTemplate === 'New Enrollment'){
        //     this.templateName = enrollment;
        // }
        // else if(this.chosenTemplate === 'Alumni'){
        //     this.templateName = alumni;
        // }
    }
    render(){
        //return this.templateName;   
        return this.chosenTemplate==='New Enrollment'?enrollment:
                this.chosenTemplate==='Alumni'?alumni:
                demoRender;                
    }
}