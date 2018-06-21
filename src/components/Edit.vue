<template>
  <div class="edit container">
   <div class="fw-b ta-c pd-20 fs18">编辑信息</div>
    
    <form>
    	<div class="bb item">
	    	<label for="">姓名</label>
	    	<input type="text" v-model="customer.name">
    	</div>
    	<div class="bb item">
	    	<label for="">电话</label>
	    	<input type="text" v-model="customer.phone">
    	</div>
    	<div class="bb item">
	    	<label for="">邮箱</label>
	    	<input type="text" v-model="customer.email">
    	</div>
    	<div class="bb item">
	    	<label for="">学历</label>
	    	<input type="text" v-model="customer.education">
    	</div>
    	<div class="bb item">
	    	<label for="">毕业学校</label>
	    	<input type="text" v-model="customer.school">
    	</div>
    	<div class="bb item">
	    	<label for="">职业</label>
	    	<input type="text" v-model="customer.job">
    	</div>
    	<label class="item">个人简介</label>
    	<textarea  rows="5" v-model="customer.intro">    		
    	</textarea>
    	<button class="btn-default mt-10" @click.prevent="submitEdit">提交</button>
    </form>
    
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'edit',
  data () {
    return {
     	customer:{}
    }
  },
  created(){
  	console.log(5566,this.$route.params)
  	this.getData()
  },
  methods:{
  	getData(){
  		 this.$http.get('http://localhost:3000/users/'+this.$route.params.id).then(res=>{
	      this.customer = res.data
	    })
  	},
  	submitEdit(){
  		if(!this.customer.name || !this.customer.phone || !this.customer.email){
  			// console.log(this.customer)
  			console.log("必填项不能为空")
  		}else{
  			this.$http.put("http://localhost:3000/users/"+this.$route.params.id,this.customer).then((res)=>{
			// console.log(666,res.data)
            this.$router.push({path:"/",query:{alert:'用户信息更新成功！'}})
        	})
  		}
		 

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
