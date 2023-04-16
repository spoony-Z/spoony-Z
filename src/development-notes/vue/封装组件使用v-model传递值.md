# vue 封装组件 使用 v-model 传递值
<!-- more -->

### 1. 子组件

```vue
<template>
    <el-select v-model="equityId" placeholder="请选择权益名称" clearable>
      <el-option v-for="(item, index) in equityNameList" :key="index" :label="item.equityName" :value="item.equityId">
      </el-option>
    </el-select>
</template>
<script>
export default {
  name: "EquityNameList",
  data() {
    return {
      equityId: '',
      equityNameList: []
    }
  },
  watch: {
    equityId: {
      handler(val) {
        this.$emit("input", val); // 使用 input 传值
      },
      immediate: true,
      deep: false,
    },
  },
}
</script>
```

### 2. 父组件

```vue
<el-form-item label="权益名称" prop="equityId">
    <equity-name-list v-model="equityId"></equity-name-list>
</el-form-item>
import EquityNameList from "@/components/Equity-name/index.vue"
  components: {
    EquityNameList,
  },
  data() {
    return { equityId: "" }
  }
```

**注：** 子组件使用 input 传值， 父组件直接可以使用 v-model 接收子组件传过来的值，从而传递给 data 中，但是这种方式只适用于 form 表单中

