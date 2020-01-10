<template>
    <div class="hello">
        <input type="text" name="" v-model="sendMsg">
        <button type="button" name="button" @click="handleSendMsg">发送</button>
        <div class="" v-for="(item, index) in ws" :key="index">
            {{item.msg}}
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
	name: 'HelloWorld',
    data() {
        return {
            count: 0,
            sendMsg: '',
            ws: []
        }
    },
    sockets: {
       connect: function () {
       },
       message: function (data) {
          this.ws.push(data)
       }
   },
    methods: {
        handleSendMsg () {
            this.$socket.emit('message', {
                msg: this.sendMsg
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
