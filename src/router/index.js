import login from "components/login/login";
import home from "components/home/home";

import register from "components/register/register";
import category from "components/category/category";
import userinfo from "components/userinfo/userinfo";
// import store from "common/js/store.js";

// 积分明细
import centerSlice from "components/center_slice/center_slice";

import jfmx from "components/center_slice/jfmx";

//个人中心
import myCenter from "components/center_slice/my_center";

// 我的金额
import myMoeny from "components/center_slice/my_money";

// 矿机记录
import kjjl from "components/center_slice/kjjl";

// 账户设置
import accountSet from "components/center_slice/center_sz";

// 矿机分润
import kjfr from "components/center_slice/kjfr";
// 实名认证
import smrz from "components/center_slice/smrz";
// 资产充值
import zccz from "components/center_slice/zccz";

// 交易明细
import jymx from "components/center_slice/jymx";

// 钱包 地址
import moenyAddress from "components/center_slice/moneyBagAddress";

import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
    routes: [{
                path: "/",
                redirect: "/home"
            },
            {
                path: "/login",
                name: "login",
                component: login,
                meta: {
                    auth: false
                }
            },

            {
                path: "/register",
                name: "register",
                component: register,
                meta: {
                    auth: false
                }
            },
            {
                path: "/home",
                name: "home",
                component: home,
                meta: {
                    auth: true,
                    keepAlive: true
                }
            },
            {
                path: "/category",
                name: "category",
                component: category,
                meta: {
                    auth: true,
                    keepAlive: true
                }
            },
            {
                path: "/userinfo",
                name: "userinfo",
                component: userinfo,
                meta: {
                    auth: true,
                    keepAlive: false
                }
            },
            {
                path: "/centerSlice",
                name: "centerSlice",
                component: centerSlice,
                meta: {
                    auth: true,
                    keepAlive: false
                }
            },

            {
                path: "/jfmx",
                name: "jfmx",
                component: jfmx,
                meta: {
                    auth: false
                }
            },

            {
                path: "/myCenter",
                name: "myCenter",
                component: myCenter,
                meta: {
                    auth: true,
                    keepAlive: false
                }
            },

            {
                path: "/myMoeny",
                name: "myMoeny",
                component: myMoeny,
                meta: {
                    auth: false
                }
            },
            {
                path: "/kjjl",
                name: "kjjl",
                component: kjjl,
                meta: {
                    auth: false
                }
            },
            {
                path: "/accountSet",
                name: "accountSet",
                component: accountSet,
                meta: {
                    auth: false
                }
            },
            {
                path: "/kjfr",
                name: "kjfr",
                component: kjfr,
                meta: {
                    auth: false
                }
            },
            {
                path: "/smrz",
                name: "smrz",
                component: smrz,
                meta: {
                    auth: false
                }
            },
            {
                path: "/zccz",
                name: "zccz",
                component: zccz,
                meta: {
                    auth: false
                }
            },
            {
                path: "/jymx",
                name: "jymx",
                component: jymx,
                meta: {
                    auth: false
                }

            },
            {
                path: "/moenyAddress",
                name: "moenyAddress",
                component: moenyAddress,
                meta: {
                    auth: false
                }
            }



        ]
        // });
        // scrollBehavior(to, from, savedPosition) {
        //     if (savedPosition) {
        //         return savedPosition;
        //     } else {
        //         if (from.meta.keepAlive) {
        //             from.meta.savedPosition = document.body.scrollTop;
        //         }
        //         return { x: 0, y: to.meta.savedPosition || 0 };
        //     }
        // }



    // router.beforeEach((to, from, next) => {
    //     if (to.matched.some(m => m.meta.auth)) { // 判断是否需要校验
    //         if (store.state.isLogin) { // 已经登陆
    //             next(); // 正常跳转到你设置好的页面
    //         } else {
    //             next({
    //                 path: "/login",
    //                 query: {
    //                     redirect: to.fullPath
    //                 } // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //             });
    //         }
    //     } else {
    //         next();
    //     }
    // });
});
export default router;