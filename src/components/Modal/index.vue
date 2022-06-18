<template>
  <div class="modal-component">
    <div class="modal"></div>
    <span
      class="icon-stop_1 left-top-icon icon-click"
      @click="clickHandle('stop')"
    >
    </span>
    <div class="content">
      <button @click="clickHandle('edit')">编辑</button>
      <div class="bottom-icons">
        <span class="icon-favorite icon-click" @click="clickHandle('like')">
        </span>
        <span
          class="icon-delete-inverse icon-click"
          @click="clickHandle('delete')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 需要组件中处理的元素
    item: {
      type: Object,
      isRequired: true,
      default: () => {},
    },
  },
  methods: {
    /**
     * 点击事件
     * type: 操做类型
     * id: 数据id
     */
    clickHandle(type) {
      this.$emit("opItem", { type, id: this.item.id });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>