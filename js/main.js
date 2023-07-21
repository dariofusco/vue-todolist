const app = Vue.createApp({
    data() {
        return {
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
            const itemClone = {...this.newItem}
            this.toDoList.push(itemClone)
        }
    }
});

app.mount("#app");