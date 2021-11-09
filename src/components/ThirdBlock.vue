<template>
  <section class="third-block">
    <intersection-observer
      sentinal-third-block="sentinal-third-block"
      @on-intersection-element="onIntersectionElement"
    ></intersection-observer>
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
import IntersectionObserver from "@/components/IntersectionObserver.vue";

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
      // переменная прохождения границы видимоти элемента
      isIntersectingElement: false,
      // ID таймера
      timerID: null,
      //контент таймера
      timerContent: null,
    };
  },
  components: {
    IntersectionObserver,
  },

  methods: {
    //Метод активирует таймер и смену класса
    onIntersectionElement(value, timerID, timerContent) {
      this.isIntersectingElement = value;
      timerContent = this;

      if (this.isIntersectingElement) {
        timerID = setInterval(function () {
          timerContent.nextItem();
          if (!timerContent.isIntersectingElement) {
            clearInterval(timerID);
          }
        }, this.interval);
      }
      this.currentIndex = 1;
    },
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
