import { LightningElement,api } from 'lwc';
import mysorePalace from '@salesforce/resourceUrl/mysorePalace';
import tajMahal from '@salesforce/resourceUrl/tajMahal';
import temple from '@salesforce/resourceUrl/temple';


export default class DiyChildParentChild extends LightningElement {
    images = [  { id: 1, sr: mysorePalace, alt: 'Mysore Palace' },
                { id: 2, sr: tajMahal, alt: 'Taj Mahal' },
                { id: 3, sr: temple, alt: 'Temple' }
    ];
    @ api arrayOfImages=[];
    handleCancel(){
        console.log('inside handlecancel');
        this.dispatchEvent(new CustomEvent('close',{detail: this.arrayOfImages}));
        console.log('after dispatch');
    }
    handleCheckboxChange(event){
        console.log('inside handleCheckboxChange');
        const id = Number(event.target.dataset.id);
        const checked = event.target.checked;
        const image = this.images.find(img => img.id === id);
        if(!image) return;
        if(checked){
            console.log('inside if');
            this.arrayOfImages = [
            ...this.arrayOfImages,
                {
                    id: image.id,
                    name: image.alt,
                    src: image.sr
                }
            ];
        }else{
            this.arrayOfImages = this.arrayOfImages.filter(img => img.id !== id);
        }
        console.log('b4 handlecalce');
    }
}