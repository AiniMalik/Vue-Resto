<template>
    <HeaderVue />
    <div class="add-resto-Form">
        <div class="innerDiv">
            <h1 class="heading">Add Restaurant</h1>
            <input class="add-resto-inputs" type="text" v-model="name" placeholder="Enter Resto Name" /><br />
            <input class="add-resto-inputs" type="text" v-model="address" placeholder="Enter Address" /><br />
            <input class="add-resto-inputs" type="password" v-model="contact" placeholder="Enter Contact" /><br />
            <button class="add-resto-btn" v-on:click="addResto">Add</button>
        </div>
    </div>
</template>
<script>
import HeaderVue from './Header.vue';
import axios from 'axios'
export default {
    name: "AddVue",
    components: {
        HeaderVue
    },
    data() {
        return {
            name: "",
            address: "",
            contact: ""
        }
    },
    methods: {
        async addResto() {
            let result = await axios.post("http://localhost:3000/restaurant", {
                name: this.name,
                address: this.address,
                contact: this.contact
            });
            if (result.status == 201) {
                localStorage.setItem("user", JSON.stringify(result.data))
                this.$router.push({ name: 'Home' })
            }

        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>
<style>
.add-resto-Form {
    background-color: rgb(74, 28, 3);
    max-width: 800px;
    text-align: center;
    margin: auto;
}

.innerDiv {
    max-width: 100%;
}

.heading {
    color: white;
    font-size: 2rem;
    padding-top: 1rem;
}

.add-resto-inputs {
    margin-top: 1rem;
    height: 50px;
    width: 50%;
}

.add-resto-btn {
    margin-top: 1rem;
    margin-bottom: 2rem;
    height: 35px;
    width: 51%;
    background-color: rgb(250, 193, 0);
    color: white;
    font-size: 15px;
    font-weight: 700;
    border: 1px solid rgb(250, 193, 0);
}

</style>