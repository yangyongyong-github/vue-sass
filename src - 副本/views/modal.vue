<template>
  <div
    class="modal-container"
    :style="{
      width: Width,
      height: Height,
    }"
  >
    <div class="modal-area"></div>
    <!-- 这里一定要注意分开放置，否则会收opacity影响 字和使用者自己的字重叠在一起看不清 -->
    <div class="content">
      <button @click="clickHanle">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Width: {
      type: String,
      default: "100%",
    },
    Height: {
      type: String,
      default: "100%",
    },
  },
  methods: {
    clickHanle() {
      console.log("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: relative;
  // width: 100%;
  // // height: 190%; // useri: 190 userii: 150 兼顾了max
  border: 18px solid;
  border-color: transparent;
  box-sizing: border-box;
  // 这里为什么使用 margin超出父容器？为什么设置padding无效

  .modal-area {
    width: 100%;
    height: 100%;
    background: black;
    // margin: 20px;
    // margin: 10px;
    border-radius: 20px;
    opacity: 0.4;

    // .self-fill(@pos:absolute);
    // &:hover {
    //   cursor: not-allowed;
    // }
  }

  //   .text {
  //     .self-center(@pos:absolute);
  //     background-color: rgb(235, 220, 202);
  //     padding: 20px;
  //     border-radius: 10px;
  //   }
  .content {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: auto;
    button {
      color: beige;
      background-color: rgb(0, 217, 255);
    }
  }
}
</style>