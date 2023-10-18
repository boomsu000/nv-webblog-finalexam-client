<template>
  <div>
    <h1>Create วิชา</h1>
    <form v-on:submit.prevent="createUser">
      <p>วิชา: <input type="text" v-model="course.title" /></p>
      <p>อาจาร: <input type="text" v-model="course.instructor" /></p>
      <p>คำอธิบาย: <input type="text" v-model="course.description" /></p>
      <p>นักเรียนทั้งหมด: <input type="text" v-model="course.total_student" /></p>
      <p><button type="submit">create user</button></p>
    </form>
    <hr />
    <div>
      <p>วิชา: {{ course.title }}</p>
      <p>อาจาร: {{ course.instructor }}</p>
      <p>คำอธิบาย: {{ course.description }}</p>
      <p>นักเรียนทั้งหมด: {{ course.total_student }}</p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";

export default {
  data() {
    return {
      course: {
        title: "",
        instructor: "",
        description : "",
        total_student: "",
        status: "active"
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.course);
        this.$router.push({
          name: "courses"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
