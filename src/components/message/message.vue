<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
   <bottom-menu></bottom-menu>
  </div>
</template>

<script>
import bottomMenu from '../common/menu'
export default {
  name: 'message',
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
a {
  color: #42b983;
}
</style>
