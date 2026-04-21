import { LightningElement } from 'lwc';

export default class DemoToDoList extends LightningElement {
    //1.create an array property
    //2.capture input from text using this.todoTask
    //3.add todoTask to todoTaskList- forming the object array
    //4.clear todoTask
    taskList = [];//empty array1.string array['yoga']2.obj array[{taskid:'1',task:'yoga'}]
    task = '';
    
    handleTaskChange(event){
        this.task = event.target.value;
    }
    handleAddClick(){
        //1.todoTaskList.size
        console.log('hi');
        let newTaskObj;
        let taskId;
        taskId=this.taskList.length;
        console.log(taskId);    
        taskId++;
        newTaskObj = {
            taskId:taskId,
            task:this.task
        };
        console.log(JSON.stringify(newTaskObj));
        this.taskList = [...this.taskList,newTaskObj];
        console.log(JSON.stringify(this.taskList));
        this.task = '';
    } 
    handleDeleteTask(event){
        let iconId;
        console.log(event);
        console.log(event.target);
        iconId=event.target.name;
        console.log("iconid:",iconId);
        //filter method-filters the array and creates the new array with the given criteria
        this.taskList=this.taskList.filter(curTask=>curTask.taskId!==iconId);
        console.log("list:",this.taskList );
    }
    get isTaskListNotEmpty(){
        return this.taskList.length > 0;
    }  
}