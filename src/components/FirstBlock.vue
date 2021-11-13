<template>
  <section class="first-block">
    <div class="first-block__wrapper">
      <div class="first-block__header-wrapper">
        <h1 class="first-block__header">Lorem Ipsum is simply</h1>
      </div>
      <div class="first-block__picture">
        <img
          class="first-block__image"
          src="@/assets/img/main-banner.jpg"
          alt="Main banner"
        />
      </div>
      <div class="first-block__content">
        <div class="first-block__content-description">
          <h3 class="first-block__content-description-header">
            Lorem Ipsum is simply dummy text of the printing
          </h3>
          <p class="first-block__content-description-paragraph">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div class="first-block__content-description-button button-wrapper">
            <a class="button" href="#">Lorem Ipsum</a>
          </div>
        </div>
        <ul class="first-block__content-fetures">
          <li
            v-for="(firstBlockItem, idx) in firstBlockList"
            :key="idx"
            class="first-block__content-fetures-item"
          >
            <p class="first-block__content-fetures-item-text">
              {{ firstBlockItem.content }}
            </p>
          </li>
        </ul>
        <div class="first-block__content-image-wrapper">
          <img
            class="first-block__content-image"
            src="@/assets/img/first-block-banner.jpg"
            alt="first block content image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firstBlockList from "@/static/first-block.json";
export default {
  name: "FirstBlock",
  data() {
    return {
      firstBlockList,
    };
  },
};
</script>
