<template>
  <!-- 头部开始 -->
  <div class="header">
    <div class="header-left">APEX</div>
    <span> Hello welcome to my personal website </span>

    <div class="search fr">
      <input type="text" name="" id="" />
      <input type="button" value="搜索" class="inbtn" />
    </div>
  </div>
  <!-- 头部结束 -->
  <!-- 导航开始 -->
  <div class="nav">
    <div class="wrap">
      <ul>
        <li class="active">
          <a href="https://www.ea.com/games/apex-legends?/index.html">
            官网首页

            <span>|</span>
          </a>
        </li>

        <li>
          <router-link to="/Home">APEX<span>|</span></router-link>

          <div class="nav-list">
            <img
              src="./images/APEX.u=778022184,3646414911&fm=253&fmt=auto&app=120&f=JPEG.webp"
              alt=""
              width="400px"
            />
          </div>
        </li>

        <li>
          <router-link to="/about">ABOUT</router-link>
          <div class="dropdown-menu">
            <ul>
              <li><router-link to="/about">About Apex</router-link></li>
              <li><router-link to="/Legends">Legends</router-link></li>
            </ul>
          </div>
        </li>

        <li>
          <router-link to="Modes">MODSE</router-link>
        </li>

        <li>
          <router-link to="Season">SEASON</router-link>
        </li>

        <li>
          <router-link to="BattlePass">BattlePass</router-link>
        </li>

        <div class="fr">
          <li>
            <router-link to="Login">登录</router-link>
          </li>
          <li>
            <router-link to="Zhuce">注册</router-link>
          </li>
        </div>
      </ul>
    </div>
  </div>
  <!-- 导航结束 -->
</template>

<script>
export default {};
</script>

<style>
.nav {
  margin-top: 53px;
}
.wrap {
  z-index: 999999999999;
  color: #fff;
}
</style>