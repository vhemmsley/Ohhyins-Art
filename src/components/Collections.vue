<template>
  <main class="bg-ivory overflow-x-hidden min-h-screen">
    <!-- Page Header -->
    <section class="pt-32 pb-16">
      <div class="max-w-gallery mx-auto px-8">
        <div class="text-center mb-4">
          <div class="inline-flex items-center gap-3 mb-6">
            <span class="w-8 h-px bg-gold" />
            <span class="text-[11px] font-medium tracking-[0.3em] uppercase text-gold font-body"
              >Browse</span
            >
            <span class="w-8 h-px bg-gold" />
          </div>
          <h1
            class="font-heading text-[clamp(40px,5vw,64px)] font-light text-forest leading-[1.05] tracking-tight mb-4"
          >
            The Collection
          </h1>
          <p class="text-[15px] text-muted max-w-lg mx-auto leading-[1.75] font-light font-body">
            Explore the full archive of original paintings, each one a unique expression of emotion
            and vision.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Bar -->
    <section class="pb-10 sticky top-[80px] z-30 bg-ivory/95 backdrop-blur-sm">
      <div class="max-w-gallery mx-auto px-8">
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button
            v-for="filter in filters"
            :key="filter.value"
            @click="activeFilter = filter.value"
            :class="[
              'px-5 py-2 rounded-full text-xs font-medium tracking-elegant uppercase transition-all duration-300 font-body border',
              activeFilter === filter.value
                ? 'bg-forest text-white border-forest'
                : 'bg-transparent text-charcoal border-border hover:border-gold hover:text-forest',
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Artwork Grid -->
    <section class="pb-24">
      <div class="max-w-gallery mx-auto px-8">
        <TransitionGroup
          name="artwork-fade"
          tag="div"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <div v-for="artwork in filteredArtworks" :key="artwork.id" class="group">
            <!-- Image Card -->
            <div class="relative aspect-[3/4] rounded-lg overflow-hidden bg-linen mb-4">
              <img
                :src="artwork.image"
                :alt="artwork.title"
                class="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.06]"
                :class="{ 'brightness-75': artwork.status === 'sold' }"
              />

              <!-- SOLD Badge -->
              <div
                v-if="artwork.status === 'sold'"
                class="absolute top-4 left-4 px-3 py-1 bg-white/90 text-forest text-[10px] font-semibold tracking-elegant uppercase rounded-full font-body border border-gold/30 shadow-sm"
              >
                SOLD
              </div>

              <!-- Commission Badge -->
              <div
                v-else-if="artwork.status === 'commission'"
                class="absolute top-4 left-4 px-3 py-1 bg-gold/90 text-forest text-[10px] font-semibold tracking-elegant uppercase rounded-full font-body"
              >
                Commission
              </div>

              <!-- Hover Overlay — details on hover -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-[rgba(33,77,53,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-10 pointer-events-none"
              >
                <div
                  class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p class="text-[11px] text-champagne tracking-[0.15em] uppercase font-body mb-1">
                    {{ artwork.medium }}
                  </p>
                  <p class="text-[11px] text-white/70 font-body">{{ artwork.dimensions }}</p>
                </div>
              </div>

              <!-- View Details Button — ALWAYS VISIBLE -->
              <div class="absolute bottom-0 left-0 right-0 p-4 z-20">
                <button
                  @click="$router.push(`/artwork/${artwork.id}`)"
                  class="w-full py-2.5 bg-white/95 text-forest text-[11px] font-semibold tracking-elegant uppercase rounded-lg font-body hover:bg-forest hover:text-white transition-all duration-300 shadow-md border border-border/50"
                >
                  View Details
                </button>
              </div>
            </div>

            <!-- Card Info -->
            <div class="px-1">
              <h3
                class="font-heading text-lg font-normal text-forest mb-1 group-hover:text-gold transition-colors duration-300"
              >
                {{ artwork.title }}
              </h3>
              <p class="text-[12px] text-muted font-body mb-2">{{ artwork.medium }}</p>
              <div class="flex items-center justify-between">
                <span
                  class="font-heading text-base font-light"
                  :class="artwork.status === 'sold' ? 'text-muted line-through' : 'text-forest'"
                >
                  {{ artwork.price }}
                </span>
                <span class="text-[10px] text-soft tracking-gallery uppercase font-body">{{
                  artwork.year
                }}</span>
              </div>
            </div>
          </div>
        </TransitionGroup>

        <!-- Empty State -->
        <div v-if="filteredArtworks.length === 0" class="text-center py-24">
          <div class="font-heading text-4xl text-gold/30 mb-4">✦</div>
          <h3 class="font-heading text-2xl text-forest mb-2">No artworks found</h3>
          <p class="text-muted font-body">Try selecting a different filter.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-linen">
      <div class="max-w-2xl mx-auto px-8 text-center">
        <div class="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-4 font-body">
          Can't find what you're looking for?
        </div>
        <h2
          class="font-heading text-[clamp(28px,3vw,40px)] font-light text-forest mb-4 tracking-tight"
        >
          Commission a Custom Piece
        </h2>
        <p class="text-[15px] text-muted leading-[1.75] mb-8 font-light font-body">
          Have a specific vision in mind? Let's collaborate to create something uniquely yours.
        </p>
        <RouterLink
          to="/commission"
          class="inline-flex items-center gap-2.5 px-8 py-3.5 bg-forest text-white text-xs font-medium tracking-elegant uppercase rounded-full transition-all duration-400 border-[1.5px] border-forest font-body hover:bg-transparent hover:text-forest hover:-translate-y-0.5"
        >
          Start a Commission
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
  </main>
</template>

<script>
export default {
  name: 'Collections',

  data() {
    return {
      activeFilter: 'all',

      filters: [
        { label: 'All Works', value: 'all' },
        { label: 'Oil on Canvas', value: 'oil' },
        { label: 'Acrylic', value: 'acrylic' },
        { label: 'Mixed Media', value: 'mixed' },
        { label: 'Available', value: 'available' },
      ],
    }
  },

  computed: {
    artworks() {
      return this.$store.getters.getAllArtworks
    },
    filteredArtworks() {
      if (this.activeFilter === 'all') return this.artworks
      if (this.activeFilter === 'available') {
        return this.artworks.filter((a) => a.status === 'available')
      }
      return this.artworks.filter((a) => a.category === this.activeFilter)
    },
  },
}
</script>

<style scoped>
.artwork-fade-move,
.artwork-fade-enter-active,
.artwork-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.artwork-fade-enter-from,
.artwork-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}
.artwork-fade-leave-active {
  position: absolute;
}
</style>
