<template>
    <div class="logo">
    <img  src="../assets/resto-logo.png" />
    </div>
    <div class="signUpForm">
        <div class="innerDiv">
            <h1 class="heading">Sign Up</h1>
            <input class="inputs" type="text" v-model="name" placeholder="Enter User Name"/><br/>
            <input class="inputs" type="email" v-model="email" placeholder="Enter Email"/><br />
            <input class="inputs" type="password" v-model="password" placeholder="Enter Password"/><br />
            <button class="btn" v-on:click="signup">Sign Up</button>
            <p><router-link class="link-btn" to="/login">Login</router-link></p>
        </div>
      
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "SignUp",
    components: {
        // FormVue
    },
    data() {
        return {
            name: "",
            email: "",
            password:""
        }
    },
    methods: { 
       async signup() {
            let result = await axios.post("http://localhost:3000/users", {
                user: this.name,
                email: this.email,
                password: this.password
            });
            if (result.status == 201) {
                localStorage.setItem("user", JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
            
        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }
};
</script>
<style>
.logo{
    text-align: center;
    margin: auto;
}
.signUpForm {
    background-color: rgb(74, 28, 3);
    max-width: 500px;
    text-align: center;
    margin: auto;
} 
.innerDiv{
    max-width:100%;
    margin-bottom: 2rem;
}
.heading {
    color: white;
    font-size: 2rem;
    padding-top: 1rem;
}
.inputs{
    margin-top: 1rem;
    height: 20px;
    width: 50%;
}.btn{
margin-top: 1rem;
margin-bottom: 0.2rem;
height: 35px;
width: 52%;
background-color: rgb(250, 193, 0);
color: white;
font-size: 15px;
font-weight: 700;
border: 1px solid rgb(250, 193, 0);
}
.link-btn{
    color: white;
    font-size: 15px;
    text-decoration: none;
}
</style>
