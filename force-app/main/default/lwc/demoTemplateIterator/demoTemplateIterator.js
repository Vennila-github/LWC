import { LightningElement } from 'lwc';

export default class DemoTemplateIterator extends LightningElement {
    employeesList =[
        {
            empid:'1',
            empName:'Arun',
            empSalary:'100000'
        },
        {
            empid:'2',
            empName:'Vinoth',
            empSalary:'200000'
        },
        {
            empid:'3',
            empName:'Karthik',
            empSalary:'300000'
        },
        {
            empid:'4',
            empName:'four',
            empSalary:'340000'
        },
        {
            empid:'5',
            empName:'five',
            empSalary:'500000'
        }
    ]
}