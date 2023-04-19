<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="250px" class="demo-ruleForm" style="margin-left: 250px">

    <el-form-item label="序号">
      <el-input v-model="ruleForm.id" style="width: 300px"></el-input>
    </el-form-item>

    <el-form-item label="成材组距" prop="x31">
      <el-input v-model="ruleForm.x31" style="width: 300px"></el-input>
    </el-form-item>

    <el-form-item label="检验偏差" prop="x32">
      <el-input v-model="ruleForm.x32" style="width: 300px"></el-input>
    </el-form-item>

    <el-form-item label="非金属夹杂物" prop="x33">
      <el-input v-model="ruleForm.x33" style="width: 300px"></el-input>
    </el-form-item>

    <el-form-item label="显微组织" prop="x34">
      <el-input v-model="ruleForm.x34" style="width: 300px"></el-input>
    </el-form-item>

    <el-form-item label="力学性能" prop="x35">
      <el-input v-model="ruleForm.x35" style="width: 300px"></el-input>
    </el-form-item>

    <el-form-item label="低倍组织" prop="x36">
      <el-input v-model="ruleForm.x36" style="width: 300px"></el-input>
    </el-form-item>

    <el-form-item label="历史成材率" prop="re">
      <el-input v-model="ruleForm.re" style="width: 300px"></el-input>
    </el-form-item>

    <el-form-item label="预测成材率" prop="pred">
      <el-input v-model="ruleForm.pred" style="width: 300px"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">修改数据</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
    </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id:'',
        x31: '',
        x32: '',
        x33: '',
        x34: '',
        x35: '',
        x36: '',
        re: '',
        pred: ''
      },
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
        ],
        re:[
          { required: true, message: '内容不能为空', trigger: 'blur' }
        ],
        pred:[
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
          axios.put('http://localhost:8182/cai/update',this.ruleForm).then(function (resp) {
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
    axios.get('http://localhost:8182/cai/findById/'+this.$route.query.id).then(function (resp) {
      _this.ruleForm = resp.data
    })
  }
}
</script>
<style scoped>

</style>
