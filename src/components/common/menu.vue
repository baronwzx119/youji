<template>
  <div class="menu"  id='bottom_menu'>
    <ul>
      <router-link :to="{path: 'home'}">
      <li id='home'>
        <i  class="fa fa-home"></i>
        <p>首页</p>
      </li>
      </router-link>
      <router-link :to="{path: 'list'}">
      <li>
        <i class="fa fa-star"></i>
        <p>游记</p>
      </li>
      </router-link>
      <router-link :to="{path: 'message'}">
      <li>
        <i class="fa fa-comments-o"></i>
        <p>消息</p>
      </li>
      </router-link>
      <router-link :to="{path: 'user'}">
      <li>
        <i class="fa fa-user-o"></i>
        <p>我的</p>
      </li>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
 data () {
    return {
      isActive: 'home'
    }
  },
  computed: {
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
a {
  color: #2c3e50;
}
.menu{
  width:100%;
  position: fixed;
  z-index:99999;
  background:#ffffff;
  bottom:0px;
  height:4rem;
  border-top:1px solid #cccccc;
}
.menu ul{
  width:100%;
}
.menu ul li{
  width:25%;
  margin:0;
  float:left;
}
.menu ul li i{
  font-size:1.4rem;
  padding-top:0.7rem;
}
.menu ul li p{
  font-size:0.9rem;
  line-height:1.4rem;
}
.router-link-active{
  color:#00cdeb;
}
</style>
