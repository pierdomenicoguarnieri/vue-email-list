const {createApp} = Vue;

createApp({
  data(){
    return{
      emailArray: [],
      limit: 10
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
        for(let i = 0; i < parseInt(this.limit); i++){
        this.getEmail()
        }
      }else{
        this.emailArray = [];
        for(let i = 0; i < parseInt(this.limit); i++){
          this.getEmail()
        }
      }
    }
  }
}).mount("#app")