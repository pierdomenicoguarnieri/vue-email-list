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
      if (this.emailArray.length === 0){
        for(let i = 0; i < 10; i++){
        this.getEmail()
        }
      }else{
        this.emailArray = [];
        for(let i = 0; i < 10; i++){
          this.getEmail()
        }
      }
    }
  }
}).mount("#app")