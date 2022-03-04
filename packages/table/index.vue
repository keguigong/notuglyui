<template>
  <table
    :class="['wel-table', fulfillWidth ? 'wel-table--fulfill' : '']"
    :style="{ width: totalWidth + 'px' }"
  >
    <colgroup>
      <col
        v-for="(column, index) in columns"
        :key="index"
        :width="column.width"
        :style="{ width: column.width + 'px' }"
      />
    </colgroup>
    <thead class="wel-table-head">
      <tr class="wel-table-head-row">
        <th
          v-for="(column, index) in columns"
          :key="index"
          :class="[
            'wel-table-head-cell',
            noWrap ? 'wel-table-cell--nowrap' : ''
          ]"
          :style="{ width: column.width + 'px' }"
        >
          {{ column.name || column.title }}
        </th>
      </tr>
    </thead>
    <tbody class="wel-table-body">
      <tr
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'wel-table-row',
          selectedIndexRow === index ? 'wel-table-row--selected' : '',
          clickableRow ? 'wel-table-row--clickable' : ''
        ]"
        @click="emitClickRow(item, index)"
      >
        <template v-for="(column, indexColumn) in columns">
          <slot
            :name="'td-' + column.title"
            v-if="useTdSlot"
            v-bind="{ item, column, indexRow: index, indexColumn }"
          >
            <td
              :key="indexColumn"
              :class="[
                'wel-table-cell',
                noWrap ? 'wel-table-cell--nowrap' : ''
              ]"
            >
              {{ item[column.title] }}
            </td>
          </slot>

          <td
            v-else
            :key="indexColumn"
            :class="['wel-table-cell', noWrap ? 'wel-table-cell--nowrap' : '']"
          >
            <slot
              :name="column.title"
              v-bind="{ item, column, indexRow: index, indexColumn }"
            >
              {{ item[column.title] }}
            </slot>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script lang="ts">
import { Vue, Prop, Emit, Component } from 'vue-property-decorator'
import { TableColumn } from './types'

@Component({
  name: 'wel-table'
})
export default class Table extends Vue {
  @Prop() private columns!: TableColumn[]

  @Prop() private items!: any[]

  @Prop({ default: false }) private clickableRow!: boolean

  @Prop({ default: -1 }) private selectedIndexRow!: number

  @Prop() private hideTableHead!: boolean

  @Prop() private noWrap!: boolean

  @Prop({ default: false }) private fulfillWidth!: boolean

  @Prop() private useTdSlot!: boolean

  @Emit('click-row') emitClickRow(item: any, indexRow: number): any[] {
    return [item, indexRow]
  }

  mounted() {
    console.log(this.$slots)
  }

  get totalWidth() {
    let width = 0
    this.columns.forEach((element) => {
      if (element.width) width += element.width
      else width = +100
    })
    return width
  }

  getTdSlotName(value: string) {
    return 'td-' + value
  }
}
</script>
