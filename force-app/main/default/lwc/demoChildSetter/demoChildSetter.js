import { LightningElement,api } from 'lwc';

export default class DemoChildSetter extends LightningElement {
    _modifiedString;//_ is to indicate that its a private property only used in getter and setter
    _updatedArray;
    _player;
    
    @api 
    get childString(){
        return this._modifiedString;
    }
    set childString(value){
        this._modifiedString = value.toUpperCase();
    }
    // @api
    // get childArray(){

    // }
    // set childArray(value){
    //     this._updatedArray=value;
    //     this._updatedArray.push(6);
    //     console.log(this._updatedArray.length);
    // }

    @api 
    get childObject(){
        return this._player;
    }
    set childObject(value){
        console.log(value);
        this._player={...value};//shallow copy
        this._player.name=this._player.name.toUpperCase();
        //below can also be done 
        //this._player={...value, name:value.name.toUpperCase};
        console.log(this._player.name);
    }
}