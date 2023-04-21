<template>
  <div class="main">
    <div style="font-size: 45px">
      系统简介：
    </div>
    <div style="font-size: 30px">
      毕设-电影推荐系统（注：该系统以简易功能实现推荐结果可视化）
    </div>
    <div style="font-size: 25px">
      操作流程：
    </div>
    <div>
      1.该系统分为三个模块：用户信息、电影信息、评分信息，在各自模块中展示各自实体的信息
    </div>
    <div>
      2.对于用户进行电影推荐，调用后端算法模型运行并保存到本地的json数据并从中提取出针对给用户推荐的n部电影，其中n是前端输入
    </div>
    <div>
      3.推荐结果仅展示电影的title（电影名）和genres（题材）
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.main{
  text-align: center; /*让div内部文字居中*/
  background-color: #fff;
  border-radius: 20px;
  width: 1314px;
  height: 450px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>
