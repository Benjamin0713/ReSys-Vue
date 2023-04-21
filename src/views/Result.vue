<template>
  <div style="padding: 10px">
    <div style="margin: 10px 0">
<!--            <el-input v-model="uid" placeholder="请输入需要推荐的用户ID" style="width: 20%; margin-left: 10px;margin-right: 10px" clearable></el-input>-->
<!--            <el-input v-model="num" placeholder="请输入需要推荐的数目" style="width: 20%; margin-left: 10px;margin-right: 10px" clearable></el-input>-->
            <el-button type="primary" @click="Return">返回</el-button>
    </div>
    <el-table
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column
          prop="mid"
          label="电影编号"
          align="center">
      </el-table-column>
      <el-table-column
          prop="title"
          label="电影名"
          align="center">
      </el-table-column>
      <el-table-column
          prop="genres"
          label="题材"
          align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Result',
  components: {

  },
  data(){
    return{
      total:null,
      // num:'',
      // uid:'',
      tableData: []
    }
  },
  methods:{
    Return(){
      this.$router.push({
        path:'/User'
      })
    }
  },
  created(){
    var _this = this
    axios.get('http://127.0.0.1:5000/resys/'+this.$route.query.uid+'/'+this.$route.query.num+'/').then(resp => {
      console.log(resp)
      _this.tableData = resp.data
      // console.log(resp.data)
      _this.total = resp.data.totalElements
    })
  }
}
</script>
