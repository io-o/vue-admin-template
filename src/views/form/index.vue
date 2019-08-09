<template>
  <div class="app-container">
    <el-card>
      <draggable
        tag="ul"
        :list="basicComponents"
        :group="{ name:'widget', pull:'clone',put:false}"
        :sort="false"
      >
        <li v-for="(item, index) in basicComponents" :key="index" class="form-edit-widget-label">
          <LinkButton>{{ item.name }}</LinkButton>
        </li>
      </draggable>
    </el-card>
    <el-card class="d-form">
      <GFrom />
    </el-card>
    <el-card>
      <!-- <draggable tag="ul">
        <el-form>
          <Ginput :item="item" />
        </el-form>
      </draggable> -->
    </el-card>
  </div>
</template>

<script type="text/javascript">
import Draggable from 'vuedraggable'
import GFrom from '@/components/GForm/g-form'
import allWidget from '@/assets/json/base.json'
import LinkButton from '@/components/LinkButton'

export default {
  components: {
    Draggable,
    GFrom,
    LinkButton
  },

  data() {
    return {
      item: allWidget.input,
      basicComponents: allWidget.input
    }
  },

  created() {

  },

  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.app-container
  display flex
  flex-direction row
  ul
    margin 0
    li
      list-style none
      width: 100px
  .d-form
    width 100%
    height 300px
</style>
