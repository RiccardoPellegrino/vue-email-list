"use-strict"

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            arrayEmail: []
        }
    },
    methods: {
        callApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((rispostaApi) => {
                console.log(rispostaApi.data.response);
                risposta = rispostaApi.data.response;
                this.arrayEmail.push(risposta);
            })
        },

        pulisciArray() {
            this.arrayEmail=[]
            console.log("cancella"+this.arrayEmail);
            for (let i = 0; i < 10; i++) {
                this.callApi();
            }
        },
        
    },

    computed: {

    },

    created() {
        console.log("created")
        for (let i = 0; i < 10; i++) {
            this.callApi();
        }


    },

    mounted() {
        console.log("mounted");
    },
    beforeCreated() {
        console.log("beforeCreated")
    },
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    update() {
        console.log("Update")
    }

});
app.mount('#app')


