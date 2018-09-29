<template>
    <div class="kjjl">
        <div class="title">
            矿机记录
        </div>
        <div class="list" v-for="item in list">
            <div class="list-header">
                {{item.name}}
            </div>
           <div class="list-middle">
               <span class="date">{{item.date}}</span>
               <span class="time">{{item.time}}</span>
           </div>
            <div class="list-footer">
                购买金额（CP货币）
                <span class="fr">{{item.money}}</span>
            </div>
        </div>
        <div class="msg-move">
            数据好像没有了
        </div>
    </div>
</template>

<script>
    export default {
        name: "kjjl",
        data() {
            return {
                list:[
                    {name:"星际纵横矿机[众筹]",date:"2018-06-16",time:"14:11:32",money:"20000"},
                    {name:"星际纵横矿机[众筹]",date:"2018-06-16",time:"14:11:32",money:"20000"},
                    {name:"星际纵横矿机[众筹]",date:"2018-06-16",time:"14:11:32",money:"20000"},
                    {name:"星际纵横矿机[众筹]",date:"2018-06-16",time:"14:11:32",money:"20000"},
                    {name:"星际纵横矿机[众筹]",date:"2018-06-16",time:"14:11:32",money:"20000"},
                    ]
            }
        }
    }
</script>

<style scoped>
    .kjjl{
        font-family:PingFang-SC-Medium;
    }
    .title{
        text-align: center;
        background-color: white;
        height: 0.88rem;
        line-height: 0.88rem;
        font-size:0.36rem;
        font-weight:500;
    }
    .list{
        overflow: hidden;
        background-color: white;
        height: 1.76rem;
        margin-top: 0.2rem;
    }
    .list>div{
        margin-left: 0.24rem;
        margin-right: 0.24rem;
    }
    .list-header{
        margin-top: 0.2rem;
        font-size:0.3rem;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .list-middle{
        font-size:0.24rem;
        font-weight:500;
        color:rgba(153,153,153,1);
    }
    .list-footer{
        margin-top:0.1rem;
        line-height: 0.6rem;
        color:#999999;
        border-top:1px solid #999999 ;
    }
    .fr{
        float: right;
        margin-right: 0.3rem;
        font-size: 0.3rem;
        color:#48C0F4
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