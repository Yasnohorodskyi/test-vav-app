<template>
  <section class="second-block">
    <div class="second-block__features-wrapper">
      <div class="second-block__title-wrapper">
        <h2 class="second-block__title">Lorem</h2>
      </div>
      <div class="second-block__features--slider">
        <slider />
      </div>
    </div>

    <div class="second-block__advantage advantages">
      <div class="advantages__title-wrapper">
        <h3 class="advantages__title">Lorem Ipsum is simply</h3>
        <span class="advantages__title-line"></span>
      </div>
      <ul class="advantages__list">
        <li
          v-for="(advantage, idx) in secondBlockContent.advantages"
          :key="idx"
          class="advantages__item advantage"
        >
          <span class="advantage__number">{{ advantage.icon }}</span>
          <p class="advantage__content">
            {{ advantage.content }}
          </p>
        </li>
      </ul>
    </div>
    <div class="second-block__inner-wrapper">
      <div class="second-block__image-wrapper">
        <img
          class="second-block__image"
          src="@/assets/img/second-block-image.jpg"
          alt="second block content image"
          width="945"
          height="500"
        />
      </div>
      <div class="second-block__arguments">
        <h3 class="second-block__arguments-title">
          There are many variations of passages
        </h3>
        <p class="second-block__arguments-description">
          of Lorem Ipsum available, but the majority have suffered alteration in
          some form
        </p>
        <ul class="second-block__arguments-list">
          <li
            v-for="(argumentsItem, idx) in 6"
            :key="idx"
            class="second-block__arguments-item"
          >
            Lorem Ipsum
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import secondBlockContent from "@/static/second-block.json";
import Slider from "@/components/Slider.vue";
export default {
  name: "SecondBlock",
  data() {
    return {
      secondBlockContent,
    };
  },
  components: {
    Slider,
  },
};
</script>
