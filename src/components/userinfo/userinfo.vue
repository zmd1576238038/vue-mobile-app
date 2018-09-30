<style>
</style>
<template>
    <div class="project-box">
        <ul class="project-title">
            <li @click="nyzbFn" class="active1" style="border-bottom:2px solid #fff;">众筹矿机</li>
            <li @click="mhgxFn" class="active2">纵横矿机</li>
        </ul>

        <div class="con-box1">
            <div class="header-img">
                <img src="../../../images/img8.png" alt="">
            </div>

            <div class="zhongchou-con" v-for="(item,index) in zhData2" @click="handleLook2(index)">
                <div class="zhongchou-title">
                    <div class="fl-float">矿机专享项目20170840</div>
                    <div class="fl-right">众筹矿机</div>
                    <div class="fl-clear"></div>
                </div>
                <div class="zhongchou-con2">
                    <div class="con1" style="">
                        <span class="con-title1">150%</span>
                        <br>
                        <span class="con-title2">预期年收益参考</span>
                    </div>

                    <div class="con2">
                        <span class="con-title3">150%</span>
                        <br>
                        <span class="con-title2">预期年收益参考</span>
                    </div>

                </div>
                <div class="bar-con">
                    <div class="bar"></div>
                </div>
                <div class="bottom-con">
                    <div class="fl-l">起投 {{item.money}}元</div>
                    <div class="fl-r">剩余
                        <span style="color:#333;">{{item.zcMoney}}</span>元</div>
                    <div class="fl-clear"></div>
                </div>
            </div>

            <!-- <div class="zhongchou-con">
                <div class="zhongchou-title">
                    <div class="fl-float">矿机专享项目20170840</div>
                    <div class="fl-right">众筹矿机</div>
                    <div class="fl-clear"></div>
                </div>
                <div class="zhongchou-con2">
                    <div class="con1" style="">
                        <span class="con-title1">150%</span>
                        <br>
                        <span class="con-title2">预期年收益参考</span>
                    </div>

                    <div class="con2">
                        <span class="con-title3">150%</span>
                        <br>
                        <span class="con-title2">预期年收益参考</span>
                    </div>

                </div>
                <div class="bar-con">
                    <div class="bar"></div>
                </div>
                <div class="bottom-con">
                    <div class="fl-l">起投 1000元</div>
                    <div class="fl-r">剩余
                        <span style="color:#333;">444,151</span>元</div>
                    <div class="fl-clear"></div>
                </div>
            </div> -->
        </div>
        <div class="con-box2" style="display:none;">
            <div class="header-img">
                <img src="../../../images/img6.png" alt="">
            </div>
            <!-- <div class="xj-con">
                <div class="header-img2">
                    <img src="../../../images/img6.png" alt="">
                </div>
                <div class="xj1">星际纵横矿机 规格（4T.72T) A0055</div>
                <div class="xj2">全球首款IPFS矿机收发功效低、性能高</div>
                <div style="margin-top:0.29rem;">
                    <div class="cp1">CP币 500000</div>
                    <div class="date">月销78050笔</div>
                    <div class="fl-clear"></div>
                </div>
            </div> -->
            <template solt-scope="scope" :data="zhData">
                <div class="xj-con" v-for="(item,index) in zhData " @click="handleLook(index)">
                    <div class="header-img2 ">
                        <img :src='item.mineImg' alt=" ">
                    </div>
                    <div class="xj1 ">{{item.mineKindName}} &nbsp;规格（{{item.mineType}}）</div>
                    <div class="xj2 ">全球首款IPFS矿机收发功效低、性能高</div>
                    <div style="margin-top:0.29rem; ">
                        <div class="cp1 ">CP币 {{item.mineMoney}}</div>
                        <div class="date ">月销78050笔</div>
                        <div class="fl-clear "></div>
                    </div>
                </div>
            </template>
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
        return {
            //纵横矿机
            zhData: "",
            zhData2: ""
        };
    },
    methods: {
        mhgxFn() {
            $(".con-box1").hide();
            $(".con-box2").show();

            $(".active2").css("borderBottom", "2px solid #fff");
            $(".active1").css("borderBottom", "");
            this.getSearch();
        },
        nyzbFn() {
            $(".con-box1").show();
            $(".con-box2").hide();
            $(".active1").css("borderBottom", "2px solid #fff");
            $(".active2").css("borderBottom", "");
            this.getSearch2();
        },
        getSearch() {
            this.$ajax.get("mine").then(data => {
                this.zhData = data.data.obj;
            });
        },
        getSearch2() {
            this.$ajax.get("zc-info").then(data => {
                this.zhData2 = data.data.obj;
            });
        },
        // 纵横矿机
        handleLook(index) {
            this.$router.push({
                path: "./shopping"
            });
        },
        // 众筹矿机
        handleLook2(index) {
            this.$router.push({
                path: "./xmDetial"
            });
        }
    },
    mounted() {
        this.getSearch2();
    }
};
</script>
<style>
.app {
    background: #f0f0f0;
}
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
    width: 7.28rem;
    height: 2.18rem;
    margin: 0.22rem auto 0.2rem;
}

.header-img img {
    width: 7.28rem;
    height: 2.18rem;
}

.xj-con {
    height: 4.58rem;
    background: #fff;
    width: 7.28rem;
    margin: 0 auto 0.2rem;
}

.header-img2 img {
    width: 7.28rem;
    height: 2.82rem;
}

.zhongchou-con {
    width: 7.27rem;
    margin: 0 auto 0.15rem;
    height: 3.42rem;
    background: #fff;
}
.zhongchou-title {
    border-bottom: 1px solid #e6e6e6;
    padding: 0.2rem;
}
.fl-float {
    float: left;
    font-size: 0.26rem;
    padding: 0.04rem 0.08rem;
}
.fl-right {
    float: right;
    font-size: 0.24rem;
    padding: 0.04rem 0.08rem;
    border: 2px solid #6fcefa;
    border-radius: 4px;
    color: #6fcefa;
}
.fl-clear {
    clear: both;
}

.zhongchou-con2 {
    height: 1.3rem;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    text-align: center;
    flex-direction: row;
    justify-content: space-around;
}
.con1 {
    margin-top: 0.24rem;
    line-height: 0.42rem;
}

.con2 {
    margin-top: 0.34rem;
    line-height: 0.38rem;
}
.con-title1 {
    font-size: 0.44rem;
    color: #ed4a3d;
}
.con-title2 {
    font-size: 0.26rem;
    color: #999;
}
.con-title3 {
    font-size: 0.26rem;
    color: #333;
}
/* .bar-con {
    margin: 0.45rem auto 0rem;
} */
.bar {
    margin: 0.45rem auto 0rem;
    width: 6.02rem;
    height: 0.06rem;
    background: #e6e6e6;
}
.bottom-con {
    margin-top: 0.33rem;
    font-size: 0.26rem;
    color: #999;
}

.fl-l {
    float: left;
    padding: 0 0.31rem;
}
.fl-r {
    float: right;
    padding: 0 0.31rem;
}

.xj1 {
    font-size: 0.3rem;
    font-weight: bold;
    color: #333;
    margin-top: 0.2rem;
    margin-left: 0.19rem;
}
.xj2 {
    font-size: 0.26rem;
    font-weight: bold;
    color: #666;
    margin-top: 0.15rem;
    margin-left: 0.19rem;
}

.cp1 {
    font-size: 0.3rem;
    float: left;
    color: #2daff7;
    margin-left: 0.19rem;
}

.date {
    font-size: 0.26rem;
    float: right;
    color: #999;
    margin-right: 0.19rem;
}
</style>
