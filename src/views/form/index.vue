<template>
  <div class="app-container">
    <dynamic-form
      :form-config="formConfig"
      :value="value"
    />
    <el-button @click="handleClick">dd</el-button>
  </div>
</template>

<script type="text/javascript">
import baseJson from '@/assets/json/base.json'
export default {

  data() {
    return {
      value: {},
      formConfig: {
        formItemList: baseJson.input
      }
    }
  },

  methods: {
    handleClick() {
      console.log(this.value)
    }
  }
}
</script>
