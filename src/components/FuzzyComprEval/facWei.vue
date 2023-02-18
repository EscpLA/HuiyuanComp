<template>
  <div class="container">
    <!-- 教师权重 -->
    <el-row>
      <el-col :span="10" :offset="7">
        <span class="demonstration">教师权重柱形图</span>
        <el-image
          :src="require('./../../assets/facWei/teacher.png')"
          :preview-src-list="srcList"
        >
          >
        </el-image>
      </el-col>
    </el-row>
    <!-- 管理者、学生权重 -->
    <el-row>
      <el-col :span="9" :offset="2">
        <span class="demonstration">管理者权重柱形图</span>
        <el-image
          :src="require('./../../assets/facWei/admin.png')"
          :preview-src-list="srcList"
        >
          >
        </el-image>
      </el-col>
      <el-col :span="9" :offset="2">
        <span class="demonstration">学生权重柱形图</span>
        <el-image
          class="teacher"
          :src="require('./../../assets/facWei/student.png')"
          :preview-src-list="srcList"
        >
          >
        </el-image>
      </el-col></el-row
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcList: [
        require("../../assets/facWei/admin.png"),
        require("../../assets/facWei/teacher.png"),
        require("../../assets/facWei/student.png"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .el-row {
    .el-image {
      margin-bottom: 20px;
      transition: (all, 0.5s);

      &:hover {
        transform: scale(1.1);
      }
    }
    .el-image.teacher:hover {
      transform: scale(1.15 * 1.1) !important;
      transform-origin: 'center center';
    }
  }
}
</style>
