<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()

const categories = [
  {
    title: 'alternance.bilan.tech_title',
    icon: 'code',
    items: [
      'alternance.bilan.tech.item1',
      'alternance.bilan.tech.item2',
      'alternance.bilan.tech.item3',
      'alternance.bilan.tech.item4'
    ]
  },
  {
    title: 'alternance.bilan.meth_title',
    icon: 'chart',
    items: [
      'alternance.bilan.meth.item1',
      'alternance.bilan.meth.item2',
      'alternance.bilan.meth.item3',
      'alternance.bilan.meth.item4'
    ]
  },
  {
    title: 'alternance.bilan.prof_title',
    icon: 'people',
    items: [
      'alternance.bilan.prof.item1',
      'alternance.bilan.prof.item2',
      'alternance.bilan.prof.item3',
      'alternance.bilan.prof.item4'
    ]
  },
  {
    title: 'alternance.bilan.evol_title',
    icon: 'rocket',
    items: [
      'alternance.bilan.evol.item1',
      'alternance.bilan.evol.item2',
      'alternance.bilan.evol.item3',
      'alternance.bilan.evol.item4'
    ]
  }
]
</script>

<template>
  <div class="mt-20">
    <h3 class="text-3xl font-bold mb-8 flex items-center gap-4 text-black">
      <div class="bg-gradient-to-br from-[#A9A9FF] to-[#D9D9D9] w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-[#A9A9FF]/30">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      </div>
      {{ title }}
    </h3>
    
    <div class="bg-[#d9d9d920] backdrop-blur-md border border-[#d9d9d9] rounded-3xl p-8 md:p-10 shadow-sm mb-12">
      <p class="text-gray-700 text-lg leading-relaxed font-light italic border-l-4 border-[#A9A9FF] pl-6">
        {{ description }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(cat, index) in categories" :key="index" class="bg-white border border-[#d9d9d9] rounded-3xl p-8 hover:border-[#A9A9FF] shadow-sm hover:shadow-md transition-all duration-300 group">
        <div class="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
          <div class="w-10 h-10 rounded-xl bg-[#A9A9FF]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg v-if="cat.icon === 'code'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#6B6BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            <svg v-else-if="cat.icon === 'chart'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#6B6BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
            <svg v-else-if="cat.icon === 'people'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#6B6BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#6B6BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h4 class="text-xl font-bold text-gray-800 group-hover:text-[#6B6BFF] transition-colors">{{ $t(cat.title) }}</h4>
        </div>
        <ul class="space-y-4">
          <li v-for="(item, i) in cat.items" :key="i" class="flex items-start gap-3 text-gray-600 font-light text-base leading-relaxed">
            <svg class="h-5 w-5 text-[#A9A9FF] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            {{ $t(item) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
