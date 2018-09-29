<
<template>
    <div class="login">
        <div class="header">
            <div class="login-header">
                <div class="header-font">欢迎登录</div>
                    <p class="change-register" @click = "registerLink"> 注册</p>
            </div>
            <div class="content">
                <div style="text-align: center;padding: 0.71rem 0">
                    <img class="logo" src="../../../images/logo@2x.png" alt="">
                </div>
                <form class="mui-input-group">
                    <div class="mui-input-row">
                        <label>手机号</label>
                        <input type="text" class="mui-input-clear phone" name="phone" placeholder="请输入手机号码">
                    </div>
                    <div class="mui-input-row">
                        <label>登录密码</label>
                        <input type="password" name="password" class="password" placeholder="请输入登录密码">
                    </div>
                </form>
                <div class="btn" @click = "loginSubmit">登录</div>
            </div>
        </div>
        <div class="footer">
            注册即代表同意<a>《华翼天下服务协议》</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        // 注册 跳转
        registerLink() {
            this.$router.push({
                path: "./register"
            });
            $(".tab").hide();
        },
        // 登录
        loginSubmit() {
            let phone = $(".phone").val();
            let password = $(".password").val();

            if (phone == "") {
                mui.toast("账号不能为空", {
                    duration: "long",
                    type: "div"
                });
            } else if (password == "") {
                mui.toast("密码不能为空", {
                    duration: "long",
                    type: "div"
                });
            } else if (phone != "" && !/^1[34578]\d{9}$/.test(phone)) {
                mui.toast("手机号码格式不正确", {
                    duration: "long",
                    type: "div"
                });
            } else if (
                phone != "" &&
                /^1[34578]\d{9}$/.test(phone) &&
                password != ""
            ) {
                this.$ajax
                    .post("user/login", {
                        mobile: phone,
                        psw: password
                    })
                    .then(data => {
                        if (data.data.code == "200") {
                            mui.toast("登陆成功", {
                                duration: "long",
                                type: "div"
                            });
                            this.$router.push({
                                path: "./home"
                            });

                            sessionStorage.setItem(
                                "mobile",
                                JSON.stringify(data.data.obj)
                            );
                        } else if (data.data.code == "500") {
                            mui.toast("系统错误", {
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
            }
        }
    }
};
</script>

<style scoped>
.app {
    background: #fff;
}
.login {
    font-family: PingFang-SC-Medium;
    width: 7.5rem;
    margin: 0 auto;
}
.header {
    width: 7.5rem;
    position: relative;
}
.login-header {
    text-align: center;
    width: 7.5rem;
    height: 0.88rem;
    background: rgba(255, 255, 255, 1);
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    /*position:relative;*/
}

.change-register {
    /*width:0.58rem;*/
    height: 0.29rem;
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    position: absolute;
    right: 0.24rem;
    top: 0.3rem;
}
.header-font {
    /*width:1.42rem;*/
    text-align: center;
    height: 0.34rem;
    font-size: 0.36rem;

    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    padding: 0.27rem 0;
}
.logo {
    width: 1.97rem;
    margin: 0 auto;
}
.mui-input-group:before {
    height: 0;
}
.mui-input-row {
    height: 0.98rem;
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

.footer {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    left: 0;
    bottom: 50px;
    text-align: center;
    font-size: 0.26rem;
}
.footer a {
    color: #64cbf7;
}

/* .login-submit {
    margin-top: 0.78rem;
    width: 7.24rem;
    height: 1.11rem;
    background-image: url(../../../images/dl@2x.png);
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
