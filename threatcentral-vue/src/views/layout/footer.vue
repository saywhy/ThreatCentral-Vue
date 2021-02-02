<template>
  <div id="footer">
    <p>
      <span class="company">{{OEM.company}}</span>
      <span>版权所有</span>
    </p>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>
<style scoped lang="less">
#footer {
  background: @Color_Footer;
  p {
    line-height: 36px;
    text-align: center;
    color: @Color_9;
    .company {
      margin-right: 16px;
    }
  }
}
</style>