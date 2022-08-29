<template>
  <div class="main">
    <div class="topTitle">
      <img src="@/assets/标题样式.png" />
      <span class="text">{{
        `Tested suites Package Set For ${testedSuite}`
      }}</span>
    </div>
    <div class="content">
      <p>
        Reproducible builds enable anyone to reproduce bit by bit identical
        binary packages from a given source, so that anyone can verify that a
        given binary derived from the source it was said to be derived. There is
        more information about reproducible builds on the Debian wiki and on
        https://reproducible-builds.org. These pages explain in more depth why
        this is useful, what common issues exist and which workarounds and
        solutions are known.
      </p>
      <br />
      <p>
        Reproducible openEuler is an effort to apply this to openEuler. Thus
        openEuler packages are build twice, with a few variations added and then
        the resulting packages from the two builds are compared using
        diffoscope. Please note that this is still at an early stage. Also there
        are more variations expected to be seen in the wild.
      </p>
      <br />
      <!-- <p class="innerTitle">Missing bits for testing openEuler:</p>
      <Badge
        status="default"
        text="cross references to Debian notes - and having openEuler specific notes."
      /> -->

      <p class="innerTitle">Missing bits for openEuler:</p>
      <Badge
        status="default"
        text="code needs to be written to compare the packages built twice here against newly built packages from the Official openEuler repositories."
      />
      <br />
      <Badge
        status="default"
        text="user tools, for users to verify all of this easily."
      />
      <p class="innerTitle2">
        If you want to help out or discuss reproducible builds in openEuler,
        please join #reproducible-builds.
      </p>
    </div>
    <div class="mainTable">
      <Table
        :columns="mainTableColumns"
        :data="mainTableData"
        :loading="mainLoading"
      >
        <template slot-scope="{ row }" slot="categoryLevel">
          <div @click="clickMainData(row, '')" class="mainTableData">
            {{ row.categoryLevel }}
          </div>
        </template>
        <template slot-scope="{ row }" slot="allPackage">
          <div @click="clickMainData(row, '')" class="mainTableData">
            {{ row.allPackage }}
          </div>
        </template>
        <template slot-scope="{ row }" slot="reproducible">
          <div
            @click="clickMainData(row, 'reproducible')"
            class="mainTableData"
          >
            {{ row.reproducible }}
          </div>
        </template>
        <template slot-scope="{ row }" slot="unreproducible">
          <div
            @click="clickMainData(row, 'unreproducible')"
            class="mainTableData"
          >
            {{ row.unreproducible }}
          </div>
        </template>
        <template slot-scope="{ row }" slot="failingToBuild">
          <div
            @click="clickMainData(row, 'failing to build')"
            class="mainTableData"
          >
            {{ row.failingToBuild }}
          </div>
        </template>
        <template slot-scope="{ row }" slot="inDepwaitState">
          <div
            @click="clickMainData(row, 'in depwait state')"
            class="mainTableData"
          >
            {{ row.inDepwaitState }}
          </div>
        </template>
        <template slot-scope="{ row }" slot="downloadProblems">
          <div
            @click="clickMainData(row, 'download problems')"
            class="mainTableData"
          >
            {{ row.downloadProblems }}
          </div>
        </template>
        <template slot-scope="{ row }" slot="blacklisted">
          <div @click="clickMainData(row, 'blacklisted')" class="mainTableData">
            {{ row.blacklisted }}
          </div>
        </template>
        <template slot-scope="{ row }" slot="unknownState">
          <div
            @click="clickMainData(row, 'unknown state')"
            class="mainTableData"
          >
            {{ row.unknownState }}
          </div>
        </template>
      </Table>
    </div>
    <div class="picturesWrap">
      <div
        id="picture1"
        class="smallPicture"
        v-show="showSmallPicture.picture1"
      ></div>
      <div
        id="picture2"
        class="smallPicture"
        v-show="showSmallPicture.picture2"
      ></div>
      <div
        id="picture3"
        class="smallPicture"
        v-show="showSmallPicture.picture3"
      ></div>
      <div
        id="picture4"
        class="smallPicture"
        v-show="showSmallPicture.picture4"
      ></div>
      <div
        id="picture5"
        class="smallPicture"
        v-show="showSmallPicture.picture5"
      ></div>
    </div>
    <div id="openEuler" class="openEulerDiv" v-show="showMainPicture"></div>
    <div class="variation">
      <Table :columns="variationTableColumns" :data="variationTableData">
      </Table>
    </div>
    <Footer></Footer>
    <Modal
      v-model="showBigPicture"
      footer-hide
      fullscreen
      @on-visible-change="changeBigpicModal"
    >
      <SacleBox>
        <div id="bigPicture"></div>
      </SacleBox>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import * as echarts from 'echarts';
