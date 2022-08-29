<template>
  <div class="testResult">
    <div v-if="type === 'reproducible'">
      <div>
        {{ testResultData.buildInfos[resultIndex].firstHashkey }} |
        <a
          target="_blank"
          :href="testResultData.buildInfos[resultIndex].firstBuildInfo"
        >
          {{
            ` ${rpmName(
              testResultData.testResult[resultIndex]
            )} - firstBuildInfo `
          }}
        </a>
      </div>
      <div>
        {{ testResultData.buildInfos[resultIndex].secondHashkey }} |
        <a
          target="_blank"
          :href="testResultData.buildInfos[resultIndex].secondBuildInfo"
        >
          {{
            ` ${rpmName(
              testResultData.testResult[resultIndex]
            )} - secondBuildInfo `
          }}
        </a>
      </div>
    </div>
    <div v-else-if="type === 'unreproducible'">
      <div v-for="(v, i) in diffoscopeLogs[resultIndex]" :key="i">
        <a target="_blank" :href="v">{{ buildInfo(v) }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      testResultData: {},
      diffoscopeLogs: [],
      type: '',
      resultIndex: 0,
    };
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
      this.init();
    },
  },
  methods: {
    ...mapMutations(['changeUrlParamVx']),
    buildInfo(str) {
      return str.slice(str.lastIndexOf('/') + 1);
    },
    rpmName(str) {
      return str.slice(0, str.search(/.rpm/) + 4);
    },
    init() {
      this.resultIndex = this.$route.params.resultIndex;
      this.$axios
        .post(`${this.urlParam}/reproducible`, {
          term1: this.$route.params.tableId,
          architectures: this.architecture,
          testSuites: this.testedSuite,
        })
        .then((res) => {
          this.testResultData = res[0];
          if (this.$route.params.type === 'reproducible') {
            this.type = 'reproducible';
          } else if (this.$route.params.type === 'unreproducible') {
            this.type = 'unreproducible';
            this.diffoscopeLogs = res[0].diffoscopeLogs;
          }
        });
    },
  },
  mounted() {
    if (this.$route.query.type) {
      this.changeUrlParamVx({ urlParam: this.$route.query.type });
    }

    if (this.testedSuite) {
      this.init();
    }
  },
};
</script>

<style lang="less" scoped>
.testResult {
  padding: 50px;
}
</style>
