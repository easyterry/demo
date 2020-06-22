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
import EventBus from '../assets/js/eventbus'
export default {
	name: 'HelloWorld',
	data() {
		return {
			count: 0,
			sendMsg: '',
			ws: [],
            websock: ''
		}
	},
	sockets: {
		connect: function() {},
		message: function(data) {
			this.ws.push(data)
		}
	},
    mounted () {
            this.initWebsocket()
			// EventBus.$emit('msg', 12333)
    },
	methods: {
		handleSendMsg() {
			EventBus.$emit('msg', 333)
			this.$socket.emit('message', {
				msg: this.sendMsg
			})

            this.websock.send(this.sendMsg)
		},
		initWebsocket() {
			const wsuri = `ws://${window.location.hostname}:8001` //这个地址由后端童鞋提供
			this.websock = new WebSocket(wsuri);
			this.websock.onmessage = this.webSocketOnMessage;
			this.websock.onopen = this.websocketonopen;
			this.websock.onerror = this.websocketonerror;
			this.websock.onclose = this.websocketclose;
		},
		webSocketOnMessage(e) {
            console.log('wori', e.data);
		},
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
