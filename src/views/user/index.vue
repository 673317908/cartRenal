<template>
  <div id="nav">
    <div class="user">
      <div class="userList_heard">
        <img src="../../assets/logo.png" alt />
        <div class="userList_name">
          <h4>673317908@qq.com</h4>
          <span>
            文明驾驶分
            <strong>0</strong>
          </span>
        </div>
      </div>
      <div class="userList_content">
        <ul>
          <router-link to="aa" tag="a" class="next">
            <i class="iconfont icon-50-copy"></i>
            我的账户
          </router-link>
          <router-link to="aa" tag="a" class="next">
            <i class="iconfont icon-fangxiangpan-copy"></i>
            租车订单
          </router-link>
          <router-link to="aa" tag="a" class="next">
            <i class="iconfont icon-renzheng-copy"></i>
            实名认证
          </router-link>
          <router-link to="security" tag="a" class="next">
            <i class="iconfont icon-anquanzhuye-copy"></i>
            安全设置
          </router-link>
          <router-link to="aa" tag="a" class="next">
            <i class="iconfont icon-bangzhu-copy"></i>
            帮助中心
          </router-link>
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
  .userList_heard {
    display: flex;
    padding: 84px 0 0 10px;
    align-items: center;
    justify-content: center;
    img {
      border: 6px solid #2f343a;
      width: 80px;
      margin-right: 18px;
      height: 80px;
      border-radius: 50%;
    }
    .userList_name {
      flex: 1;
      h4 {
        line-height: 43px;
        font-size: 18px;
        color: #909090;
      }
      span {
        display: inline-block;
        color: white;
        line-height: 27px;
        background-color: $color_hover;
        padding: 3px 15px;
        border-radius: 20px;
      }
    }
  }
  .userList_content {
    margin-top: 80px;
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
