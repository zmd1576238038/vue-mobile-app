<template>
    <div class="smrz">
        <div class="title">
            <img class="back" src="../../../images/logo.png" alt=""> 实名认证
        </div>
        <form class="mui-input-group">

            <p class="mui-input-row">
                <img class="fr" style="height: 0.24rem;margin-top: 0.2rem" src="../../../images/center_slices/xztb@2x.png" alt="">
                <label>姓名</label>
                <input type="text" name="username" class="" placeholder="请输入要姓名">
            </p>
            <p class="mui-input-row">
                <label>身份证号</label>
                <input type="number" name="idcNumber" class="" placeholder="请输入身份证号">
                <img class="fr" style="height: 0.24rem;margin-top: 0.2rem" src="../../../images/center_slices/xztb@2x.png" alt="">
            </p>
        </form>
        <div class="mui-content">
            <div class="mui-row">
                <div class="mui-col-sm-6 mui-col-xs-6">
                    <div class="mui-table-view-cell">
                        <div class="idc">
                            <img src="" alt="" @click="img1">
                        </div>
                        <div class="font">*身份证正面照</div>
                    </div>
                </div>
                <div class="mui-col-sm-6 mui-col-xs-6">
                    <div class="mui-table-view-cell">
                        <div class="idcback">
                            <img src="" alt="">
                        </div>
                        <div class="font">*身份证反面照</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="padding-bottom: 0.2rem">
            <div class="btn">确认修改</div>
        </div>
    </div>
</template>

<script>
let page = null;
export default {
    data() {
        return {};
    },
    methods: {
        // 图片上传
        img1() {
            // mui("body").on("tap", ".idc", function() {
            // this.imgUp();
            // });
            this.appendByGallery();
        },

        // 从相册添加文件
        appendByGallery() {
            plus.gallery.pick(function(path) {
                debugger;
                $(".idc").attr("src", path);
                // document.getElementById("headimg").src = path;
            });
        }
    }
};
</script>

<style scoped>
.smrz {
    background-color: white;
}
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

.mui-content {
    background-color: white;
}
.mui-input-group {
    font-size: 0.3rem;
}
.mui-input-row {
    position: relative;
}
.fr {
    position: absolute;
    right: 0.24rem;
}
.mui-input-row label {
    font-size: 0.3rem;
}
.idc,
.idcback {
    margin: 0 auto;
    width: 3.24rem;
    height: 1.89rem;
    background: rgba(240, 240, 240, 1);
}
.idc img,
.idcback img {
    height: 100%;
    width: 100%;
}
.font {
    margin-top: 0.3rem;
    text-align: center;
    font-size: 0.24rem;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
}
/* .btn {
    font-size: 0.3rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
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