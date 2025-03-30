<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Recent Transactions</h2>
    <!-- Recent Transactions Table -->
    <table class="w-full text-left mt-4">
      <thead>
        <tr class="border-b">
          <th class="p-2">Type</th>
          <th class="p-2">Stock</th>
          <th class="p-2">Qty</th>
          <th class="p-2">Price</th>
          <th class="p-2">Total</th>
          <th class="p-2">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{id, stock, qty, price, total, date, type} in transactions" :key="id" class="border-b">
          <td class="p-2" :class="type == 'BUY' ? 'text-green-600' : 'text-red-600'">{{ type }}</td>
          <td class="p-2">{{ stock }}</td>
          <td class="p-2">{{ qty }}</td>
          <td class="p-2">{{ price }}</td>
          <td class="p-2">{{ total }}</td>
          <td class="p-2">{{ date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const transactions = ref([
  {
    id: 1,
    type: 'BUY',
    stock: 'Marksans',
    qty: 120,
    price: 400,
    total: 48000,
    date: '26 Feb 2025',
  },
  {id: 1, type: 'BUY', stock: 'Skipper', qty: 10, price: 1200, total: 12000, date: '26 Feb 2025'},
  {id: 1, type: 'BUY', stock: 'Exicom', qty: 10, price: 600, total: 6000, date: '26 Feb 2025'},
  {
    id: 1,
    type: 'SELL',
    stock: 'Infibeam',
    qty: 1000,
    price: 20,
    total: 20000,
    date: '26 Feb 2025',
  },
])
</script>
