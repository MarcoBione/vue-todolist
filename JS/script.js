const {createApp} = Vue;

createApp({
    data(){
        return{

            toDoList: [
                {
                    text: 'item1',
                    done: false
                },
                {
                    text: 'item2',
                    done: false
                },
                {
                    text: 'item3',
                    done: false
                },
                {
                    text: 'item4',
                    done: false
                }
            ]
            
        }
    },
    methods:{

    }
}).mounted('#app');