<template>
  <div class="container">
    <el-carousel
      indicator-position="outside"
      height="400px"
      :autoplay="false"
      type="card"
    >
      <el-carousel-item>
        <span class="demonstration"> 学生 年级-满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/student/student-1.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <el-carousel-item>
        <span class="demonstration"> 学生 性别-满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/student/student-2.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <el-carousel-item>
        <span class="demonstration"> 学生 每天互联网学习时长-满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/student/student-3.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <el-carousel-item>
        <span class="demonstration"> 学生 学校类别-满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/student/student-4.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <!-- <el-carousel-item>
          <el-image :src="require('../../../assets/oprobitRes/student.png')"> </el-image>
        </el-carousel-item> -->
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
