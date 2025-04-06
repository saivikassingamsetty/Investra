<template>
  <div>
    <div ref="pieChart" class="w-full h-56" style="height: 400px"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core'
import {
  TooltipComponent,
  type TooltipComponentOption,
  LegendComponent,
  type LegendComponentOption,
  ToolboxComponent,
  TitleComponent,
} from 'echarts/components'
import {PieChart, type PieSeriesOption} from 'echarts/charts'
import {LabelLayout} from 'echarts/features'
import {CanvasRenderer} from 'echarts/renderers'
import {onMounted, onBeforeUnmount, ref, nextTick} from 'vue'

// Register the components
echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
  ToolboxComponent,
  TitleComponent,
])

const pieChart = ref(null)

type EchartsOption = echarts.ComposeOption<TooltipComponentOption | LegendComponentOption | PieSeriesOption>

const originalData = [
  {name: 'Stocks', value: 40},
  {name: 'Mutual Funds', value: 40},
  {name: 'Crypto', value: 5},
  {name: 'Bonds', value: 5},
  {name: 'Cash', value: 5},
  {name: 'FD', value: 5},
]

const allocationData = ref([...originalData])

const options: EchartsOption = {
  title: {
    text: 'Portfolio Allocation',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'horizontal',
    bottom: '0',
    left: 'center',
    textStyle: {
      color: '#4B5563',
    },
  },
  toolbox: {
    show: true,
    feature: {
      restore: {show: true},
    },
  },
  series: [
    {
      name: 'Portfolio',
      type: 'pie',
      radius: '50%',
      data: allocationData.value,
      label: {
        formatter: '{b}: {d}%',
        color: '#1F2937',
        fontFamily: 'sans-serif',
      },
    },
  ],
  emphasis: {
    itemStyle: {
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
    },
  },
}

let currentResizeHandler: (() => void) | null = null

const renderChart = () => {
  if (pieChart.value) {
    const myChart = echarts.init(pieChart.value)
    myChart.setOption(options)

    myChart.on('dblclick', 'series', (params: any) => {
      if (params.componentType == 'series' && params.seriesType == 'pie') {
        if (params.name == 'Stocks') {
          allocationData.value = [
            {name: 'International Stocks', value: 40},
            {name: 'Domestic Stocks', value: 60},
          ]
        } else if (params.name == 'Mutual Funds') {
          allocationData.value = [
            {name: 'Equity Mutual Funds', value: 80},
            {name: 'Debt Mutual Funds', value: 20},
          ]
        }

        myChart.setOption({
          series: [{data: allocationData.value}],
        })
      }
    })

    myChart.getZr().on('dblclick', (event: any) => {
      if (!event.target) {
        allocationData.value = originalData
        myChart.setOption({
          series: [{data: allocationData.value}],
        })
      }
    })

    const resizeHandler = () => {
      myChart.resize()
    }
    window.addEventListener('resize', resizeHandler)
    currentResizeHandler = resizeHandler
  }
}

onMounted(() => {
  nextTick(() => {
    renderChart()
  })
})

onBeforeUnmount(() => {
  if (currentResizeHandler) {
    window.removeEventListener('resize', currentResizeHandler)
  }
})
</script>
