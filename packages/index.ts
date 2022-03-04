import Vue from 'vue'
import Button from './button'
import Table from './table'

const components: { [propsName: string]: any } = {
  Button,
  Table
}

const install = function (vue: typeof Vue): void {
  Object.keys(components).forEach((key: string) => {
    vue.component(key, components[key])
  })
}

export default {
  install,
  ...components
}

export { Button, Table }
