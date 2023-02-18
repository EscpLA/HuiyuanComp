<template>
  <div class="container">
    <!-- 管理者、学生权重 -->
    <el-row>
      <el-col :span="9" :offset="2">
        <span class="demonstration">管理者满意度饼图</span>
        <el-image
          :style="{ width: '400px', height: '300px' }"
          :src="require('./../../assets/pie/admin.png')"
          :preview-src-list="srcList"
        >
          >
        </el-image>
      </el-col>
      <el-col :span="9" :offset="2">
        <span class="demonstration">学生满意度饼图</span>
        <el-image
          :style="{ width: '400px', height: '300px' }"
          class="teacher"
          :src="require('./../../assets/pie/student.png')"
          :preview-src-list="srcList"
        >
          >
        </el-image>
      </el-col></el-row
    >
    <!-- 教师权重 -->
    <el-row>
      <el-col  class="teacherPie">
        <span class="demonstration">教师满意度饼图</span>
        <el-image
          :style="{ width: '400px', height: '300px' }"
          :src="require('./../../assets/pie/teacher.png')"
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
        require("../../assets/pie/admin.png"),
        require("../../assets/pie/teacher.png"),
        require("../../assets/pie/student.png"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("//unpkg.com/element-ui@2.15.13/lib/theme-chalk/index.css");
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

  .teacherPie {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
