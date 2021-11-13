<template>
  <section class="fifth-block">
    <h2 class="fifth-block__title">Lorem Ipsum is simply dummy text</h2>
    <div class="fifth-block__inner-wrapper">
      <div class="fifth-block__form-wrapper">
        <h3 class="fifth-block__form-header">
          It is a long established fact that a reader
        </h3>
        <section-form />
      </div>
      <div class="fifth-block__description-wrapper">
        <h3 class="fifth-block__description-title">
          It is a long established fact that a reader
        </h3>
        <a
          class="fifth-block__description-email-link"
          href="mailto:support@email.com"
          >support@email.com</a
        >
        <p class="fifth-block__description-content">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SectionForm from "@/components/SectionForm.vue";

export default {
  name: "FifthBlock",
  components: {
    SectionForm,
  },
};
</script>
