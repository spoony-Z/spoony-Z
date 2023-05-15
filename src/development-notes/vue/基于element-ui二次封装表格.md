# 基于element-ui 二次封装(**未完成**)
<!-- more -->

**对于组件的封装先要了解以下属性**
## $attrs 属性
> 使用 `v-bind="$attrs"` 可以将父组件的属性传递给子组件<br />
> 子组件使用 `$attrs` 来获取父组件传递给子组件的属性值<br />
> 子组件就可以通过 `$attrs` 来访问和使用父组件传递的属性值。<br />
> 子组件打印 `console.log(this.$attrs);` <br />

## $listeners 属性
> 使用 `v-on="$listeners"` 可以将父组件的事件监听器传递给子组件<br />
> 子组件可以通过访问 `$listeners` 来获取父组件传递给子组件事件监听器<br />
> 子组件就可以通过 `$listeners` 来访问和使用父组件传递的监听器。<br />
> 子组件打印 `console.log(this.$listeners);`

## @eventname
> 监听父组件传递过来的事件，并在相应的事件处理函数中处理这些事件<br />

## $scopedSlots
> 用于访问父组件的具名插槽

## includes()
> 在 js 中字符串 **includes** 方法，查找字符串，如果找到返回 **true**
> 
```vue
<template>
  <div>
    <el-table ref="table" :data="tempData" :header-cell-style="headerCellStyle" :cell-style="cellStyle" v-bind="$attrs"
      v-on="$listeners">
      <!-- append 表格底部 -->
      <template v-if="$slots.append" slot="append">
        <slot name="append"></slot>
      </template>
      
      <template v-for="item in columns">
        <!-- 判断是否有'selection', 'index' 属性 父组件表头数据中加入type -->
        <el-table-column v-if=" item.type && ['selection', 'index'].includes(item.type)" :key="`${item.prop}-if`" v-bind="item">
          <template v-slot:header="scope">
            <slot :name="`header-${item.prop}`" v-bind="scope"></slot>
          </template>
        </el-table-column>

        <el-table-column v-else :key="item.prop" v-bind="item">
          <!-- v-if="$scopedSlots[`header-${item.prop}`] 判断名为 item.prop 的插槽是否存在
               自定义表头文字 父组件中 <template #header-列的字段名> 例如：<template #header-name>
          -->
          <template v-slot:header="scope">
            <span v-if="$scopedSlots[`header-${item.prop}`]">
              <slot :name="`header-${item.prop}`" v-bind="scope"></slot>
            </span>
            <span v-else>{{ scope.column.label }}</span>
          </template>
          <template slot-scope="scope">
            <span v-if="$scopedSlots[item.prop]">
              <slot :name="item.prop" :scope="scope" :item="item"></slot>
            </span>
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 前端根据数据列表分页 -->
    <!-- <el-pagination class="pagination" v-bind="tempPagination" :current-page="currentPage" :page-size="pageSize"
      :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination> -->
    <!-- 后台分页 -->
      <!-- <el-pagination class="pagination" v-bind="tempPagination" :current-page="currentPage" :page-size="pageSize"
      :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination> -->
  </div>
</template>
<script>
const defaultPagination = { background: true, layout: 'total, sizes, prev, pager, next, jumper' }
export default {
  name: 'newTable',
  props: {
    /** 表头数据 */
    columns: {
      type: Array,
      default: () => []
    },
    /** 
     * 分页数据对象 例如：
     * {
     *  currentPage: 1, 当前页
     *  pageSize: 10, 每页数据
     * } 
     **/
    pagination: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Array,
      default: () => []
    },
    /** 表头单元格样式配置 */
    headerCellStyle: {
        type: Function || Object,
        default: () => {
        return {
          'background-color': '#f5f6f7',
          'font-size': '12px',
          'padding': '10px',
        }
      }
    },
    /** 表格单元格的样式配置 */
    cellStyle: {
      type: Function || Object,
      default: () => {
        return {
          'font-size': '12px',
          'padding': '10px'
        }
      }
    },
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      tempData: [],
    }
  },
  computed: {
    paging() {
      const offset = (this.currentPage - 1) * this.pageSize
      return { offset, limit: this.pageSize }
    },
    total() {
      // return this.data?.length || 0
      return this.data?.length || 0
    },
    tempPagination() {
      return { ...defaultPagination, ...this.pagination }
    }
  },
  watch: {
    pagination: {
      handler(nVal) {
        this.currentPage = nVal.currentPage || 1
        this.pageSize = nVal.pageSize || nVal.pageSizes?.[0] || 10
      },
      immediate: true,
      deep: true,
    },
    paging: {
      handler() {
        this.getTableData()
      },
      immediate: true,
      deep: true,
    }
  },
  mounted() {
    const tempStore = this.$refs?.table || {}
    for (const key in tempStore) {
      if (typeof tempStore[key] === 'function') {
        this[key] = tempStore[key]
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getTableData();
    },
    getTableData() {
      const { offset, limit } = this.paging || {};
      this.tempData = this.data.filter((v, i) => i >= offset && i < (offset + limit))
    },
  }

}
</script>
```