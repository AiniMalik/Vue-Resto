<template>
    <div class="outerDiv">
        <div class="topNav">            
            <router-link to="/">Home</router-link>
            <router-link to="/addResto">Add Restaurant</router-link>
            <a v-on:click="logout">Logout</a>     
        </div>
    </div>
   
</template>
<script>
export default {
    name: "HeaderVue",
    methods: {
        logout() {
            localStorage.removeItem('user')
            this.$router.push({name:'Login'})
        }
    }
}
</script>
<style>
.outerDiv {
    max-width: 500px;
    text-align: center;
    margin: auto;
}
.innerDiv {
    max-width: 100%;
}
.topNav{
    background-color: rgb(218, 174, 31);
    max-width: 100%;
    overflow: hidden;
    height: 50px;
}
.topNav a{
    float: left;
    color: white;
    text-align: center;
    padding: 15px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
    font-weight: 700;
}
.topNav a:hover{
    background-color: rgb(74, 28, 3);
}
.img{
    width: 50px;
    border-radius:50px ;
}
</style>