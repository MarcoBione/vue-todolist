const { createApp } = Vue;

createApp({
    data() {
        return {

            toDoList: [
                
            ]
        }
    },
    methods: {
        addItems() {
            if(this.text.length > 0){

                const newItem = {
                    text: this.text,
                    done: false
                }
                this.toDoList.push(newItem);
                //reset input text
                this.text = "";
            }            
        },
        removeItems(index) {
            this.toDoList.splice(index, 1);
        },
        //checkedItems(index){
            //this.toDoList[index].done = "true";
           //console.log(this.toDoList[index]);
        //}
    }
}).mount('#app');