<template>
  <div class="register-con bz">
    <div class="w1200 bz">
      <div class="register-neirong bz">
        <h3 class="tc">用户注册</h3>
        <form name="form1" id="form1" @submit="check_zhuce">
          <div class="shoujihao">
            <p class="fl f16 color-gray">
              账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号
            </p>
            <input
              class="fr bz"
              name="mobile"
              type="text"
              maxlength="11"
              placeholder="请输入账号"
            />
          </div>
          <div class="shoujihao" style="margin-top: 25px !important">
            <p class="fl f16 color-gray">
              密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码
            </p>
            <input
              class="fr bz"
              name="psw1"
              type="password"
              placeholder="请输入正确密码"
            />
          </div>
          <div class="shoujihao" style="margin-top: 25px !important">
            <p class="fl f16 color-gray">重复密码</p>
            <input
              class="fr bz"
              name="psw2"
              type="password"
              placeholder="请再次输入密码"
            />
          </div>
          <button class="zhuce">注册</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    check_zhuce() {
      if (document.form1.mobile.value == "") {
        alert("请检查用户名是否为空！");
        return false;
      } else if (document.form1.psw1.value == "") {
        alert("请检查密码是否为空！");
        return false;
      } else if (document.form1.psw2.value == "") {
        alert("请检查重复密码是否为空！");
        return false;
      } else {
        alert("注册成功");
        this.$router.push({ path: "/login" });
        return false;
      }
    },
  },
};
</script>
<style lang="">
</style>