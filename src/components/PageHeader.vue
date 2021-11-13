<template>
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
</template>
<script>
import mainNavigation from "@/static/main-navigation.json";
export default {
  name: "PageHeader",
  data() {
    return {
      mainNavigation,
    };
  },
};
</script>
