<template>
  <div id="app">
    <el-container>
      <el-aside>
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          unique-opened
        >
          <el-submenu
            v-for="(item1, index1) in menu"
            :key="index1"
            :index="`${index1 + 1}`"
          >
            <template slot="title">
              <i :class="`${icons[index1]}`"></i>
              <span>{{ item1.title }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item2, index2) in item1.subMenu"
                :key="index2"
                :index="`${index1 + 1}-${index2 + 1}`"
                :route="getRoute(index1, index2)"
              >
                {{ item2 }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <transition name="el-fade-in-linear"> <router-view></router-view> </transition>
        <!-- <router-view v-slot="{ Component }">
          <transition
            name="el-fade-in-linear"
          >
            <component :is="Component" />
          </transition>
        </router-view> -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      group: ["管理者", "教师", "学生"],
      menu: [
        { title: "模糊综合评价", subMenu: ["因素权重", "满意度饼图"] },
        { title: "Oprobit回归分析", subMenu: ["描述性统计", "各回归系数条形图"] },
        { title: "随机森林", subMenu: ["学习曲线"] },
      ],
      icons: ['el-icon-data-line', 'el-icon-pie-chart' ,'el-icon-folder-checked']
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    getRoute() {
      return (index1, index2) => {
        if (index1 == 0) {
          if (index2 == 0) {
            return "/facWei";
          } else if (index2 == 1) {
            return "/satisPie";
          }
        } else if (index1 == 1) {
          if (index2 == 0) {
            return "/descStatistics";
          } else if (index2 == 1) {
            return "/oprobitRes";
          }
        } else if (index1 == 2) {
          if (index2 == 0) {
            return "/learnCurve";
          }
        }
      };
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app,
.el-container {
  height: 100%;
  .el-aside {
    .el-menu {
      height: 100%;
    }
  }

  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }

  .el-main {
    background-color: #ebeef3;
  }

  .el-menu{
    font-size: 28px;
  }
}
</style>
