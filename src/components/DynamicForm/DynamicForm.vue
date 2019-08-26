<template>
  <el-form
    class="dynamic-form"
    :model="value"
    v-bind="formConfig"
  >
    <div
      v-for="group in formConfig.groupConfig"
      :key="group.id"
    >
    <!-- 渲染table -->
      <dynamic-form-table
        v-if="group.isMore"
        :item="group"
        v-bind="group"
        :value="value" />

      <!-- 渲染表单 -->
      <dynamic-form-item
        v-if="!group.isMore"
        v-for="item in group.formItemList"
        :key="item.key"
        :item="item"
        v-bind="item"
        :value="value[item.key]"
        @input="handelInput($event, item.key)"
      />
    </div>
    <slot />
  </el-form>
</template>

<script>
export default {
  name: 'DynamicForm',
  props: {
    formConfig: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },

  created() {
    this.setDefaultValue()
  },

  methods: {
    setDefaultValue() {
      // 设置初始值
      let groupLength = this.formConfig.groupConfig.length
      let that = this
      for (let i = 0; i < groupLength; i++) {
        that.formConfig.groupConfig[i].formItemList.forEach(item => {
          const { key, value } = item
          if (that.value[key] === undefined || that.value[key] === null) {
            that.$set(that.value, key, value)
          }
          if (item.defaultValue) {
            that.$set(that.value, key, item.defaultValue)
          }
        })
      }
    },
    handelInput(val, key) {
      this.$set(this.value, key, val)
    }
  }
}
</script>
