<template lang="html">
  <div>
    <div class="btn-container">
      <div
        id="btn1"
        class="btn"
        @click="outputValue"
      >
        按钮
      </div>
      <div
        id="btn2"
        class="btn"
        @click="decreaseValue"
      >
        按钮2
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {

    };
  },
  methods: {
    ...mapActions([
      'decreaseValue'
    ]),
    ...mapMutations([
      'outputValue'
    ])
  }
};
</script>

<style lang="css" scoped>
  .btn-container {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 300px;
  }

  #canvas {
    z-index: -1;
  }

  .btn {
    position: absolute;
    width: 36px;
    height: 36px;
    line-height: 36px;
    color: #fff;
    font-size: 14px;
    background-color: skyblue;
    border-radius: 50%;
    cursor: pointer;
  }

  .btn:nth-child(2) {
    margin-left: 100px;
  }
</style>
