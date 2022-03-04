<template>
  <div class="about">
    <h1>Buttons</h1>
    <div>
      <wel-button type="primary" size="small">了解更多</wel-button>

      <wel-button type="primary">了解更多</wel-button>
      <wel-button type="primary" size="large">了解更多</wel-button>
      <wel-button type="primary" disabled>了解更多</wel-button>
      <wel-button class="override-style" type="primary" size="small"
        >了解更多</wel-button
      >
    </div>
    <div>
      <wel-button size="small">了解更多</wel-button>
      <wel-button>了解更多</wel-button>
      <wel-button size="large">了解更多</wel-button>
      <wel-button disabled>了解更多</wel-button>
      <wel-button class="override-style" size="small">了解更多</wel-button>
    </div>
    <div>
      <wel-button type="text" size="small">了解更多</wel-button>
      <wel-button type="text">了解更多</wel-button>
      <wel-button type="text" size="large">了解更多</wel-button>
      <wel-button type="text" disabled>了解更多</wel-button>
      <wel-button class="override-style" type="text">了解更多</wel-button>
    </div>
    <div>
      <wel-button type="outline" size="small">了解更多</wel-button>
      <wel-button type="outline">了解更多</wel-button>
      <wel-button type="outline" size="large">了解更多</wel-button>
      <wel-button type="outline" disabled>了解更多</wel-button>
      <wel-button class="override-style" type="outline">了解更多</wel-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.override-style::v-deep {
  background-color: aqua;

  .wel-button-text {
    color: white;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button } from '@packages/index'

@Component({
  components: {
    'wel-button': Button
  }
})
export default class Buttons extends Vue {}
</script>
