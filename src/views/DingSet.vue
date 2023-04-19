<template>
  <div style="padding: 10px">
    <div style="margin: 10px 0;float: left">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/DingSet' }">成锭率设置</el-breadcrumb-item>
        <el-breadcrumb-item>成材率设置</el-breadcrumb-item>
        <el-breadcrumb-item>结果展示</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="margin: 10px 0;float: right">
      <el-button @click="Add" type="primary" style="margin-right: 20px">添加</el-button>
      <el-dialog title="成锭率" :visible.sync="dialogVisible" width="50%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <div style="float: left;text-align: left;width:50%;margin-left: 50px">
            <el-form-item label="钢锭规格" prop="ws_mm">
              <el-input style="width: 150px" placeholder="请输入内容" v-model="ruleForm.ws_mm" size="small"></el-input>
            </el-form-item>
            <el-form-item label="废钢投入" prop="cs_mm">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.cs_mm"></el-input>
            </el-form-item>
            <el-form-item label="返合金钢" prop="fs_mm">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.fs_mm"></el-input>
            </el-form-item>
            <el-form-item label="碳素钢" prop="mn_mm">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.mn_mm"></el-input>
            </el-form-item>
            <el-form-item label="表面结疤" prop="cl_sm">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.cl_sm"></el-input>
            </el-form-item>
            <el-form-item label="表面短尺" prop="out_te">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.out_te"></el-input>
            </el-form-item>
            <el-form-item label="表面白点" prop="s_el">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.s_el"></el-input>
            </el-form-item>
          </div>
          <div style="float: right;text-align: left;width:30%;margin-right: 70px">
            <el-form-item label="表面其他" prop="sn_qm">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.sn_qm"></el-input>
            </el-form-item>
            <el-form-item label="Mo元素" prop="ud_qm">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.ud_qm"></el-input>
            </el-form-item>
            <el-form-item label="Ni元素" prop="ni_qm">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.ni_qm"></el-input>
            </el-form-item>
            <el-form-item label="Cr元素" prop="oe_qm">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.oe_qm"></el-input>
            </el-form-item>
            <el-form-item label="Mn元素" prop="po_qm">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.po_qm"></el-input>
            </el-form-item>
            <el-form-item label="C元素" prop="c_qm">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.c_qm"></el-input>
            </el-form-item>
            <el-form-item label="Si元素" prop="si_qm">
              <el-input size="small" style="width: 150px" placeholder="请输入内容" v-model="ruleForm.si_qm"></el-input>
            </el-form-item>
          </div>
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
          width="70px"
          label="化学成分:Ni">
      </el-table-column>
      <el-table-column
          prop="oe_qm"
          width="70px"
          label="化学成分:Cr">
      </el-table-column>
      <el-table-column
          prop="po_qm"
          width="70px"
          label="化学成分:Mn">
      </el-table-column>
      <el-table-column
          prop="c_qm"
          width="70px"
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
      tableData: [],
      dialogVisible:false,
      ruleForm: {},
      rules:{
        ws_mm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        cs_mm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        fs_mm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        mn_mm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        cl_sm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        out_te: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        s_el: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        sn_qm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        ud_qm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        ni_qm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        oe_qm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        po_qm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        c_qm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        si_qm: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ]
      },
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
    Add(){
      this.dialogVisible = true
      this.ruleForm= {}
    },
    save(formName){
      // alert("ok")
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('校验成功！');
          axios.post('http://localhost:8182/ding/save',this.ruleForm).then(function (resp) {
            if(resp.data == 'Successful'){
              console.log(resp)
              _this.$message({
                message:'添加成功',
                type:'success'
              })
              _this.dialogVisible = false
            }
          })
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    predict(row){

    },
    next(row){
      this.$router.push("/CaiSet");
    }
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
