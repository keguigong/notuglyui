<template>
  <div class="about">
    <h1>Buttons</h1>
    <div>
      <wel-button type="primary" size="small">CLICK HERE</wel-button>
      <wel-button type="primary">CLICK HERE</wel-button>
      <wel-button type="primary" size="large">CLICK HERE</wel-button>
      <wel-button type="primary" disabled>CLICK HERE</wel-button>
    </div>
    <div>
      <wel-button size="small">CLICK HERE</wel-button>
      <wel-button>CLICK HERE</wel-button>
      <wel-button size="large">CLICK HERE</wel-button>
      <wel-button disabled>CLICK HERE</wel-button>
    </div>
    <div>
      <wel-button type="text" size="small">CLICK HERE</wel-button>
      <wel-button type="text">CLICK HERE</wel-button>
      <wel-button type="text" size="large">CLICK HERE</wel-button>
      <wel-button type="text" disabled>CLICK HERE</wel-button>
    </div>
    <div>
      <wel-button type="outline" size="small">CLICK HERE</wel-button>
      <wel-button type="outline">CLICK HERE</wel-button>
      <wel-button type="outline" size="large">CLICK HERE</wel-button>
      <wel-button type="outline" disabled>CLICK HERE</wel-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button } from '@packages/index'

@Component({
  components: {
    'wel-button': Button
  }
})
export default class ButtonView extends Vue {}
</script>
