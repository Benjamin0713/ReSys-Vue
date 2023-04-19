<template>
  <div style="padding: 10px">
    <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%">
<!--        ref="multipleTable"-->
<!--        @select="select"-->
<!--        @row-click="rowClick"-->
<!--        @selection-change="selectionChange"-->
      <el-table-column
          prop="id"
          label="序号"
          sortable
      >
      </el-table-column>
      <el-table-column
          prop="x31"
          label="成材组距">
      </el-table-column>
      <el-table-column
          prop="x32"
          label="检验偏差">
      </el-table-column>
      <el-table-column
          prop="x33"
          label="非金属夹杂物">
      </el-table-column>
      <el-table-column
          prop="x34"
          label="显微组织">
      </el-table-column>
      <el-table-column
          prop="x35"
          label="力学性能">
      </el-table-column>
      <el-table-column
          prop="x36"
          label="低倍组织">
      </el-table-column>
      <el-table-column
          prop="re"
          label="历史成材率">
      </el-table-column>
      <el-table-column
          prop="pred"
          label="预测成材率">
      </el-table-column>
      <el-table-column
          label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="deleteId(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px 0">
      <el-pagination
          background
          layout="prev, pager, next"
          :page-size="10"
          :total="total"
          @current-change="page">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      total:null,
      tableData: [],
      // multipleSelection:[]
    }
  },
  methods:{
    page(currentPage){
      const _this = this
      axios.get('http://localhost:8182/cai/findAll/'+currentPage+'/10').then(function (resp) {
        // console.log(resp)
        _this.tableData = resp.data.content
        _this.total = resp.data.totalElements
      })
    },
    edit(row){
      this.$router.push({
        path:'/CaiUpdate',
        query:{
          id:row.id
        }
      })
    },
    deleteId(row){
      console.log(row)
      const _this = this
      axios.delete('http://localhost:8182/cai/deleteById/'+row.id).then(function (resp) {
        _this.$message('删除成功')
        window.location.reload()
      })
    }
//     select(selection, row) {
//       // 清除 所有勾选项
//       this.$refs.multipleTable.clearSelection()
//       // 当表格数据都没有被勾选的时候 就返回
//       // 主要用于将当前勾选的表格状态清除
//       if(selection.length == 0) return
//       this.$refs.multipleTable.toggleRowSelection(row, true);
//     },
// // 表格的选中 可以获得当前选中的数据
//     selectionChange(val) {
//       // 将选中的数据存储起来
//       this.selectData = val
//     },
// // 表格某一行的单击事件
//     rowClick(row, column) {
//       const selectData = this.selectData
//       this.$refs.multipleTable.clearSelection()
//       if( selectData.length == 1 ) {
//         selectData.forEach(item => {
//           // 判断 如果当前的一行被勾选, 再次点击的时候就会取消选中
//           if (item == row) {
//             this.$refs.multipleTable.toggleRowSelection(row, false);
//           }
//           // 不然就让当前的一行勾选
//           else {
//             this.$refs.multipleTable.toggleRowSelection(row, true);
//           }
//         })
//       }
//       else {
//         this.$refs.multipleTable.toggleRowSelection(row, true);
//       }
//     }
  },
  created(){
    const _this = this
    axios.get('http://localhost:8182/cai/findAll/1/10').then(function (resp) {
      console.log(resp)
      _this.tableData = resp.data.content
      _this.total = resp.data.totalElements
    })
  }
}
</script>

<style scoped>

</style>
