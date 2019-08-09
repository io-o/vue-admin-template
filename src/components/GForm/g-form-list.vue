<template>
  <draggable
    v-model="pageData[list]"
    :group="{name:'widget'}"
    ghost-class="ghost"
    :swap-threshold="0.5"
    :animation="100"
    class="widget-form-list"
    :class="{'widget-empty': pageData[list].length === 0}"
    @add="handleWidgetAdd"
  >
    <template v-for="(item, index) in pageData[list]">
      <div :key="item.key" class="widget-view" :class="{active: selectWg.key === item.key}" @click="handleSelectWidget(index)">
        <!-- 输入框 -->
        <GInput :item="item" />
      </div>
    </template>
  </draggable>
</template>

<script type="text/javascript">
import Draggable from 'vuedraggable'
import { mapState } from 'vuex'
import GInput from './g-input'
export default {
  name: 'GFrom',
  components: {
    GInput,
    Draggable
  },

  props: {
    list: String
  },

  computed: {
    ...mapState({
      selectWg: state => state.form.selectWg,
      pageData: state => state.form.pageData
    })
  },

  methods: {
    handleWidgetAdd(evt) {
      const newIndex = evt.newIndex
      const elKey = Date.now() + '_' + Math.ceil(Math.random() * 1000000)
      console.log(this.pageData[this.list][newIndex])
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
