<template>
  <div class="Cdetials container">
  	<div class="dis-box justify-content-between pd-10">
  		<router-link to="/" class="btn-default">返回</router-link>
  		<div class="dis-box">
  			<router-link :to="'/edit/'+customer.id" class="btn-default ">编辑</router-link>
  			<button class="btn-default ml-10" @click="deleteCustomer(customer.id)">删除</button>
  		</div>  		
  	</div>
  	<div class="center-block">
  		<div class="pb-20 fs26 fw-b">{{customer.name}}</div>
	    <div>年龄：{{customer.age}}</div>
	    <div>邮箱：{{customer.email}}</div>
	    <div>手机：{{customer.phone}}</div>
	    <div>学历:{{customer.education}}</div>
	    <div>毕业学校:{{customer.school}}</div>
	    <div>职业:{{customer.job}}</div>
	    <div>个人简介:{{customer.intro}}</div>
  	</div>    
  
  </div>
</template>

<script>
export default {
  name: 'Cdetials',
  data () {
    return {
     	customer:{}
    }
  },
  created(){
  	console.log(5566,this.$route.params)
  	this.getData(this.$route.params.id)
  },
  methods:{
  	getData(id){
  		 this.$http.get('http://localhost:3000/users/'+id).then(res=>{
	      console.log(222,res.data)
	      this.customer = res.data
	    })
  	},
  	deleteCustomer(id){
  		 this.$http.delete('http://localhost:3000/users/'+id).then(res=>{
	      this.$router.push({path:"/",query:{alert:'用户删除信息成功！'}})
	    })
  	}
  	
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-block{
    margin: 0 auto;
    width: 300px;
    padding: 20px;
}
.center-block div{
	padding: 5px;
	border-bottom: 1px solid #eee;
}
</style>
