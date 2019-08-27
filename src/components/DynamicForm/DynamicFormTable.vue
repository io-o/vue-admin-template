<template>
  <el-table
    :data="item.data"
    border
  >
    <el-table-column
      v-for="(column, index) in item.columnData"
      :key="column.key"
      :prop="column.key"
      :label="column.label"
    >
      <template slot-scope="scope">
        <span v-if="index === 0">
          {{scope.row[column.value]}}
        </span>
        <el-input 
          v-else-if="column.type === 'input'"
          v-model="scope.row[column.value]" />
        <!-- <el-select  v-else placeholder="请选择">
          <el-option
            v-for="option in column.defaultValue"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select> -->
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
  },
  data() {
    return {
      tableData: []
    }
  },
}
</script>
