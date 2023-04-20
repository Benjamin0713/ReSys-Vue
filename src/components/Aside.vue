<template>
  <div>
    <el-menu style="width: 200px; min-height: calc(100vh - 50px)"
        default-active="2"
        class="el-menu-vertical-demo">

      <el-menu-item index="1">
        <i class="el-icon-user"></i>
        <span slot="title" @click="User">用户信息</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-film"></i>
        <span slot="title" @click="Movie">电影信息</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-star-off"></i>
        <span slot="title" @click="Rate">评分信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  components:{},
  methods:{
    Movie(){
      this.$router.push("/Movie");
    },
    Rate(){
      this.$router.push("/Rate");
    },
    User(){
      this.$router.push("/User");
    }
  }
}
</script>

<style scoped>

</style>
