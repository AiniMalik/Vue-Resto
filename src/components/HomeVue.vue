<template>
    <HeaderVue/>
    <div class="outerDiv">
    <div class="add-resto-Form">
        <table border="1" class="table" >
            <tr >
                <td class="td-header">id</td>
                <td class="td-header">name</td>
                <td class="td-header">address</td>
                <td class="td-header">contact</td>
                <td class="td-header">Action</td>
            </tr>
        
            <tr v-for="item in restaurant" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.contact }}</td>
                <td>
                    <router-link class="update" :to="'/updateResto/'+item.id">Update</router-link>&nbsp;
                    <button v-on:click="deleteResto(item.id)">Delete</button>
                </td>      
            </tr>
        </table>
        </div>
        </div>
</template>
<script>
import HeaderVue from './Header.vue';
import axios from 'axios'
export default {
    name: "HomeVue",
    components: {
        HeaderVue      
    },
    data() {
        return {
            restaurant:[]
        }
    },
    methods: {
        async deleteResto(id) {
            console.log(id)
            let result = await axios.delete(`http://localhost:3000/restaurant/` + id);
            if (result.status == 200) {
               this.loadData() 
            }
            
        },
       async loadData() {
           let user = localStorage.getItem('user');
           console.log(this.name)
           if (!user) {
               this.$router.push({ name: 'SignUp' })
           }
           let result = await axios.get("http://localhost:3000/restaurant")
           console.log(result)
           this.restaurant = result.data;
        }
    },
    mounted() {
        this.loadData();
    }
}
</script>
<style>
.outerDiv{
margin-top: 2rem;
}
.update{
    color: white;
    text-decoration: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
}
.add-resto-Form {
    background-color: rgb(74, 28, 3);
    max-width: 800px;
    text-align: center;
    margin: auto;
  
}
.tabel{
    text-align: center;
}
td{
    width: 800px;
    color: white;
    height: 50px;
}
.td-header{
    background-color: white;
    color:black
}
</style>