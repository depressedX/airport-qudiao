<template>
    <div class="direction-img" :style="{
        margin:'auto',
        width: '839px',
        height: '514px',
        'background-image':`url(${baseImg})`}">
        <img :src="southECount<=10?GE:(ECount<=15?YE:RE)" class="direction-E"/>
        <img :src="southWCount<=10?GW:(WCount<=15?YW:RW)" class="direction-W"/>
        <img :src="southSCount<=10?GS:(SCount<=15?YS:RS)" class="direction-S"/>
        <img :src="southNCount<=10?GN:(NCount<=15?YN:RN)" class="direction-N"/>
    </div>
</template>

<script>
    import baseImg from '../assets/base.png'
    import GE from '../assets/GE.png'
    import GN from '../assets/GN.png'
    import GS from '../assets/GS.png'
    import GW from '../assets/GW.png'
    import RE from '../assets/RE.png'
    import RN from '../assets/RN.png'
    import RS from '../assets/RS.png'
    import RW from '../assets/RW.png'
    import YE from '../assets/YE.png'
    import YN from '../assets/YN.png'
    import YS from '../assets/YS.png'
    import YW from '../assets/YW.png'

    import store from '../store/store'

    let state = store.state,
        getters = store.getters

    export default {
        name: "direction-img",
        data() {
            return {
                baseImg,
                GE, GN, GS, GW,
                RE, RN, RS, RW,
                YE, YN, YS, YW
            }
        },
        mounted() {
        },
        computed: {
            dataType:()=>state.dataState.dataType,
            NORTH:()=>state.dataState.NORTH,
            SOUTH:()=>state.dataState.SOUTH,
            BOTH:()=>state.dataState.BOTH,

            southECount: () => getters.southE.length,
            southNCount: () => getters.southN.length,
            southSCount: () => getters.southS.length,
            southWCount: () => getters.southW.length,

            northECount: () => getters.northE.length,
            northNCount: () => getters.northN.length,
            northSCount: () => getters.northS.length,
            northWCount: () => getters.northW.length,

            ECount(){
                if (this.dataType === this.NORTH) {
                    return this.northECount
                } else if(this.dataType === this.SOUTH){
                    return this.southECount
                }else {
                    return this.northECount + this.southECount
                }
            },
            NCount(){
                if (this.dataType === this.NORTH) {
                    return this.northNCount
                } else if(this.dataType === this.SOUTH){
                    return this.southNCount
                }else {
                    return this.northNCount + this.southNCount
                }
            },
            SCount(){
                if (this.dataType === this.NORTH) {
                    return this.northSCount
                } else if(this.dataType === this.SOUTH){
                    return this.southSCount
                }else {
                    return this.northSCount + this.southSCount
                }
            },
            WCount(){
                if (this.dataType === this.NORTH) {
                    return this.northWCount
                } else if(this.dataType === this.SOUTH){
                    return this.southWCount
                }else {
                    return this.northWCount + this.southWCount
                }
            },
        }
    }
</script>

<style scoped>
    .direction-img {
        position: relative;
    }

    .direction-N {
        position: absolute;
        top: 0;
        left: 44%;
    }

    .direction-S {
        position: absolute;
        bottom: 13%;
        left: 54.5%;
    }

    .direction-W {
        position: absolute;
        bottom: 48.5%;
        left: 21.5%;
    }

    .direction-E {
        position: absolute;
        top: 13%;
        left: 60%;
    }
</style>