<template>
    <div class="my_money">
        <div class="title">
            我的资金
        </div>
        <div class="banner">
            <div class="prize">20000.00</div>
            <div class="myrizeFont">我的余额（元）</div>

            <div class="banner-footer">
                <div class="list1">
                    <div>500</div>
                    <div>现金</div>
                </div>
                <div class="list2">
                    <div>1000</div>
                    <div>积分</div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="list" v-for="item in list">
                <!--<img src="" alt="">-->
                <div class="fl">{{item.name}}</div>
                <div class="fr">{{item.prize}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my_money",
        data() {
            return {
                list:[
                    {name:"CP货币",prize:8666.05},
                    {name:"ALCA货币",prize:466.05},
                    {name:"TPS5货币",prize:466.05},
                    {name:"DFF货币",prize:466.05},
                    {name:"CP货币",prize:466.05},
                    {name:"CP货币",prize:466.05},
                ]
            }
        }

    }
</script>

<style scoped>
    .my_money{
        color:rgba(51,51,51,1);
    }
    .title{
        text-align: center;
        background-color: white;
        height: 0.88rem;
        line-height: 0.88rem;
        font-size:0.36rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
    }
    .banner{
        overflow: hidden;
        width:7.5rem;
        height:3.42rem;
        background:linear-gradient(90deg,rgba(45,170,247,1),rgba(45,196,247,1));

    }
    .prize{
        margin-top:0.3rem ;
        margin-left: 0.35rem;
        font-size:0.6rem;
        font-weight:bold;
        color:rgba(255,255,255,1);
    }
    .myrizeFont{
        margin-top: 0.21rem;
        margin-left: 0.35rem;
        color:rgba(255,255,255,1);
    }
    .banner-footer{
        overflow: hidden;
        height: 1rem;
        margin-top: 0.9rem;
    }
    .list1,.list2{
        float: left;
        color:#fff;
        width:50%;
        height: 1rem;
        padding-left: 0.35rem;

    }
    .list2{
        border-left: 2px solid  rgb(240,240,240);

    }
    .main{
        margin-top: 0.2rem;
        background-color: white;
    }
    .list1>div,.list2>div{
        height: 0.5rem;
        line-height: 0.5rem;
    }
    .list{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        border-top:2px solid rgb(240,240,240)
    }
    .fl{
        float: left;
        margin-left: 0.35rem;
    }
    .fr{
        float: right;
        margin-right: 0.2rem;
    }

</style>