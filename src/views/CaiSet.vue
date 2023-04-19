<template>
  <div style="padding: 10px">
    <div style="margin: 10px 0;float: left">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>成锭率设置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/CaiSet' }">成材率设置</el-breadcrumb-item>
        <el-breadcrumb-item>结果展示</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="margin: 10px 0;float: right">
      <el-button @click="Add" type="primary" style="margin-right: 20px">添加</el-button>
      <el-dialog title="成材率" :visible.sync="dialogVisible" width="30%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="成材组距" prop="x31">
            <el-input size="small" style="width: 300px" placeholder="请输入内容" v-model="ruleForm.x31"></el-input>
          </el-form-item>
          <el-form-item label="检验偏差" prop="x32">
            <el-input size="small" style="width: 300px" placeholder="请输入内容" v-model="ruleForm.x32"></el-input>
          </el-form-item>
          <el-form-item label="夹杂物" prop="x33">
            <el-input size="small" style="width: 300px" placeholder="请输入内容" v-model="ruleForm.x33"></el-input>
          </el-form-item>
          <el-form-item label="显微组织" prop="x34">
            <el-input size="small" style="width: 300px" placeholder="请输入内容" v-model="ruleForm.x34"></el-input>
          </el-form-item>
          <el-form-item label="力学性能" prop="x35">
            <el-input size="small" style="width: 300px" placeholder="请输入内容" v-model="ruleForm.x35"></el-input>
          </el-form-item>
          <el-form-item label="低倍组织" prop="x36">
            <el-input size="small" style="width: 300px" placeholder="请输入内容" v-model="ruleForm.x36"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="save('ruleForm')">保存并提交</el-button>
        </span>
      </el-dialog>
    </div>
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
          <el-button @click="predict(scope.row)" type="text" size="small">预测</el-button>
          <el-button @click="next(scope.row)" type="text" size="small">下一步</el-button>
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
      dialogVisible:false,
      ruleForm: {},
      rules:{
        x31: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        x36:[
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        x32:[
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        x33:[
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        x34:[
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        x35:[
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ]
      },
      tableData: [],
      // selectData:[]
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
    Add(){
      this.dialogVisible = true
      this.ruleForm= {}
    },
    predict(row){
      // console.info(this.selectData);
      // console.info(this.$refs.multipleTable.tableData);
      // console.info(this.$refs.multipleTable);
    },
    next(row){
      this.$router.push("/");
    },
    save(formName){
      // alert("OK")
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('校验成功！');
          axios.post('http://localhost:8182/cai',this.ruleForm).then(function (resp) {
            console.log(resp)
            if(resp.data == 'Successful'){
              _this.$message({
                message:'添加成功',
                type:'success'
              })
              _this.dialogVisible = false
              window.location.reload()
            }
          })
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    }
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
