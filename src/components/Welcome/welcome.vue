<template>
  <div class="welcome">
    <div class="face">
      <img src="../../assets/imgs/face.jpg" />
      <p>{{ msg }}</p>
    </div>
    <div class="logo">
      <img src="../../assets/imgs/logo.png" />
      <p>記錄旅行見聞。</p>
    </div>
  </div>
</template>
<script>
import {getCookie} from '../../service/service'

  export default {
    name: 'welcome',
    data () {
      return {
        msg: 3
      }
    },
    mounted () {
      this.timer = setInterval(() => {
        if (this.msg > 0) {
          this.msg--
        } else {
          this.checkLogin()
        }
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
    methods: {
     checkLogin: function () {
          this.token = getCookie('token')
          if (!this.token) {
            this.$router.push('/login')
          } else {
            this.$router.push('/hello')
          }
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
  .welcome {
    width: 100%;
    height: 100%;
  }
  .face {
    width: 100%;
    height: 70%;
    position: relative;
  }
  .face img {
    height: 100%;
    width: 100%;
    opacity: 0.7;
  }
  .face p {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    color: #ffffff;
    z-index: 9999;
    background: #000000;
    border-radius: 0.3rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    line-height:1.5rem;
    opacity: 0.6;
  }
  .logo {
    width: 100%;
    height: 30%;
    position: relative;
  }
  .logo img {
    position: absolute;
    right: 1rem;
    bottom: 2.5em;
  }
  .logo p {
    position: absolute;
    right: 0.2rem;
    bottom: 0.5rem;
  }
</style>
