<template>
  <div>
    <h1>Get User By Id</h1>
    <div>วิชา: {{ course.title }}</div>
    <div>อาจาร: {{ course.instructor }}</div>
    <div>คำอธิบาย: {{ course.description}}</div>
    <div>นักเรียน: {{ course.total_student }}</div>
    <div>status: {{ course.status}}</div>
    <div>type: {{ course.type  }}</div>
    <div><button @click="navigateTo('/course/edit/'+course.id)">edit</button></div>
    <div><button @click="navigateTo('/courses')">กลับ</button></div>
  </div>
</template>

<script>
import UserService from "@/services/UserService";

export default {
  data() {
    return {
      course: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let courseId = this.$route.params.courseId;
      this.course = (await UserService.show(courseId)).data;
      console.log(this.course);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>