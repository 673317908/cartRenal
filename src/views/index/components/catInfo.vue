<template>
  <div class="cartInfo">
    <div class="card_box">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide>
          <cartItem height="820px" />
        </swiper-slide>
        <swiper-slide>
          <cartItem />
        </swiper-slide>
        <swiper-slide>
          <cartItem />
        </swiper-slide>
        <swiper-slide>
          <cartItem />
        </swiper-slide>
        <swiper-slide>
          <cartItem />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.esm";
import cartItem from "./cartItem";
export default {
  components: {
    Swiper,
    SwiperSlide,
    cartItem
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.swiper-container {
  overflow: initial;
}
.cartInfo {
  position: fixed;
  bottom: 94px;
  left: 0px;
  z-index: 104;
  width: 100%;
}
.card_box {
  padding: 0 155px;
  position: relative;
  .swiper-button-prev,
  .swiper-button-next {
    cursor: pointer;
    top: 50%;
    margin-top: -50px;
    height: 100px;
    width: 60px;
    border-radius: 100px;
    background-color: white;
    outline: none;
    @include webkit(box-shadow, 0 0 18px rgba(0, 0, 0, 0.2));
    &.swiper-button-disabled {
      opacity: 1;
    }
  }
  .swiper-button-prev {
    left: 53px;
    @include webkit(transition, all 0.3s ease 0s);
    &:after {
      content: "";
      width: 14px;
      height: 14px;
      border-left: 3px solid #000000;
      border-top: 3px solid #000000;
      transform: rotate(-45deg);
      margin-left: 5px;
      @include webkit(transform, rotate(-45deg));
    }
    &:hover {
      background-color: $color_main;
      &:after {
        border-left: 3px solid $color_hover;
        border-top: 3px solid $color_hover;
      }
    }
  }
  .swiper-button-next {
    right: 53px;
    @include webkit(transition, all 0.3s ease 0s);
    &:after {
      content: "";
      width: 14px;
      height: 14px;
      border-right: 3px solid #000000;
      border-top: 3px solid #000000;
      margin-right: 5px;
      @include webkit(transform, rotate(45deg));
    }
    &:hover {
      background-color: $color_main;
      &:after {
        border-right: 3px solid $color_hover;
        border-top: 3px solid $color_hover;
      }
    }
  }
}
</style>
