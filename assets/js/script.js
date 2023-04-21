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

    getArray(){
      for(let i = 0; i < 10; i++){
        this.getEmail()
      }
    }
  }
}).mount("#app")