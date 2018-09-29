<template>
    <div class="kjjl">
        <div class="title">
            积分明细
        </div>
        <div class="content">
            <div class="list" v-for="item in list">
                <div class="list-left">
                    <div class="list-left1"> {{item.jyTypeId|jyTypeId}}</div>
                    <div class="list-left2"> {{item.ifSuccess|ifSuccess}}</div>
                </div>
                <div class="list-right">
                    <div class="jf" v-if="item.jyTypeId == 1">{{item.money}}{{item.kindName}}</div>
                    <div class="jf" v-else style="color:#F84040;">-{{item.money}}{{item.kindName}}</div>
                    <div class="date">{{item.jyTime.substring(0,10)}}</div>

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
    name: "jfmx",
    data() {
        return {
            list: [
                {
                    name: "增值积分",
                    font: "农用质保代理",
                    date: "2018-06-16",
                    jf: "+200"
                },
                {
                    name: "增值积分",
                    font: "农用质保代理",
                    date: "2018-06-16",
                    jf: "-2000"
                },
                {
                    name: "增值积分",
                    font: "农用质保代理",
                    date: "2018-06-16",
                    jf: "+2000"
                },
                {
                    name: "增值积分",
                    font: "农用质保代理",
                    date: "2018-06-16",
                    jf: "-20"
                },
                {
                    name: "增值积分",
                    font: "农用质保代理",
                    date: "2018-06-16",
                    jf: "-100"
                }
            ]
        };
    },
    methods: {
        getsearch() {
            let mobile = JSON.parse(sessionStorage.getItem("mobile"));
            this.$ajax
                .post("all/dd", {
                    mobile: mobile,
                    jf: "text"
                })
                .then(data => {
                    this.list = data.data.obj;
                });
        }
    },
    mounted() {
        this.getsearch();
    },
    filters: {
        jyTypeId(s) {
            return s == 1
                ? "充值"
                : s == 2
                    ? "提现"
                    : s == 3
                        ? "众筹交易"
                        : s == 4
                            ? "购买交易"
                            : s == 5 ? "增值积分" : s == 6 ? "现金积分" : "";
        },
        ifSuccess(t) {
            return t == 1 ? "失败" : t == 2 ? "成功" : t == 3 ? "处理中" : "";
        }
    }
};
</script>

<style scoped>
.kjjl {
    font-family: PingFang-SC-Medium;
}
.title {
    text-align: center;
    background-color: white;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.36rem;
    font-weight: 500;
}
.content {
    margin-top: 0.1rem;
}
.list {
    overflow: hidden;
    background-color: white;
    height: 1.3rem;
    border-bottom: 2px solid #e6e6e6;

    line-height: 0.4rem;
    margin-top: 0.2rem;
}
.list-left {
    margin-top: 0.1rem;
    float: left;
    margin-left: 0.24rem;
}
.list-left1 {
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
}
.list-left2 {
    margin-top: 0.1rem;
    font-size: 0.22rem;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
}
.list-right {
    text-align: right;
    float: right;
    margin-top: 0.1rem;
    margin-right: 0.24rem;
}
.jf {
    font-size: 0.3rem;
    font-weight: bold;
    color: rgba(23, 172, 228, 1);
}
.date {
    margin-top: 0.1rem;
    font-size: 0.22rem;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
}

.msg-move {
    text-align: center;
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
    font-size: 0.24rem;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
}
</style>