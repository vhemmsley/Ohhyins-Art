<template>
  <main class="bg-ivory overflow-x-hidden min-h-screen">
    <!-- Page Header -->
    <section class="pt-32 pb-16">
      <div class="max-w-gallery mx-auto px-8">
        <div class="text-center mb-4">
          <div class="inline-flex items-center gap-3 mb-6">
            <span class="w-8 h-px bg-gold" />
            <span class="text-[11px] font-medium tracking-[0.3em] uppercase text-gold font-body"
              >Showcases</span
            >
            <span class="w-8 h-px bg-gold" />
          </div>
          <h1
            class="font-heading text-[clamp(40px,5vw,64px)] font-light text-forest leading-[1.05] tracking-tight mb-4"
          >
            Exhibitions
          </h1>
          <p class="text-[15px] text-muted max-w-lg mx-auto leading-[1.75] font-light font-body">
            A visual journey through past showcases, gallery openings, and curated experiences.
          </p>
        </div>
      </div>
    </section>

    <!-- Exhibitions List -->
    <section class="pb-24">
      <div class="max-w-gallery mx-auto px-8">
        <div class="space-y-24">
          <div
            v-for="(exhibition, index) in exhibitions"
            :key="exhibition.id"
            class="scroll-mt-24"
            :id="'exhibition-' + exhibition.id"
          >
            <!-- Exhibition Header -->
            <div class="mb-10">
              <div class="flex flex-wrap items-center gap-3 mb-3">
                <span
                  class="text-[10px] font-medium tracking-gallery uppercase text-gold font-body"
                  >{{ exhibition.year }}</span
                >
                <span class="text-muted">·</span>
                <span
                  class="text-[10px] font-medium tracking-gallery uppercase text-soft font-body"
                  >{{ exhibition.date }}</span
                >
              </div>
              <h2
                class="font-heading text-[clamp(28px,3vw,44px)] font-light text-forest leading-[1.1] tracking-tight mb-2"
              >
                {{ exhibition.name }}
              </h2>
              <p class="text-[13px] text-muted font-body">
                {{ exhibition.venue }} — {{ exhibition.location }}
              </p>
            </div>

            <!-- Featured Image -->
            <div
              class="relative aspect-[16/9] rounded-xl overflow-hidden bg-linen mb-8 cursor-zoom-in group"
              @click="openLightbox(exhibition, 0)"
            >
              <img
                :src="exhibition.featuredImage"
                :alt="exhibition.name"
                class="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
              />
              <div
                class="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-card"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-forest"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </div>
            </div>

            <!-- Description -->
            <div class="max-w-3xl mb-10">
              <p class="text-[15px] text-muted leading-[1.75] font-light font-body">
                {{ exhibition.description }}
              </p>
            </div>

            <!-- Gallery Grid -->
            <div class="mb-4">
              <div class="flex items-center gap-3 mb-6">
                <span class="w-6 h-px bg-gold" />
                <span class="text-[10px] font-medium tracking-gallery uppercase text-gold font-body"
                  >Gallery</span
                >
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div
                  v-for="(img, imgIndex) in exhibition.images"
                  :key="imgIndex"
                  class="relative aspect-[4/3] rounded-lg overflow-hidden bg-linen cursor-zoom-in group"
                  @click="openLightbox(exhibition, imgIndex)"
                >
                  <img
                    :src="img"
                    :alt="exhibition.name + ' - Photo ' + (imgIndex + 1)"
                    class="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.08]"
                  />
                  <div
                    class="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="text-white"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Divider between exhibitions -->
            <div
              v-if="index < exhibitions.length - 1"
              class="border-b border-border/50 mt-24"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-linen">
      <div class="max-w-2xl mx-auto px-8 text-center">
        <div class="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-4 font-body">
          Stay Connected
        </div>
        <h2
          class="font-heading text-[clamp(28px,3vw,40px)] font-light text-forest mb-4 tracking-tight"
        >
          Never Miss an Exhibition
        </h2>
        <p class="text-[15px] text-muted leading-[1.75] mb-8 font-light font-body">
          Follow along for updates on upcoming showcases, behind-the-scenes moments, and new work.
        </p>
        <RouterLink
          to="/collections"
          class="inline-flex items-center gap-2.5 px-8 py-3.5 bg-forest text-white text-xs font-medium tracking-elegant uppercase rounded-full transition-all duration-400 border-[1.5px] border-forest font-body hover:bg-transparent hover:text-forest hover:-translate-y-0.5"
        >
          Browse the Collection
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[1000] bg-forest/95 flex items-center justify-center p-4 md:p-8"
        @click="closeLightbox"
      >
        <!-- Close Button -->
        <button
          class="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white transition-colors z-20"
          @click="closeLightbox"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <!-- Navigation Arrows -->
        <button
          v-if="currentImages.length > 1"
          @click.stop="prevImage"
          class="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          v-if="currentImages.length > 1"
          @click.stop="nextImage"
          class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <!-- Main Image -->
        <div class="max-w-5xl w-full flex flex-col items-center" @click.stop>
          <img
            :src="currentImages[currentImageIndex]"
            :alt="currentExhibition?.name"
            class="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain rounded-lg shadow-gallery"
          />
          <!-- Caption -->
          <div class="mt-4 text-center">
            <p class="text-white/80 font-body text-[13px]">
              {{ currentExhibition?.name }}
            </p>
            <p class="text-white/50 font-body text-[11px] mt-1">
              {{ currentImageIndex + 1 }} / {{ currentImages.length }}
            </p>
          </div>
        </div>

        <!-- Thumbnail Strip -->
        <div
          v-if="currentImages.length > 1"
          class="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-2"
        >
          <button
            v-for="(img, index) in currentImages"
            :key="index"
            @click.stop="currentImageIndex = index"
            class="w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden border-2 transition-all flex-shrink-0"
            :class="
              currentImageIndex === index ? 'border-gold' : 'border-white/30 hover:border-white/60'
            "
          >
            <img :src="img" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>
    </Transition>
  </main>
</template>

<script>
export default {
  name: 'Exhibitions',

  data() {
    return {
      lightboxOpen: false,
      currentExhibition: null,
      currentImages: [],
      currentImageIndex: 0,
    }
  },

  computed: {
    exhibitions() {
      return this.$store.getters.getAllExhibitions
    },
  },

  mounted() {
    window.scrollTo(0, 0)
    document.addEventListener('keydown', this.handleKeydown)
  },

  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  },

  methods: {
    openLightbox(exhibition, startIndex) {
      this.currentExhibition = exhibition
      this.currentImages = exhibition.images
      this.currentImageIndex = startIndex
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = ''
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.currentImages.length
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.currentImages.length) % this.currentImages.length
    },
    handleKeydown(e) {
      if (!this.lightboxOpen) return
      if (e.key === 'ArrowRight') this.nextImage()
      if (e.key === 'ArrowLeft') this.prevImage()
      if (e.key === 'Escape') this.closeLightbox()
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
