<template>
  <div class="container">
    <el-dropdown split-button type="primary" @command="handleClick" autoplay="false">
      切换问卷
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="admin">管理者问卷</el-dropdown-item>
        <el-dropdown-item command="teacher">教师问卷</el-dropdown-item>
        <el-dropdown-item command="student">学生问卷</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-row>
        <router-view></router-view>
      <el-col type="flex" justify="center"> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcList: [
        require("../../assets/oprobitRes/teacher.png"),
        require("../../assets/oprobitRes/admin.png"),
        require("../../assets/oprobitRes/student.png"),
      ],
    };
  },
  methods: {
    handleClick(command) {
      switch (command) {
        case "admin":
            this.$router.push('/descStatistics/admin')
          break;
        case "teacher":
            this.$router.push('/descStatistics/teacher')
          break;
        case "student":
            this.$router.push('/descStatistics/student')
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-image:hover {
  transform: scale(1) !important;
}

.el-carousel {
  .el-carousel-item {
    background-color: #fff !important;
  }
}

.el-row {
  position: relative;
  .el-dropdown {
  }
}
</style>
