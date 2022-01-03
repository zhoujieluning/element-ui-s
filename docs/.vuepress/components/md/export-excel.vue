<template>
  <div class="app-container">
    <div>
      <FilenameOption v-model="filename" />
      <AutoWidthOption v-model="autoWidth" />
      <BookTypeOption v-model="bookType" />
      <el-button
        :loading="downloadLoading"
        style="margin: 0 0 20px 20px"
        type="primary"
        icon="el-icon-document"
        @click="handleDownload"
      >
        Export Excel
      </el-button>
      <a
        href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html"
        target="_blank"
        style="margin-left: 15px"
      >
        <el-tag type="info">Documentation</el-tag>
      </a>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading..."
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="Id" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Readings" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Date" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{
            scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')
          }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      listLoading: true,
      downloadLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      setTimeout(() => {
        this.list = [
          {
            id: '我是id',
            title: '我是title',
            author: '我是author',
            pageviews: '我是pageviews',
            display_time: '我是时间',
          },
          {
            id: '我是id',
            title: '我是title',
            author: '我是author',
            pageviews: '我是pageviews',
            display_time: '我是时间',
          },
          {
            id: '我是id',
            title: '我是title',
            author: '我是author',
            pageviews: '我是pageviews',
            display_time: '我是时间',
          },
        ];
        this.listLoading = false;
      }, 300);
    },
    handleDownload() {
      this.downloadLoading = true;
      this.$ExportExcel((excel) => {
        const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date'];
        const filterVal = [
          'id',
          'title',
          'author',
          'pageviews',
          'display_time',
        ];
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType,
        });
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === 'timestamp') {
            // return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
    parseTime(time, cFormat) {
      if (arguments.length === 0 || !time) {
        return null;
      }
      const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
      let date;
      if (typeof time === 'object') {
        date = time;
      } else {
        if (typeof time === 'string') {
          if (/^[0-9]+$/.test(time)) {
            // support "1548221490638"
            time = parseInt(time);
          } else {
            // support safari
            // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
            time = time.replace(new RegExp(/-/gm), '/');
          }
        }

        if (typeof time === 'number' && time.toString().length === 10) {
          time = time * 1000;
        }
        date = new Date(time);
      }
      const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay(),
      };
      const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
          return ['日', '一', '二', '三', '四', '五', '六'][value];
        }
        return value.toString().padStart(2, '0');
      });
      return time_str;
    },
  },
};
</script>

<style>
.radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
}
</style>
