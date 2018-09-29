<template>
    <div class="money-bag-address">
        <div class="title">
            <img class="back" src="../../../images/logo.png" alt=""> 钱包地址
        </div>
        <div class="content">
            <form class="mui-input-group">

                <p class="mui-input-row">
                    <label>钱包地址</label>
                    <!-- <input type="text" class="" placeholder="选择绑定钱包地址"> -->
                    <select>
                        <option value=""></option>
                    </select>
                    <a href=""></a>
                </p>
                <p class="mui-input-row">
                    <label>钱包账号</label>
                    <input type="number" class="" placeholder="输入钱包账号账号">
                </p>
                <p class="mui-input-row">
                    <label>确认账号</label>
                    <input type="number" class="" placeholder="再次输入钱包账号账号">
                </p>
                <div class="btn">完成</div>
            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: "money-bag-address"
};
</script>

<style scoped>
input::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #999;
    font-size: 0.3rem;
}
input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #999;
    font-size: 0.3rem;
}
input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #999;
    font-size: 0.3rem;
}
input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #999;
    font-size: 0.3rem;
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
.mui-input-group {
    font-size: 0.3rem;
}

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

.mui-input-group:after {
    background-color: #fff;
}
</style>