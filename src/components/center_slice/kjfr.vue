<template>
    <div class="kjfr">
        <div class="title">
            <img class="back" src="../../../images/logo.png" alt="">
            矿机分润
        </div>
        <div class="content">
            <div class="list" v-for="item in list">
                <div class="list-left">
                    <div class="list-left1"> {{item.name}}</div>
                    <div class="list-left2"> {{item.font}}</div>
                </div>
                <div class="list-right">
                    <div class="jf">{{item.jf}}</div>
                    <div class="date">{{item.date}}</div>
                </div>
            </div>
        </div>
        <div class="msg-move">
            数据好像没有了
        </div>
    </div>
</template>

<script>
    export default {
        name: "kjfr",
        data() {
            return {
                list:[
                    {name:"星际纵横矿机",font:"众筹分润",date:"2018-06-16",jf:"+200vp"},
                    {name:"星际纵横矿机",font:"众筹分润",date:"2018-06-16",jf:"-2000"},
                    {name:"星际纵横矿机",font:"众筹分润",date:"2018-06-16",jf:"+2000增值积分"},
                    {name:"星际纵横矿机",font:"众筹分润",date:"2018-06-16",jf:"-20"},
                    {name:"星际纵横矿机",font:"众筹分润",date:"2018-06-16",jf:"-100"},
                    {name:"星际纵横矿机",font:"众筹分润",date:"2018-06-16",jf:"-100"},
                ]
            }
        }
    }
</script>

<style scoped>
    .kjfr{
        font-family:PingFang-SC-Medium;
    }
    .back {
        position: absolute;
        width: 0.4rem;
        top: 0.2rem;
        left: 0.3rem;
    }
    .title{
        text-align: center;
        background-color: white;
        height: 0.88rem;
        line-height: 0.88rem;
        font-size:0.36rem;
        font-weight:500;
    }
    .content{
        margin-top: 0.1rem;
    }
    .list{
        overflow: hidden;
        background-color: white;
        /*height: 1.3rem;*/
        border-bottom:2px solid #E6E6E6;
    }
    .list-left{
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        float: left;
        margin-left: 0.24rem;
    }
    .list-left1{
        font-size:0.3rem;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .list-left2{
        margin-top: 0.1rem;
        font-size:0.22rem;
        font-weight:500;
        color:rgba(153,153,153,1);
    }
    .list-right{
        text-align: right;
        float: right;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        margin-right: 0.24rem;

    }
    .jf{
        font-size:0.3rem;
        font-weight:bold;
        color:rgba(23,172,228,1);
    }
    .date{
        margin-top: 0.1rem;
        font-size:0.22rem;
        font-weight:500;
        color:rgba(153,153,153,1);
    }

    .msg-move{
        text-align: center;
        margin-top: 0.8rem;
        margin-bottom: 0.4rem;
        font-size:0.24rem;
        font-weight:500;
        color:rgba(153,153,153,1);
    }
</style>