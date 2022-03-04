import Vue from 'vue';

export declare interface TableColumn {
  title: string;
  name: string;
  width?: number;
  sortable?: boolean;
}

export declare class Table extends Vue {
  public columns: TableColumn[];
  public items: any[];
  public clickableRow?: boolean;
  public selectedIndexRow?: boolean;
  public hideTableHead?: boolean;
  public noWrap?: boolean;
  public fulfillWidth?: boolean
  public 'click-row': (item: any, indexRow: number) => any[]
}