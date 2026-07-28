<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
  id: string
  level: string
  desc: string
}

interface Preuve {
  type: string
  label: string
  link: string
}

interface Mission {
  id: number
  title: string
  description: string
  isOpen?: boolean
  skills: Skill[]
  preuves: Preuve[]
}

const props = defineProps<{
  mission: Mission
}>()

const isOpen = ref(props.mission.isOpen || false)

const toggleMission = () => {
  isOpen.value = !isOpen.value
}

const isLightboxOpen = ref(false)
const activeImage = ref('')
const activeLabel = ref('')

const openLightbox = (imagePath: string, label: string) => {
  activeImage.value = imagePath
  activeLabel.value = label
  isLightboxOpen.value = true
  window.addEventListener('keydown', handleKeyDown)
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  window.removeEventListener('keydown', handleKeyDown)
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeLightbox()
  }
}

const handlePreuveClick = (preuve: { type: string, link: string, label: string }) => {
  if (preuve.type === 'image') {
    openLightbox(preuve.link, preuve.label)
  } else if (preuve.link && preuve.link !== '#') {
    window.open(preuve.link, '_blank')
  }
}
</script>

<template>
  <div class="relative">
    <div class="absolute left-6 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-white border-4 border-[#A9A9FF] hidden md:block z-10 shadow-[0_0_10px_rgba(169,169,255,0.4)]"></div>

    <div class="md:ml-16 bg-[#d9d9d920] backdrop-blur-md border border-[#d9d9d9] rounded-2xl overflow-hidden transition-all duration-500 hover:bg-[#d9d9d930] hover:border-[#A9A9FF]/50 hover:shadow-md">
      <button @click="toggleMission" class="w-full px-8 py-6 flex items-center justify-between focus:outline-none group">
        <h4 class="text-2xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 group-hover:to-black transition-all">{{ $t(mission.title) }}</h4>
        <div :class="['w-12 h-12 rounded-full bg-[#d9d9d950] border border-[#d9d9d9] flex items-center justify-center transition-all duration-500 group-hover:bg-[#d9d9d9] group-hover:border-[#A9A9FF]', isOpen ? 'rotate-180 bg-[#A9A9FF]/20 border-[#A9A9FF]' : '']">
          <svg xmlns="http://www.w3.org/2000/svg" :class="['h-6 w-6 transition-colors', isOpen ? 'text-[#6B6BFF]' : 'text-gray-500']" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div v-show="isOpen" class="px-8 pb-8 pt-2 border-t border-[#d9d9d9] animate-fade-in">
        <p class="text-gray-700 text-lg leading-relaxed mb-10 font-light">{{ $t(mission.description) }}</p>
        
        <div class="grid lg:grid-cols-2 gap-10">
          <div>
            <h5 class="text-sm font-bold uppercase tracking-widest text-[#6B6BFF] mb-5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
              {{ $t('alternance.skill_assoc') }}
            </h5>
            <ul class="space-y-4">
              <li v-for="skill in mission.skills" :key="skill.id" class="bg-white border border-[#d9d9d9] rounded-2xl p-5 hover:border-[#A9A9FF] shadow-sm transition-colors">
                <div class="flex justify-between items-center mb-3">
                  <span class="font-bold text-xl text-[#6B6BFF]">{{ skill.id }}</span>
                  <span class="text-sm bg-[#A9A9FF]/10 px-3 py-1 rounded-lg text-[#6B6BFF] border border-[#A9A9FF]/30 font-medium">{{ $t(skill.level) }}</span>
                </div>
                <p class="text-gray-600 font-light leading-relaxed">{{ $t(skill.desc) }}</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 class="text-sm font-bold uppercase tracking-widest text-gray-500 mb-5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" /></svg>
              {{ $t('alternance.proofs_title') }}
            </h5>
            <div class="grid grid-cols-1 gap-4">
              <div 
                v-for="(preuve, idx) in mission.preuves" 
                :key="idx" 
                @click="handlePreuveClick(preuve)"
                @keydown.enter="handlePreuveClick(preuve)"
                role="button"
                tabindex="0"
                class="flex items-center gap-5 bg-white hover:bg-gray-50 border border-[#d9d9d9] hover:border-[#A9A9FF] rounded-2xl p-5 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#A9A9FF]/50"
              >
                <div class="w-12 h-12 rounded-xl bg-gray-100 border border-[#d9d9d9] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#A9A9FF]/10 group-hover:border-[#A9A9FF]/40 transition-all duration-300 shadow-sm">
                  <svg v-if="preuve.type === 'github'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 group-hover:text-[#6B6BFF] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <svg v-else-if="preuve.type === 'link'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 group-hover:text-[#6B6BFF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 group-hover:text-[#6B6BFF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <span class="font-semibold text-gray-700 group-hover:text-black transition-colors text-lg">{{ $t(preuve.label) }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-auto text-gray-400 group-hover:text-[#6B6BFF] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isLightboxOpen" class="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/90 backdrop-blur-sm" @click.self="closeLightbox">
          <!-- Close Button -->
          <button @click="closeLightbox" class="absolute top-4 right-4 text-white hover:text-[#A9A9FF] p-3 rounded-full hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#A9A9FF]" aria-label="Close lightbox">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <!-- Image Container -->
          <div class="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center bg-zinc-950/80 rounded-3xl p-3 border border-white/10 shadow-2xl hover:border-white/20 transition-colors duration-500 overflow-hidden">
            <img :src="activeImage" :alt="$t(activeLabel)" class="max-w-full max-h-[75vh] object-contain rounded-2xl animate-scale-up" />
          </div>
          
          <!-- Image Label -->
          <p class="mt-5 text-white/90 text-lg font-light text-center px-6 py-2.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
            {{ $t(activeLabel) }}
          </p>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes scaleUp {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-scale-up {
  animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
