import { LightningElement } from 'lwc';

export default class DemoParentSetter extends LightningElement {
    parentString = 'ajskill';
    parentArray = [1,2,3,4,5];
    parentObject = {id:1,
                    name:'Dhoni',
                    age:23,
                    team:'CSK',
                    imgSrc : "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_640,q_60/lsci/db/PICTURES/CMS/319000/319001.png"
    };           
}