<template>
  <main class="bg-ivory overflow-x-hidden">
    <!-- HERO -->
    <section class="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-20">
      <!-- Subtle texture -->
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="
          background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B08A45' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);
        "
      />

      <!-- Decorative circles -->
      <div
        class="absolute top-[15%] -right-16 w-[280px] h-[280px] rounded-full border border-gold opacity-[0.1] pointer-events-none"
      />
      <div
        class="absolute bottom-[20%] -left-8 w-[160px] h-[160px] rounded-full border border-forest opacity-[0.06] pointer-events-none"
      />

      <div
        class="max-w-gallery mx-auto px-8 w-full grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center relative z-10 pb-12"
      >
        <!-- Left -->
        <div class="text-center lg:text-left pt-4">
          <div class="inline-flex items-center gap-3 mb-6">
            <span class="w-8 h-px bg-gold" />
            <span class="text-[11px] font-medium tracking-[0.3em] uppercase text-gold font-body"
              >Original Paintings</span
            >
          </div>

          <h1
            class="font-heading text-[clamp(48px,6vw,84px)] font-light leading-[0.95] text-forest mb-2 tracking-tight"
          >
            OHHYIN'S
            <span class="block italic font-normal text-gold mt-1">Art</span>
          </h1>

          <p
            class="font-heading text-[clamp(18px,2.2vw,21px)] font-light italic text-sage mb-8 tracking-wide"
          >
            Take your broken Heart and make it into art 🎨
          </p>

          <p
            class="text-[15px] leading-[1.8] text-muted max-w-md mx-auto lg:mx-0 mb-10 font-light font-body"
          >
            Every piece reveals a part of my story and the way I experience life. Each canvas is a
            window into a deeply chaotic personal narrative.
          </p>

          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-12">
            <RouterLink
              to="/collections"
              class="inline-flex items-center gap-2.5 px-8 py-3.5 bg-forest text-white text-xs font-medium tracking-elegant uppercase rounded-full transition-all duration-400 border-[1.5px] border-forest font-body hover:bg-transparent hover:text-forest hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(33,77,53,0.12)]"
            >
              Explore Collection
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
            <RouterLink
              to="/exhibitions"
              class="inline-flex items-center gap-2 text-xs font-medium tracking-elegant uppercase text-charcoal hover:text-forest transition-colors duration-300 relative group font-body"
            >
              View Exhibitions
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
              <span
                class="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"
              />
            </RouterLink>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div v-for="stat in stats" :key="stat.label">
              <div class="font-heading text-[36px] font-light text-forest leading-none">
                {{ stat.number }}
              </div>
              <div
                class="text-[10px] font-medium tracking-gallery uppercase text-soft mt-1.5 font-body"
              >
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- Right - Artwork -->
        <div class="relative flex items-center justify-center py-8">
          <!-- Wrapper with padding to contain border -->
          <div class="relative p-4">
            <!-- Image container with overflow-hidden to clip zoom -->
            <div class="relative w-full max-w-[420px] aspect-[3/4] overflow-hidden rounded-lg">
              <img
                :src="heroArtwork"
                alt="Featured Artwork"
                class="w-full h-full object-cover animate-slowZoom"
              />
            </div>
            <!-- Gold border positioned exactly around the image -->
            <div
              class="absolute inset-0 border border-gold rounded-lg opacity-25 pointer-events-none m-1.5"
            />
            <!-- Artwork label -->
            <div class="absolute bottom-4 right-5 text-right">
              <div class="font-heading text-base text-white font-bold drop-shadow-md">RARE</div>
              <div
                class="text-[10px] text-white tracking-[0.15em] mt-0.5 uppercase font-body drop-shadow-md"
              >
                5ft x 5ft <br />Acrylic on canvas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED GALLERY -->
    <section class="py-24">
      <div class="text-center mb-16 px-8">
        <div class="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-4 font-body">
          Portfolio
        </div>
        <h2
          class="font-heading text-[clamp(36px,4.5vw,56px)] font-light text-forest leading-[1.1] mb-4 tracking-tight"
        >
          Featured Works
        </h2>
        <p class="text-[15px] text-muted max-w-lg mx-auto leading-[1.75] font-light font-body">
          A curated selection of artworks that reflect our journey through color, emotion, and
          storytelling.
        </p>
      </div>

      <div
        class="max-w-gallery mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[260px]"
      >
        <div
          v-for="(art, i) in featuredArtworks"
          :key="i"
          :class="['relative rounded-lg overflow-hidden cursor-pointer group bg-linen', art.span]"
        >
          <img
            :src="art.image"
            :alt="art.title"
            class="w-full h-full object-cover transition-transform duration-800 group-hover:scale-[1.06]"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[rgba(33,77,53,0.88)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
          >
            <div class="font-heading text-[22px] font-normal text-white mb-1">{{ art.title }}</div>
            <div class="text-[10px] text-champagne tracking-[0.15em] mb-3 uppercase font-body">
              {{ art.medium }}
            </div>
            <RouterLink
              :to="art.link"
              class="text-[11px] font-medium tracking-[0.12em] uppercase text-white inline-flex items-center gap-1.5 transition-all duration-300 hover:gap-2.5 font-body"
              >View Artwork &rarr;</RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Gold Divider -->
    <div
      class="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-20 max-w-[160px] mx-auto"
    />

    <!-- ARTIST SECTION -->
    <section class="py-24 bg-linen">
      <div class="max-w-gallery mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        <div class="relative flex justify-center lg:justify-start">
          <img
            :src="artist1"
            alt="Artist Portrait"
            class="w-full max-w-[440px] aspect-[3/4] object-cover rounded-lg shadow-gallery"
          />
          <div
            class="absolute -bottom-4 -right-4 w-[100px] h-[100px] border-[1.5px] border-gold opacity-25 rounded-lg hidden lg:block"
          />
        </div>

        <div class="text-center lg:text-left">
          <div class="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-4 font-body">
            The Artist
          </div>
          <h2
            class="font-heading text-[clamp(32px,3.5vw,48px)] font-light text-forest mb-1.5 tracking-tight"
          >
            About Ohhyin
          </h2>
          <p class="text-[11px] font-medium tracking-[0.25em] uppercase text-gold mb-8 font-body">
            Contemporary Fine Artist
          </p>

          <p class="text-[14px] leading-[1.85] text-muted mb-8 font-light font-body">
            Ohhyin is a contemporary fine artist whose work explores the intersection of emotion,
            nature, and memory. With over six years of dedicated practice, each painting is a window
            into a deeply personal narrative—capturing fleeting moments of beauty, introspection,
            and the raw essence of human experience.
          </p>

          <div
            class="relative p-7 pl-8 bg-white border-l-2 border-gold mb-8 text-left rounded-r-md"
          >
            <span
              class="absolute top-2 left-3 font-heading text-[72px] text-gold opacity-15 leading-[0.5]"
              >&ldquo;</span
            >
            <p
              class="font-heading text-xl italic font-light text-forest leading-[1.6] relative z-10"
            >
              Every piece releases a part of my story and the way I experience life.
            </p>
          </div>

          <RouterLink
            to="/about"
            class="inline-flex items-center gap-2.5 px-8 py-3.5 bg-forest text-white text-xs font-medium tracking-elegant uppercase rounded-full transition-all duration-400 border-[1.5px] border-forest font-body hover:bg-transparent hover:text-forest hover:-translate-y-0.5"
          >
            Read My Story
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
      </div>
    </section>

    <!-- SIGNATURE COLLECTIONS -->
    <section class="py-24">
      <div class="text-center mb-16 px-8">
        <div class="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-4 font-body">
          Curated
        </div>
        <h2
          class="font-heading text-[clamp(36px,4.5vw,56px)] font-light text-forest leading-[1.1] mb-4 tracking-tight"
        >
          Signature Collections
        </h2>
        <p class="text-[15px] text-muted max-w-lg mx-auto leading-[1.75] font-light font-body">
          Distinctive series that define the artist's evolving vision and mastery of medium.
        </p>
      </div>

      <!-- REDUCED HEIGHT: changed from h-[520px] to h-[400px] on large screens -->
      <div
        class="max-w-gallery mx-auto px-8 grid lg:grid-cols-[1.5fr_1fr] gap-4 h-auto lg:h-[400px]"
      >
        <div
          class="relative rounded-lg overflow-hidden cursor-pointer group h-[300px] sm:h-[350px] lg:h-full"
        >
          <img
            :src="heroArtwork"
            alt="Nature's Whisper"
            class="w-full h-[490px] object-cover transition-transform duration-800 group-hover:scale-[1.04]"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[rgba(33,77,53,0.8)] to-transparent flex flex-col justify-end p-7 group-hover:from-[rgba(33,77,53,0.9)] transition-all duration-400"
          >
            <div class="font-heading text-[22px] font-normal text-white mb-1">Nature's Whisper</div>
            <div class="text-[10px] text-champagne tracking-[0.15em] uppercase font-body">
              18 Artworks
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4 h-auto lg:h-full">
          <div
            v-for="collection in sideCollections"
            :key="collection.name"
            class="relative flex-1 rounded-lg overflow-hidden cursor-pointer group max-h-[200px] sm:min-h-[180px] lg:min-h-0"
          >
            <img
              :src="collection.image"
              :alt="collection.name"
              class="w-full h-full object-cover transition-transform duration-800 group-hover:scale-[1.04]"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[rgba(33,77,53,0.8)] to-transparent flex flex-col justify-end p-7 group-hover:from-[rgba(33,77,53,0.9)] transition-all duration-400"
            >
              <div class="font-heading text-[22px] font-normal text-white mb-1">
                {{ collection.name }}
              </div>
              <div class="text-[10px] text-champagne tracking-[0.15em] uppercase font-body">
                {{ collection.count }} Artworks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS TIMELINE -->
    <section class="py-24 bg-forest text-white">
      <div class="text-center mb-16 px-8">
        <div class="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-4 font-body">
          Behind the Canvas
        </div>
        <h2
          class="font-heading text-[clamp(36px,4.5vw,56px)] font-light leading-[1.1] mb-4 tracking-tight"
        >
          The Creative Process
        </h2>
        <p class="text-[15px] text-white/50 max-w-lg mx-auto leading-[1.75] font-light font-body">
          From the first spark of inspiration to the final brushstroke, every artwork follows a
          journey of discovery.
        </p>
      </div>

      <div
        class="max-w-5xl mx-auto px-8 flex flex-wrap lg:flex-nowrap justify-between relative gap-8 lg:gap-0"
      >
        <div
          class="hidden lg:block absolute top-9 left-[80px] right-[80px] h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"
        />

        <div
          v-for="(step, i) in processSteps"
          :key="i"
          class="text-center relative flex-1 min-w-[45%] lg:min-w-0"
        >
          <div
            class="w-3.5 h-3.5 rounded-full bg-gold mx-auto mb-5 relative z-10 shadow-[0_0_20px_rgba(176,138,69,0.25)]"
          />
          <div
            class="w-14 h-14 rounded-full bg-white/[0.04] border border-gold/25 flex items-center justify-center mx-auto mb-3.5 text-[22px]"
          >
            {{ step.icon }}
          </div>
          <div class="font-heading text-lg font-normal mb-1.5">{{ step.title }}</div>
          <div
            class="text-xs text-white/45 max-w-[150px] mx-auto leading-[1.6] font-light font-body"
          >
            {{ step.desc }}
          </div>
        </div>
      </div>
    </section>

    <!-- EXHIBITIONS -->
    <section class="py-24">
      <div class="text-center mb-16 px-8">
        <div class="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-4 font-body">
          Recognition
        </div>
        <h2
          class="font-heading text-[clamp(36px,4.5vw,56px)] font-light text-forest leading-[1.1] mb-4 tracking-tight"
        >
          Exhibitions
        </h2>
        <p class="text-[15px] text-muted max-w-lg mx-auto leading-[1.75] font-light font-body">
          Showcasing work at prestigious galleries and art fairs across the region.
        </p>
      </div>

      <div class="max-w-gallery mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="exhibition in exhibitions"
          :key="exhibition.name"
          class="relative rounded-lg overflow-hidden cursor-pointer h-[360px] group bg-linen"
        >
          <img
            :src="exhibition.image"
            :alt="exhibition.name"
            class="w-full h-full object-cover transition-transform duration-800 group-hover:scale-[1.05]"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[rgba(33,77,53,0.9)] via-[rgba(33,77,53,0.2)] to-transparent flex flex-col justify-end p-7 group-hover:from-[rgba(33,77,53,0.95)] group-hover:via-[rgba(33,77,53,0.4)] transition-all duration-400"
          >
            <div class="text-[11px] font-medium tracking-[0.2em] text-gold mb-2 font-body">
              {{ exhibition.year }}
            </div>
            <div class="font-heading text-[26px] font-light text-white mb-4">
              {{ exhibition.name }}
            </div>
            <RouterLink
              :to="exhibition.link"
              class="text-[11px] font-medium tracking-[0.12em] uppercase text-white inline-flex items-center gap-2 opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 font-body"
              >View Exhibition &rarr;</RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- COMMISSION BANNER -->
    <section class="relative py-24 bg-forest text-center overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="
          background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);
        "
      />
      <div class="relative z-10 max-w-2xl mx-auto px-8">
        <div class="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-4 font-body">
          Custom Work
        </div>
        <h2
          class="font-heading text-[clamp(36px,4.5vw,56px)] font-light text-white mb-4 tracking-tight"
        >
          Bring Your Vision to Life
        </h2>
        <p class="text-base text-white/60 leading-[1.75] mb-10 font-light font-body">
          Looking for a custom artwork created exclusively for your home, office, or special
          occasion? Let's create something meaningful together.
        </p>
        <RouterLink
          to="/commission"
          class="inline-flex items-center gap-2.5 px-10 py-4 bg-gold text-forest text-xs font-semibold tracking-elegant uppercase rounded-full transition-all duration-400 border-2 border-gold font-body hover:bg-transparent hover:text-gold hover:-translate-y-[3px] hover:shadow-button"
        >
          Request a Commission
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

    <!-- TESTIMONIALS -->
    <section class="py-24">
      <div class="text-center mb-16 px-8">
        <div class="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-4 font-body">
          Words of Appreciation
        </div>
        <h2
          class="font-heading text-[clamp(36px,4.5vw,56px)] font-light text-forest leading-[1.1] mb-4 tracking-tight"
        >
          Testimonials
        </h2>
        <p class="text-[15px] text-muted max-w-lg mx-auto leading-[1.75] font-light font-body">
          What collectors and clients say about their experience.
        </p>
      </div>

      <div class="max-w-3xl mx-auto px-8">
        <div class="bg-white p-14 rounded-lg shadow-card text-center">
          <div class="text-gold text-base tracking-[4px] mb-6">★★★★★</div>
          <p class="font-heading text-2xl italic font-light text-forest leading-[1.6] mb-7">
            &ldquo;Working with Ohhyin was an unforgettable experience. The piece she created for
            our home captures exactly the emotion we wanted&mdash;every guest who sees it stops to
            admire it.&rdquo;
          </p>
          <div class="text-[13px] font-medium text-charcoal tracking-wide font-body">
            &mdash; <span class="text-gold">Amara Okafor</span>, Private Collector
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="py-24 bg-linen">
      <div class="text-center mb-12 px-8">
        <div class="text-[10px] font-medium tracking-[0.3em] uppercase text-gold mb-4 font-body">
          Get in Touch
        </div>
        <h2
          class="font-heading text-[clamp(36px,4.5vw,56px)] font-light text-forest leading-[1.1] mb-4 tracking-tight"
        >
          Contact
        </h2>
        <p class="text-[15px] text-muted max-w-lg mx-auto leading-[1.75] font-light font-body">
          Interested in a piece, commission, or collaboration? I'd love to hear from you.
        </p>
      </div>

      <div class="max-w-4xl mx-auto px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="contact in contacts"
          :key="contact.label"
          class="bg-white p-9 rounded-lg text-center transition-all duration-400 border border-transparent hover:border-gold hover:-translate-y-1 hover:shadow-card"
        >
          <div
            class="w-12 h-12 rounded-full bg-ivory flex items-center justify-center mx-auto mb-4 text-xl text-gold"
          >
            {{ contact.icon }}
          </div>
          <div class="text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2 font-body">
            {{ contact.label }}
          </div>
          <div class="text-[13px] font-medium text-charcoal font-body">{{ contact.value }}</div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-forest pt-16 pb-8 text-white">
      <div
        class="max-w-gallery mx-auto px-8 grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12"
      >
        <div class="max-w-xs">
          <div class="font-heading text-[26px] font-normal mb-3">Ohhyin's Art</div>
          <p class="text-[13px] text-white/45 leading-[1.7] font-light font-body">
            Contemporary fine art inspired by emotion, nature, and memory. Every piece tells a
            story.
          </p>
        </div>

        <div>
          <div
            class="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-5 font-body"
          >
            Navigation
          </div>
          <ul class="space-y-3">
            <li v-for="link in footerNav" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-[13px] text-white/50 hover:text-white transition-colors duration-300 font-body"
                >{{ link.label }}</RouterLink
              >
            </li>
          </ul>
        </div>

        <div>
          <div
            class="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-5 font-body"
          >
            Services
          </div>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <a
                href="#"
                class="text-[13px] text-white/50 hover:text-white transition-colors duration-300 font-body"
                >{{ service }}</a
              >
            </li>
          </ul>
        </div>

        <div>
          <div
            class="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold mb-5 font-body"
          >
            Legal
          </div>
          <ul class="space-y-3">
            <li v-for="legal in legals" :key="legal">
              <a
                href="#"
                class="text-[13px] text-white/50 hover:text-white transition-colors duration-300 font-body"
                >{{ legal }}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="max-w-gallery mx-auto px-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <div class="text-xs text-white/35 font-body">
          &copy; 2026 Ohhyin's Art. All rights reserved.
        </div>
        <div class="flex gap-3">
          <a
            v-for="social in socials"
            :key="social"
            href="#"
            class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/50 hover:bg-gold hover:border-gold hover:text-forest transition-all duration-300 font-body"
            >{{ social }}</a
          >
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
import heroArtwork from '@/components/images/hero-artwork.jpg'
import artist1 from '@/components/images/artist1.jpg'
import heyjago from '@/components/images/artworks/heyjago.jpg'
import difffeathers from '@/components/images/artworks/difffeathers.jpg'
import fourhead from '@/components/images/artworks/fourhead.jpg'
import clientsOrder from '@/components/images/artworks/clients-order.jpg'
import chillgirl from '@/components/images/artworks/chillgirl.jpg'
import balance from '@/components/images/artworks/balance.jpg'
import numb from '@/components/images/artworks/numb.jpg'
import dna from '@/components/images/artworks/DNA.jpg'
import duskVeil from '@/components/images/artworks/dusk-veil.jpg'
import arthotel from '@/components/images/arthotelhexibit.jpg'

