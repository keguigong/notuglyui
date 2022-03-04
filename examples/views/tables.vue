<template>
  <div class="tables">
    <h1>Tables</h1>
    <wel-table
      :columns="state.columns"
      :items="state.items"
      clickableRow="true"
      :selected-index-row="selectedIndexRow"
      useTdSlot="true"
      @click-row="handleClickRow"
    >
      <template #td-nio_pn="{ indexRow }">
        <td>
          <h1>{{ indexRow }}</h1>
        </td>
      </template>

      <template #nio_pn="{ item, indexRow, indexColumn }">
        <h1>{{ item.version }} {{ indexRow }} {{ indexColumn }}</h1>
      </template>
    </wel-table>
  </div>
</template>

<style lang="scss" scoped>
.tables {
  width: 100%;
  overflow-x: auto;
  min-width: 0;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Table from '@packages/table'

@Component({
  components: {
    'wel-table': Table
  }
})
export default class Buttons extends Vue {
  private selectedIndexRow = -1

  private state = {
    columns: [
      {
        name: 'NIO料号',
        title: 'nio_pn',
        width: 120
      },
      {
        name: '版本',
        title: 'version',
        width: 120
      },
      {
        name: 'SWAP料号',
        title: 'swap_pn',
        width: 200
      },
      {
        name: '规格',
        title: 'specification',
        width: 100
      },
      {
        name: '品名',
        title: 'product_name',
        width: 200
      },
      {
        name: '供应商',
        title: 'supplier',
        width: 200
      },
      {
        name: '物料分类',
        title: 'catalog',
        width: 200
      }
    ],
    items: [
      {
        nio_pn: 'P0004772',
        version: 'AA',
        swap_pn: '——',
        specification: '——',
        product_name: '电池快换螺栓M18',
        supplier: '安国特',
        catalog: '机械'
      },
      {
        nio_pn: 'P0004772',
        version: 'AA',
        swap_pn: '——',
        specification: '——',
        product_name: '电池快换螺栓M18',
        supplier: '安国特',
        catalog: '机械'
      },
      {
        nio_pn: 'P0004772',
        version: 'AA',
        swap_pn: '——',
        specification: '——',
        product_name:
          '电池快换螺栓M18电池快换螺栓M18电池快换螺栓M18电池快换螺栓M18电池快换螺栓M18',
        supplier: '安国特',
        catalog: '机械'
      },
      {
        nio_pn: 'P0004772',
        version: 'AA',
        swap_pn: '——',
        specification: '——',
        product_name: '电池快换螺栓M18',
        supplier: '安国特',
        catalog: '机械'
      }
    ]
  }

  handleClickRow(_: any, item: any, indexRow: number, aaa: any) {
    if (indexRow == this.selectedIndexRow) this.selectedIndexRow = -1
    else this.selectedIndexRow = indexRow
  }
}
</script>
