<template>
  <div class="container">
    <el-carousel
      indicator-position="outside"
      height="400px"
      :autoplay="false"
      type="card"
    >
      <el-carousel-item>
        <span class="demonstration"> 教师 教龄-满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/teacher/teacher-1.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <el-carousel-item>
        <span class="demonstration"> 教师 每年参加互联网培训频率-满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/teacher/teacher-2.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <el-carousel-item>
        <span class="demonstration"> 教师 学校性质-满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/teacher/teacher-3.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <el-carousel-item>
        <span class="demonstration"> 教师 学段-满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/teacher/teacher-4.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <!-- <el-carousel-item>
          <el-image :src="require('../../../assets/oprobitRes/teacher.png')"> </el-image>
        </el-carousel-item> -->
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
