<template>
  <div class="header">
    <div class="header_box">
      <div class="logo_box">
        <img class="logo"
             src="@/static/images/logo.png"
             alt="">
        <span class="title">{{OEM.Title}}</span>
      </div>
      <div class="menu_box">
        <el-menu class="el_menu_nav"
                 router
                 :default-active="$route.path"
                 mode="horizontal">
          <!-- <template v-for="item in addRouters">
            <el-menu-item :index="item.path">
              {{item.title}}
            </el-menu-item>
          </template> -->
        </el-menu>
      </div>
      <div class="person_box">
        person_box
      </div>
    </div>
  </div>
</template>
<script>
// import { mapState, mapGetters } from 'vuex';
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {
  },
  computed: {

  },
  mounted () {
  }
}
</script>
<style scoped lang="less">
.header_box {
  height: 48px;
  line-height: 48px;
  background: @Color_Header;
  display: flex;
  .logo_box {
    width: 180px;
    text-align: center;
    .logo {
      height: 48px;
      vertical-align: middle;
    }
    .title {
      color: #c4d0d9;
      font-size: 18px;
      vertical-align: middle;
      font-weight: 700;
    }
  }
  .menu_box {
    flex: 1;
    .el_menu_nav {
      background: @Color_Header;
      height: 48px;
      .el-menu-item {
        height: 48px;
        line-height: 48px;
      }
      .el-menu-item:focus,
      .el-menu-item:hover {
        background: none;
      }
    }
  }
  .person_box {
    width: 200px;
  }
}
</style>