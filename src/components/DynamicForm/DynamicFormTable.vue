<template>
  <el-table
    :data="item.defaultValue"
  >
    <el-table-column
      :prop="item.key"
      :label="item.label"
    >
      <template slot-scope="scope">
        <el-input v-if="item.type === 'input'" />
        <el-select v-else placeholder="请选择">
          <el-option
            v-for="option in item.defaultValue"
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
    }
  }
}
</script>
