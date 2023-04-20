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
          prop="uid"
          label="用户编号"
          align="center">
      </el-table-column>
      <el-table-column
          prop="gender"
          label="性别"
          align="center">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄"
          align="center">
      </el-table-column>
      <el-table-column
          prop="occupation"
          label="职业编号"
          align="center">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          align="center">
        <template slot-scope="scope">
          <el-button @click="ReSys()" type="primary">推荐</el-button>
<!--          <el-popconfirm title="确定删除">-->
<!--            <el-button slot="reference" type="text">删除</el-button>-->
<!--          </el-popconfirm>-->
        </template>
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

<!--      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">-->
<!--        <el-form label-width="120px">-->
<!--          <el-form-item :model="form" label="用户编号">-->
<!--          <el-input v-model="form.uid" style="width: 80%"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item :model="form" label="性别">-->
<!--            <el-input v-model="form.gender" style="width: 80%"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item :model="form" label="年龄">-->
<!--            <el-input v-model="form.age" style="width: 80%"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item :model="form" label="职业编号">-->
<!--            <el-input v-model="form.occupation" style="width: 80%"></el-input>-->
<!--          </el-form-item>-->
<!--        </el-form>-->
<!--        <span slot="footer" class="dialog-footer">-->
<!--          <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--          <el-button type="primary" @click="save">确 定</el-button>-->
<!--        </span>-->
<!--      </el-dialog>-->

    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
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
      axios.get('http://127.0.0.1:5000/user/get/'+currentPage+'/15/').then(resp => {
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
    axios.get('http://127.0.0.1:5000/user/get/1/15/').then(resp => {
      console.log(resp)
      _this.tableData = resp.data
      // console.log(resp.data)
      _this.total = resp.data.totalElements
    })
  }
}
</script>
