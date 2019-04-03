<template lang="pug">

    .slider-controls
        swiper(:options='swiperOption')
            swiper-slide(
                v-for="(item, index) in getControls", 
                :key="'key-slider-' + index")
                .circle(@click="selectObject(item.id)")
                    h4 {{item.name}}
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    },
    computed: {
        ...mapGetters({
            getControls: "cards/getControls",
        })
    },
    methods: {
        ...mapActions({
            setControls: "cards/setControls",
            selectObject: "cards/selectObject"
        })
    },
    mounted () {
        this.setControls();
    }
}
</script>

<style lang="stylus">
.controls 
    width 100%
    height 20vh
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    margin-bottom 70px
   
.slider-controls
    height 20vh
    width 80vw
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
    .swiper-container 
        height 100%
        width 80vw
        .swiper-slide 
            display flex
            flex-direction row
            justify-content center
            align-items center
            .circle 
                width 100px;
                height 100px
                border-radius 50%;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                display flex
                flex-direction row
                justify-content center
                align-items center
                &:active 
                    transform scale(0.9)
                img  
                    width 50px

</style>
