const app = Vue.createApp({
    data() {
        return {
            idCounter: 1,
            newItem: {
                id: "",
                text: "",
                done: false,
            },
            toDoList: [{
                id: 1,
                text: "Cosa da fare",
                done: false,
            }],
        }
    },
    methods: {
        addItem() {
            const itemClone = {...this.newItem, id: ++this.idCounter}
            this.toDoList.push(itemClone)
        },
        deleteItem(itemId) {
            let itemToDelete = this.toDoList.findIndex((item) => item.id === itemId);
            this.toDoList.splice(itemToDelete, 1);
        },
    }
});

app.mount("#app");