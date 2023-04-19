<template>
  <div style="padding: 10px">
<!--    <div style="margin: 10px 0">-->
<!--      <el-button @click="handleEdit()" type="primary" style="margin-right: 10px">编辑</el-button>-->
<!--      <el-popconfirm title="确定删除">-->
<!--        <el-button slot="reference" type="primary">删除</el-button>-->
<!--      </el-popconfirm>-->
<!--    </div>-->
    <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%">
<!--        ref="multipleTable"-->
<!--        @select="select"-->
<!--        @row-click="rowClick"-->
<!--        @selection-change="selectionChange"-->
<!--      <el-table-column-->
<!--          type="selection"-->
<!--          width="40">-->
<!--      </el-table-column>-->
      <el-table-column
          prop="id"
          label="序号"
          sortable
          width="75px"
      >
      </el-table-column>
      <el-table-column
          prop="ws_mm"
          width="65px"
          label="钢锭规格">
      </el-table-column>
      <el-table-column
          prop="cs_mm"
          width="65px"
          label="废钢投入量">
      </el-table-column>
      <el-table-column
          prop="fs_mm"
          width="65px"
          label="返回合金钢">
      </el-table-column>
      <el-table-column
          prop="mn_mm"
          width="65px"
          label="碳素钢">
      </el-table-column>
      <el-table-column
          prop="cl_sm"
          width="75px"
          label="表面质量:结疤">
      </el-table-column>
      <el-table-column
          prop="out_te"
          width="75px"
          label="钢锭表面:短尺">
      </el-table-column>
      <el-table-column
          prop="s_el"
          width="75px"
          label="钢锭表面:白点">
      </el-table-column>
      <el-table-column
          prop="sn_qm"
          width="75px"
          label="钢锭表面其他">
      </el-table-column>
      <el-table-column
          prop="ud_qm"
          width="75px"
          label="化学成分:Mo">
      </el-table-column>
      <el-table-column
          prop="ni_qm"
          width="75px"
          label="化学成分:Ni">
      </el-table-column>
      <el-table-column
            prop="oe_qm"
            width="75px"
            label="化学成分:Cr">
      </el-table-column>
      <el-table-column
          prop="po_qm"
          width="75px"
          label="化学成分:Mn">
      </el-table-column>
      <el-table-column
          prop="c_qm"
          width="75px"
          label="化学成分:C">
      </el-table-column>
      <el-table-column
          prop="si_qm"
          width="70px"
          label="化学成分:Si">
      </el-table-column>
      <el-table-column
          prop="re"
          width="65px"
          label="历史成锭率">
      </el-table-column>
      <el-table-column
          prop="pred"
          width="65px"
          label="预测成锭率">
      </el-table-column>
      <el-table-column
          label="操作"
          >
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
      // multipleSelection: []
    }
  },
  methods:{
    page(currentPage){
      const _this = this
      axios.get('http://localhost:8182/ding/findAll/'+currentPage+'/10').then(function (resp) {
        // console.log(resp)
        _this.tableData = resp.data.content
        _this.total = resp.data.totalElements
      })
    },
    edit(row){
      this.$router.push({
        path:'/DingUpdate',
        query:{
          id:row.id
        }
      })
    },
    deleteId(row){
      console.log(row)
      const _this = this
      axios.delete('http://localhost:8182/ding/deleteById/'+row.id).then(function (resp) {
        _this.$message('删除成功')
        window.location.reload()
      })
    },
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
    axios.get('http://localhost:8182/ding/findAll/1/10').then(function (resp) {
      console.log(resp)
      _this.tableData = resp.data.content
      _this.total = resp.data.totalElements
    })
  }
}
</script>

<style scoped>

</style>