export default {
  name: 'Home',

  data() {
    return {
      heroArtwork,
      artist1,

      stats: [
        { number: '80+', label: 'Original Paintings' },
        { number: '12', label: 'Collections' },
        { number: '6', label: 'Exhibitions' },
        { number: '250+', label: 'Collectors' },
      ],

      featuredArtworks: [
        {
          title: 'An Open Head',
          medium: 'Hey Jago',
          image: heyjago,
          link: '/artwork/1',
          span: 'sm:col-span-2 sm:row-span-2',
        },
        {
          title: 'Different Feathers',
          medium: '36x36" Acrylic on Canvas',
          image: difffeathers,
          link: '/artwork/2',
          span: '',
        },
        {
          title: 'Four Head',
          medium: '36x36" Acrylic on Canvas',
          image: fourhead,
          link: '/artwork/3',
          span: '',
        },
        {
          title: 'Clients Order',
          medium: 'Oil on Canvas',
          image: clientsOrder,
          link: '/artwork/4',
          span: 'sm:col-span-2',
        },
        {
          title: 'Chill Girl',
          medium: 'Oil on Canvas',
          image: chillgirl,
          link: '/artwork/5',
          span: '',
        },
        {
          title: 'BALANCE',
          medium: '5X3FT Acrylic on Canvas',
          image: balance,
          link: '/artwork/6',
          span: 'sm:col-span-2 sm:row-span-2',
        },
        {
          title: 'Numb',
          medium: '36x36" Acrylic on Canvas',
          image: numb,
          link: '/artwork/7',
          span: '',
        },
        {
          title: 'Clients Order',
          medium: 'Oil on Canvas',
          image: clientsOrder,
          link: '/artwork/4',
          span: 'sm:col-span-2',
        },
      ],

      sideCollections: [
        { name: 'The DNA', count: 12, image: dna },
        { name: 'Memory Fragments', count: 9, image: duskVeil },
      ],

      processSteps: [
        {
          icon: '💡',
          title: 'Inspiration',
          desc: 'A moment, a memory, or a feeling that demands expression',
        },
        {
          icon: '✏️',
          title: 'Sketch',
          desc: 'Rough outlines capturing the essence and composition',
        },
        { icon: '🎨', title: 'Composition', desc: 'Building layers of color, texture, and depth' },
        {
          icon: '🖌️',
          title: 'Painting',
          desc: 'Bringing the vision to life with deliberate strokes',
        },
        { icon: '✨', title: 'Final Artwork', desc: 'A finished piece ready to tell its story' },
      ],

      exhibitions: [
        {
          year: '2025',
          name: 'Humanizing Art Exhibit - The Art Hotel - Lagos, Nigeria',
          image: arthotel,
          link: '/exhibitions/lagos-art-fair',
        },
        {
          year: '2025',
          name: 'Abuja Gallery',
          image: arthotel,
          link: '/exhibitions/abuja-gallery',
        },
        {
          year: '2024',
          name: 'Contemporary Expressions',
          image: arthotel,
          link: '/exhibitions/contemporary-expressions',
        },
      ],

      contacts: [
        { icon: '✉️', label: 'Email', value: 'hello@ohhyin.art' },
        { icon: '📸', label: 'Instagram', value: '@ohhyinsart' },
        { icon: '📞', label: 'Phone', value: '+234 800 000 0000' },
        { icon: '📍', label: 'Studio', value: 'Lagos, Nigeria' },
      ],

      footerNav: [
        { to: '/', label: 'Home' },
        { to: '/collections', label: 'Collections' },
        { to: '/exhibitions', label: 'Exhibitions' },
        { to: '/about', label: 'About' },
      ],

      services: ['Original Artworks', 'Commissions', 'Prints', 'Exhibitions'],
      legals: ['Privacy Policy', 'Terms of Service', 'Shipping', 'Returns'],
      socials: ['IG', 'FB', 'TW', 'PI'],
    }
  },
}
</script>
