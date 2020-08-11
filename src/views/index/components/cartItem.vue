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
</style>
