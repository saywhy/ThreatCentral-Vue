<template>
  <div id="loyout">
    <el-container>
      <el-header class="el_header"
                 height="48px">
        <layoutHeader></layoutHeader>
      </el-header>
      <el-container style="overflow: auto;">
        <el-aside width="180px">
          <layoutAside></layoutAside>
        </el-aside>
        <el-container>
          <el-main id="elmain"
                   style="position:relative;">
            <transition name="main"
                        mode="out-in">
              <router-view :key="key"></router-view>
            </transition>
          </el-main>
          <el-footer height="36px">
            <layout-footer></layout-footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from "./aside"
import layoutHeader from "./header"
import layoutFooter from "./footer"
// import langSelect from "../../components/lang/langSelect"

export default {
  components: {
    layoutHeader,
    layoutFooter,
    layoutAside
  },
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style>
.main-enter,
.main-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.main-enter-active {
  transition: all 0.2s;
}
.main-leave-active {
  position: absolute;
  transition: all 0.3s;
}
</style>
<style lang="less">
* {
  margin: 0px;
  padding: 0px;
}

body {
  background-color: #f2f2f2;
  font-size: 14px;
  color: #333333;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
#elmain {
  background-color: #f0f2f5;
  padding: 0;
  margin: 0;
}
#loyout {
  height: 100%;
  display: flex;
}
.el-header,
.el-footer {
  color: #fff;
  // text-align: center;
  height: 48px;
  padding: 0;
  // line-height: 60px;
}

.el-aside {
}

.el-main {
}

body > .el-container {
}
</style>
