<template>
  <div v-if="item.type === 'input'" :class="[item.label.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
    <!-- <div v-show="item.showLabel" :style="{width:item.label.labelWidth}">{{ item.label.labelTitle }}</div> -->
    <el-input v-model="item.value" :placeholder="item.placeholder" />
  </div>
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
