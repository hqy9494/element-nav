<template>
  <div class="layout-table">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
         class="el-menu-vertical-demo" 
         :collapse="isCollapse" router 
         :default-active="navData.path" 
         :default-openeds="navData.opens" 
         @open="handleOpen" 
         @close="handleClose"
         >
          <!-- <manu-item v-for="(item,i) in manu" :key="i" :self="item" :isFirst="true"></manu-item> -->
          <template v-for="(item,i) in manu">
            <el-submenu :index="item.path" v-if="item.children" :key="i">
              <template slot="title"><i class="el-icon-setting"></i><span slot="title">{{item.name}}</span></template>
                <manu-item v-for="(item,i) in item.children" :key="i" :self="item" :isFirst="false"></manu-item>
            </el-submenu>
            <el-menu-item :index="item.path" @click="changeManu(item.names)" v-else :key="i">
              <i class="el-icon-setting"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </template>
          
        </el-menu>


      </el-aside>
       
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 20px 0 20px 10px">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,i) in names" :key="i">{{item}}</el-breadcrumb-item>
          <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item> -->
        </el-breadcrumb>
        
        <el-main>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import ManuItem from './ManuItem.vue'
import manu from '../common/manu'
import {mapState} from 'vuex'
//  const item = {
//       date: '2016-05-02',
//       name: '王小虎',
//       address: '上海市普陀区金沙江路 1518 弄'
//     };



export default {
  
  name: 'Layout',
    data() {
      return {
        isCollapse: false,
        manu,
        navData: {
          opens: [],
          names: [],
        },
      }
    },
    components: {ManuItem},
    mounted() {
      // window.console.log(this.names)
      this.findOpens(this.manu)
      this.$store.commit('changeState',{key:'names',value:this.navData.names})
    },
    methods: {
      handleOpen(key, keyPath) {
        window.console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        window.console.log(key, keyPath);
      },
      findOpens(arr) {
        arr.map(e => {
          if(e.children){
            this.findOpens(e.children)
          }else{
            if(e.path === this.$route.path) {
              this.navData = e;
            }
          }
        })
      },
    },
    computed: {
      ...mapState({
        names: state => state.names
      }),
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  .layout-breadcrumb {
    height: 40px;
    border-bottom: 1px solid #999;
    padding-top: 20px;
  }

  .layout-table {
    height: 100vh;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
