<template>
  <transition class="alert" name="fade">
    <div class="dis-box bg-lightgrey justify-content-between mt-10 " v-if="message">
      <div class="tips ">{{message}}</div>
      <div class="c9 pr-10" @click="close">x</div>
    </div>
  </transition>
</template>	
<script>
export default {
  name: 'alert',
  props:["message"],
  data () {
    return {
   
    }
  },
  
  methods:{
  	close(){
  		this.message =""
  	}
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tips{
  padding: 10px;
  font-size: 12px;
  color: #777;
  background: #f6f6f6;
  border-radius: 3px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
