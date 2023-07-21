const app = Vue.createApp ({
    data() {
        return {
            toDoList: [{
                id: 1, 
                text: "Cosa da fare",
                done: false,
            }],
        }
    }
});

app.mount("#app");