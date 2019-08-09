<template>
  <a class="link-button">
    <slot />
  </a>
</template>

<script type="text/javascript">
export default {
  name: 'LinkButton'
}
</script>

<style lang="stylus" scoped>
.link-button
  color #007FFF
  cursor move
</style>
