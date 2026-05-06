<script setup lang="ts">
const bilans = [
    { title: 'stage.bilan_w_title', items: ['stage.bilan_w.l1', 'stage.bilan_w.l2', 'stage.bilan_w.l3', 'stage.bilan_w.l4'] },
    { title: 'stage.bilan_t_title', items: ['stage.bilan_t.l1', 'stage.bilan_t.l2', 'stage.bilan_t.l3', 'stage.bilan_t.l4'] },
    { title: 'stage.bilan_o_title', items: ['stage.bilan_o.l1', 'stage.bilan_o.l2', 'stage.bilan_o.l3', 'stage.bilan_o.l4'] },
    { title: 'stage.bilan_p_title', items: ['stage.bilan_p.l1', 'stage.bilan_p.l2', 'stage.bilan_p.l3', 'stage.bilan_p.l4'] }
]
</script>

<template>
  <div class="mt-20">
    <h3 class="text-3xl font-bold mb-8 flex items-center gap-4 text-black">
      <div class="bg-gradient-to-br from-[#A9A9FF] to-[#D9D9D9] w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-[#A9A9FF]/30">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
      </div>
      {{ $t('stage.bilan_title') }}
    </h3>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(bilan, index) in bilans" :key="index" class="bg-white border border-[#d9d9d9] rounded-2xl p-8 hover:border-[#A9A9FF] shadow-sm hover:shadow-md transition-all duration-300 group">
        <h4 class="text-xl font-bold mb-6 text-gray-800 group-hover:text-[#6B6BFF] transition-colors border-b border-gray-100 pb-4">{{ $t(bilan.title) }}</h4>
        <ul class="space-y-3">
          <li v-for="(item, i) in bilan.items" :key="i" class="flex items-start gap-3 text-gray-600 font-light">
            <svg class="h-5 w-5 text-[#A9A9FF] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            {{ $t(item) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
