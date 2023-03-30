const { createApp } = Vue;

createApp({
    data() {
        return {

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
                },
            ]
        }
    },
    methods: {
        addItems() {
            const newItem = {
                text: this.text,
                done: false
            }
            this.toDoList.push(newItem);
            //reset input text
            this.text = "";
        },
        removeItems(index) {
            this.toDoList.splice(index, 1);
        },
        checkedItems(index){
            this.toDoList[index].done = "true";
            console.log(this.toDoList[index]);
        }
    }
}).mount('#app');