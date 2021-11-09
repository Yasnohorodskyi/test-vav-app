<template>
  <section class="fourth-block">
    <div class="fourth-block_wrapper">
      <h2 class="fourth-block__title visually-hidden">Lorem</h2>
      <ul class="fourth-block__list persons">
        <li
          v-for="(person, idx) in personsDataSchuffled"
          :key="idx"
          class="persons__item"
        >
          <div v-if="idx === 0" class="persons__item-image-wrapper">
            <img
              class="persons__item-image-nimb"
              src="@/assets/img/Ellipse.png"
              alt=""
            />
            <span class="persons__item-first-image"></span>
          </div>
          <div v-else class="persons__item-image-wrapper">
            <span class="persons__item-image"></span>
          </div>

          <h3 class="persons__item-title">{{ person.title }}</h3>
          <p class="persons__item-desription">
            {{ person.description }}
          </p>
          <ul class="persons__item-list">
            <li
              v-for="(argument, index) in person.arguments"
              :key="index"
              class="persons__item-point"
            >
              {{ argument }}
            </li>
          </ul>
        </li>
      </ul>
      <div class="fourth-block__additional-wrapper">
        <ul class="fourth-block__additional-list">
          <li
            v-for="(additionalItem, idx) in 3"
            :key="idx"
            class="fourth-block__additional-item"
          >
            Lorem Ipsum is simply
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import personsData from "@/static/fourth-block.json";
import schuffle from "@/common/utils.js";

export default {
  name: "FourthBlock",
  data() {
    return {
      personsDataSchuffled: schuffle(personsData.slice()),
    };
  },
};
</script>
