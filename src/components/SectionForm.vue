<template>
  <form
    class="fifth-block__form form"
    method="post"
    action="/form-sending"
    autocomplete="off"
    @submit.prevent="formSubmit"
  >
    <div class="form__name-wrapper">
      <input
        class="form__field"
        type="text"
        name="name"
        id="name"
        placeholder=" "
        minlength="5"
        maxlength="120"
        v-model.trim="form.name"
        required
      />
      <label class="form__field-label" for="name"
        >Name <span class="form__field-sign">*</span></label
      >
      <small v-if="!nameIsValid && actionStatusActive" class="form__tagline"
        ><span class="fifth-block__form-tagline-arrow">* </span>Lorem Ipsum is
        simply dummy</small
      >
    </div>

    <div class="form__contact-wrapper">
      <div class="form__tel-wrapper">
        <input
          class="form__field"
          type="tel"
          name="phone"
          id="tel"
          placeholder=" "
          pattern="^[0-9]+$"
          v-model.number="form.phone"
          required
        />
        <label class="form__field-label" for="tel"
          >Phone <span class="form__field-sign">*</span></label
        >
        <small v-if="!phoneIsValid && actionStatusActive" class="form__tagline"
          ><span class="fifth-block__form-tagline-arrow">* </span>Lorem Ipsum is
          simply dummy</small
        >
      </div>
      <div class="form__email-wrapper">
        <input
          class="form__field"
          type="email"
          name="email"
          id="email"
          placeholder=" "
          v-model.trim="form.email"
          required
        />
        <label class="form__field-label" for="email"
          >Email <span class="form__field-sign">*</span></label
        >
        <small v-if="!emailIsValid && actionStatusActive" class="form__tagline"
          ><span class="fifth-block__form-tagline-arrow">* </span>Lorem Ipsum is
          simply dummy</small
        >
      </div>
    </div>

    <div class="form__calculator-wrapper">
      <div class="form__calculator-value-wrapper">
        <span :style="rangeValueMove" class="form__calculator-value"
          >{{ form.currentRange }} грн
        </span>
      </div>
      <div class="form__range-slader-wrapper">
        <input
          @input="form.currentRange = $event.target.value"
          class="form__range-slader"
          type="range"
          name="calculator"
          :min="minRange"
          :max="maxRange"
          v-model="form.currentRange"
          required
        />
        <div class="form__range-scale-wrapper">
          <div v-for="(range, idx) in 7" :key="idx" class="form__range-scale">
            <span class="form__range-scale-point"></span>
            <span class="form__range-scale-number">{{
              idx * rangeSection + startRange
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="form__checkbox-batton-wrapper">
      <div>
        <input
          class="form__ckeckbox visually-hidden"
          type="checkbox"
          id="checkbox-agree"
          name="lorem-ipsum"
          value="Lorem Ipsum is simply dummy text"
          v-model="form.agree"
          required
        />
        <label class="form__ckeckbox-label" for="checkbox-agree"
          >Lorem Ipsum is simply dummy text</label
        >
        <small v-if="!agreeIsValid && actionStatusActive" class="form__tagline"
          ><span class="fifth-block__form-tagline-arrow">* </span>Lorem Ipsum is
          simply dummy</small
        >
      </div>

      <button
        @click="handlerSubmitOn()"
        class="form__ckeckbox-button button"
        type="submit"
      >
        Lorem Ipsum
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: "SectionForm",
  data() {
    return {
      form: {
        name: "",
        phone: null,
        email: "",
        agree: false,
        currentRange: 3000,
      },
      minRange: 0,
      maxRange: 7000,
      startRange: 500,
      rangeSection: 1000,
      actionStatus: false,
    };
  },
  methods: {
    async formSubmit() {
      if (this.formIsValid) {
        const res = await fetch("/form-sending", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.form.name,
            phone: this.form.phone,
            email: this.form.email,
            agree: this.form.agree,
            currentRange: this.form.currentRange,
          }),
        });
        if (res.status !== 200 || res.status !== 201) {
          alert("Status error " + res.status);
        }
      }
    },

    validEmail(email) {
      const emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailPattern.test(email);
    },
    handlerSubmitOn() {
      return (this.actionStatus = !this.actionStatus);
    },
  },
  computed: {
    rangeValueMove() {
      return {
        left: `calc(${(this.form.currentRange * 100) / this.maxRange}% - 50px`,
      };
    },

    nameIsValid() {
      return (
        !!this.form.name &&
        this.form.name.length > 5 &&
        this.form.name.length < 120
      );
    },
    phoneIsValid() {
      return typeof this.form.phone === "number";
    },
    emailIsValid() {
      return this.validEmail(this.form.email);
    },

    agreeIsValid() {
      return this.form.agree;
    },

    formIsValid() {
      return (
        this.nameIsValid &&
        this.phoneIsValid &&
        this.emailIsValid &&
        this.agreeIsValid
      );
    },

    actionStatusActive() {
      return this.actionStatus;
    },
  },
};
</script>
