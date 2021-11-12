<template>
  <div>
    <header class="page-header">
      <svg class="page-header__logo" width="60" height="60">
        <use xlink:href="@/assets/img/sprite_icon.svg#logo"></use>
      </svg>
      <nav class="page-header__nav main-nav">
        <ul class="main-nav__list">
          <li
            v-for="(navItem, idx) in mainNavigation"
            :key="idx"
            class="main-nav__item"
          >
            <a class="main-nav__link" :href="navItem.url">{{ navItem.name }}</a>
          </li>
        </ul>
      </nav>
    </header>
    <main class="page-main">
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
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <div
                class="first-block__content-description-button button-wrapper"
              >
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
      <!-- <section class="second-block">
        <div class="second-block__features-wrapper">
          <div class="second-block__title-wrapper">
            <h2 class="second-block__title">Lorem</h2>
          </div>
          <div class="second-block__features">
            <ul class="second-block__features-list">
              <li class="second-block__features-item">
                <div class="second-block__feature-header-wrapper">
                  <h4 class="second-block__feature-header">Lorem Ipsum</h4>
                </div>
                <ul class="second-block__feature-list">
                  <li class="second-block__feature-item">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li class="second-block__feature-item">
                    The readable content
                  </li>
                  <li class="second-block__feature-item">
                    There are many variations of passages
                  </li>
                </ul>
              </li>
              <li class="second-block__features-item">
                <div class="second-block__feature-header-wrapper">
                  <h4 class="second-block__feature-header">Lorem Ipsum</h4>
                </div>
                <ul class="second-block__feature-list">
                  <li class="second-block__feature-item">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li class="second-block__feature-item">
                    The readable content
                  </li>
                  <li class="second-block__feature-item">
                    There are many variations of passages
                  </li>
                </ul>
              </li>
              <li class="second-block__features-item">
                <div class="second-block__feature-header-wrapper">
                  <h4 class="second-block__feature-header">Lorem Ipsum</h4>
                </div>
                <ul class="second-block__feature-list">
                  <li class="second-block__feature-item">
                    It is a long established fact that a reader will be
                    distracted
                  </li>
                  <li class="second-block__feature-item">
                    The readable content
                  </li>
                  <li class="second-block__feature-item">
                    There are many variations of passages
                  </li>
                </ul>
              </li>
            </ul>
            <div class="second-block__features-dots">
              <span
                class="
                  second-block__feature-dots second-block__feature-dots--active
                "
              ></span>
              <span class="second-block__feature-dots"></span>
              <span class="second-block__feature-dots"></span>
            </div>
            <button
              class="second-block__features-arrows previous-arrow"
              type="button"
            >
              <svg class="reviews__arrow-icon" width="30" height="24">
                <use
                  xlink:href="@/assets/img/sprite_icon.svg#arrow-before"
                ></use>
              </svg>
              <span class="visually-hidden">Previous features List</span>
            </button>
            <button
              class="second-block__features-arrows next-arrow"
              type="button"
            >
              <svg class="reviews__arrow-icon" width="32" height="24">
                <use xlink:href="@/assets/img/sprite_icon.svg#arrow-next"></use>
              </svg>
              <span class="visually-hidden">Next features List</span>
            </button>
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
              of Lorem Ipsum available, but the majority have suffered
              alteration in some form
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
      </section> -->
      <second-block />
      <third-block />
      <fourth-block />
      <fifth-block />
    </main>
    <footer class="page-footer">
      <div class="page-footer-container">
        <div class="page-footer__social-wrapper">
          <ul class="page-footer__social-list social">
            <li
              v-for="(socialItem, idx) in footerContent.social"
              :key="idx"
              class="social-item"
            >
              <a class="social-item__link" :href="socialItem.url">
                <span class="visually-hidden">{{ socialItem.title }}</span>
                <svg class="social-item___image" width="30" height="30">
                  <use
                    :xlink:href="
                      require('@/assets/img/sprite_icon.svg') +
                      `#${socialItem.name}`
                    "
                  ></use>
                </svg>
              </a>
            </li>
          </ul>
          <a class="copyright__link" href="#">© 2020 Vis-A-Vis</a>
        </div>
        <link-footer-list v-for="(linkList, idx) in 3" :key="idx" />
      </div>
    </footer>
  </div>
</template>
<script>
import mainNavigation from "@/static/main-navigation.json";
import firstBlockList from "@/static/first-block.json";
import secondBlockContent from "@/static/second-block.json";
import footerContent from "@/static/footer-content.json";

import LinkFooterList from "@/components/LinkFooterList.vue";
import SecondBlock from "@/components/SecondBlock.vue";
import ThirdBlock from "@/components/ThirdBlock.vue";
import FourthBlock from "@/components/FourthBlock.vue";
import FifthBlock from "@/components/FifthBlock.vue";

export default {
  name: "Index",
  data() {
    return {
      mainNavigation,
      firstBlockList,
      secondBlockContent,
      footerContent,
    };
  },
  components: {
    LinkFooterList,
    ThirdBlock,
    FourthBlock,
    FifthBlock,
    SecondBlock,
  },
};
</script>

<style LinkFooterListlang="sass" scoped></style>
