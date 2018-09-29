<template>
    <div class="project-box">
        <ul class="project-title">
            <li @click="nyzbFn" class="native">众筹矿机</li>
            <li @click="mhgxFn">纵横矿机</li>
        </ul>

        <div class="con-box1">
            <div class="header-img">
                <img src="../../../images/img8.png" alt="">
            </div>
            <div class="nyzb">
                <div class="nyzb-title">
                    <span class="title1">农用植保</span>
                    <span class="title2">认购纵购</span>
                </div>
                <div class="nyzb-con">
                    <div class="nyzb-con-left left1">
                        <span class="percenter">150%</span>
                        <br>会员分红总回报率
                    </div>

                    <div class="nyzb-con-left left2">
                        <span class="font-weight">1000元开始认购</span> <br> 会员20天认购开始分红
                        <br>
                    </div>
                </div>
                <div class="dl">认购众筹</div>
            </div>
            <div class="nyzb">
                <div class="nyzb-title">
                    <span class="title1">农用植保</span>
                    <span class="title2">代理升级</span>
                </div>
                <div class="nyzb-con2">
                    业务经理开通三个业绩部门后，当小部门业绩达到15万时，有资格申请区域代理
                </div>
                <div class="dl">升级代理</div>
            </div>
        </div>
        <div class="con-box2" style="display:none;">
            <div class="header-img">
                <img src="../../../images/img6.png" alt="">
            </div>
            <div class="nyzb">
                <div class="nyzb-title">
                    <span class="title1">明航共享</span>
                    <span class="title2">民航共享众筹股东</span>
                </div>
                <div class="nyzb-con">
                    <div class="nyzb-con-left left1">
                        <span class="percenter">150%</span>
                        <br>销售业绩提成
                    </div>

                    <div class="nyzb-con-left left2">
                        <span class="percenter">30万</span> <br> 股东的股权基金比例
                        <br>
                    </div>
                </div>
                <div class="dl">认购众筹</div>
            </div>
            <div class="nyzb">
                <div class="nyzb-title">
                    <span class="title1">民航共享</span>
                    <span class="title2">民航共享会员</span>
                </div>
                <div class="nyzb-con2">
                    业务经理开通三个业绩部门后，当小部门业绩达到15万时，有资格申请区域代理
                </div>
                <div class="dl">共享会员</div>
            </div>
        </div>
    </div>
</template>

<script>
window.onload = function() {
    $(".project-title li").click(function() {
        $(this).removeClass("native");
        $(this)
            .addClass("native")
            .siblings()
            .removeClass("native");
    });
};
export default {
    data() {
        return {};
    },
    methods: {
        mhgxFn() {
            $(".con-box1").hide();
            $(".con-box2").show();
        },
        nyzbFn() {
            $(".con-box1").show();
            $(".con-box2").hide();
        }
    }
};
</script>
<style>
.project-box {
    background: #f0f0f0;
    padding: 0;
    margin: 0;
}
ul,
li {
    list-style: none;
    padding: 0;
    margin: 0;
}
.project-title {
    width: 7.5rem;
    height: 0.88rem;
    font-size: 0.3rem;
    background: #2dc1f7;
    display: flex;
    line-height: 0.88rem;
    color: #fff;
    margin: 0 auto;
    text-align: center;
}
.project-title li {
    margin: 0 auto;
}
.native {
    border-bottom: 2px solid #fff;
}

.header-img {
    /* margin-top: 0.2rem; */
    width: 7.28rem;
    height: 2.18rem;
    margin: 0.22rem auto 0.2rem;
}

.header-img img {
    width: 7.28rem;
    height: 2.18rem;
}
.nyzb {
    width: 7.49rem;
    /* height: 3.86rem; */
    background: #fff;
    padding-bottom: 0.2rem;
    margin-bottom: 0.2rem;
}
.nyzb-title {
    width: 7.02rem;
    margin: 0 auto;
    padding: 0.32rem 0.2rem;
    border-bottom: 1px solid #e6e6e6;
}
.nyzb-con {
    margin: 0.48rem auto;
    display: flex;
}
.nyzb-con2 {
    margin: 0.48rem auto;
    width: 6.11rem;
    font-weight: 500;
    line-height: 0.4rem;
    font-size: 0.24rem;
}
.nyzb-con .nyzb-con-left {
    margin: 0% auto;
    text-align: center;
    font-size: 0.24rem;
    line-height: 0.5rem;
}

.dl {
    width: 3.08rem;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    margin: 0.5rem auto 0.33rem;
    background: #64cbf7;
    color: #fff;
    border-radius: 0.66rem;
}
.title1 {
    font-size: 0.3rem;
    font-weight: bold;
}
.title2 {
    font-size: 0.24rem;
    color: #999;
}
.left1 {
    border-right: 1px solid #c6c6c6;
    padding-right: 1rem;
}
.left2 {
    margin-right: 1rem;
    line-height: 0.6rem;
}
.font-weight {
    font-weight: bold;
}
.percenter {
    color: #ff4f4f;
    font-size: 0.6rem;
}
</style>
