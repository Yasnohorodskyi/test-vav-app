<template>
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
</template>
<script>
import footerContent from "@/static/footer-content.json";
import LinkFooterList from "@/components/LinkFooterList.vue";
export default {
  name: "PageFooter",
  data() {
    return {
      footerContent,
    };
  },
  components: {
    LinkFooterList,
  },
};
</script>
