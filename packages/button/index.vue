<template>
  <button
    :disabled="disabled"
    @click="onClick"
    :class="[
      'wel-button',
      'wel-button--rounded',
      size ? `wel-button--${size}` : '',
      type ? ` wel-button--${type}` : ''
    ]"
  >
    <span class="wel-button-text">
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script lang="ts">
import { Vue, Prop, Emit, Component } from 'vue-property-decorator'

@Component({
  name: 'wel-button'
})
export default class Button extends Vue {
  @Prop() private type!: string

  @Prop() private size!: string

  @Prop({ default: false }) private disabled!: boolean

  @Emit('click') emitClick(): void {}

  private onClick() {
    this.emitClick()
  }
}
</script>
