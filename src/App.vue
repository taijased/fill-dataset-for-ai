<template>
  <div id="app">
    <BoltCards/>
  </div>
</template>

<script>
import BoltCards from './components/BoltCards'

export default {
  name: 'app',
  components: {
    BoltCards
  }
}
</script>
<style lang="stylus">
body 
  margin 0
  padding 0
  overflow hidden
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  display flex
  background #E6F1F3


</style>
