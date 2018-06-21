<template>
  <div class="customers container">
    <Alert :message="alertM" v-if="alertM"></Alert>
    <div class="c6  ta-c fw-b pd-20">用户管理系统</div>      
    <div class="search mr-10 dis-box mb-10">
      <input type="text" placeholder="搜索" v-model="search">
      <i class="iconfont icon-sousuo c9 "></i>
    </div>
    <div>
        <table>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
          </tr>          
          <tr v-for="customer in filterCustomers">
            <td>{{customer.name}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.email}}</td>
            <td><router-link :to=" '/cdetials/'+customer.id " class="btn-default">详情</router-link></td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'customers',
  components:{
    Alert
  },
  data () {
    return {
      customers:[],
      alertM:'',
      search:''
    }
  },
  watch:{
    alertM: function(){
     return setTimeout(()=>{
      this.alertM =""
     },1000)
    }
  },
  created(){
    if(this.$route.query.alert){
      this.alertM = this.$route.query.alert 
    }
    console.log(111,this.alertM)
  },
  mounted(){
    this.$http.get('http://localhost:3000/users').then(res=>{
      console.log(222,res)
      this.customers = res.data
    })
  },
  computed:{
    filterCustomers: function(){
      return this.customers.filter((customer)=>{
        return customer.name.match(this.search)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table{
  width: 100%;
}
th,td{
  width: 25%;
  text-align: left;
  font-size: 14px;
  padding: 5px 0;
}

tr:nth-child(even){
  background:#f6f6f6;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
