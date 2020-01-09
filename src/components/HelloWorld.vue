<template>
    <div class="hello">
        <input type="text" name="" v-model="sendMsg">
        <button type="button" name="button" @click="handleSendMsg">发送</button>
        <div class="" id="recv"></div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
	name: 'HelloWorld',
    data() {
        return {
            count: 0,
            msg: 123,
            sendMsg: '',
            ws: ''
        }
    },
    mounted () {
        let host = window.location.host
        this.ws = new WebSocket(`ws://${host}:8001`);
        this.ws.onopen=function(){  // onopen 连接触发 //
           console.log("websocket open", data);
         }
         this.ws.onmessage = function(e){
              document.getElementById("recv").innerHTML = e.data;
        }
    },
    methods: {
        handleSendMsg () {
            this.ws.send(this.sendMsg);
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
