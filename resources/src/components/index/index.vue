<template>
  <div>
    <header-box></header-box>
    <menu-box></menu-box>
    <div class="main">
      <Breadcrumb>
        <BreadcrumbItem href="/">首页</BreadcrumbItem>
        <BreadcrumbItem>桌面</BreadcrumbItem>
      </Breadcrumb>
      <div class="cue-time">2017-9-16</div>
      <div class="floor1">
        <Row :gutter="20">
          <Col span="6" v-for="(item,index) in floorOneData">
          <div class="floor-con"><i></i>
            <h2>{{item.title}}</h2>
            <p>{{item.num}}</p>
            <div class="right-icon down" v-if="!item.IsUp"></div>
            <div class="right-icon up" v-if="item.IsUp"></div>
          </div>
          </Col>
          <!--<Col span="6">
          <div class="floor-con bg-yellow">
            <i class="icon14"></i>
            <h2>昨日电量</h2>
            <p>6,000 kwh</p>
            <div class="right-icon up"></div>

          </div>
          </Col>
          <Col span="6">
          <div class="floor-con bg-red">
            <i class="icon15"></i>
            <h2>当月电量</h2>
            <p>6,000 kwh</p>
            <div class="right-icon down"></div>

          </div>
          </Col>
          <Col span="6">
          <div class="floor-con bg-blue">
            <i class="icon14"></i>
            <h2>上月电量</h2>
            <p>6,000 kwh</p>


          </div>
          </Col>-->
        </Row>
      </div>
      <div class="floor2">
        <Row :gutter="20">
          <Col span="12">
          <div class="title"><i class="icon19"></i>实时负荷 <span class="btn"><img
            src="../../assets/images/icon21.png"/></span></div>
          <div class="chart-box">
            <schart :canvasId="chartA.id"
                    :type="chartA.type"
                    :width="chartA.width"
                    :height="chartA.height"
                    :data="chartA.data"
                    :options="chartA.options"
            ></schart>
          </div>

          <ul class="chart-bottom">
            <li v-for="(item,index) in chartIconData">
              <P class="bg-green">{{item.title}} </P>
              {{item.num}}KM
            </li>

          </ul>

          </Col>
          <Col span="12">
          <div class="title"><i class="icon20"></i>实时负荷 <span class="btn"><img
            src="../../assets/images/icon21.png"/></span></div>
          <div class="chart-box">
            <schart :canvasId="chartB.id"
                    :type="chartB.type"
                    :width="chartB.width"
                    :height="chartB.height"
                    :data="chartB.data"
                    :options="chartB.options"
            ></schart>
          </div>
          </Col>
        </Row>
      </div>
      <div class="floor3">
        <Row :gutter="20">
          <Col span="3" v-for="(item,index) in floorThreeData">
          <div class="floor3-con"><i></i>
            <p>{{item.title}}</p>
            <p>{{item.num}}</p></div>
          </Col>

        </Row>
      </div>
    </div>
  </div>
</template>
<script>
  import HeaderBox from '../common/header'
  import MenuBox from '../common/menu'
  import Schart from 'vue-schart'

  export default {
    name: 'index',
    components: {
      HeaderBox: HeaderBox,
      MenuBox: MenuBox,
      Schart: Schart
    },
    data: function () {
      return {
        floorOneData: [],
        floorThreeData: [],
        chartIconData: [],
        chartA: {
          id: 'idA',
          type: 'line',
          width: 500,
          height: 320,
          data: [],
          options: {
            padding: 40,
            bgColor: '#296bb7',
            axisColor: '#fff',           // 坐标轴颜色
            contentColor: '#6ba4c1',
            fillColor: '#14d6e6'
          }
        },
        chartB: {
          id: 'idB',
          type: 'bar',
          width: 500,
          height: 400,
          data: [],
          options: {
            padding: 40,
            bgColor: '#296bb7',
            axisColor: '#fff',           // 坐标轴颜色
            contentColor: '#6ba4c1',
            fillColor: '#14d6e6'
          }
        }
      }
    },
    created: function () {
      var $this = this
      var OneUrl = '/static/data/floorOneData.json'
      var OnePrams = {}
      this.$ajax_get(OneUrl, OnePrams, function (data) {
        if (!data.success) return
        $this.floorOneData = data.floorOneData
      })
      var ThreeUrl = '/static/data/floorThreeData.json'
      var ThreePrams = {}
      this.$ajax_get(ThreeUrl, ThreePrams, function (data) {
        if (!data.success) return
        $this.floorThreeData = data.floorThreeData
      })
      var chartAdata = '/static/data/chartAdata.json'
      var chartAPrams = {}
      this.$ajax_get(chartAdata, chartAPrams, function (data) {
        if (!data.success) return
        $this.chartA.data = data.chartAdata
      })
      var chartBdata = '/static/data/chartBdata.json'
      var chartBPrams = {}
      this.$ajax_get(chartBdata, chartBPrams, function (data) {
        if (!data.success) return
        $this.chartB.data = data.chartBdata
      })
      var chartIconData = '/static/data/chartIconData.json'
      var chartIcon = {}
      this.$ajax_get(chartIconData, chartIcon, function (data) {
        if (!data.success) return
        $this.chartIconData = data.chartIconData
      })
    }
  }
</script>
