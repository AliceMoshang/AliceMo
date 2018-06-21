<template>
  <div id="app">
    <common-header></common-header>
  
  </div>

</template>

<script>
import CommonHeader from './components/CommonHeader'
export default {
  name: 'App',
  components: {
    CommonHeader
  },
  data(){
    return{
      show: true
    }
  }
}
</script>

<style>

</style>
