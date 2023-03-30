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

            this.text = "";
        },
        removeItems(index) {
            this.toDoList.splice(index, 1);
        }
    }
}).mount('#app');