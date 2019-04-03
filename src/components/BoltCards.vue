<template lang="pug">
  .select-bolt
    // h1  {{title}}
    .cards(v-if="getImageUrl")
      i(@click="close", class="far fa-times-circle fa-5x")
      img(:src='getImageUrl')
    .cards-default(v-else)
      i(class="far fa-surprise fa-9x")
      .cards-title Пустo
      .btn-primary Загрузить еще
    SliderControl    
    
</template>

<script>
import SliderControl from './SliderControl';
import { mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters({
        getImageUrl: "cards/getImageUrl",
        getId: "cards/getId",
    })
  },
  methods: {
    ...mapActions({
      fetchObjectList: "cards/fetchObjectList",
      selectTrash: "cards/selectTrash",
    }),
    close() {
      this.selectTrash()
    }
  },
  created () {
    this.fetchObjectList()
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
  .cards-default
    display flex
    flex-direction column
    justify-content center
    align-items center
    .cards-title 
      font-size 40px
      font-weight bold
</style>
