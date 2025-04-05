<template>
  <div class="flex items-center flex-col">
    <div ref="scenarioSimulator" class="w-full" style="height: 320px"></div>
    <div class="flex flex-row justify-center items-center">
      <span>-10%</span>
      <input
        :value="projectedGrowth"
        type="range"
        name="projectedGrowth"
        id="projectedGrowth"
        :min="-10"
        :max="20"
        class="w-72 ml-2 mr-2"
        @input="updateGrowth"
      />
      <span>+20%</span>
    </div>
    <span>Projected Growth {{ projectedGrowth }}%</span>
  </div>
</template>

<script setup lang="ts">
import {nextTick, onMounted, ref} from 'vue'
import * as echarts from 'echarts/core'
import {TooltipComponent} from 'echarts/components'
import {CanvasRenderer} from 'echarts/renderers'
import {LabelLayout} from 'echarts/features'
import {LineChart} from 'echarts/charts'

echarts.use([TooltipComponent, CanvasRenderer, LineChart, LabelLayout])

const scenarioSimulator = ref<HTMLDivElement | null>(null)
let scenarioSimulatorChart: echarts.ECharts | null = null

const projectedGrowth = ref(12)
const baseData = 100

const updateScenarioSimulatorData = (growth: number) => {
  const growthFactor = 1 + growth / 100
  return Array.from({length: 5}, (_, i) => Math.round(baseData * Math.pow(growthFactor, i === 0 ? 0 : i)))
}

const options = {
  title: {
    text: 'Scenario Simulator',
    left: 'center',
  },
  xAxis: {
    type: 'category',
    data: ['Now', '1Y', '2Y', '3Y', '5Y'],
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '₹{value}',
    },
  },
  series: {
    name: 'Projected Growth',
    type: 'line',
    areaStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {offset: 0, color: 'lightblue'}, // color at the top
          {offset: 1, color: 'white'}, // color at the bottom
        ],
        global: false, // false to avoid using global coordinates
      },
    },
    itemStyle: {
      color: 'steelblue', // Line color
    },
    data: updateScenarioSimulatorData(projectedGrowth.value),
    label: {
      show: true,
      formatter: '₹{c}',
    },
  },
}

const initScenarioSimlator = () => {
  if (scenarioSimulator.value) {
    scenarioSimulatorChart = echarts.init(scenarioSimulator.value)
    scenarioSimulatorChart.setOption(options)
    window.addEventListener('resize', () => scenarioSimulatorChart?.resize())
  } else {
    console.log('Unable to find scenarioSimulator component')
  }
}

const updateGrowth = (event: Event) => {
  const growth = Number((event.target as HTMLInputElement).value)
  projectedGrowth.value = growth
  if (scenarioSimulatorChart) {
    const newOptions = {...options, series: {...options.series, data: updateScenarioSimulatorData(growth)}}
    scenarioSimulatorChart.setOption(newOptions)
  }
}

onMounted(() => {
  nextTick(() => {
    initScenarioSimlator()
  })
})
</script>
