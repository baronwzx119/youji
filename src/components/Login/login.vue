<template>
  <div class="login">
    <p class="login_title">遊記欢迎您</p>
    <div class="login_logo">
      <img src="../../assets/imgs/logo.png" />
    </div>
    <!-- <form action="" method="post" class="login_form"> -->
    <div class="login_form">
      <p><input type="text" v-model="username" name="fname" placeholder="用户名"/></p>
      <p><input type="text" v-model="password" name="lname" placeholder="密码" /></p>
      <button @click="setCookie">登陆</button>
    </div>
    <!-- </form> -->
    <div class="login_bottom">
      <p>記錄旅行見聞。</p>
    </div>
  </div>
</template>

<script>
import {setCookie} from '../../service/service'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    mounted () {
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
    methods: {
      setCookie: function () {
        setCookie('token', this.username, 1)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
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
    color: #42b983;
  }

  .login {
    width: 100%;
    height: 100%;
  }
  .login_title{
    width:100%;
    height:3rem;
    border-bottom:1px solid #cccccc;
    line-height: 3rem;
  }
  .login_logo{
    margin-top:3rem;
    margin-bottom:3rem;
  }
  .login_form{
    width:100%;
  }
  .login_form input{
    width:100%;
    height:3rem;
    border:none;
    margin-top:1rem;
  }
  .login_form button{
    width:100%;
    height:3rem;
    border:none;
    margin-top:1rem;
    background:#000000;
    opacity: 0.6;
    box-shadow: darkgrey 0px 0px 10px 5px;
    color:#ffffff;
    font-size:1.2rem;
  }
  .login_bottom{
    position:absolute;
    bottom:0.5rem;
    width:100%;
  }
</style>
