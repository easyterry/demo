<template lang="html">
  <div class="">
      <div class="" @click="test1">
          1
      </div>
      <div class="" @click="test2">
          2
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import EventBus from '../assets/js/eventbus'
export default {
    methods: {
        test1 () {
            EventBus.$on('msg', data => {
                console.log(data);
            })
        },
        test2 () {
            EventBus.$on('msg', data => {
                console.log(data);
            })
        }
    }
}
</script>

<style lang="css" scoped>
</style>
