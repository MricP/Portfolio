<script setup lang="ts">
const competencesStage = [
    { ref: 'AC21.01',  desc: 'stage.skills.ac2101' },
    { ref: 'AC21.02',  desc: 'stage.skills.ac2102' },
    { ref: 'AC21.03',  desc: 'stage.skills.ac2103' },
    { ref: 'AC21.04',  desc: 'stage.skills.ac2104' },
    { ref: 'AC22.01',  desc: 'stage.skills.ac2201' },
    { ref: 'AC22.02',  desc: 'stage.skills.ac2202' },
    { ref: 'AC22.03',  desc: 'stage.skills.ac2203' },
    { ref: 'AC23.01',  desc: 'stage.skills.ac2301' },
    { ref: 'AC23.02',  desc: 'stage.skills.ac2302' },
    { ref: 'AC23.03',  desc: 'stage.skills.ac2303' },
    { ref: 'AC24.01',  desc: 'stage.skills.ac2401' },
    { ref: 'AC24.03',  desc: 'stage.skills.ac2403' },
    { ref: 'AC24.04',  desc: 'stage.skills.ac2404' },
    { ref: 'AC25.01',  desc: 'stage.skills.ac2501' },
    { ref: 'AC25.02',  desc: 'stage.skills.ac2502' },
    { ref: 'AC25.03',  desc: 'stage.skills.ac2503' },
    { ref: 'AC26.01',  desc: 'stage.skills.ac2601' },
    { ref: 'AC26.02',  desc: 'stage.skills.ac2602' }
]
</script>

<template>
  <div class="mt-16 bg-[#d9d9d920] backdrop-blur-md border border-[#d9d9d9] rounded-3xl p-8 overflow-hidden">
    <h3 class="text-3xl font-bold mb-8 flex items-center gap-4 text-black">
      <div class="bg-gradient-to-br from-[#A9A9FF] to-[#D9D9D9] w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-[#A9A9FF]/30">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
      </div>
      {{ $t('stage.comp_title') }}
    </h3>

    <div class="overflow-x-auto rounded-2xl border border-[#d9d9d9] bg-white shadow-sm">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-gray-50 border-b border-[#d9d9d9]">
            <th class="p-5 font-bold text-gray-600 uppercase tracking-wider text-sm w-32">{{ $t('stage.comp_ref') }}</th>
            <th class="p-5 font-bold text-gray-600 uppercase tracking-wider text-sm">Description</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr v-for="(comp, index) in competencesStage" :key="index" class="border-b border-gray-100 hover:bg-[#A9A9FF]/5 transition-colors">
            <td class="p-5 font-bold text-[#6B6BFF]">{{ comp.ref }}</td>
            <td class="p-5 font-light">{{ $t(comp.desc) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
