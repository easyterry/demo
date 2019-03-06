<template lang="html">
  <div class="">
    <component is="my-canvas" />
    <slot name="footer" :num="c">{{ c }}</slot>
    <slot name="header" :list="list">{{ list[0] }}</slot>
    <button type="button" name="button" @click="increment(13)">点击+</button>
    <button type="button" name="button" @click="decrease(5)">点击-</button>
    <p>{{this.$store.state.d}}</p>
    <p>moduleA:{{this.$store.state.a.e}} / {{this.$store.state.num}}</p>
    <p>moduleB:{{this.$store.state.b.e}}</p>
    <draggable element="ul" v-model="list">
         <li v-for="item in list">{{item.name}}</li>
    </draggable>
    {{list}}
  </div>

</template>

<script>
import {
  mapActions,
  mapMutations
} from 'vuex'

import MyCanvas from '#/canvas'

import path from 'path'

import draggable from 'vuedraggable'
export default {
  props: ['a', 'b'],
  data() {
    return {
      c: this.b + 6,
      list: [{
        name: "John"
      }, {
        name: "Joao"
      }, {
        name: "Jean"
      }],
      list2: [{
        name: "Juan"
      }, {
        name: "Edgard"
      }, {
        name: "Johnson"
      }],
    }
  },
  created() {
    console.log(path.resolve(__dirname, 'Cao', './Ri'));
  },
  components: {
    draggable,
    MyCanvas
  },
  methods: {
    ...mapActions([
      'increment'
    ]),
    ...mapMutations([
      'decrease'
    ])
  }
}
</script>

<style lang="css">
  ul {
    font-size: 32px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin-bottom: 100px;
    cursor: move;
  }

  li:nth-child(1) {
    background-color: #00a0e9;
  }

  li:nth-child(2) {
    background-color: #ff0000;
  }

  li:nth-child(3) {
    background-color: green;
  }

</style>
