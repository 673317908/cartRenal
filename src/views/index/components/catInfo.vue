<template>
    <div id="cartInfo">
      <div class="cartInfo_box">
        <div class="cartInfo_item">

        </div>
      </div>
      <span @click="goUser">汽车信息</span>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      goUser(){
        this.$router.push({
          name:"User"
        })
      }
    }
};
</script>

<style scoped lang="scss">
#cartInfo {
  position: fixed;
  bottom: 94px;
  left: 0px;
  z-index: 100;
  .cartInfo_box{
    .cartInfo_item {
      padding: 30px;
      background-color: #ffffff;
      border-radius: 23px;
      @include webkit(box-shadow,0 0 18px 0 rgba(0,0,0,.2))
    }
  }
}
</style>
