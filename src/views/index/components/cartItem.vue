<template>
  <div id="cartInfo">
    <div class="card_box">
      <div class="cartInfo_item">
        <div class="cartInfo_item_header">
          <div class="cartInfo_logo">
            <img src alt />
            <span>福特野马</span>
          </div>
          <div class="cartInfo_location_number">
            <span>新能源汽车&nbsp;&nbsp;5座</span>
          </div>
        </div>
        <div class="cartInfo_item_content">
          <div class="cartInfo_item_content_l">
            <div class="cart_number">
              <span>粤B&nbsp;&nbsp;26607</span>
            </div>
            <div class="cart_electricity">
              <div class="cart_electricity_item">
                <ul class="active-li-7">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <p>
                  <span>约</span>
                  <strong>600</strong>
                  <span>KM</span>
                </p>
              </div>
            </div>
          </div>
          <div class="cartInfo_item_content_r">11</div>
        </div>
        <div class="cartInfo_footer">
          <span>某某停车场</span>
          <span></span>
        </div>
      </div>
      <div class="cartInfo_item card_detail" :style="'height:' + height">
        <div class="scoll">
          <div class="cartInfo_title">
            <h4>某某停车场</h4>
            <i class="cart_info_close"></i>
          </div>
          <div class="cartInfo_item_header">
            <div class="cartInfo_logo">
              <img src alt />
              <span>福特野马</span>
            </div>
            <div class="cartInfo_location_number">
              <span>新能源汽车&nbsp;&nbsp;5座</span>
            </div>
          </div>
          <div class="cartInfo_item_img">
            <img src alt />
          </div>
          <div class="cartInfo_item_number">
            <div class="cartInfo_item_number_l">
              <p>粤A26660</p>
            </div>
            <div class="cartInfo_item_number_r">
              <p>
                <span>约</span>
                <strong>600</strong>
                <span>KM</span>
              </p>
            </div>
          </div>
          <div class="cart_electricity_box">
            <div class="cart_electricity_progress">
              <span class="t-background" style="width:60%;"></span>
              <span class="b-background"></span>
            </div>
          </div>
          <p class="tips">取车约支付12.0元停车费，实际补贴12.0元</p>
          <div class="cartInfo_list">
            <ul>
              <li>
                <h4>日租车</h4>
                <span>￥300/天</span>
              </li>
              <li>
                <h4>日租车</h4>
                <span>￥300/天</span>
              </li>
              <li>
                <h4>日租车</h4>
                <span>￥300/天</span>
              </li>
              <li>
                <h4>日租车</h4>
                <span>￥300/天</span>
              </li>
            </ul>
          </div>
          <div class="cartInfo_detail_footer">
            <span>参保《全面保障服务》用车更放心</span>
            <i class="current"></i>
          </div>
        </div>
        <div class="cardInfo_detail_btn">
          <span>预约用车</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.cartInfo_item {
  padding: 30px 30px 0;
  background-color: #ffffff;
  border-radius: 23px;
  @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, 0.2));
  @include webkit(box-sizing, border-box);
  .cartInfo_item_header {
    display: flex;
    .cartInfo_logo,
    .cartInfo_location_number {
      flex: 1;
    }
    .cartInfo_logo {
      img {
        display: inline-block;
        height: 34px;
        vertical-align: middle;
        margin-right: 10px;
      }
      span {
        font-size: 16px;
      }
    }
    .cartInfo_location_number {
      text-align: right;
      color: #cccccc;
      line-height: 34px;
    }
  }
  .cartInfo_item_content {
    display: flex;
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 15px;
    .cartInfo_item_content_l {
      flex: 1;
      .cart_number {
        font-size: 18px;
      }
      .cart_electricity {
        ul {
          display: flex;
          margin-top: 5px;
          li {
            width: 7px;
            height: 24px;
            border-radius: 100px;
            background-color: #e1e1e1;
            margin-right: 3px;
          }
          @for $i from 1 through 10 {
            &.active-li-#{$i} {
              li:nth-child(-n + #{$i}) {
                @include webkitA(
                  "background",
                  linear-gradient(#17a8fa, #108dd9)
                );
              }
            }
          }
        }
        .cart_electricity_item {
          display: flex;
          align-items: center;
          p {
            margin-left: 15px;
            span {
              position: relative;
              top: -2px;
            }
            strong {
              font-size: 22px;
              margin: 0 5px;
            }
          }
        }
      }
    }
    .cartInfo_item_content_r {
      flex: 1;
      img {
      }
    }
  }
  .cartInfo_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    span:nth-child(1) {
      color: $color_main;
      opacity: 0.8;
    }
    span:nth-child(2) {
      height: 10px;
      width: 10px;
      border-right: 3px solid #e1e1e1;
      border-bottom: 3px solid #e1e1e1;
      transform: rotate(-45deg);
    }
  }
}
.card_detail {
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  padding-top: 0px;
  // overflow-y: auto;
  height: 100%;
  .scoll {
    overflow-y: auto;
    height: 100%;
    .cartInfo_title {
      border-bottom: 1px solid #e1e1e1;
      padding: 25px 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      h4 {
        font-size: 20px;
        color: #34393f;
      }
      .cart_info_close {
        height: 26px;
        width: 26px;
        line-height: 26px;
        cursor: pointer;
        display: flex;
        align-items: center;
        &:before,
        &:after {
          content: "";
          height: 20px;
          border-left: 1px solid #999c9f;
          display: inline-block;
        }
        &:before {
          @include webkit(transform, rotate(45deg));
        }
        &:after {
          @include webkit(transform, rotate(-45deg));
        }
      }
    }
    .cartInfo_item_number {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      .cartInfo_item_number_l {
        p {
          font-size: 24px;
        }
      }
      .cartInfo_item_number_r {
        p {
          margin-left: 15px;
          span {
            position: relative;
            top: -2px;
          }
          strong {
            font-size: 22px;
            margin: 0 5px;
          }
        }
      }
    }
    .cart_electricity_box {
      background-color: white;
      padding: 15px;
      border-radius: 25px;
      @include webkit(box-shadow, 0 0 10px 0 rgba(0, 0, 0, 0.1));
      .cart_electricity_progress {
        position: relative;
        .b-background {
          display: block;
          border-radius: 100px;
          height: 8px;
          background-color: #e1e1e1;
        }
        .t-background {
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          border-radius: 100px;
          background-color: $color_hover;
        }
      }
    }
    .tips {
      color: $color_main;
      text-align: center;
      padding: 10px 0;
      margin: 32px 0 27px;
    }
    .cartInfo_list {
      li {
        padding: 10px 15px;
        background-color: #f3f3f3;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        border: 1px solid #f3f3f3;
        font-size: 16px;
        line-height: 43px;
        margin-bottom: 15px;
        &.current {
          border: 2px solid $color_hover;
        }
      }
    }
    .cartInfo_detail_footer {
      display: flex;
      justify-content: space-between;
      line-height: 20px;
      i {
        width: 20px;
        height: 20px;
        line-height: 15px;
        border-radius: 50%;
        background-color: #cccccc;
        text-align: center;
        &.current {
          background-color: #000000;
        }
        &:before {
          display: inline-block;
          content: "";
          width: 10px;
          height: 7px;
          border-left: 2px solid white;
          border-bottom: 2px solid white;
          @include webkit(transform, rotate(-45deg));
        }
      }
    }
  }
  .cardInfo_detail_btn {
    position: absolute;
    bottom: -25px;
    left: 50%;
    margin-left: -100px;
    width: 100px;
    padding: 20px 40px;
    border-radius: 40px;
    background-color: $color_main;
    color: white;
    text-align: center;
    z-index: 110;
  }

  ul {
    width: 100px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
