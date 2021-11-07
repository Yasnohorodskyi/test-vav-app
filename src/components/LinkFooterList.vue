<template>
  <ul class="page-footer__link-list">
    <li
      v-for="(footerLink, idx) in footerContent.footerLinks"
      :key="idx"
      class="page-footer__link-item"
    >
      <a class="page-footer__link" :href="footerLink.url">{{
        footerLink.name
      }}</a>
    </li>
  </ul>
</template>
<script>
import footerContent from "@/static/footer-content.json";
export default {
  name: "LinkFooterList",
  data() {
    return {
      footerContent,
    };
  },
};
</script>
