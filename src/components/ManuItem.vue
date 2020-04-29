<template>
  <!-- <el-submenu v-if="self.children && isFirst" :index="self.path">
    <template slot="title"><i class="el-icon-setting"></i><span slot="title">{{self.name}}</span></template>
      <manu-item v-for="(item,i) in self.children" :key="i" :self="item" :isFirst="false"></manu-item>
  </el-submenu> -->
  <el-submenu v-if="self.children" :index="self.path">
    <template slot="title">{{self.name}}</template>
      <manu-item v-for="(item,i) in self.children" :key="i" :self="item"></manu-item>
  </el-submenu>
  <!-- <el-menu-item :index="self.path" v-else-if="!self.children && isFirst" @click="changeManu(self.names)">
    <i class="el-icon-setting"></i>
    <span slot="title">{{self.name}}</span>
  </el-menu-item> -->
  <el-menu-item :index="self.path" v-else @click="changeManu(self.names)">
    {{self.name}}
  </el-menu-item>
</template>

<script>
export default {
  name: 'ManuItem',
  props: {
    self: Object,
    // isFirst: Boolean,
  },
  data() {
      return {
        // self: JSON.parse(this.self),
        // index: JSON.parse(this.index),
      }
  },
  mounted() {
    // window.console.log(this.isFirst,'fir')
  },
  methods: {
    changeManu(names) {
      // window.console.log(names,'op')
      this.$store.commit('changeState',{key:'names',value:names})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    font-size: 30px;
    font-weight: bold;
  }
</style>