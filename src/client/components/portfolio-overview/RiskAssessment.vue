<template>
  <div ref="riskAssessment" class="h-72 w-full" style="height: 400px"></div>
</template>

<script setup lang="ts">
import {nextTick, onMounted, ref} from 'vue'
import * as echarts from 'echarts/core'
import {BarChart} from 'echarts/charts'
import {LabelLayout} from 'echarts/features'
import {CanvasRenderer} from 'echarts/renderers'
import {TitleComponent, TooltipComponent} from 'echarts/components'

echarts.use([BarChart, LabelLayout, CanvasRenderer, TitleComponent, TooltipComponent])

const riskAssessment = ref<HTMLDivElement | null>(null)

const riskAssessmentData = [
  {value: 45, name: 'Low Risk', itemStyle: {color: '#67c23a'}},
  {value: 30, name: 'Medium Risk', itemStyle: {color: '#e6a23c'}},
  {value: 15, name: 'High Risk', itemStyle: {color: '#f56c6c'}},
]

const option = {
  title: {
    text: 'Risk Assessment',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}%',
  },
  xAxis: {
    type: 'category',
    data: riskAssessmentData.map((item) => item.name),
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Risk',
      type: 'bar',
      data: riskAssessmentData,
      itemStyle: {
        borderRadius: 8,
      },
      label: {
        show: true,
        position: 'top',
        formatter: `{c}%`,
      },
    },
  ],
}

const initRiskAssessment = () => {
  if (riskAssessment.value) {
    const chart = echarts.init(riskAssessment.value)
    chart.setOption(option)

    window.addEventListener('resize', () => chart.resize())
  } else {
    console.log('Unable to find riskAssessment component')
  }
}

onMounted(() => {
  nextTick(() => {
    initRiskAssessment()
  })
})
</script>
