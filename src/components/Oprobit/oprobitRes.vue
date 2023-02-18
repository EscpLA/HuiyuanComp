<template>
  <div class="container">
    <el-row>
      <el-col type="flex" justify="center">
        <el-carousel
          indicator-position="outside"
          height="650px"
          :autoplay="false"
        >
          <el-carousel-item>
            <span class="demonstration"> 管理员问卷回归结果柱状图 </span>
            <el-image
              :src="require('../../assets/oprobitRes/admin.png')"
              :preview-src-list="srcList"
            >
            </el-image>
          </el-carousel-item>

          <el-carousel-item>
            <span class="demonstration"> 教师问卷回归结果柱状图 </span>
            <el-image
              :src="require('../../assets/oprobitRes/teacher.png')"
              :preview-src-list="srcList"
            >
            </el-image>
          </el-carousel-item>

          <el-carousel-item>
            <span class="demonstration"> 学生问卷回归结果柱状图 </span>
            <el-image
              :src="require('../../assets/oprobitRes/student.png')"
              :preview-src-list="srcList"
            >
            </el-image>
          </el-carousel-item>

          <!-- <el-carousel-item>
            <el-image :src="require('../../assets/oprobitRes/admin.png')"> </el-image>
          </el-carousel-item> -->
        </el-carousel>
      </el-col>
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
        require("../../assets/oprobitRes/student.png")
      ],
    };
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
</style>
