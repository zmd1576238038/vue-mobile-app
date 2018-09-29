<template>

    <div class="center_slice">
        <div class="main">
            <div class="ml">
                <div class="m1-1">
                    <div class="txbk fl">
                        <img class="tx" src="../../../images/center_slices/tx@2x.png" alt="">
                    </div>
                    <div class="m1-1-middle fl">
                        <h5 style="color: #fff;font-size: 0.24rem">这是一个矿机</h5>
                        <p style="color: #fff;font-size: 0.18rem">普通会员</p>
                    </div>
                    <img class="message-img fr" src="../../../images/center_slices/xx@2x.png" alt="">
                </div>

                <div class="m1-2">
                    <div class="fl" style="width: 50%;text-align: center">
                        <div class="money">500.00</div>
                        <div>现金积分</div>
                    </div>
                    <div class="fl" style="text-align:center;width:50%;border-left:2px solid rgb(240,239,237)">
                        <div class="money">500.00</div>
                        <div>增值积分</div>
                    </div>
                </div>
                <div class="m1-3">
                    <div class="fl">资金余额（元）
                        <span class="prize">20000.00</span>
                    </div>
                    <div class="fr click">
                        <div class="fl" style="">提现</div>
                        <div class="fl" style="border-left:2px solid rgb(240,239,237)">充值</div>
                    </div>
                </div>
            </div>
            <div class="center-content">
                <div class="content1">
                    <p class="contentTilte">
                        资产管理
                    </p>
                    <div class="center-list1">
                        <div class="list-menu">
                            <div class="menu-content" @click="jfmx">
                                <div class="fl left">
                                    <img src="../../../images/center_slices/cwjl@2x.png" alt="">
                                </div>
                                <div class="fl right">
                                    <h4>财务记录</h4>
                                    <p class="tell">我的积分明细</p>
                                </div>
                            </div>
                        </div>

                        <div class="list-menu">
                            <div class="menu-content" @click="jymx">
                                <div class="fl left">
                                    <img src="../../../images/center_slices/jymx@2x.png" alt="">
                                </div>
                                <div class="fl right">
                                    <h4>交易明细</h4>
                                    <p class="tell">收入明细，支出明细</p>
                                </div>
                            </div>
                        </div>
                        <div class="list-menu">
                            <div class="menu-content" @click="kjjl">
                                <div class="fl left">
                                    <img src="../../../images/center_slices/kjjl@2x.png" alt="">
                                </div>
                                <div class="fl right">
                                    <h4>矿机记录</h4>
                                    <p class="tell">众筹购买记录</p>
                                </div>
                            </div>
                        </div>

                        <div class="list-menu">
                            <div class="menu-content">
                                <div class="fl left">
                                    <img src="../../../images/center_slices/kjjl@2x.png" alt="">
                                </div>
                                <div class="fl right">
                                    <h4>代理分红</h4>
                                    <p class="tell">分红返佣记录</p>
                                </div>
                            </div>
                        </div>

                        <div class="list-menu" @click="myMoeny">
                            <div class="menu-content">
                                <div class="fl left">
                                    <img src="../../../images/center_slices/wdzc@2x.png" alt="">
                                </div>
                                <div class="fl right">
                                    <h4>我的资产</h4>
                                    <p class="tell">所有资产详情</p>
                                </div>
                            </div>
                        </div>

                        <div class="list-menu">
                            <div class="menu-content" @click="kjfr">
                                <div class="fl left">
                                    <img src="../../../images/center_slices/kjfr@2x.png" alt="">
                                </div>
                                <div class="fl right">
                                    <h4>矿机分润</h4>
                                    <p class="tell">分润分红记录</p>
                                </div>
                            </div>
                        </div>

                        <div class="list-menu">
                            <div class="menu-content">
                                <div class="fl left">
                                    <img src="../../../images/center_slices/gxtj@2x.png" alt="">
                                </div>
                                <div class="fl right">
                                    <h4>共享推荐</h4>
                                    <p class="tell">推荐的会员认购记录</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="content1">
                    <p class="contentTilte2">
                        资产管理
                    </p>
                    <div class="center-list2">
                        <!-- <div class="list2-menu" v-for="item in list2" style="padding-top: 0.25rem"> -->
                        <div class="list2-menu" style="padding-top: 0.25rem">
                            <img class="fr" style="height: 0.24rem;margin-top: 0.1rem" src="../../../images/center_slices/xztb@2x.png" alt="">
                            <div>
                                <h4>股权基金</h4>
                                <p class="tell">股权基金明细</p>
                            </div>
                        </div>

                        <div class="list2-menu" style="padding-top: 0.25rem" @click="myVip">
                            <img class="fr" style="height: 0.24rem;margin-top: 0.1rem" src="../../../images/center_slices/xztb@2x.png" alt="">
                            <div>
                                <h4>我的会员</h4>
                                <p class="tell">会员等级详情</p>
                            </div>
                        </div>

                        <div class="list2-menu" style="padding-top: 0.25rem" @click="zccz">
                            <img class="fr" style="height: 0.24rem;margin-top: 0.1rem" src="../../../images/center_slices/xztb@2x.png" alt="">
                            <div>
                                <h4>充值资产</h4>
                                <p class="tell">可充值新的货币</p>
                            </div>
                        </div>
                        <div class="list2-menu" style="padding-top: 0.25rem">
                            <img class="fr" style="height: 0.24rem;margin-top: 0.1rem" src="../../../images/center_slices/xztb@2x.png" alt="">
                            <div>
                                <h4>资产转换</h4>
                                <p class="tell">可转换数字资产现金资产</p>
                            </div>
                        </div>
                        <div class="list2-menu" style="padding-top: 0.25rem">
                            <img class="fr" style="height: 0.24rem;margin-top: 0.1rem" src="../../../images/center_slices/xztb@2x.png" alt="">
                            <div>
                                <h4>转换记录</h4>
                                <p class="tell">积分转换记录</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content1">
                    <p class="contentTilte2">
                        系统设置
                    </p>
                    <div class="center-list3">
                        <div class="list-menu3">
                            <div class="menu-content3" @click="accountSet">
                                账户设置
                            </div>
                            <div class="menu-content3 right">
                                账户资金量
                            </div>
                        </div>
                        <div class="list-menu3">
                            <div class="menu-content3">
                                消息中心
                            </div>
                            <div class="menu-content3 right">
                                帮助与反馈
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "center_slice",
    data() {
        return {
            list1: [
                {
                    title: "财务记录",
                    tell: "我的积分明细",
                    msrc: "../../../images/center_slices/cwjl@2x.png"
                },
                {
                    title: "交易明细",
                    tell: "收入明细，支出明细",
                    msrc: "../../../images/center_slices/jymx@2x.png"
                },
                {
                    title: "矿机记录",
                    tell: "众筹购买记录",
                    msrc: "../../../images/center_slices/kjjl@2x.png"
                },
                {
                    title: "代理分红",
                    tell: "分红返佣记录",
                    msrc: "../../../images/center_slices/dlhb@2x.png"
                },
                {
                    title: "我的资产",
                    tell: "所有资产详情",
                    msrc: "../../../images/center_slices/wdzc@2x.png"
                },
                {
                    title: "矿机分润",
                    tell: "分润分红记录",
                    msrc: "../../../images/center_slices/kjfr@2x.png"
                },
                {
                    title: "共享推荐",
                    tell: "推荐的会员认购记录",
                    msrc: "../../../images/center_slices/gxtj@2x.png"
                }
            ],
            list2: [
                { title: "股权基金", tell: "股权基金明细" },
                { title: "我的会员", tell: "会员等级详情" },
                { title: "充值资产", tell: "可充值新的货币" },
                { title: "资产转换", tell: "可转换数字资产现金资产" },
                { title: "转换记录", tell: "积分转换记录" }
            ]
        };
    },
    methods: {
        myMoeny() {
            this.$router.push({
                path: "./myMoeny"
            });
        },
        // 积分明细
        jfmx() {
            this.$router.push({
                path: "./jfmx"
            });
        },
        // 我的会员
        myVip() {
            this.$router.push({
                path: "./myCenter"
            });
        },
        kjjl() {
            this.$router.push({
                path: "./kjjl"
            });
        },
        //交易明细
        jymx() {
            this.$router.push({
                path: "./jymx"
            });
        },
        // 矿机分润
        kjfr() {
            this.$router.push({
                path: "./kjfr"
            });
        },
        // 资产充值
        zccz() {
            this.$router.push({
                path: "./zccz"
            });
        },
        // 账户设置
        accountSet() {
            this.$router.push({
                path: "./accountSet"
            });
        },
        // 我的
        getSearch() {
            let mobile = JSON.parse(sessionStorage.getItem("mobile"));
            this.$ajax
                .post("user/info", {
                    mobile: mobile
                })
                .then(data => {
                    // debugger;
                });
        }
    },
    mounted() {
        this.getSearch();
    }
};
</script>

