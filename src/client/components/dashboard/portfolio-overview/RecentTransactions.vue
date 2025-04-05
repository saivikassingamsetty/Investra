<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Recent Transactions</h2>
    <!-- Recent Transactions Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b bg-gray-100">
            <th class="py-2 px-3 text-gray-700">Type</th>
            <th class="py-2 px-3 text-gray-700">Stock</th>
            <th class="py-2 px-3 text-gray-700">Qty</th>
            <th class="py-2 px-3 text-gray-700">Price</th>
            <th class="py-2 px-3 text-gray-700">Total</th>
            <th class="py-2 px-3 text-gray-700">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{id, stock, qty, price, total, date, type} in transactions"
            :key="id"
            class="border-b hover:bg-gray-200"
          >
            <td class="py-2 px-3" :class="type === 'BUY' ? 'text-green-600' : 'text-red-600'">{{ type }}</td>
            <td class="py-2 px-3 text-gray-800">{{ stock }}</td>
            <td class="py-2 px-3 text-gray-800">{{ qty }}</td>
            <td class="py-2 px-3 text-gray-800">₹{{ price }}</td>
            <td class="py-2 px-3 text-gray-800">₹{{ total }}</td>
            <td class="py-2 px-3 text-gray-800">{{ date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
  {id: 2, type: 'BUY', stock: 'Skipper', qty: 10, price: 1200, total: 12000, date: '26 Feb 2025'},
  {id: 3, type: 'BUY', stock: 'Exicom', qty: 10, price: 600, total: 6000, date: '26 Feb 2025'},
  {
    id: 4,
    type: 'SELL',
    stock: 'Infibeam',
    qty: 1000,
    price: 20,
    total: 20000,
    date: '26 Feb 2025',
  },
])
</script>
