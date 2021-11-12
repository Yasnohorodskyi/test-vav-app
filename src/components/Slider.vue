<template>
  <vueper-slides
    class="no-shadow"
    :infinite="false"
    :visible-slides="3"
    slide-multiple
    :gap="3"
    :slide-ratio="1 / 4"
    :dragging-distance="200"
    :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
  >
    <vueper-slide v-for="i in 15" :key="i" :title="i.toString()">
      <template #content="">
        <div class="second-block__features-item">
          <div class="second-block__feature-header-wrapper">
            <h4 class="second-block__feature-header">Lorem Ipsum</h4>
          </div>
          <ul class="second-block__feature-list">
            <li class="second-block__feature-item">
              It is a long established fact that a reader will be distracted
            </li>
            <li class="second-block__feature-item">The readable content</li>
            <li class="second-block__feature-item">
              There are many variations of passages
            </li>
          </ul>
        </div>
      </template>
    </vueper-slide>
    <template #arrow-left>
      <div class="second-block__features-arrows previous-arrow">
        <span class="previous-arrow__icon"></span>
      </div>
    </template>

    <template #arrow-right>
      <div class="second-block__features-arrows next-arrow">
        <span class="next-arrow__icon"></span>
      </div>
    </template>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Slider",
  components: {
    VueperSlides,
    VueperSlide,
  },
};
</script>
<style lang="scss">
// кастомизация дефолтных свойств плагина слайдера
.vueperslides__parallax-wrapper {
  height: 460px;
  padding-bottom: 10px !important;
}

.vueperslides__bullet {
  width: 44px;
}

.vueperslides__bullet .default {
  background-color: $icon-grey;
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 14px;
  height: 14px;
}

.vueperslides__bullet--active .default {
  background-color: $font-main;
}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}
</style>
