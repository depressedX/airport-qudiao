<template>
        <el-table
                :data="southData"
                :row-class-name="tableRowClassName"
                class="customSouthTable"
                :default-sort = "{prop: 'minutes', order: 'ascending'}"
                header-cell-class-name="custom-header-cell"
                cell-class-name="custom-cell">
            <el-table-column
                    prop="arcid"
                    label="航班号"
                    min-width="80"
                    class-name="custom-column-arcid"
                    align="center"
                    sortable/>
            <el-table-column
                    prop="adep"
                    min-width="50"
                    align="center"
                    sortable>
                <template slot="header" slot-scope="scope">
                    起飞<br/>机场
                </template>
            </el-table-column>
            <el-table-column
                    prop="ades"
                    width="50"
                    align="center"
                    sortable>
                <template slot="header" slot-scope="scope">
                    目的<br/>机场
                </template>
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态"
                    class-name="custom-column-status"
                    align="center"
                    min-width="40"
                    sortable/>
            <el-table-column
                    prop="eobt"
                    label="预起时间"
                    class-name="custom-column-eobt"
                    min-width="40"
                    align="center"
                    sortable>
                <template slot-scope="scope">
                    {{scope.row.eobt?scope.row.eobt:'' | time}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="atd"
                    label="实际起飞时间"
                    min-width="40"
                    align="center"
                    sortable>
                <template slot-scope="scope">
                    {{scope.row.atd?scope.row.atd:'' | time}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="pass1"
                    label="进入时间"
                    min-width="40"
                    align="center"
                    sortable>
                <template slot-scope="scope">
                    {{scope.row.pass1?scope.row.pass1:'' | time}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="pass2"
                    label="离开时间"
                    min-width="40"
                    align="center"
                    sortable>
                <template slot-scope="scope">
                    {{scope.row.pass2?scope.row.pass2:'' | time}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="minutes"
                    label="剩余时间"
                    min-width="30"
                    align="center"
                    sortable/>
        </el-table>
</template>

<script>
    // 830 500
    import store from '../store/store'
    import {Formatter} from '../util'

    let state = store.state,
        getters = store.getters

    export default {
        name: "south-table-simple",

        methods: {
            tableRowClassName(v) {
                if (v.row.minutes <= 10) return 'row-danger'
                else return 'row-normal'
            },
            formatTime: Formatter.formatTime
        },
        computed: {
            southData: () => getters.southData
        },
        filters: {
            time: value => (typeof value === 'number' || value instanceof Number) ? Formatter.formatTime(value) : value,
            date: value => (typeof value === 'number' || value instanceof Number) ? Formatter.formatDate(value) : value,
        }
    }
</script>
<style>
    .customSouthTable{
        font-size: 15px;
        color: #3d3d3d;
    }
    .customSouthTable thead{
        color: #3d3d3d;
    }
    .customSouthTable .row-danger {
        background-color: rgb(242, 222, 222);
    }

    .customSouthTable .row-normal {
        background-color: rgb(223, 240, 216);
    }
    .customSouthTable .custom-header-cell{
        background-color: #99bfe6 !important;
    }

    .customSouthTable .custom-cell{
        padding-top: 4px;
        padding-bottom: 4px;
    }
    .customSouthTable .custom-cell .cell {
        padding-left: 0px;
        padding-right: 0px;
    }
    
    /*需要加粗的列*/
    .customSouthTable .custom-column-arcid,.customSouthTable .custom-column-status,
    .customSouthTable .custom-column-eobt{
        font-weight: bold;
    }
    
    .customSouthTable .descending .sort-caret.descending {
        border-top-color: #3d3d3d;
    }
    .customSouthTable .ascending .sort-caret.ascending {
        border-bottom-color: #3d3d3d;
    }
</style>