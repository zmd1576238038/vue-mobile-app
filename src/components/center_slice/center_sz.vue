<template>
    <div class="center_sz">
        <div class="title">
            <img class="back" src="../../../images/logo.png" alt=""> 设置
        </div>
        <form class="mui-input-group" style="margin-top: 10px">
            <div class="mui-input-row">
                <img class="fr" src="../../../images/center_slices/xztb@2x.png" alt="">
                <label>我的昵称</label>
                <input type="text" class="sendMsg mui-input-clear" placeholder="请输入我的昵称">
            </div>
            <div class="mui-input-row">
                <img class="fr" src="../../../images/center_slices/xztb@2x.png" alt="">
                <label>我的头像</label>
                <input type="text" class="sendMsg mui-input-clear" placeholder="请输入我的昵称">
            </div>
            <div class="mui-input-row" @click="smrz">
                <img class="fr" src="../../../images/center_slices/xztb@2x.png" alt="">
                <label>实名认证</label>
                <input type="text" class="sendMsg mui-input-clear" placeholder="去认证">
            </div>
            <div class="mui-input-row">
                <img class="fr" src="../../../images/center_slices/xztb@2x.png" alt="">
                <label>银行卡管理</label>
                <input type="text" class="sendMsg mui-input-clear" readonly>
            </div>
            <div class="mui-input-row">
                <img class="fr" src="../../../images/center_slices/xztb@2x.png" alt="">
                <label>手机绑定</label>
                <input type="number" class="sendMsg mui-input-clear">
            </div>
            <div class="mui-input-row">
                <img class="fr" src="../../../images/center_slices/xztb@2x.png" alt="">
                <label>手机绑定</label>
                <input type="number" class="sendMsg mui-input-clear">
            </div>
            <div class="mui-input-row">
                <img class="fr" src="../../../images/center_slices/xztb@2x.png" alt="">
                <label>邮箱绑定</label>
                <input type="number" class="sendMsg mui-input-clear">
            </div>
            <div class="mui-input-row" @click="moenyAddress">
                <img class="fr" src="../../../images/center_slices/xztb@2x.png" alt="">
                <label>绑定钱包地址</label>
                <input type="text" class="sendMsg mui-input-clear">
            </div>
        </form>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">密码管理</a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">清空缓存</a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">关于我们</a>
            </li>
        </ul>
        <div class="leave" @click="logout">
            退出登录
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        // 实名认zheng
        smrz() {
            this.$router.push({
                path: "./smrz"
            });
        },
        // 钱包地址
        moenyAddress() {
            this.$router.push({
                path: "./moenyAddress"
            });
        },
        // 退出登录
        logout() {
            this.$router.push({
                path: "./login"
            });
        }
    }
};
</script>

<style scoped>
input::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #999;
    font-size: 0.2rem;
}

input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #999;
    font-size: 0.2rem;
}

input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #999;
    font-size: 0.2rem;
}

input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #999;
    font-size: 0.2rem;
}

.title {
    text-align: center;
    background-color: white;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.36rem;
    font-weight: 500;
}

.back {
    position: absolute;
    width: 0.4rem;
    top: 0.2rem;
    left: 0.3rem;
}
.fr {
    position: absolute;
    right: 0.24rem;
    height: 0.2rem;
    margin-top: 0.45rem;
}
.sendMsg {
    text-align: right;
}

.mui-input-row label ~ input {
    padding-right: 0.5rem;
}

.mui-input-group .mui-input-row:after {
    right: 15px;
}
.mui-input-row {
    height: 1.06rem;
    line-height: 1.06rem;
}
.mui-input-row label {
    height: 1.06rem;
    line-height: 0.8rem;
    font-size: 0.25rem;
}
.mui-input-row input {
    height: 1.06rem;
    line-height: 1.06rem;
    font-size: 0.25rem;
}
.mui-table-view-cell {
    margin-top: 10px;
}
.mui-table-view {
    font-size: 0.25rem;
    height: 1.06rem;
    line-height: 1.06rem;
}
.mui-table-view-cell a {
    padding: 0 0 0 15px;
}
.leave {
    margin-top: 10px;
    background-color: white;
    text-align: center;
    line-height: 1.06rem;
    height: 1.06rem;
    color: #e43c15;
}
</style>