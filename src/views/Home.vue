<template>
  <div class="home">
    <div class="left">
      <div class="headTitle" @click="goHome">
        <img src="@/assets/opengauss.png" />
      </div>
      <div class="contentBox">
        <div class="title">Suite/architecture overviews</div>
        <div class="titleInside">
          <img src="@/assets/测试默认.png" />
          <div class="text">Tested architectures</div>
        </div>
        <div class="amdArmBtn">
          <div
            :class="[
              'btnSmall',
              'first',
              architecture === 'arm64' ? 'active' : '',
            ]"
            @click="changeArchitecture('arm64')"
          >
            arm64
          </div>
          <div
            :class="['btnSmall', architecture === 'amd64' ? 'active' : '']"
            @click="changeArchitecture('amd64')"
          >
            amd64
          </div>
        </div>
        <div class="titleInside">
          <img src="@/assets/套件默认.png" />
          <div class="text">Tested suites</div>
        </div>
        <div class="longBtnWrap">
          <div
            v-for="(v, i) in testedSuitesArray"
            :key="i"
            :class="['longBtn', testedSuite === v ? 'active' : '']"
            @click="changeTestedSuites(v)"
          >
            {{ v }}
          </div>
        </div>
      </div>
      <div class="border"></div>
      <div class="contentBox box2">
        <div class="title">Reproducible openGauss overview</div>
        <div class="titleInside">
          <img src="@/assets/仪表盘默认.png" />
          <div class="text">Dashboard</div>
        </div>
        <div class="titleInside">
          <img src="@/assets/功能默认.png" />
          <div class="text">Categorized issues</div>
          <img src="@/assets/下箭头.png" />
        </div>
        <div class="titleInside">
          <img src="@/assets/归档默认.png" />
          <div class="text">Bugs filed</div>
          <img src="@/assets/下箭头.png" />
        </div>
      </div>
      <div class="border"></div>
      <div class="contentBox">
        <div class="title">The Reproducible Builds project</div>
        <div class="linkWrap">
          <div class="linkBox">
            <img src="@/assets/链接.png" />
            <a
              class="link"
              href="https://github.com/7Light/reproducibleopengauss"
              target="_blank"
              >reproducible-opengauss</a
            >
          </div>
          <div class="linkBox">
            <img src="@/assets/链接.png" />
            <a
              class="link"
              href="https://reproducible-builds.org"
              target="_blank"
              >reproducible-builds.org</a
            >
          </div>
          <div class="linkBox">
            <img src="@/assets/链接.png" />
            <span
              >Reproducible Builds -
              <a
                class="link"
                href="https://reproducible-builds.org/docs"
                target="_blank"
                >Docs</a
              >•
              <a
                class="link"
                href="https://reproducible-builds.org/news"
                target="_blank"
                >News</a
              ></span
            >
          </div>
          <div class="linkBox">
            <img src="@/assets/链接.png" />
            <span
              >Reproducible Builds in Debian -
              <a
                class="link"
                href="https://wiki.debian.org/ReproducibleBuilds"
                target="_blank"
                >Wiki</a
              ></span
            >
          </div>
          <div class="linkBox">
            <img src="@/assets/链接.png" />
            <a
              class="link"
              href="https://reproducible-builds.org/specs/source-date-epoch/"
              target="_blank"
              >SOURCE_DATE_EPOCH specification</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      testedSuitesArray: [],
    };
  },
  computed: {
    ...mapState(['testedSuite', 'architecture', 'urlParam']),
  },
  methods: {
    ...mapMutations([
      'changeTestedSuiteVx',
      'changeArchitectureVx',
      'changeUrlParamVx',
    ]),
    changeArchitecture(data) {
      this.changeArchitectureVx({ architecture: data });
    },
    changeTestedSuites(data) {
      this.changeTestedSuiteVx({ testedSuite: data });
    },
    goHome() {
      this.$router.push({
        path: '/',
      });
    },
  },
  mounted() {
    if (this.$route.query.type) {
      this.changeUrlParamVx({ urlParam: this.$route.query.type });
    }

    this.$axios.get(`${this.urlParam}/countBranch`).then((res) => {
      this.testedSuitesArray = res;
      this.changeTestedSuiteVx({ testedSuite: res[0] });
    });
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  width: 100%;
  min-height: 100vh;

  .left {
    width: 337px;
    background: #ffffff;

    .headTitle {
      width: 337px;
      height: 96px;
      background: #1aa7e8;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .contentBox {
      padding: 25px 34px;

      .title {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #92a9c8;
        line-height: 24px;
      }

      .titleInside {
        display: flex;
        align-items: center;
        margin-top: 23px;

        .text {
          width: 250px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 24px;
          margin-left: 10px;
        }
      }

      .amdArmBtn {
        display: flex;
        margin-left: 30px;
        margin-top: 11px;

        .btnSmall {
          width: 110px;
          height: 40px;
          background: #f2f4fb;
          border: 1px solid #f2f4fb;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #000000;
        }

        .first {
          margin-right: 12px;
        }

        .active {
          background: #012fa8;
          color: #ffffff;
        }
      }

      .longBtnWrap {
        margin-left: 30px;
        .longBtn {
          width: 232px;
          height: 40px;
          background: #f2f4fb;
          display: flex;
          align-items: center;
          padding: 0 15px;
          margin-top: 11px;
          cursor: pointer;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #000000;
          line-height: 24px;
        }

        .active {
          background: #012fa8;
          color: #ffffff;
        }
      }

      .linkWrap {
        .linkBox {
          display: flex;
          align-items: center;
          margin-top: 24px;

          img {
            margin-right: 10px;
          }

          .link {
            color: #0088cc;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    .box2 {
      height: 450px;
    }

    .border {
      border-bottom: 1px solid #e8eaec;
    }
  }

  .right {
    width: 100%;
    background: #ffffff;
    margin-left: 20px;
  }
}
</style>
