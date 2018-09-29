<template>
    <div class="register">
        <div class="header">
            <div class="register-header">
                <img class="register-icon" src="../../../images/register.png" alt="">
                <div class="header-font">手机注册</div>
            </div>
            <div class="register-content">
                <form class="mui-input-group">
                    <div class="mui-input-row">
                        <label>手机号</label>
                        <input type="text" class="mui-input-clear Phone" name="phone" placeholder="请输入手机号码">
                    </div>
                    <div class="mui-input-row">
                        <span class="send-code" @click="sendCode">发送验证码</span>
                        <label>验证码</label>
                        <input type="text" class="code" name="verificationCode" placeholder="请输入验证码">
                    </div>
                    <div class="mui-input-row">
                        <label>登录密码</label>
                        <input type="text" name="password" class="pwd1" placeholder="请输入登录密码">
                    </div>
                </form>
                <div class="btn" @click="registerSubmit">
                    完成注册
                </div>
            </div>
        </div>
        <div class="footer">
            注册即代表同意
            <a>《华翼天下服务协议》</a>
        </div>

    </div>
</template>

<script>
window.onload = function() {};

export default {
    data() {
        return {};
    },
    methods: {
        // 注册
        registerSubmit() {
            // 手机号码
            let phone = $(".phone").val();
            // 验证码
            let send_code = $(".code").val();
            // 登录密码
            let pwd = $(".pwd1").val();

            this.$ajax
                .post("user/register", {
                    mobile: phone,
                    psw: pwd,
                    yzm: send_code
                })
                .then(data => {
                    if (data.data.code == "500") {
                        mui.toast("系统错误", {
                            duration: "long",
                            type: "div"
                        });
                    } else if (data.data.code == "200") {
                        mui.toast("注册成功", {
                            duration: "long",
                            type: "div"
                        });
                        this.$router.push({
                            path: "./login"
                        });
                    } else {
                        mui.toast(data.data.msg, {
                            duration: "long",
                            type: "div"
                        });
                    }
                });
        },
        // 发送验证码
        sendCode() {
            // 手机号码
            let phone = $(".phone").val();
            // 验证码
            let send_code = $(".code").val();
            // 登录密码
            let pwd = $(".pwd1").val();
            if (phone == "") {
                // alert("手机号码不能为空");
                mui.toast("手机号码不能为空", {
                    duration: "long",
                    type: "div"
                });
                return false;
            } else if (phone != "" && !/^1[34578]\d{9}$/.test(phone)) {
                mui.toast("手机号格式不正确", {
                    duration: "long",
                    type: "div"
                });
                // alert("手机号格式不正确");
                return false;
            } else if (phone != "" && /^1[34578]\d{9}$/.test(phone)) {
                this.$ajax
                    .post("send-sms", {
                        mobile: phone
                    })
                    .then(data => {
                        if (data.data.code == "500") {
                            mui.toast("系统错误", {
                                duration: "long",
                                type: "div"
                            });
                        } else if (data.data.code == "200") {
                            mui.toast("发送成功", {
                                duration: "long",
                                type: "div"
                            });
                        } else {
                            mui.toast(data.data.msg, {
                                duration: "long",
                                type: "div"
                            });
                        }
                    });
                return false;
            }
        }
    }
};
</script>

<style scoped>
.register {
    font-family: PingFang-SC-Medium;
    width: 7.5rem;
    margin: 0 auto;
}
.header {
    width: 7.5rem;
    position: relative;
}
.register-header {
    width: 7.5rem;
    height: 0.88rem;
    background: rgba(255, 255, 255, 1);
    border-bottom: 1px solid rgba(230, 230, 230, 1);
}
.register-icon {
    width: 0.4rem;
    height: 0.28rem;
    border: 2px solid rgba(51, 51, 51, 1);
    position: absolute;
    left: 0.24rem;
    top: 0.3rem;
}
.header-font {
    text-align: center;
    height: 0.34rem;
    font-size: 0.36rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    padding: 0.27rem 0;
}
.register-content {
    padding: 0 0.24rem;
    font-size: 0.3rem;
}
.mui-input-group:before {
    height: 0;
    content: "";
}
.mui-input-row {
    height: 1.24rem;
}
.mui-input-group {
    font-size: 0.3rem;
}
.mui-input-row label {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    line-height: 1.1;
    float: left;
    width: 35%;
    padding: 0.45rem 15px;
    font-size: 0.3rem;
}
.mui-input-row label ~ input {
    float: right;
    width: 65%;
    margin-bottom: 0;
    height: 1.25rem;
    padding-left: 0;
    border: 0;
}
.mui-input-group .mui-input-row:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0px;
    height: 1px;
    content: "";
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    background-color: #c8c7cc;
}
.register-submit {
    margin-top: 0.78rem;
    width: 7.24rem;
    height: 1.11rem;
    background-image: url(../../../images/wczc@2x.png);
    background-size: 100% 100%;
}

.send-code {
    position: absolute;
    background-color: #64cbf7;
    height: 0.66rem;
    width: 1.86rem;
    border-radius: 0.33rem;
    border: 0;
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    padding: 0;
    top: 0.28rem;
    right: 0;
    line-height: 0.64rem;
    padding-left: 0.16rem;
}
.footer {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    bottom: 2rem;
    left: 0;
    text-align: center;
    font-size: 0.26rem;
}
.footer a {
    color: #64cbf7;
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
</style>