<style scoped>
.center_slice {
    background-color: rgb(240, 240, 240);
    /*margin-bottom: 12px;*/
}
.content1 {
    background-color: white;
}
.ml {
    position: relative;
    color: white;
    width: 7.5rem;
    height: 3.98rem;
    background-image: url("../../../images/center_slices/M1@2x.png");
    background-size: 100% 100%;
}
.m1-1 {
    padding-top: 0.2rem;
    height: 0.6rem;
    width: 6.9rem;
    margin-left: 0.3rem;
}
.txbk {
    height: 0.6rem;
    width: 0.6rem;
    margin-top: 0.1rem;
    background-image: url("../../../images/center_slices/txbk@2x.png");
    background-size: 100% 100%;
}
.tx {
    height: 0.6rem;
    width: 0.6rem;
}
.m1-1-middle {
    margin-left: 0.1rem;
}
.message-img {
    height: 0.39rem;
    width: 0.4rem;
}

.m1-2 {
    clear: both;
    height: 1.5rem;
    margin-top: 0.8rem;
}
.money {
    font-size: 0.48rem;
    color: #fff;
}
.money + div {
    margin-top: 0.34rem;
    font-size: 0.24rem;
}

.m1-3 {
    padding: 0 0.24rem;
    font-size: 0.24rem;
    height: 0.94rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-image: url("../../../images/center_slices/M2@2x.png");
}
.prize {
    font-size: 0.3rem;
}
.m1-3 > div {
    height: 0.5rem;
    margin-top: 0.4rem;
}
.click {
    width: 1.5rem;
}
.click > div {
    width: 50%;
    text-align: center;
}

