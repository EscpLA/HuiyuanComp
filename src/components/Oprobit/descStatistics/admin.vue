<template>
  <div class="container">
    <el-carousel
      indicator-position="outside"
      height="400px"
      :autoplay="false"
      type="card"
    >
      <el-carousel-item>
        <span class="demonstration"> 管理者 教龄-满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/admin/admin-1.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <el-carousel-item>
        <span class="demonstration"> 管理者 性别-满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/admin/admin-2.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <el-carousel-item>
        <span class="demonstration"> 管理者 学校性质- 满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/admin/admin-3.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <el-carousel-item>
        <span class="demonstration"> 管理者 学校类别-满意度 百分比堆积图 </span>
        <el-image
          :src="require('../../../assets/descStatistics/admin/admin-4.png')"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>

      <!-- <el-carousel-item>
          <el-image :src="require('../../../assets/oprobitRes/admin.png')"> </el-image>
        </el-carousel-item> -->
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
