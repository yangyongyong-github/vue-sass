<template>
  <div class="app-container">
    <div class="main">
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
          @mouseover="mouseOverHandle(item, index)"
          @mouseleave="clearItemOrder"
        >
          <div class="image">
            <!-- <img
              :src="'@/assets/img/' + item.imgSrc || '@/assets/img/circle.png'"
              alt=""
            /> -->
            <img :src="item.imgSrc" alt="" />
          </div>
          <div class="title">{{ item.title }}</div>
          <Modal
            @opItem="itemDataHandle"
            :item="item"
            v-show="index === itemOrder"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { descArr } from "./descArr";
import Modal from "./components/Modal";

export default {
  name: "App",
  data() {
    return {
      items: descArr,
      itemOrder: -1, // 需要展示哪个的序号
    };
  },
  components: {
    Modal,
  },
  methods: {
    /**
     * 鼠标移上的事件处理函数
     */
    mouseOverHandle(item, index) {
      // console.log(item);
      this.itemOrder = index;
    },
    clearItemOrder() {
      this.itemOrder = -1;
    },
    /**
     * 子组件传上来的需要编辑的数据id，组件使用者根据id来处理自己的数据（谁的数据谁来维护）
     */
    itemDataHandle({ type, id }) {
      console.log(`点击当前数据的ID为${id}, 操做类型为${type}`);
      alert(`点击当前数据的ID为${id}, 操做类型为${type}`);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./style/charts.scss";
</style>

