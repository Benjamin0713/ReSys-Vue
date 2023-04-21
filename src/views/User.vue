<template>
  <div style="padding: 10px">
    <div style="margin: 10px 0">
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
          <el-button @click="Re(scope.row)" type="primary">推荐</el-button>
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

      <el-dialog title="提示:请输入需要推荐几部电影" :visible.sync="dialogVisible" width="30%">
        <el-form label-width="120px">
          <el-form-item :model="form" label="用户">
            <el-input v-model="form.uid" :disabled="true" style="width: 80%"></el-input>
          </el-form-item>
        </el-form>
        <el-form label-width="120px">
          <el-form-item :model="form" label="数量">
          <el-input v-model="form.num" style="width: 80%"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="resys(form)">确 定</el-button>
        </span>
      </el-dialog>

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
      form:{},
      dialogVisible:false,
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
    },
    Re(row){
      this.dialogVisible = true
      this.form = {}
      this.form.uid = row.uid
    },
    resys(form){
      console.log(form.uid)
      console.log(form.num)

      this.$router.push({
        path:'/Result',
        query:{
          num: form.num,
          uid: form.uid
        }
      })
    }
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
