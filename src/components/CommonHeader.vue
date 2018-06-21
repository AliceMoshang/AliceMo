<template>
  <div class="commonhead">
    <div class="w-full bg-lightgrey">
    <nav>
      <div class="dis-box justify-content-between">
        <div>
          <a href="#" >用户管理系统</a>
          <router-link to="/">主页</router-link>
          <router-link to="/about">关于我们</router-link>
        </div>
        <div>
          <router-link to="/add">添加用户</router-link>
        </div>
      </div>
    </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'commonheader',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
