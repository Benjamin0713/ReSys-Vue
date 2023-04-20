<template>
  <div style="padding: 10px">
    <div style="margin: 10px 0">
      <!--      <el-button type="primary" @click="add">新增</el-button>-->
      <!--      <el-button type="primary">导入</el-button>-->
      <!--      <el-button type="primary">导出</el-button>-->
      <!--      <el-input v-model="search" placeholder="请输入内容" style="width: 20%; margin-left: 10px;margin-right: 10px" clearable></el-input>-->
      <!--      <el-button type="primary">查询</el-button>-->
    </div>
    <el-table
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column
          prop="id"
          label="ID"
          sortable
      >
      </el-table-column>
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
    <div style="margin: 10px 0">
      <el-pagination
          background
          layout="prev, pager, next"
          :page-size="15"
          :total="total"
          @current-change="page">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  components: {

  },
  data(){
    return{
      // form:{},
      // search:'',
      // dialogVisible:false,
      total:null,
      tableData: []
    }
  },
  methods:{
    page(currentPage){
      var _this = this
      axios.get('http://127.0.0.1:5000/movie/get/'+currentPage+'/15/').then(resp => {
        console.log(resp)
        _this.tableData = resp.data
        _this.total = resp.data.totalElements
      })
    }
    // add(){
    //   this.dialogVisible = true
    //   this.form = {}
    // },
    // save(){
    //   axios.post('http://127.0.0.1:5000/user',this.form).then(resp => {
    //     console.log(resp)
    //   })
    // }
  },
  created(){
    var _this = this
    axios.get('http://127.0.0.1:5000/movie/get/1/15/').then(resp => {
      console.log(resp)
      _this.tableData = resp.data
      // console.log(resp.data)
      _this.total = resp.data.totalElements
    })
  }
}
</script>
