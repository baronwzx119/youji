<template>
  <div class="home">
       <div class="top-list">
     <h1>目的地</h1>
     <p><i  class="fa fa-search"></i></p>
     </div>
   <div class="top-light">
   </div>

   <div class="content">
     <ul>
       <li>
         <img src="../../assets/imgs/1.jpg" />
         <h2>普吉岛</h2>
       </li>
       <li>
         <img src="../../assets/imgs/2.jpg" />
         <h2>苏梅岛</h2>
       </li>
       <li>
         <img src="../../assets/imgs/1.jpg" />
         <h2>清迈</h2>
       </li>
       <li>
         <img src="../../assets/imgs/2.jpg" />
         <h2>芽庄</h2>
       </li>
     </ul>
   </div>
   <bottom-menu></bottom-menu>
  </div>
</template>

<script>
import bottomMenu from '../common/menu'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    bottomMenu
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
.home{
  width:100%;
  height: 100%;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  overflow:hidden;
}
.top-light{
  width:100%;
  height:12rem;
  margin-top:2.3rem;
  background: -webkit-linear-gradient(#0483e6, #a2d7e9); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#0483e6, #a2d7e9); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#0483e6, #a2d7e9); /* Firefox 3.6 - 15 */
  background: linear-gradient(#0483e6, #a2d7e9); /* 标准的语法 */
}
.top-list{
  height:2.3rem;
  width: 100%;
  position: fixed;
  z-index:99999;
  top:0;
  background: #0483e6;
}
.top-list h1{
  line-height:2.3rem;
  font-size:1.2rem;
  color:#ffffff;
  display:inline-block;
  width:85%;
}
.top-list p{
  font-size:1.2rem;
  color:#ffffff;
  display:inline-block;
}
.content{
  width:100%;
  height:85%;
  position:absolute;
  overflow:scroll;
  top:2.5rem;
  padding-top:1rem;
}
.content ul li{
  width:90%;
  background:#fff;
  border-radius: 0.5rem;
  height:17rem;
  -moz-box-shadow:0px 10px 2rem #B3B3B3; -webkit-box-shadow:0px 10px 2rem #B3B3B3; box-shadow:0px 10px 2rem #B3B3B3;
  margin-bottom:1rem;
}
.content ul li img{
  width:100%;
  height:230px;
  border-radius: 0.5rem  0.5rem 0 0;
  display: block;
}
.content ul li h2{
  line-height:1.2rem;
  font-size:1.2rem;
  padding:0.5rem;
  font-weight:600;
}
</style>
