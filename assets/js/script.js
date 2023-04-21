const {createApp} = Vue;

createApp({
  data(){
    return{
      emailArray: []
    }    
  },

  methods:{
    getEmail(){
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(result => {
        this.emailArray.push(result.data.response)
      })
    },
}).mount("#app")