.center-content {
    margin-top: 0.18rem;
    width: 7.5rem;
}

.content1 {
    width: 7.5rem;
    padding: 0 0.23rem;
}

.contentTilte {
    height: 0.78rem;
    line-height: 0.78rem;
    font-size: 0.24rem;
    border-bottom: 2px solid rgba(240, 240, 240, 1);
    margin-bottom: 0;
}

.center-list1 {
    width: 7.02rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.list-menu {
    overflow: hidden;
    height: 1.18rem;

    border-bottom: 2px solid rgba(240, 240, 240, 1);
    flex: 1;
    width: 50%;
    min-width: 50%;
    max-width: 50%;
}

.center-list1 > div:nth-child(2n + 1) .menu-content {
    border-right: 2px solid rgba(240, 240, 240, 1);
}

.center-list1 > div:last-child {
    border: none;
}

.menu-content {
    margin: 0.25rem 0;
    height: 0.7rem;
    line-height: 0.5rem;
}

.contentTilte2 {
    margin-top: 10px;
    height: 0.78rem;
    line-height: 0.78rem;
    font-size: 0.24rem;
    margin-bottom: 0;
}

.fl {
    float: left;
}
.fr {
    float: right;
}

.left {
    height: 0.48rem;
    width: 0.48rem;
}

.left img {
    margin-left: 10px;
    margin-top: 0.12rem;
    height: 0.48rem;
    width: 0.48rem;
}

h4 {
    margin: 0;
    font-size: 0.3rem;

    color: #333;
    font-weight: 500;
}

.right {
    padding-left: 0.3rem;
}

.tell {
    font-size: 0.2rem;
    color: #666666;
}

.center-list3 {
    /* overflow: hidden; */
    padding-bottom: 1rem;
}

.list2-menu {
    height: 1.2rem;
    line-height: 0.5rem;
    border-top: 2px solid rgba(240, 240, 240, 1);
    width: 100%;
}

.list-menu3 {
    width: 100%;

    height: 0.9rem;
    border-top: 2px solid rgb(240, 240, 240);
    color: #333;
}

.menu-content3 {
    float: left;
    width: 50%;
    height: 0.5rem;
    line-height: 0.5rem;
    margin-top: 0.2rem;

    /* font-size: 0.24rem; */
}

.list-menu3 .right {
    border-left: 2px solid rgb(240, 240, 240);
}
</style>