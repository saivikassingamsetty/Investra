<template>
  <ag-grid-vue
    :style="{width: '100%', height: '500px'}"
    class="grid gridHeight ag-theme-alpine"
    :class="themeClass"
    :columnDefs="columnDefs"
    :rowData="rowData"
    rowModelType="clientSide"
    @grid-ready="onGridReady"
  ></ag-grid-vue>
  <!-- <TradingViewWidget /> -->
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'
import {AgGridVue} from 'ag-grid-vue3'
import {
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  ModuleRegistry,
  AllCommunityModule,
  provideGlobalGridOptions,
  type ValueGetterParams,
  type ValueFormatterFunc,
} from 'ag-grid-community'
import TickerCellRenderer from './TickerCellRenderer.vue'
import TradingViewWidget from './TradingViewWidget.vue'
import {getData} from '@/composables/portfolio-grid/use-grid-data'

ModuleRegistry.registerModules([ClientSideRowModelModule, ColumnAutoSizeModule, AllCommunityModule])

provideGlobalGridOptions({theme: 'legacy'})

const numberFormatter: ValueFormatterFunc = (params) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 2,
  })
  return params.value == null ? '' : formatter.format(params.value)
}

const columnDefs = ref([
  {
    field: 'ticker',
    headerName: 'Ticker',
    cellRenderer: TickerCellRenderer,
    minWidth: 160,
    initialWidth: 100,
  },
  {
    headerName: 'Price',
    field: 'price',
    sortable: true,
    filter: 'agNumberColumnFilter',
    type: 'rightAligned',
    valueFormatter: (params: {value: number}) => `₹${params.value.toFixed(2)}`,
    cellRenderer: 'agAnimateShowChangeCellRenderer',
    minWidth: 200,
    initialWidth: 160,
  },
  {
    colId: 'p&l',
    headerName: 'P&L',
    cellDataType: 'number',
    filter: 'agNumberColumnFilter',
    type: 'rightAligned',
    cellRenderer: 'agAnimateShowChangeCellRenderer',
    valueGetter: ({data}: ValueGetterParams) => data && data.quantity * (data.price / data.purchasePrice),
    valueFormatter: numberFormatter,
    minWidth: 200,
    initialWidth: 160,
  },

  {
    colId: 'totalValue',
    headerName: 'Total Value',
    type: 'rightAligned',
    cellDataType: 'number',
    filter: 'agNumberColumnFilter',
    valueGetter: ({data}: ValueGetterParams) => data && data.quantity * data.price,
    cellRenderer: 'agAnimateShowChangeCellRenderer',
    valueFormatter: numberFormatter,
    minWidth: 240,
    initialWidth: 160,
  },
  {
    field: 'quantity',
    headerName: 'Shares',
    cellDataType: 'number',
    filter: 'agNumberColumnFilter',
    type: 'rightAligned',
    minWidth: 140,
    initialWidth: 160,
  },
  {
    field: 'purchaseDate',
    headerName: 'Last Bought',
    cellDataType: 'date',
    filter: 'agDateColumnFilter',
    valueFormatter: (params: {value: number}) => new Date(params.value).toLocaleDateString(),
    minWidth: 160,
    initialWidth: 160,
  },
  {
    colId: 'ownedSince',
    headerName: 'Owned Since',
    cellDataType: 'number',
    valueGetter: ({data}: ValueGetterParams) => {
      const purchaseDate = new Date(data.purchaseDate)
      const now = new Date()
      const diffTime = Math.abs(now.getTime() - purchaseDate.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    },
    valueFormatter: (params: {value: number}) => `${params.value} days`,
    minWidth: 140,
    initialWidth: 160,
  },
  {
    colId: 'xirr',
    headerName: 'XIRR',
    cellDataType: 'number',
    type: 'rightAligned',
    valueGetter: ({data}: ValueGetterParams) => {
      // This is a placeholder. You'll need to implement the actual XIRR calculation
      // XIRR calculation typically requires cash flow data which is not present in the current data structure
      return 0.05 // 5% as an example
    },
    valueFormatter: (params: {value: number}) => `${(params.value * 100).toFixed(2)}%`,
    minWidth: 100,
  },
])

const rowData = ref(getData())

const gridApi: any = ref(null)

const resizeGrid = () => {
  if (gridApi.value) {
    gridApi.value.sizeColumnsToFit()
    // Optionally, if you want to adjust row height:
    // gridApi.value.resetRowHeights();
  }
}

const onGridReady = (params: any) => {
  gridApi.value = params.api
  resizeGrid()
}

const updatePrices = () => {
  console.log(gridApi)
  if (!gridApi.value) return

  const rowData = gridApi.value.getRenderedNodes().map((node: any) => node.data)
  rowData.forEach((data: any) => {
    // Simulate a price change
    data.price = data.price * (1 + (Math.random() - 0.5) * 0.1)
  })

  gridApi.value.applyTransactionAsync({update: rowData})
}

const gridTheme = 'ag-theme-quartz'
const isDarkMode = false
const themeClass = `${gridTheme}${isDarkMode ? '-dark' : ''}`

let intervalId = 0

onMounted(() => {
  window.addEventListener('resize', resizeGrid)
  intervalId = window.setInterval(updatePrices, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
  window.removeEventListener('resize', resizeGrid)
})
</script>

<style>
@import 'ag-grid-community/styles/ag-grid.css';
@import 'ag-grid-community/styles/ag-theme-alpine.css';

:root {
  --layout-grid-header-height: 32px;
  --layout-grid-margin: 32px;
}

body {
  margin: 0;
}

.grid {
  --ag-value-change-value-highlight-background-color: #44ad4961;
  --ag-value-change-delta-down-color: rgb(255, 0, 92);
  --ag-value-change-delta-up-color: rgb(53, 182, 90);
}

.gridHeight {
  height: calc(100vh - var(--layout-grid-header-height) - var(--layout-grid-margin));
  margin: var(--layout-grid-margin);
}

.ag-theme-quartz-dark .ag-row {
  --ag-row-hover-color: #323a46;
}

@media screen and (max-width: 720px) {
  div.ag-theme-quartz,
  div.ag-theme-quartz-dark {
    --ag-font-size: 12px;
    --ag-grid-size: 6px;
  }
}

.ag-theme-quartz .ag-row-group,
.container {
  width: 100%;
}

.ag-theme-quartz .ag-value-change-value-highlight,
.ag-theme-quartz-dark .ag-value-change-value-highlight {
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 12px;
  margin-left: 4px;
}

.ag-right-aligned-cell {
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.01em;
}

.ticker-name {
  opacity: 0.8;
}
</style>
