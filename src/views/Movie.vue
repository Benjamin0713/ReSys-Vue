<template>
  <div style="padding: 10px">
    <div style="margin: 10px 0">
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
  },
  created(){
    var _this = this
    axios.get('http://127.0.0.1:5000/movie/get/1/15/').then(resp => {
      console.log(resp)
      _this.tableData = resp.data
      _this.total = resp.data.totalElements
    })
  }
}
</script>
