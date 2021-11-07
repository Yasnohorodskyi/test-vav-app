<template>
  <section class="third-block">
    <div class="third-block__title_wrapper">
      <h2 class="third-block__title">Lorem Ipsum</h2>
      <span class="third-block__title-line"></span>
    </div>
    <ul class="third-block__list">
      <li
        v-for="(item, idx) in thirdBlockList"
        :key="idx"
        class="third-block__item"
      >
        <svg
          class="third-block__item-icon"
          :class="isIconActive(idx + 1)"
          width="50"
          height="50"
        >
          <use
            :xlink:href="
              require('@/assets/img/sprite_icon.svg') + `#${item.icon}`
            "
          ></use>
        </svg>
        <span
          class="third-block__item-line"
          :class="isLineActive(idx + 1)"
        ></span>
        <p class="third-block__item-content">{{ item.content }}</p>
      </li>
    </ul>
    <div class="third-block__button-wrapper">
      <span class="third-block__button-line"></span>
      <div class="third-block__button button-wrapper">
        <a class="button" href="#">Lorem Ipsum</a>
      </div>
    </div>
  </section>
</template>
<script>
import thirdBlockList from "@/static/third-block.json";
export default {
  name: "ThirdBlock",
  data() {
    return {
      thirdBlockList,
      // Индекс активного item.
      currentIndex: 1,
      // Общее количество items.
      elementsCount: 5,
      // Интервал между появлением элементров.
      interval: 1000,
    };
  },

  /**
   * Используем хук `mounted` для запуска таймера.
   */

  mounted() {
    let timerID = this;
    setInterval(function () {
      timerID.nextItem();
    }, this.interval);
  },

  methods: {
    //Метод активирует линию
    isLineActive(index) {
      if (this.currentIndex >= index) {
        return "third-block__item-line--active";
      }
    },
    //Метод активирует иконку
    isIconActive(index) {
      if (this.currentIndex >= index) {
        return "third-block__item-icon--active";
      }
    },

    //Метод увеличивает значение текущего индекса и сбрасывает его при достижении конца списка
    nextItem() {
      this.currentIndex =
        this.currentIndex === this.elementsCount ? 1 : ++this.currentIndex;
    },
  },
};
</script>
