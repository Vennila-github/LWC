import { LightningElement } from 'lwc';

export default class DiyChildParentParent extends LightningElement {
    showChild;
    selectedImages = [];
    imageNames = [];
    handleClick(event){
        this.showChild=true;
    }
    handleCloseChild(event){
        this.selectedImages = event.detail;
        this.imageNames = this.selectedImages.map(img => img.name);
        console.log('type:', typeof this.imageNames);
        console.log('isArray:', Array.isArray(this.imageNames));
        this.showChild=false;
    }
}