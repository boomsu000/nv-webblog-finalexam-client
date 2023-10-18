<template>
  <div>
    <h1>Edit Users</h1>
    <form v-on:submit.prevent="editUser">
      <p>วิชา: <input type="text" v-model="course.title" /></p>
      <p>อาจาร: <input type="text" v-model="course.instructor" /></p>
      <p>คำอธิบาย: <input type="text" v-model="course.description" /></p>
      <p>นักเรียนทั้งหมด: <input type="text" v-model="course.total_student" /></p>
      <p><button type="submit">edit</button></p>
      <div><button @click="navigateTo('/courses')">กลับ</button></div>
    </form>
    <hr />
    <div>
      <p>วิชา: {{ course.title }}</p>
      <p>อาจาร: {{ course.instructor }}</p>
      <p>คำอธิบาย: {{ course.description }}</p>
      <p>นักเรียนทั้งหมด: {{ course.total_student }}</p>
      <p></p>
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
    async editUser() {
      try {
        await UsersService.put(this.course);
        this.$router.push({
          name: "courses"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let courseId = this.$route.params.courseId;
      this.course = (await UsersService.show(courseId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
