<template>
  <main class="bg-ivory overflow-x-hidden min-h-screen">
    <!-- Hero Section -->
    <section class="pt-32 pb-20">
      <div class="max-w-gallery mx-auto px-8">
        <div class="text-center mb-4">
          <div class="inline-flex items-center gap-3 mb-6">
            <span class="w-8 h-px bg-gold" />
            <span class="text-[11px] font-medium tracking-[0.3em] uppercase text-gold font-body"
              >Bespoke</span
            >
            <span class="w-8 h-px bg-gold" />
          </div>
          <h1
            class="font-heading text-[clamp(40px,5vw,64px)] font-light text-forest leading-[1.05] tracking-tight mb-6"
          >
            Commission a Piece
          </h1>
          <p class="text-[15px] text-muted max-w-2xl mx-auto leading-[1.75] font-light font-body">
            A commissioned artwork is more than a painting — it is a collaboration between your
            vision and my craft. Together, we create something that belongs only to you.
          </p>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="pb-24">
      <div class="max-w-gallery mx-auto px-8">
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <span class="w-6 h-px bg-gold" />
            <span class="text-[10px] font-medium tracking-gallery uppercase text-gold font-body"
              >How It Works</span
            >
            <span class="w-6 h-px bg-gold" />
          </div>
          <h2
            class="font-heading text-[clamp(24px,2.5vw,36px)] font-light text-forest leading-[1.15] tracking-tight"
          >
            The Commission Journey
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            class="relative text-center group"
          >
            <!-- Connector Line -->
            <div
              v-if="index < processSteps.length - 1"
              class="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-border"
            />

            <!-- Step Number -->
            <div
              class="w-16 h-16 rounded-full bg-linen border-2 border-gold/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/10 group-hover:border-gold transition-all duration-400"
            >
              <span class="font-heading text-xl font-light text-gold">{{ index + 1 }}</span>
            </div>

            <h3 class="font-heading text-lg font-normal text-forest mb-2">{{ step.title }}</h3>
            <p class="text-[13px] text-muted leading-[1.7] font-body">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-gallery mx-auto px-8">
      <div class="border-t border-border/40"></div>
    </div>

    <!-- Past Commissions -->
    <section class="py-24">
      <div class="max-w-gallery mx-auto px-8">
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <span class="w-6 h-px bg-gold" />
            <span class="text-[10px] font-medium tracking-gallery uppercase text-gold font-body"
              >Portfolio</span
            >
            <span class="w-6 h-px bg-gold" />
          </div>
          <h2
            class="font-heading text-[clamp(24px,2.5vw,36px)] font-light text-forest leading-[1.15] tracking-tight mb-4"
          >
            Past Commissions
          </h2>
          <p class="text-[15px] text-muted max-w-lg mx-auto leading-[1.75] font-light font-body">
            A selection of bespoke pieces created for collectors around the world.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="piece in commissionArtworks" :key="piece.id" class="group">
            <div class="relative aspect-[4/5] rounded-lg overflow-hidden bg-linen mb-4">
              <img
                :src="piece.image"
                :alt="piece.title"
                class="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.06]"
              />
              <!-- Commission Badge -->
              <div
                class="absolute top-4 left-4 px-3 py-1 bg-gold/90 text-forest text-[10px] font-semibold tracking-elegant uppercase rounded-full font-body"
              >
                Commission
              </div>
              <!-- Hover Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-[rgba(33,77,53,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-10 pointer-events-none"
              >
                <div
                  class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p class="text-[11px] text-champagne tracking-[0.15em] uppercase font-body mb-1">
                    {{ piece.medium }}
                  </p>
                  <p class="text-[11px] text-white/70 font-body">{{ piece.dimensions }}</p>
                </div>
              </div>
              <!-- View Button -->
              <div class="absolute bottom-0 left-0 right-0 p-4 z-20">
                <button
                  @click="$router.push(`/artwork/${piece.id}`)"
                  class="w-full py-2.5 bg-white/95 text-forest text-[11px] font-semibold tracking-elegant uppercase rounded-lg font-body hover:bg-forest hover:text-white transition-all duration-300 shadow-md border border-border/50"
                >
                  View Artwork
                </button>
              </div>
            </div>
            <div class="px-1">
              <h3
                class="font-heading text-lg font-normal text-forest mb-1 group-hover:text-gold transition-colors duration-300"
              >
                {{ piece.title }}
              </h3>
              <p class="text-[12px] text-muted font-body">{{ piece.medium }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-gallery mx-auto px-8">
      <div class="border-t border-border/40"></div>
    </div>

    <!-- Pricing Guide -->
    <section class="py-24">
      <div class="max-w-gallery mx-auto px-8">
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <span class="w-6 h-px bg-gold" />
            <span class="text-[10px] font-medium tracking-gallery uppercase text-gold font-body"
              >Investment</span
            >
            <span class="w-6 h-px bg-gold" />
          </div>
          <h2
            class="font-heading text-[clamp(24px,2.5vw,36px)] font-light text-forest leading-[1.15] tracking-tight mb-4"
          >
            Pricing Guide
          </h2>
          <p class="text-[15px] text-muted max-w-lg mx-auto leading-[1.75] font-light font-body">
            Every commission is unique. Below is a general guide to help you plan your investment.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div
            v-for="(tier, index) in pricingTiers"
            :key="index"
            class="bg-white rounded-xl p-8 border border-border/50 hover:border-gold/40 hover:shadow-card transition-all duration-400 text-center group"
          >
            <div
              class="text-[10px] font-medium tracking-gallery uppercase text-gold font-body mb-3"
            >
              {{ tier.size }}
            </div>
            <div class="font-heading text-[32px] font-light text-forest mb-2">{{ tier.price }}</div>
            <div class="text-[12px] text-muted font-body mb-6">{{ tier.dimensions }}</div>
            <div class="space-y-2">
              <div
                v-for="(feature, fIndex) in tier.features"
                :key="fIndex"
                class="flex items-center justify-center gap-2 text-[12px] text-soft font-body"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-gold flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {{ feature }}
              </div>
            </div>
          </div>
        </div>

        <p class="text-center text-[12px] text-muted font-body mt-8">
          Final pricing depends on complexity, medium, and timeline. A 50% deposit is required to
          begin.
        </p>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-gallery mx-auto px-8">
      <div class="border-t border-border/40"></div>
    </div>

    <!-- CTA / Request Form -->
    <section class="py-24">
      <div class="max-w-2xl mx-auto px-8 text-center">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="w-6 h-px bg-gold" />
          <span class="text-[10px] font-medium tracking-gallery uppercase text-gold font-body"
            >Begin</span
          >
          <span class="w-6 h-px bg-gold" />
        </div>
        <h2
          class="font-heading text-[clamp(28px,3vw,40px)] font-light text-forest mb-4 tracking-tight"
        >
          Ready to Create Together?
        </h2>
        <p class="text-[15px] text-muted leading-[1.75] mb-10 font-light font-body">
          Share your vision with me and let's bring it to life. I will respond within 24 hours to
          discuss your ideas, timeline, and pricing.
        </p>

        <a
          :href="commissionWhatsAppLink"
          target="_blank"
          class="inline-flex items-center gap-3 px-10 py-4 bg-forest text-white text-xs font-semibold tracking-elegant uppercase rounded-full transition-all duration-400 border-[1.5px] border-forest font-body hover:bg-botanical hover:border-botanical hover:-translate-y-0.5 hover:shadow-button mb-4"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="text-white">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              fill="currentColor"
            />
          </svg>
          Start on WhatsApp
        </a>

        <p class="text-[12px] text-soft font-body mt-4">
          Or email directly at
          <a
            href="mailto:hello@ohhyin.art"
            class="text-forest hover:text-gold underline underline-offset-2 transition-colors"
            >hello@ohhyin.art</a
          >
        </p>
      </div>
    </section>

    <!-- Quote -->
    <section class="py-20 bg-linen">
      <div class="max-w-3xl mx-auto px-8 text-center">
        <span class="font-heading text-[56px] text-gold opacity-20 leading-[0.5] block mb-4"
          >&ldquo;</span
        >
        <p
          class="font-heading text-[clamp(18px,2vw,24px)] italic font-light text-forest leading-[1.5] mb-6"
        >
          The artist is not a special kind of person; rather each person is a special kind of
          artist.
        </p>
        <div class="text-[12px] text-muted font-body tracking-elegant uppercase">
          — Ananda Coomaraswamy
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Commission',

  data() {
    return {
      processSteps: [
        {
          title: 'Reach Out',
          description:
            'Send me your ideas, references, or mood boards via WhatsApp or email. Share what inspires you and what you envision.',
        },
        {
          title: 'Consultation',
          description:
            'We discuss size, medium, colour palette, timeline, and pricing. I will share sketches or concept drafts for your approval.',
        },
        {
          title: 'Creation',
          description:
            'Once the concept is approved and deposit is received, I begin painting. You will receive progress updates along the way.',
        },
        {
          title: 'Delivery',
          description:
            'Upon completion and final payment, your artwork is carefully packaged and shipped — or hand-delivered if you are in Lagos.',
        },
      ],

      pricingTiers: [
        {
          size: 'Small',
          price: 'From ₦300k',
          dimensions: 'Up to 24 x 24 inches',
          features: ['Single subject', 'Acrylic on canvas', '2–3 week turnaround'],
        },
        {
          size: 'Medium',
          price: 'From ₦600k',
          dimensions: '24 x 36 to 36 x 36 inches',
          features: ['Complex composition', 'Oil or acrylic', '3–5 week turnaround'],
        },
        {
          size: 'Large',
          price: 'From ₦1M',
          dimensions: '40 x 40 inches and above',
          features: ['Statement piece', 'Mixed media available', '5–8 week turnaround'],
        },
      ],
    }
  },

  computed: {
    commissionArtworks() {
      return this.$store.getters.getCommissionArtworks
    },
    whatsappNumber() {
      return this.$store.getters.getWhatsAppNumber
    },
    commissionWhatsAppLink() {
      const message = encodeURIComponent(
        'Hi, I am interested in commissioning a custom artwork from you. I would love to discuss my vision, timeline, and budget.',
      )
      return `https://wa.me/${this.whatsappNumber}?text=${message}`
    },
  },

  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped>
/* No additional styles needed — everything uses Tailwind */
</style>
