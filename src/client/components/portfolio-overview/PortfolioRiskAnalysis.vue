<template>
  <div class="grid grid-cols-12 gap-6 p-6">
    <!-- Portfolio Diversification Score (Sector-wise) -->
    <div class="col-span-4 bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
      <h2 class="text-lg font-semibold mb-4">Sector-wise Diversification</h2>
      <div ref="diversificationChart" class="h-44 w-full"></div>
    </div>

    <!-- Portfolio Risk Assessment -->
    <div class="col-span-4 bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
      <h2 class="text-lg font-semibold mb-4">Risk Assessment</h2>
      <div ref="riskChart" class="h-44 w-full"></div>
    </div>

    <!-- Portfolio Scenario Simulator -->
    <div class="col-span-4 bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
      <h2 class="text-lg font-semibold mb-4">Scenario Simulator</h2>
      <div ref="simulatorChart" class="h-44 w-full"></div>
      <div class="flex items-center gap-3 mt-4 w-full">
        <span class="text-sm text-gray-600">-10%</span>
        <input type="range" v-model="growthRate" min="-10" max="20" step="1" class="w-full" />
        <span class="text-sm text-gray-600">+20%</span>
      </div>
      <p class="text-sm text-gray-800 mt-2">
        Projected Growth:
        <span class="font-bold">{{ growthRate }}%</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue'
import * as echarts from 'echarts'

const diversificationChart = ref(null)
const riskChart = ref(null)
const simulatorChart = ref(null)
const growthRate = ref(5)
const useLogScale = ref(false)

const initDiversificationChart = () => {
  const chart = echarts.init(diversificationChart.value)
  chart.setOption({
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          {value: 30, name: 'Technology'},
          {value: 20, name: 'Finance'},
          {value: 15, name: 'Healthcare'},
          {value: 10, name: 'Energy'},
          {value: 10, name: 'Consumer Goods'},
          {value: 15, name: 'Others'},
        ],
        label: {show: true, formatter: '{b}: {d}%'},
      },
    ],
  })
}

const initRiskChart = () => {
  const chart = echarts.init(riskChart.value)
  chart.setOption({
    series: [
      {
        type: 'bar',
        data: [45],
        label: {show: true, position: 'top', formatter: '{c}%'},
        barWidth: '40%',
        itemStyle: {color: '#E74C3C'},
      },
    ],
    xAxis: {type: 'category', data: ['Risk Level']},
    yAxis: {type: 'value', max: 100},
  })
}

const initSimulatorChart = () => {
  const chart = echarts.init(simulatorChart.value)
  const baseValue = 100
  const years = ['Now', '1Y', '2Y', '3Y', '5Y']
  const projectedValues = years.map((_, i) => Math.round(baseValue * Math.pow(1 + growthRate.value / 100, i)))

  chart.setOption({
    tooltip: {
      trigger: 'axis',
      formatter: (params) => `${params[0].axisValue}: ₹${params[0].data}`,
    },
    xAxis: {type: 'category', data: years, axisLabel: {color: '#555'}},
    yAxis: {type: 'value', axisLabel: {formatter: '₹{value}'}, splitLine: {show: true}},
    grid: {left: '10%', right: '10%', bottom: '15%'},
    series: [
      {
        type: 'line',
        data: projectedValues,
        smooth: true,
        lineStyle: {color: '#3498DB'},
        areaStyle: {color: '#AED6F1'},
        label: {show: true, formatter: '₹{c}', position: 'top'},
      },
    ],
  })
}

onMounted(() => {
  initDiversificationChart()
  initRiskChart()
  initSimulatorChart()
})

watch([growthRate, useLogScale], initSimulatorChart)
</script>

<style scoped>
.h-44 {
  height: 11rem;
}
</style>
