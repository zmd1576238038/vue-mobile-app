<template>
    <div class="my-center">
        <div class="title">
            我的会员
        </div>
        <div class="banner">
            <div class="radius">规则</div>
            <img class="bgImg" src="../../../images/my_center/HYM1@2x.png" alt="">
            <img class="handerImg" src="../../../images/my_center/tx@2x.png" alt="">
            <p class="ye">余额资产</p>
            <p class="zc"><label class="money">99,999</label> 元</p>
            <p class="font">当前达成众筹会员目标</p>
        </div>
        <img class="content_banner" src="../../../images/my_center/HYBANNER@2x.png" alt="">
        <div class="main">
            <div class="left">
                <img class="left_logo" src="../../../images/my_center/QYDL@2x.png" alt="">
                <div>
                    <p>区域代理</p>
                    <p>当前提成36%</p>
                </div>
            </div>
            <div class="right">
                <img class="right_logo" src="../../../images/my_center/HYFR@2x.png" alt="">
                <div>
                    <p>会员分润</p>
                    <p>分润详情</p>
                </div>
            </div>
        </div>
        <div>
            更多特权请敬请期待
        </div>
    </div>
</template>

<script>
    export default {
        name: "my_center"
    }
</script>

<style scoped>
    .my-center{
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
    .banner{
        width: 100%;
        position: relative;
    }
    .bgImg{
        width: 100%;
    }
    .handerImg{
        position: absolute;
        left:50%;
        width: 0.7rem;
        margin-left: -0.35rem;
        top:0.29rem
    }
    .radius{
        position: absolute;
        font-size: 0.24rem;
        color:#FCB085;
        top:0.89rem;
        right: 0;
        width: 1.03rem;
        height:0.44rem;
        line-height: 0.44rem;
        text-align: center;
        background-size: 100% 100%;
        background-image: url("../../../images/my_center/GZ@2x.png");
    }
    .ye{
        position: absolute;
        top: 1.26rem;
        text-align: center;
        font-size: 0.3rem;
        color: #999;
        width: 100%;
    }
    .zc{
        position: absolute;
        width: 100%;
        top: 1.72rem;
        text-align: center;
        font-size: 0.3rem;
        color: #999;

    }
    .font{
        position: absolute;
        width: 100%;
        top: 2.35rem;
        text-align: center;
        font-size: 0.3rem;
        color: #999;
    }
    .money{
        color: #FCB085;
    }




    .content_banner{
        display: block;
        margin: 0 auto;
        width: 95%;
        margin-top: 0.2rem;
    }
    .main{
        background-color: white;
        margin-top: 0.2rem;
        display: flex;
        height:1.74rem;
    }
    .main p {
        margin: 0;
        padding: 0;
    }

    .left,.right{
        margin-top: 0.39rem;
        width: 50%;
        margin-left: 0.2rem;
        height:0.85rem;
        overflow: hidden;
    }
    .right{
        border-left: 1px solid rgba(230,230,230,1);
    }
    .left_logo,.right_logo{
        float: left;
        height: 0.94rem;
        width: 1.12rem;
    }
</style>