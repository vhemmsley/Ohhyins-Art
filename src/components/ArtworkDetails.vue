<template>
  <main class="bg-ivory overflow-x-hidden min-h-screen" v-if="artwork">
    <!-- Artwork Detail -->
    <section class="pb-24 mt-28">
      <div class="max-w-gallery mx-auto px-8">
        <div class="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          <!-- Left - Image Gallery -->
          <div class="relative">
            <!-- Main Image -->
            <div
              class="relative aspect-[3/4] rounded-lg overflow-hidden bg-linen cursor-zoom-in group"
              @click="showLightbox = true"
            >
              <img
                :src="artwork.image"
                :alt="artwork.title"
                class="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
                :class="{ 'brightness-75': artwork.status === 'sold' }"
              />

              <!-- SOLD Overlay -->
              <div
                v-if="artwork.status === 'sold'"
                class="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
              >
                <div class="bg-white/90 px-8 py-3 rounded-full shadow-lg border border-gold/30">
                  <span class="font-heading text-xl font-light text-forest tracking-widest"
                    >SOLD</span
                  >
                </div>
              </div>

              <!-- Zoom hint -->
              <div
                class="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-card z-20"
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
          </div>

          <!-- Right - Info -->
          <div class="lg:sticky lg:top-8">
            <div class="mb-2">
              <span
                class="text-[10px] font-medium tracking-gallery uppercase text-gold font-body"
                >{{ artwork.year }}</span
              >
            </div>
            <h1
              class="font-heading text-[clamp(32px,4vw,48px)] font-light text-forest leading-[1.1] tracking-tight mb-4"
            >
              {{ artwork.title }}
            </h1>
            <p class="text-[15px] text-muted leading-[1.75] font-light font-body mb-8">
              {{ artwork.description }}
            </p>

            <!-- Details Grid -->
            <div class="grid grid-cols-2 gap-4 mb-8 p-6 bg-linen rounded-lg">
              <div>
                <div
                  class="text-[10px] font-medium tracking-gallery uppercase text-gold mb-1 font-body"
                >
                  Medium
                </div>
                <div class="text-[13px] text-forest font-body">{{ artwork.medium }}</div>
              </div>
              <div>
                <div
                  class="text-[10px] font-medium tracking-gallery uppercase text-gold mb-1 font-body"
                >
                  Dimensions
                </div>
                <div class="text-[13px] text-forest font-body">{{ artwork.dimensions }}</div>
              </div>
              <div>
                <div
                  class="text-[10px] font-medium tracking-gallery uppercase text-gold mb-1 font-body"
                >
                  Year
                </div>
                <div class="text-[13px] text-forest font-body">{{ artwork.year }}</div>
              </div>
              <div>
                <div
                  class="text-[10px] font-medium tracking-gallery uppercase text-gold mb-1 font-body"
                >
                  Status
                </div>
                <div
                  class="text-[13px] font-body"
                  :class="artwork.status === 'available' ? 'text-botanical' : 'text-muted'"
                >
                  {{
                    artwork.status === 'available'
                      ? 'Available'
                      : artwork.status === 'sold'
                        ? 'Sold'
                        : 'Commission Only'
                  }}
                </div>
              </div>
            </div>

            <!-- Price -->
            <div class="flex items-baseline gap-3 mb-8" v-if="artwork.status !== 'sold'">
              <span class="font-heading text-[32px] font-light text-forest">{{
                artwork.price
              }}</span>
              <span class="text-[12px] text-soft font-body">(Shipping calculated at checkout)</span>
            </div>

            <!-- Actions -->
            <div class="flex flex-col gap-3 mb-10">
              <!-- Purchase Button -->
              <a
                v-if="artwork.status === 'available'"
                :href="purchaseWhatsAppLink"
                target="_blank"
                class="w-full py-4 bg-forest text-white text-xs font-semibold tracking-elegant uppercase rounded-full transition-all duration-400 border-[1.5px] border-forest font-body hover:bg-botanical hover:border-botanical hover:-translate-y-0.5 hover:shadow-button text-center"
              >
                Inquire to Purchase
              </a>

              <!-- Sold Button (Disabled) -->
              <button
                v-else-if="artwork.status === 'sold'"
                class="w-full py-4 bg-linen text-muted text-xs font-semibold tracking-elegant uppercase rounded-full border-[1.5px] border-border font-body cursor-not-allowed relative overflow-hidden"
                disabled
              >
                <span class="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  Sold Out
                </span>
              </button>

              <!-- Commission Only Button (Disabled) -->
              <button
                v-else
                class="w-full py-4 bg-linen text-muted text-xs font-semibold tracking-elegant uppercase rounded-full border-[1.5px] border-border font-body cursor-not-allowed"
                disabled
              >
                Commission Only
              </button>

              <!-- Request Similar Commission — ALWAYS ACTIVE -->
              <a
                :href="commissionWhatsAppLink"
                target="_blank"
                class="w-full py-4 bg-transparent text-forest text-xs font-semibold tracking-elegant uppercase rounded-full transition-all duration-400 border-[1.5px] border-forest font-body text-center hover:bg-forest hover:text-white hover:-translate-y-0.5"
              >
                Request Similar Commission
              </a>
            </div>

            <!-- Artist Note -->
            <div class="relative p-6 bg-white border-l-2 border-gold rounded-r-md mb-8">
              <span
                class="absolute top-2 left-3 font-heading text-[48px] text-gold opacity-15 leading-[0.5]"
                >&ldquo;</span
              >
              <p
                class="font-heading text-base italic font-light text-forest leading-[1.6] relative z-10"
              >
                {{ artwork.artistNote }}
              </p>
              <div class="mt-3 text-[12px] text-muted font-body">— Ohhyin</div>
            </div>

            <!-- Share -->
            <div class="flex items-center gap-4">
              <span class="text-[11px] text-soft tracking-elegant uppercase font-body">Share:</span>
              <div class="flex gap-2">
                <button
                  class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-soft hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button
                  class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-soft hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </button>
                <button
                  class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-soft hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Works -->
    <section class="py-20 bg-linen">
      <div class="max-w-gallery mx-auto px-8">
        <div class="text-center mb-12">
          <div class="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-4 font-body">
            You May Also Like
          </div>
          <h2
            class="font-heading text-[clamp(28px,3vw,40px)] font-light text-forest tracking-tight"
          >
            Related Works
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="related in relatedArtworks"
            :key="related.id"
            class="group cursor-pointer"
            @click="$router.push(`/artwork/${related.id}`)"
          >
            <div class="relative aspect-[3/4] rounded-lg overflow-hidden bg-linen mb-3">
              <img
                :src="related.image"
                :alt="related.title"
                class="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.06]"
                :class="{ 'brightness-75': related.status === 'sold' }"
              />
              <div
                v-if="related.status === 'sold'"
                class="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <span
                  class="bg-white/90 px-4 py-2 rounded-full font-heading text-sm text-forest border border-gold/30"
                  >SOLD</span
                >
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-[rgba(33,77,53,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5"
              >
                <span class="text-[11px] text-white tracking-elegant uppercase font-body"
                  >View Details &rarr;</span
                >
              </div>
            </div>
            <h3
              class="font-heading text-base font-normal text-forest group-hover:text-gold transition-colors duration-300"
            >
              {{ related.title }}
            </h3>
            <p class="text-[11px] text-muted font-body">{{ related.medium }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div
        v-if="showLightbox"
        class="fixed inset-0 z-[1000] bg-forest/95 flex items-center justify-center p-8"
        @click="showLightbox = false"
      >
        <button
          class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-20"
          @click="showLightbox = false"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <img
          :src="artwork.image"
          :alt="artwork.title"
          class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-gallery"
          @click.stop
        />
      </div>
    </Transition>
  </main>

  <!-- Not Found -->
  <main class="bg-ivory min-h-screen flex items-center justify-center" v-else>
    <div class="text-center">
      <div class="font-heading text-6xl text-gold/20 mb-4">404</div>
      <h1 class="font-heading text-3xl text-forest mb-2">Artwork Not Found</h1>
      <p class="text-muted font-body mb-6">This piece may have been moved or removed.</p>
      <RouterLink
        to="/collections"
        class="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white text-xs font-medium tracking-elegant uppercase rounded-full font-body hover:bg-botanical transition-colors"
      >
        Back to Collections
      </RouterLink>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ArtworkDetail',

  data() {
    return {
      showLightbox: false,
    }
  },

  computed: {
    artwork() {
      return this.$store.getters.getArtworkById(this.$route.params.id)
    },
    relatedArtworks() {
      if (!this.artwork) return []
      return this.$store.getters.getRelatedArtworks(this.artwork.id, this.artwork.category)
    },
    whatsappNumber() {
      return this.$store.getters.getWhatsAppNumber
    },
    purchaseWhatsAppLink() {
      if (!this.artwork) return ''
      const message = encodeURIComponent(
        `Hi, I'm interested in purchasing the artwork "${this.artwork.title}" (${this.artwork.medium}, ${this.artwork.dimensions}, ${this.artwork.price}). Could you please provide more details?`,
      )
      return `https://wa.me/${this.whatsappNumber}?text=${message}`
    },
    commissionWhatsAppLink() {
      if (!this.artwork) return ''
      const message = encodeURIComponent(
        `Hi, I came across "${this.artwork.title}" and I'd love to request a similar commission piece. Could we discuss this further?`,
      )
      return `https://wa.me/${this.whatsappNumber}?text=${message}`
    },
  },

  watch: {
    '$route.params.id'() {
      window.scrollTo(0, 0)
    },
  },

  mounted() {
    window.scrollTo(0, 0)
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', this.handleKeydown)
  },

  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  },

  methods: {
    handleKeydown(e) {
      if (!this.showLightbox) return
      if (e.key === 'Escape') this.showLightbox = false
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
