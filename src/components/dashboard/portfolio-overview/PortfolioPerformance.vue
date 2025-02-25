<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Portfolio Performance</h2>
    <div ref="combinedChart" class="width-full" style="height: 400px"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { onMounted, ref, nextTick } from 'vue'

echarts.use([
  LineChart,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  CanvasRenderer,
])

const combinedChart = ref(null)

// Sample data for portfolio and benchmark performance
const portfolioData = [10, 15, 8, 12, 14, 20, 23]
const benchmarkData = [8, 10, 15, 11, 16, 18, 20]
const timeLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

const combinedOptions = {
  title: {
    text: 'Portfolio vs. Benchmark Performance',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['Portfolio', 'Benchmark'],
    bottom: 0,
    left: 'center',
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '20%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: timeLabels,
  },
  yAxis: {
    type: 'value',
  },
  dataZoom: [
    {
      type: 'slider',
      xAxisIndex: 0,
      start: 0,
      end: 100,
    },
    {
      type: 'inside',
      xAxisIndex: 0,
      start: 0,
      end: 100,
    },
  ],
  series: [
    {
      name: 'Portfolio',
      type: 'line',
      data: portfolioData,
      smooth: true,
      lineStyle: { width: 2 },
      emphasis: {
        focus: 'series',
      },
    },
    {
      name: 'Benchmark',
      type: 'line',
      data: benchmarkData,
      smooth: true,
      lineStyle: { width: 2 },
      emphasis: {
        focus: 'series',
      },
    },
  ],
}

const renderChart = () => {
  if (combinedChart.value) {
    const myChart = echarts.init(combinedChart.value)
    myChart.setOption(combinedOptions)

    // Add reset functionality by listening to an event
    window.addEventListener('resize', () => myChart.resize())

    // Optional: you can create a button to reset the zoom
    // This event listener resets the zoom to full extent
    // const resetZoomButton = document.createElement('button')
    // resetZoomButton.innerText = 'Reset Zoom'
    // resetZoomButton.onclick = () => myChart.dispatchAction({ type: 'dataZoom', start: 0, end: 100 })
    // document.querySelector('#container')?.appendChild(resetZoomButton)
  }
}

onMounted(() => {
  nextTick(() => {
    renderChart()
  })
})
</script>
