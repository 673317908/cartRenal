<template>
  <div id="nav">
    <div class="user">
      <Back title="安全设置" />
      <div class="userList_content">
        <ul>
          <router-link to="/password" tag="a" class="next">修改登录密码</router-link>
          <router-link to="aa" tag="a" class="next">设置安全密码</router-link>
          <router-link to="aa" tag="a" class="next">绑定手机号</router-link>
          <router-link to="aa" tag="a" class="next">绑定银行卡</router-link>
        </ul>
      </div>
      <div class="userList_btn">
        <span>登出</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.user {
  padding: 0 30px;
  position: relative;
  .userList_content {
    margin-top: 20px;
    ul {
      a {
        display: block;
        color: rgba(255, 255, 255, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        margin: 0 -30px;
        padding: 0 30px;
        line-height: 64px;
        font-size: 15px;
        position: relative;
      }
      i {
        color: #0389e6;
      }
    }
    .next:after {
      content: "";
      position: absolute;
      right: 30px;
      top: 50%;
      margin-top: -5px;
      width: 10px;
      height: 10px;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      border-right: 1px solid rgba(255, 255, 255, 0.3);
      display: inline-block;
      @include webkit(transform, rotate(45deg));
      @include webkit(box-sizing, border-box);
    }
  }
  .userList_btn {
    position: absolute;
    bottom: -60%;
    left: 50%;
    margin-left: -82px;
    width: 165px;
    padding: 20px 0;
    border-radius: 40px;
    background-color: #2d3339;
    color: white;
    text-align: center;
    z-index: 110;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
  }
}
</style>
