<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Portfolio Allocation</h2>
    <div ref="pieChart" class="w-full h-56" style="height: 400px"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core'
import {
  TooltipComponent,
  type TooltipComponentOption,
  TitleComponent,
  type TitleComponentOption,
  LegendComponent,
  type LegendComponentOption,
} from 'echarts/components'
import { PieChart, type PieSeriesOption } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
])

const pieChart = ref(null)

type EchartsOption = echarts.ComposeOption<
  TitleComponentOption | TooltipComponentOption | LegendComponentOption | PieSeriesOption
>

const allocationData = [
  { name: 'Stocks', value: 40 },
  { name: 'Mutual Funds', value: 40 },
  { name: 'Crypto', value: 5 },
  { name: 'Bonds', value: 5 },
  { name: 'Cash', value: 5 },
  { name: 'FD', value: 5 },
]

const options: EchartsOption = {
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
  series: [
    {
      name: 'Portfolio',
      type: 'pie',
      radius: '50%',
      data: allocationData,
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

const renderChart = () => {
  if (pieChart.value) {
    const myChart = echarts.init(pieChart.value)
    myChart.setOption(options)
    window.addEventListener('resize', () => myChart.resize())
  }
}

onMounted(() => {
  nextTick(() => {
    renderChart()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', renderChart)
})
</script>
