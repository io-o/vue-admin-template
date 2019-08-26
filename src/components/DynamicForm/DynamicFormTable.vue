<template>
  <el-table
    v-if="value[item.key] !== undefined"
    :data="value[item.key]"
    border
  >
    <el-table-column
      v-for="column in item.formItemList"
      :key="column.key"
      :prop="column.key"
      :label="column.label"
    >
      <template slot-scope="scope">
        <el-input v-if="column.type === 'input'" />
        <el-select  v-else placeholder="请选择">
          <el-option
            v-for="option in column.defaultValue"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
      </template>
    </el-table-column>
  </el-table>
</template>

<script type="text/javascript">
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  watch: {
    value: {
      handler(newV, oldV) {
        console.log(this.item);
        
      },
      immediate: true
    }
  }
}
</script>
