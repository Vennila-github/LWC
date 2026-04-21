import { LightningElement } from 'lwc';

export default class CasestudyTemplateIterator extends LightningElement {
    list=[
        {
            id : 0,
            Topic: 'Topic',
            Concepts : ['Concepts']
        },
        {
            id : 1,
            Topic: 'Reactivity',
            Concepts : ['@Track']
        },
        {
            id : 2,
            Topic: 'Parent-Child Communication',
            Concepts : ['@api']
        },
        {
            id : 3,
            Topic: 'Child-Parent Communication',
            Concepts : ['Custom DispatchEvent']
        },
        {
            id : 4,
            Topic: 'Life Cycle Hooks',
            Concepts : ['constructor',
                    'connectedCallback',
                    'renderedCallback',
                    'disconnectedCallback',
                    'errorCallback']
        },
        {
            id : 5,
            Topic: 'Lightning Data Service(LDS)',
            Concepts : ['@wire']
        }
    ];
}