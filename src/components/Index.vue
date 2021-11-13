<template>
  <div>
    <page-header />
    <main class="page-main">
      <first-block />
      <second-block />
      <third-block />
      <fourth-block />
      <fifth-block />
    </main>
    <page-footer />
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue";
import FirstBlock from "@/components/FirstBlock.vue";
import SecondBlock from "@/components/SecondBlock.vue";
import ThirdBlock from "@/components/ThirdBlock.vue";
import FourthBlock from "@/components/FourthBlock.vue";
import FifthBlock from "@/components/FifthBlock.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "Index",
  components: {
    PageHeader,
    FirstBlock,
    SecondBlock,
    ThirdBlock,
    FourthBlock,
    FifthBlock,
    PageFooter,
  },
};
</script>

<style LinkFooterListlang="sass" scoped></style>
