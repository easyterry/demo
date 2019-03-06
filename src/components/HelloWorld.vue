<template lang="html">
  <div class="">
    <child v-bind="msg">
      <template v-if="isTrue" v-slot:header="slotProp">My name is <sup>{{slotProp.list[1].name}}</sup></template>
      <template v-else v-slot:header="slotProp">His name is {{slotProp.list[0].name}}</template>
      <template v-slot:footer="slotProp">Age {{slotProp.num}}</template>
    </child>
    <!-- <component is="my-canvas" /> -->
  </div>
</template>

<script>
import child from './child'
// import MyCanvas from './canvas'
export default {
  components: {
    child,
    // MyCanvas
  },
  data() {
    return {
      msg: {
        a: 1,
        b: 4
      },
      isTrue: true
    }
  }
}
</script>

<style lang="css">
</style>
