<template>
  <div class="menu-box">
    <div class="menu-btn"><img src="../../assets/images/icon10.png"/></div>
    <Menu theme="light" width="200"  active-name="1-1" :open-names="['1']">
      <Submenu name="1">
        <template slot="title">
          北京
        </template>
        <MenuItem name="1-1">新增用户</MenuItem>
        <MenuItem name="1-2">活跃用户</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">

          北京
        </template>
        <MenuItem name="2-1">新增用户</MenuItem>
        <MenuItem name="2-2">活跃用户</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">

          统计分析
        </template>
        <MenuItem name="3-1">新增用户</MenuItem>
        <MenuItem name="3-2">活跃用户</MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
  export default {
    name: 'menu-box',
    data: function () {
      return {
        theme1: 'light'
      }
    }
  }
</script>
