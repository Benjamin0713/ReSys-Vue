<template>
  <div style="height: 50px;line-height: 50px;border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 200px; padding-left: 30px; font-weight: bold; color: dodgerblue">简易电影推荐系统</div>
    <div style="flex: 1"></div>
    <div style="width: 100px">
      <el-dropdown>
        <span class="el-dropdown-link">
          Benjamin<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>提示：该系统为简易推荐</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components:{

  },
  methods:{
    // checkIn(){
    //   this.$router.push('/user')
    // }
  }
}
</script>

<style scoped>

</style>
