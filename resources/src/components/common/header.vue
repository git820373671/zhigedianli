<template>
  <div class="header-box">
    <h1><img src="../../assets/images/logo.png"></h1>
    <div class="nav">
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">

          内容管理
        </MenuItem>
        <MenuItem name="2">

          用户管理
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            统计分析
          </template>
          <MenuItem name="3-1"><i class="navIcon1"></i>文章管理</MenuItem>
          <MenuItem name="3-2"><i class="navIcon2"></i>评论管理</MenuItem>
          <MenuItem name="3-3"><i class="navIcon3"></i>举报管理</MenuItem>
        </Submenu>
        <MenuItem name="4">

          综合设置
        </MenuItem>
      </Menu>
    </div>
    <div class="header-right">
      <p><img src="../../assets/images/icon1.png"/></p>
      <p><img src="../../assets/images/icon2.png"/></p>
      <p><img src="../../assets/images/icon3.png"/></p>
      <p><img src="../../assets/images/icon4.png"/></p>
      <p><img src="../../assets/images/icon5.png"/></p>
      <p><img src="../../assets/images/icon6.png"/></p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'header-box',
    data: function () {
      return {
        theme1: 'light'
      }
    }
  }
</script>