import fullIcon from '@/assets/全屏按钮.png';
import SacleBox from '@/components/SacleBox.vue';
import Footer from '../components/Footer.vue';

export default {
  data() {
    return {
      mainTableColumns: [
        {
          title: 'categoryLevel',
          slot: 'categoryLevel',
          minWidth: 150,
        },
        {
          title: 'all source packages',
          slot: 'allPackage',
          minWidth: 140,
        },
        {
          title: 'reproducible',
          slot: 'reproducible',
          renderHeader: this.renderMainCol,
          minWidth: 120,
        },
        {
          title: 'unreproducible',
          slot: 'unreproducible',
          renderHeader: this.renderMainCol,
          minWidth: 120,
        },
        {
          title: 'failing to build',
          slot: 'failingToBuild',
          renderHeader: this.renderMainCol,
          minWidth: 120,
        },
        {
          title: 'in depwait state',
          slot: 'inDepwaitState',
          renderHeader: this.renderMainCol,
          minWidth: 120,
        },
        {
          title: 'download problems',
          slot: 'downloadProblems',
          renderHeader: this.renderMainCol,
          minWidth: 140,
        },
        {
          title: 'blacklisted',
          slot: 'blacklisted',
          renderHeader: this.renderMainCol,
          minWidth: 120,
        },
        {
          title: 'unknown state',
          slot: 'unknownState',
          renderHeader: this.renderMainCol,
          minWidth: 120,
        },
      ],
      mainTableData: [],
      showBigPicture: false,
      variationTableColumns: [
        {
          title: 'variation',
          key: 'variation',
          minWidth: 150,
        },
        {
          title: 'first build',
          key: 'firstBuild',
          minWidth: 650,
        },
        {
          title: 'second build',
          key: 'secondBuild',
          minWidth: 450,
        },
      ],
      variationTableData: [],
      mainLoading: false,
      // categoryLevel图表参数
      smallPicEchartParam: [
        {
          id: 'picture1',
          categoryLevel: '',
          options: {},
        },
        {
          id: 'picture2',
          categoryLevel: '',
          options: {},
        },
        {
          id: 'picture3',
          categoryLevel: '',
          options: {},
        },
        {
          id: 'picture4',
          categoryLevel: '',
          options: {},
        },
        {
          id: 'picture5',
          categoryLevel: '',
          options: {},
        },
      ],
      showSmallPicture: {
        picture1: false,
        picture2: false,
        picture3: false,
        picture4: false,
        picture5: false,
      },
      showMainPicture: false,
      echartsInstance: {
        openEuler: null,
        picture1: null,
        picture2: null,
        picture3: null,
        picture4: null,
        picture5: null,
      },
      bigPictureEchartInstance: null,
    };
  },
  components: {
    SacleBox,
    Footer,
  },
  computed: {
    ...mapState(['testedSuite', 'architecture', 'urlParam']),
    homeTested() {
      let obj = {
        testedSuite: this.testedSuite,
        architecture: this.architecture,
      };
      return obj;
    },
  },
  watch: {
    homeTested() {
      for (let key in this.echartsInstance) {
        if (this.echartsInstance[key]) {
          this.echartsInstance[key].dispose();
        }
      }
      this.getMainTableData();
    },
  },
  methods: {
    ...mapMutations(['changeUrlParamVx']),
    renderMainCol(h, params) {
      let that = this;
      return h(
        'div',
        {
          style: {
            cursor: 'pointer',
            color: '#07b',
          },
          class: ['colHover'],
          on: {
            click() {
              that.$router.push({
                name: 'detail',
                query: {
                  term1: params.column.title,
                  type: that.$route.query.type
                    ? that.$route.query.type
                    : 'openEuler',
                },
              });
            },
          },
        },
        params.column.title
      );
    },
    getMainTableData() {
      this.mainLoading = true;
      this.$axios
        .post(`${this.urlParam}/statisticalResult`, {
          architectures: this.architecture,
          testSuites: this.testedSuite,
        })
        .then((res) => {
          this.mainTableData = [];
          this.mainLoading = false;
          res.forEach((v, i) => {
            this.mainTableData.push({
              categoryLevel: v.categoryLevel,
              allPackage: v.allPackage,
              reproducible: v.reproducible,
              unreproducible: v.unreproducible,
              failingToBuild: v.failingToBuild,
              inDepwaitState: v.inDepwaitState,
              downloadProblems: v.downloadProblems,
              blacklisted: v.blacklisted,
              unknownState: v.unknownState,
            });
            this.smallPicEchartParam[i].categoryLevel = v.categoryLevel;
            this.smallPicEchartParam[i].options = {
              text: `Reproducibility status for openEuler packages in ${v.categoryLevel}`,
              textFontSize: 8,
              show: false,
              nameGap: 30,
            };
          });

          this.init();
        })
        .catch(() => {
          console.log('statisticalResult接口调用失败');
          this.mainLoading = false;
        });
    },
    clickMainData(row, col) {
      if (col) {
        this.$router.push({
          name: 'detail',
          query: {
            term1: col,
            term2: row.categoryLevel,
            type: this.$route.query.type ? this.$route.query.type : 'openEuler',
          },
        });
      } else {
        this.$router.push({
          name: 'detail',
          query: {
            term2: row.categoryLevel,
            type: this.$route.query.type ? this.$route.query.type : 'openEuler',
          },
        });
      }
    },
    setColor(data) {
      let color = 'white';
      switch (data) {
        case 'reproducible':
          color = '#73d216';
          break;
        case 'unreproducible':
          color = '#f57900';
          break;
        case 'failing to build':
          color = '#cc0000';
          break;
        case 'in depwait state':
          color = '#2e3436';
          break;
        case 'download problems':
          color = '#ffdd00';
          break;
        case 'blacklisted':
          color = '#aaaaaa';
          break;
        case 'unknown state':
          color = '#796de9';
          break;
      }
      return color;
    },
    initECharts(id, resData, options) {
      let option;
      let that = this;
      let date = [];
      let legendData = [];
      let seriesArray = [];
      that.echartsInstance[id] = echarts.init(document.getElementById(id));

      date = resData.date;
      resData.series.forEach((v) => {
        legendData.push(v.name);
        seriesArray.push({
          name: v.name,
          type: 'line',
          stack: 'Total',
          emphasis: {
            focus: 'series',
          },
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: that.setColor(v.name),
          },
          lineStyle: {
            width: 0,
          },
          areaStyle: {
            color: that.setColor(v.name),
          },
          data: v.data,
        });
      });
      option = {
        title: {
          left: 'center',
          text: options.text,
          textStyle: {
            fontSize: options.titleFontSize || options.textFontSize,
          },
        },
        legend: {
          data: legendData,
          show: options.show,
          left: 'center',
          bottom: 0,
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 10,
          itemStyle: {
            borderWidth: 1,
            borderColor: 'black',
          },
        },
        toolbox: {
          feature: {
            myFull: {
              title: '放大',
              icon: `image://${fullIcon}`,
              show: that.showBigPicture ? false : true,
              onclick: function () {
                that.showBigPictureFn(option);
              },
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: date,
          axisLabel: {
            fontSize: options?.textFontSize || 12,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          boundaryGap: false,
          axisLabel: {
            fontSize: options?.textFontSize || 12,
          },
          name: 'Amount(total)',
          nameLocation: 'middle',
          nameGap: options?.nameGap || 55,
          nameTextStyle: {
            fontSize: options?.textFontSize || 12,
          },
        },
        grid: {
          containLabel: true,
          left: 30,
          top: 30,
          right: 33,
          bottom: 30,
        },
        series: seriesArray,
      };

      option && that.echartsInstance[id].setOption(option);

      window.addEventListener('resize', function () {
        that.echartsInstance[id].resize();
      });
    },
    // 初始化图表
    init() {
      this.$axios
        .post(`${this.urlParam}/chartingDate`, {
          architectures: this.architecture,
          testSuites: this.testedSuite,
        })
        .then((res) => {
          this.showMainPicture = false;
          res.series.forEach((v2) => {
            if (v2.data.length) {
              this.showMainPicture = true;
            }
          });
          if (this.showMainPicture) {
            this.$nextTick(() => {
              this.initECharts('openEuler', res, {
                text: 'Reproducibility status for all tested openEuler packages',
                titleFontSize: 16,
                textFontSize: 12,
                show: true,
              });
            });
          }
        });

      this.smallPicEchartParam.forEach((v) => {
        this.$axios
          .post(`${this.urlParam}/chartingDate`, {
            term1: v.categoryLevel,
            architectures: this.architecture,
            testSuites: this.testedSuite,
          })
          .then((res) => {
            this.showSmallPicture[v.id] = false;
            res.series.forEach((v2) => {
              if (v2.data.length) {
                this.showSmallPicture[v.id] = true;
              }
            });
            if (this.showSmallPicture[v.id]) {
              this.$nextTick(() => {
                this.initECharts(v.id, res, v.options);
              });
            }
          });
      });
    },
    showBigPictureFn(option) {
      this.showBigPicture = true;
      this.$nextTick(() => {
        this.bigPictureEchartInstance = echarts.init(
          document.getElementById('bigPicture')
        );
        option.title.textStyle = {
          fontSize: 18,
        };
        option.toolbox = {};
        option.legend.show = true;
        option.xAxis.axisLabel.fontSize = 12;
        option.yAxis.axisLabel.fontSize = 12;
        option.yAxis.nameGap = 55;
        option.yAxis.nameTextStyle.fontSize = 12;

        option && this.bigPictureEchartInstance.setOption(option);
      });
    },
    changeBigpicModal(status) {
      if (status === false) {
        this.bigPictureEchartInstance.dispose();
      }
    },
  },
  mounted() {
    if (this.$route.query.type) {
      this.changeUrlParamVx({ urlParam: this.$route.query.type });
    }

    if (this.testedSuite) {
      this.getMainTableData();
    }

    this.variationTableData = [
      {
        variation: 'hostname',
        firstBuild: 'dc-4g.taishan200-2280-2s64p-256g--a86',
        secondBuild: 'the other one',
      },
      {
        variation: 'domain name',
        firstBuild: 'is not yet varied  between rebuilds of openEuler',
        secondBuild: '',
      },
      {
        variation: 'env TZ',
        firstBuild: 'TZ="/usr/share/zoneinfo/Etc/GMT+8"',
        secondBuild: 'TZ="/usr/share/zoneinfo/Etc/GMT+9"',
      },
      {
        variation: 'env Lang',
        firstBuild: 'LANG="en_US.UTF-8"',
        secondBuild: 'same for both build',
      },
      {
        variation: 'env LC_ALL',
        firstBuild: 'LANG="en_US.UTF-8"',
        secondBuild: 'same for both build',
      },
      {
        variation: 'the build path',
        firstBuild: 'is not yet varied between rebuilds of openEuler',
        secondBuild: '',
      },
      {
        variation: 'env path',
        firstBuild:
          "is set to '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'",
        secondBuild: '',
      },
      {
        variation: 'env USER',
        firstBuild: 'root',
        secondBuild: 'same for both build',
      },
      {
        variation: 'user/uid',
        firstBuild: 'root/0',
        secondBuild: 'same for both build',
      },
      {
        variation: 'group/gid',
        firstBuild: 'root/0',
        secondBuild: 'same for both build',
      },
      {
        variation: 'kernel version',
        firstBuild:
          'Linux 1a705bb7fd7b 4.19.90-2003.4.0.0036.oe1.aarch64 #1 SMP Mon Mar 23 19:06:43 UTC 2020 aarch64 aarch64 aarch64 GNU/Linux',
        secondBuild: 'same for both build',
      },
      {
        variation: 'umask',
        firstBuild: '0002',
        secondBuild: 'same for both build',
      },
      {
        variation: 'CPU type',
        firstBuild: 'Kunpeng-920',
        secondBuild: 'same for both build',
      },
      {
        variation: '/bin/sh',
        firstBuild: '/bin/bash',
        secondBuild: 'same for both build',
      },
      {
        variation: 'year month date',
        firstBuild: 'Mon Feb 28 CST 2022',
        secondBuild: 'same for both build',
      },
      {
        variation: 'hour minute',
        firstBuild: '10:42:14',
        secondBuild: 'same for both build',
      },
      {
        variation: 'File system',
        firstBuild: 'tmpfs',
        secondBuild: '',
      },
      {
        variation: 'everything else...',
        firstBuild:
          'is likely the same. There will be more variations in the wild.',
        secondBuild: '',
      },
    ];
  },
};
</script>

<style lang="less" scoped>
.main {
  padding: 30px 0px;
  margin: 0 auto;
  text-align: left;
  width: 95%;
  min-width: 650px;
  font-size: 0.9em;

  .topTitle {
    .text {
      font-weight: bold;
      font-size: 24px;
      margin-left: 10px;
    }
  }

  .content {
    margin-top: 20px;

    .innerTitle {
      margin-top: 10px;
      font-weight: bold;
      font-size: 1.2em;
    }

    .innerTitle2 {
      font-size: 1.4em;
      margin-top: 20px;
      font-weight: bold;
      color: #012fa8;
    }
  }

  .mainTable {
    margin-top: 30px;

    .mainTableData {
      color: #07b;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  /deep/.colHover {
    &:hover {
      text-decoration: underline;
    }
  }

  .picturesWrap {
    margin-top: 30px;
    display: flex;
    .smallPicture {
      width: 20%;
      height: 174px;
      border: 1px solid #e8eaec;
      margin: 0 3px;
    }
  }

  .openEulerDiv {
    margin-top: 30px;
    height: 716px;
  }

  .variation {
    margin-top: 30px;
  }
}

#bigPicture {
  width: 1920px;
  height: 1080px;
  background: #fff;
  padding: 50px;
}
</style>
