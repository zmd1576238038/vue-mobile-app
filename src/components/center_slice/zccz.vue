<template>
    <div class="zccz">
        <div class="title">
            <img class="back" src="../../../images/logo.png" alt=""> 资产充值
        </div>
        <form class="mui-input-group" style="margin-top: 10px">
            <div class="mui-input-row">
                <label>充值金额</label>
                <input type="text" name="" class="sendMsg mui-input-clear" placeholder="请输入我的昵称">
            </div>
            <div class="mui-input-row">
                <img class="fr" src="../../../images/center_slices/xztb@2x.png" alt="">
                <label>支付钱包</label>
                <input type="text" name="" class="sendMsg mui-input-clear" placeholder="请输入我的昵称">
            </div>
            <div class="mui-input-row">
                <img class="fr" src="../../../images/center_slices/xztb@2x.png" alt="">
                <label>货币类型</label>
                <input type="text" name="" class="sendMsg mui-input-clear" placeholder="去认证">
            </div>
            <div class="mui-input-row">
                <label>公司名称</label>
                <input type="text" name="" class="sendMsg mui-input-clear" placeholder="请输入公司名称">
            </div>
            <div class="mui-input-row">
                <label>对公账号</label>
                <input type="number" name="" class="sendMsg mui-input-clear" placeholder="请输入对公账号">
            </div>
            <div class="mui-input-row">
                <label>开户行</label>
                <input type="text" name="" class="sendMsg mui-input-clear" placeholder="请输入开户行">
            </div>
        </form>
        <div style="overflow:hidden;width: 100%;background-color: white">
            <div class="content">
                <img style="position: absolute" src="" alt=""> *上传转账凭证单据
            </div>
        </div>
        <div style="padding: 0.2rem 0;background-color: white;margin: 0 0 20px 0">
            <div class="btn">确认修改</div>
        </div>

    </div>

</template>

<script>
export default {
    name: "zccz"
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

.mui-table-view-cell a {
    padding: 0 0 0 15px;
}

.content {
    position: relative;
    margin: 52px auto 25px auto;
    height: 2.49rem;
    width: 4.16rem;
    text-align: center;
    line-height: 2.49rem;
    border: 2px dashed #eee;
    color: #ccc;
}
.content img {
    width: 100%;
    height: 100%;
    left: 0;
}

/* .btn{


        font-size:0.3rem;
        font-weight:500;
        color:rgba(255,255,255,1);
        width: 90%;
        height: 0.95rem;
        line-height: 0.95rem;
        text-align: center;
        margin: 0 auto;
        background-image: url("../../../images/bt1_slices/bt1@2x.png");
        background-size: 100% 100%;
       
    } */
.btn {
    width: 7.01rem;
    height: 0.95rem;
    border-radius: 0.48rem;
    background: #64cbf7;
    color: #fff;
    font-size: 0.3rem;
    font-weight: 500;
    line-height: 0.95rem;
    text-align: center;
    margin: 0.66rem auto 0rem;
}
.btn:hover {
    opacity: 0.8;
}
</style>