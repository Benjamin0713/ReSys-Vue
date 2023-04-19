<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
    <div style="float:left;">
      <el-form-item label="序号">
        <el-input v-model="ruleForm.id" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="钢锭规格" prop="ws_mm">
        <el-input v-model="ruleForm.ws_mm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="废钢投入量" prop="cs_mm">
        <el-input v-model="ruleForm.cs_mm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="返回合金钢" prop="fs_mm">
        <el-input v-model="ruleForm.fs_mm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="碳素钢" prop="mn_mm">
        <el-input v-model="ruleForm.mn_mm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="表面质量:结疤" prop="cl_sm">
        <el-input v-model="ruleForm.cl_sm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="钢锭表面:短尺" prop="out_te">
        <el-input v-model="ruleForm.out_te" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="钢锭表面:白点" prop="s_el">
        <el-input v-model="ruleForm.s_el" style="width: 300px"></el-input>
      </el-form-item>
    </div>
    <div style="float: right;margin-right: 300px">
      <el-form-item label="钢锭表面其他" prop="sn_qm">
        <el-input v-model="ruleForm.sn_qm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="化学成分:Mo" prop="ud_qm">
        <el-input v-model="ruleForm.ud_qm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="化学成分:Ni" prop="ni_qm">
        <el-input v-model="ruleForm.ni_qm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="化学成分:Cr" prop="oe_qm">
        <el-input v-model="ruleForm.oe_qm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="化学成分:Mn" prop="po_qm">
        <el-input v-model="ruleForm.po_qm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="化学成分:C" prop="c_qm">
        <el-input v-model="ruleForm.c_qm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="化学成分:Si" prop="si_qm">
        <el-input v-model="ruleForm.si_qm" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="历史成锭率" prop="re">
        <el-input v-model="ruleForm.re" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item label="预测成锭率" prop="pred">
        <el-input v-model="ruleForm.pred" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改数据</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id:'',
        ws_mm: '',
        cs_mm: '',
        fs_mm: '',
        mn_mm: '',
        cl_sm: '',
        out_te: '',
        s_el: '',
        sn_qm: '',
        ud_qm: '',
        ni_qm: '',
        oe_qm: '',
        po_qm: '',
        c_qm: '',
        si_qm: '',
        re: '',
        pred: ''
      },
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
        ],
        re: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        pred: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('校验成功！');
          axios.put('http://localhost:8182/ding/update',this.ruleForm).then(function (resp) {
            // console.log(resp)
            if(resp.data == 'Successful'){
              _this.$message('修改成功')
              _this.$router.push('/CaiHistory')
            }
          })
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created(){
    // 取参数用route
    // alert(this.$route.query.id)
    const _this = this
    axios.get('http://localhost:8182/ding/findById/'+this.$route.query.id).then(function (resp) {
      _this.ruleForm = resp.data
    })
  }
}
</script>
<style scoped>

</style>
