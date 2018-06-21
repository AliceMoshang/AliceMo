<template>
  <div class="add container">
  	<Alert :message="alertM" v-if="alertM"></Alert>
    <div class="fw-b ta-c pd-20 fs18">添加用户</div>
    
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
    	<button class="btn-default mt-10" @click.prevent="addCustomer">添加</button>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
  components:{
    Alert
  },
  data () {
    return {
     	customer:{},
     	alertM:''
    }
  },
  methods:{
  	addCustomer(){
  		if(!this.customer.name || !this.customer.phone || !this.customer.email){
  			
  			this.alertM ='必填项不能为空'
  		}else{
  			
  			 this.$http.post('http://localhost:3000/users',this.customer).then(res=>{
                    this.$router.push({path:"/",query:{alert:'用户添加信息成功！'}})
                
		    })
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
	font-size: 14px;
	font-weight: bold;
	padding: 5px 0;
	display: box; 
	display: flex; 
	align-items: center;
}
.item input{
	-webkit-box-flex: 1;      /* OLD - iOS 6-, Safari 3.1-6 */  
    -moz-box-flex: 1;         /* OLD - Firefox 19- */  
    -webkit-flex: 1;          /* Chrome */  
    -ms-flex: 1;              /* IE 10 */  
    flex: 1; 
    padding-left: 10px;
}

.tips{
  padding: 10px;
  font-size: 12px;
  color: #777;
  background: #f6f6f6;
  border-radius: 3px;
}
</style>
