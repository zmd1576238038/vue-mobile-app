
<template>
    <div class="slice">
        <img class="slice-banner" src="../../../images/slices/46@2x.png" alt="">
        <div class="content">
            <div class="xttz">
                <i class="laba"></i>
                系统通知：近期的会员发股权基金和数字资产整天将暂时无法运用请谅解
            </div>
            <div class="content-main">
                <div class="list">
                    <div>
                        <span class="about"></span>
                        关于我们</div>
                    <div>
                        <span class="cz"></span>
                        我要充值</div>
                    <div>
                        <span class="tx"></span>
                        我要提现</div>
                    <div>
                        <span class="qywh"></span>
                        企业文化</div>
                </div>
                <div class="dl" @click="toLogin">立刻登录吧！</div>
            </div>

            <div class="content-new">
                <div class="new-box">
                    <div class="new-title">
                        <div class="new-before">新闻动态</div>
                    </div>
                    <div class="new-list">
                        <img src="../../../images/img4.png" alt="">
                        <div class="new-right-con">
                            民航局：明年1月1日，无人机飞行数据需要接入云系统

                            <div class="new-right-con2">
                                <div class="hy-color">行业动态</div>
                                <div class="float-right">2017-06-04</div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div class="new-list">
                        <img src="../../../images/img5.png" alt="">
                        <div class="new-right-con">
                            民航局：明年1月1日，无人机飞行数据需要接入云系统

                            <div class="new-right-con2">
                                <div class="hy-color">前言科技</div>
                                <div class="float-right">2017-06-04</div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-amont">
                <div class="new-box">
                    <div class="new-title">
                        <div class="new-before">平台公告</div>
                    </div>
                    <div class="new-list">
                        <img src="../../../images/img0.png" alt="">
                        <div class="new-right-con">
                            民航局：明年1月1日，无人机飞行数据需要接入云系统

                            <div class="new-right-con2">
                                <div class="hy-color">行业动态</div>
                                <div class="float-right">2017-06-04</div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div class="new-list">
                        <img src="../../../images/img1.png" alt="">
                        <div class="new-right-con">
                            民航局：明年1月1日，无人机飞行数据需要接入云系统

                            <div class="new-right-con2">
                                <div class="hy-color">前言科技</div>
                                <div class="float-right">2017-06-04</div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>

        </div>
    </div>
</template>

<script>
export default {
    // name: "slice"
    data() {
        return {};
    },
    methods: {
        // 跳转登录界面
        toLogin() {
            this.$router.push({
                path: "./login"
            });
        }
    }
};
</script>

<style scoped>
.slice {
    background: #f0f0f0;
}
.slice-banner {
    width: 7.5rem;
}
.xttz {
    width: 7.5rem;
    margin-top: 12px;
    padding: 0 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.28rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #fff;
}
.laba {
    display: inline-block;
    width: 0.31rem;
    height: 0.29rem;
    background-image: url(../../../images/slices/laba@2x.png);
    background-size: 100% 100%;
    /*background-position: center;*/
}
.content-main {
    margin-top: 0.18rem;
    width: 7.49rem;
    height: 3.8rem;
    background: #fff;
}
.list {
    display: flex;
    width: 100%;
    font-size: 0.28rem;
    padding-top: 0.32rem;
}
.list > div {
    width: 25%;
    text-align: center;
}
.list > div > span {
    margin: 0 auto;
    display: block;
    width: 1.26rem;
    height: 1.26rem;
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
.content-new {
    width: 7.49rem;
    height: 5.1rem;
    background: #fff;
    margin-top: 0.16rem;
    margin-bottom: 0.2rem;
}
.about {
    background-image: url(../../../images/slices/gywm@2x.png);
    background-size: 100% 100%;
}
.cz {
    background-image: url(../../../images/slices/wycz@2x.png);
    background-size: 100% 100%;
}
.tx {
    background-image: url(../../../images/slices/wytx@2x.png);
    background-size: 100% 100%;
}
.qywh {
    background-image: url(../../../images/slices/qywh@2x.png);
    background-size: 100% 100%;
}

.new-box {
    width: 7.02rem;
    margin: 0 auto;
}
.new-title {
    padding: 0.32rem 0.06rem;
    border-bottom: 1px solid #e6e6e6;
    font-size: 0.3rem;
    font-weight: bold;
}

.new-list {
    display: flex;
    margin-top: 0.32rem;
}
.new-list img {
    width: 1.3rem;
    height: 1.3rem;
}
.new-list .new-right-con {
    font-size: 0.3rem;
    padding-left: 0.41rem;
    line-height: 0.42rem;
}

.new-list .new-right-con2 {
    margin-top: 0.2rem;
    font-size: 0.24rem;
}

.new-list .new-right-con2 .hy-color {
    color: #2db9f7;
    float: left;
}
.new-list .new-right-con2 .float-right {
    float: right;

    color: #ccc;
}
.new-list .new-right-con2 .clear {
    clear: both;
}

.content-amont {
    width: 7.49rem;
    height: 5.1rem;
    margin-bottom: 0.18rem;
    background: #fff;
}
</style>