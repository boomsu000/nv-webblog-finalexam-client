<style>
.buttonnn {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button6 {background-color: #ff0000;color: rgb(255, 255, 255);} 
.button1 {background-color: #79da1f;color: rgb(255, 255, 255);} 
.button5 {background-color: #266e6e;color: rgb(255, 255, 255);} 
h1 {
  font-size: 50px;
}
h4 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
.alignleft {
	float: left;
}
.alignright {
	float: right;
}
</style>
<template>
  
    <div><hr width="100000px;" color="#52a9be" size="10"> 
      <div id="textbox">
        <p class="alignleft">
          <button class="buttonnn button5" @click="navigateTo('/course/create')"><b>เพื่มข้อมูล</b></button></p>
      </div>
      <h1> Get All Data</h1><hr width="100000px;" color="#52a9be" size="10">
      <div><h2>จำนวนผู้ใช้ {{ courses.length }}</h2></div><hr>
      <div v-for="i in courses" v-bind:key="i.id">
        <div>วิชา: {{ i.title }}</div>
        <div>อาจาร: {{ i.instructor }}</div>
        <div>คำอธิบาย: {{ i.description }}</div>
        <div>นักเรียนทั้งหมด: {{ i.total_student }}</div>
        <div>status: {{ i.status }}</div>
        <div>type: {{ i.type }}</div>
        <div><button v-on:click="navigateTo('/course/'+i.id)">ดูข้อมูล</button></div>
        <div><button @click="navigateTo('/course/edit/'+i.id)">edit</button></div>
        <div><button @click="deleteUser(i)">delete</button></div>
        <hr>
      </div>
    </div>
  </template>
  
  <script>
  import UserService from "@/services/UserService";
  
  export default {
    data() {
      return {
        courses: []
      };
    },
    methods:{
      logout () {
 this.$store.dispatch('setToken', null)
 this.$store.dispatch('setUser', null)
 this.$router.push({
 name: 'login'
 })
},
      navigateTo(route){
        this.$router.push(route)
      },
      async deleteUser(user){
        let result = confirm("Want of delete?")
        if (result){
          try{
            await UserService.delete(user)
            this.refreshData()
          }catch(err){
            console.log(err)
          }
        }
      },
      async refreshData() {
        this.courses = (await UserService.index()).data;
      }
    },
    async created() {
      try{
        this.courses = (await UserService.index()).data;
      }catch (err){
        console.log(err)
      }
      
    }
  };
  </script>
  
  <style></style>