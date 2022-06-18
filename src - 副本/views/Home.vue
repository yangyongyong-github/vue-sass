<template>
  <div class="home-container">
    <div class="main">
      <ul v-for="(item, index) in items" :key="index">
        <li
          @mouseover="mouseOverHandle(item, index)"
          @mouseleave="switchModal()"
        >
          <div class="image">
            <img :src="'@/assets/img/' + item.imgSrc" alt="" />
          </div>
          <div class="title">{{ item.title }}</div>
          <Modal :Width="'120%'" :Height="'120%'" v-show="index === showNum" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { descArr } from "./descArr";
import Modal from "./modal";
export default {
  name: "Home",
  data() {
    return {
      items: descArr,
      showNum: "",
    };
  },
  computed: {},
  components: {
    Modal,
  },
  methods: {
    mouseOverHandle(item, index) {
      console.log(item, index);
      // this.switchModal(item.showModal);
      // item.showModal = true;
      this.showNum = index;
    },
    switchModal() {
      this.showNum = "";
    },
  },
};
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>

