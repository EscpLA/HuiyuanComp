<template>
  <div class="container">
    <!-- 管理者、学生权重 -->
    <el-row>
      <el-col :span="8" :offset="3">
        <span class="demonstration">管理者问卷学习曲线</span>
        <el-image
          :src="require('./../../assets/learnCurve/admin.png')"
          :preview-src-list="srcList"
        >
          >
        </el-image>
      </el-col>
      <el-col :span="8" :offset="3">
        <span class="demonstration">学生问卷学习曲线</span>
        <el-image
          class="teacher"
          :src="require('./../../assets/learnCurve/student.png')"
          :preview-src-list="srcList"
        >
          >
        </el-image>
      </el-col></el-row
    >
    <!-- 教师权重 -->
    <el-row>
      <el-col :span="8" :offset="8">
        <span class="demonstration">教师问卷学习曲线</span>
        <el-image
          :src="require('./../../assets/learnCurve/teacher.png')"
          :preview-src-list="srcList"
        >
          >
        </el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcList: [
        require("../../assets/learnCurve/admin.png"),
        require("../../assets/learnCurve/teacher.png"),
        require("../../assets/learnCurve/student.png"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .el-row {
    .el-col {
      .el-image {
        margin-bottom: 20px;
        transition: (all, 0.5s);

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
