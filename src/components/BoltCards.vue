<template lang="pug">
  .select-bolt
    h1  {{title}}
    .cards(v-if="getImageUrl")
      i(@click="close", class="far fa-times-circle fa-5x")
      img(:src='getImageUrl')
    SliderControl    
    
</template>

<script>
import SliderControl from './SliderControl';
import { mapGetters, mapActions} from 'vuex';

export default {
  data () {
    return {
      title: "Болт или гайка?"
    }
  },
  computed: {
    ...mapGetters({
        getImageUrl: "cards/getImageUrl"
    })
  },
  methods: {
    close() {
      // GAVNO CLASS ID = 0
      this.title = "Дичь!"
    }
  },
  components: {
    SliderControl
  }
}
</script>

<style lang="stylus">
.select-bolt
  width 100vw
  height 100vh
  overflow hidden
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  .cards 
    position relative
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    width: 80%;
    max-width 500px;
    img 
      width: 100%;
      border-radius: 15px;
    i 
      position absolute
      top 0
      right 0
      color #E4746F
      &:active
        transform scale(0.9)



</style>
