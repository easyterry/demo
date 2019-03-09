<template lang="html">
  <div class="">
    <child  v-bind="msg" >
      <template
        v-if="isTrue"
        v-slot:header="slotProp">
        My name is <sup>{{slotProp.list[1].name}}</sup>
      </template>
      <template v-else v-slot:header="slotProp">His name is {{slotProp.list[0].name}}</template>
      <template v-slot:footer="slotProp">Age {{slotProp.num}}</template>
    </child>
    <p ref="btn" v-if="showChild">测试!!!!</p>
    <button @click="getData" type="button" name="button">nextTick</button>
  </div>
</template>

<script>
import child from './child';

export default {
  components: {
    child
  },
  data() {
    return {
      a: 0,
      msg: {
        a: 1,
        b: 4,
      },
      showChild: false,
      isTrue: true,

    };
  },
  created() {

  },
  methods: {
    getData() {
      this.showChild = true;
      this.$nextTick(() => {
        console.log(this.$refs.btn.offsetWidth);
      });
      console.log(this.$refs.btn.offsetWidth);
    },
  },
};
</script>

<style lang="css">
</style>
