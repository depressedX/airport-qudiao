<template>
    <div class="prediction">
        <div class="row row-1">
            <control-button-panel/>
            <direction-pie class="direction-pie"/>
        </div>
        <h3 style="color: #d95459;font-size: 1.5em;margin:30px 0 0.7em 0;text-align: left;font-weight: 500;"
            class="row row-2">{{dataType===NORTH?'北扇表':(dataType===SOUTH?'南扇表':'北扇南扇表')}}(总数:{{dataNum}}个)</h3>
        <div class="row row-3">
            <line-port-counting-chart type="line"/>
        </div>
        <div class="row row-4">
            <line-port-counting-chart type="bar"/>
        </div>
        <div class="row row-5">
            <direction-img/>
        </div>
        <!--只在BOTH的时候显示控制按钮-->
        <div class="row row-6" v-if="showSimpleTables">
            <el-button size="medium" @click="changeShowWhichTable(NORTH)">北扇表</el-button>
            <el-button size="medium" @click="changeShowWhichTable(SOUTH)">南扇表</el-button>
            <el-button size="medium" @click="changeShowWhichTable(BOTH)">南扇北扇表</el-button>
        </div>
        <div class="row simple-table-container" v-if="showSimpleTables">
            <enter-port-table-simple
                    class="simple-enter-table"
                    :style="{visibility:(showSimpleEnterTable?'visible':'hidden')}"/>
            <leave-port-table-simple
                    class="simple-leave-table"
                    :style="{visibility:showSimpleLeaveTable?'visible':'hidden'}"/>
        </div>
        <div class="row table-container" v-else>
            <enter-port-table class="enter-table" v-if="showEnterTable"/>
            <leave-port-table class="leave-table" v-else/>
        </div>
    </div>
</template>

<script>
    import ControlButtonPanel from '../components/ControlButtonPanel'
    import DirectionPie from '../components/DirectionPie'
    import LinePortCountingChart from '../components/PortCountingChart'
    import DirectionImg from '../components/DirectionImg'
    import EnterPortTable from '../components/NorthTable'
    import LeavePortTable from '../components/SouthTable'
    import {PermissionDenied} from "../errors";

    import store from '../store/store'
    import EnterPortTableSimple from "../components/NorthTableSimple";
    import LeavePortTableSimple from "../components/SouthTableSimple";

    let state = store.state,
        getters = store.getters

    export default {
        name: "predictions",
        created() {
            store.dispatch('refreshAllData').catch(error => {
                if (error instanceof PermissionDenied) {
                    this.$router.push('/permissionDenied')
                } else {
                    this.$alert(error.message)
                }
            })
        },
        components: {
            LeavePortTableSimple,
            EnterPortTableSimple,
            ControlButtonPanel,
            DirectionPie,
            LinePortCountingChart,
            DirectionImg,
            EnterPortTable,
            LeavePortTable
        },

        data() {
            return {

                // 设置三个按钮独立控制表格的显示
                showWhichTable: state.dataState.BOTH
            }
        },

        computed: {

            dataType: () => state.dataState.dataType,

            NORTH: () => state.dataState.NORTH,
            SOUTH: () => state.dataState.SOUTH,
            BOTH: () => state.dataState.BOTH,

            dataNum() {
                if (this.dataType === this.NORTH) {
                    return getters.northData.length
                } else if (this.dataType === this.SOUTH) {
                    return getters.southData.length
                } else {
                    return getters.northData.length + getters.southData.length
                }
            },

            showSimpleTables(){
                return this.dataType === this.BOTH
            },

            showSimpleEnterTable() {
                return this.showSimpleTables && (this.showWhichTable === this.NORTH || this.showWhichTable === this.BOTH)
            },
            showSimpleLeaveTable() {
                return this.showSimpleTables && (this.showWhichTable === this.SOUTH || this.showWhichTable === this.BOTH)
            },
            showEnterTable(){
                return !this.showSimpleTables && this.dataType === this.NORTH
            },
            showLeaveTable(){
                return !this.showSimpleTables && this.dataType === this.SOUTH
            },

        },
        methods: {
            changeShowWhichTable(type) {
                this.showWhichTable = type
            }
        }
    }
</script>
<style scoped>

    .prediction {
        position: relative;
    }

    .prediction .direction-pie {
        width: 45%;
        height: 250px;
        position: absolute;
        top: 5px;
        right: 10px;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        background-color: transparent;
    }

    .prediction .simple-table-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
    }

    .prediction .simple-table-container .simple-enter-table, .prediction .simple-table-container .simple-leave-table {
        flex: none;
        width: calc(50% - 10px);
        min-width: 538px;
    }

    .prediction .row-6 {
        margin-top: 20px;
    }

    .prediction .enter-table, .prediction .leave-table {
        width: 100%;
    }


</style>
<style>
    .prediction .el-button {
        background-color: rgb(239, 113, 122);
        border-color: rgb(239, 113, 122);
        color: white;
    }

    .prediction .el-button:hover {
        background-color: #c9302c;
        border-color: #ac2925;
        color: white;
    }
</style>