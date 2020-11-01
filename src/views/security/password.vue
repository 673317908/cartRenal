<template>
  <div id="password">
    <Back title="修改登录密码" />
    <div class="user_password">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.originalPassword" placeholder="原始密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.newPassword" placeholder="新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.confirmlPassword" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
            <button type="button" class="getCode">获取验证码</button>
          <el-input placeholder="验证码" v-model="form.code" class="input-with-select"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" style="width:100%;">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        originalPassword: "",
        newPassword: "",
        confirmlPassword: "",
        code: ""
      }
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<style scoped lang="scss">
#password {
  padding: 0 30px;
}
</style>