<!-- Компонент Sentinal(часовой) реализует метод наблюдения за появлением блока во вьюпорте-->
<template>
  <div :ref="sentinalThirdBlock" />
</template>

<script>
export default {
  name: "IntersectionObserver",
  props: {
    sentinalThirdBlock: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isIntersectingElement: false,
    };
  },
  watch: {
    isIntersectingElement: function (value) {
      this.$emit("on-intersection-element", value);
    },
  },
  mounted() {
    const sentinal = this.$refs[this.sentinalThirdBlock];

    const handler = (entries) => {
      if (entries[0].isIntersecting) {
        this.isIntersectingElement = true;
      } else {
        this.isIntersectingElement = false;
      }
    };

    const observer = new window.IntersectionObserver(handler);

    observer.observe(sentinal);
  },
};
</script>
