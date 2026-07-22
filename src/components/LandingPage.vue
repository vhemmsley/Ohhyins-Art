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
            Take your broken Heart and make it into art
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
          <div class="relative p-4">
            <div class="relative w-full max-w-[420px] aspect-[3/4] overflow-hidden rounded-lg">
              <img
                :src="heroArtwork"
                alt="Featured Artwork"
                class="w-full h-full object-cover animate-slowZoom"
              />
            </div>
            <div
              class="absolute inset-0 border border-gold rounded-lg opacity-25 pointer-events-none m-1.5"
            />
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
        <RouterLink
          v-for="(art, i) in featuredArtworks"
          :key="i"
          :to="art.link"
          :class="['relative rounded-lg overflow-hidden group bg-linen block', art.span]"
        >
          <img
            :src="art.image"
            :alt="art.title"
            class="w-full h-full object-cover transition-transform duration-800 group-hover:scale-[1.06]"
          />

          <!-- Desktop: always-visible bottom gradient + hover reveal -->
          <div
            class="hidden sm:absolute sm:inset-0 sm:bg-gradient-to-t sm:from-[rgba(33,77,53,0.7)] sm:via-transparent sm:to-transparent sm:flex sm:flex-col sm:justify-end sm:p-6"
          >
            <div
              class="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
            >
              <div
                class="font-heading text-[22px] font-normal text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {{ art.title }}
              </div>
              <div
                class="text-[10px] text-champagne tracking-[0.15em] mb-3 uppercase font-body opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {{ art.medium }}
              </div>
              <span
                class="text-[11px] font-medium tracking-[0.12em] uppercase text-white inline-flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5 font-body"
              >
                View Artwork &rarr;
              </span>
            </div>
          </div>

          <!-- Mobile: small centered badge -->
          <div class="sm:hidden absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
            <span
              class="inline-block px-4 py-1.5 bg-white/95 text-forest text-[10px] font-semibold tracking-elegant uppercase rounded-full font-body shadow-md border border-border/50 whitespace-nowrap"
            >
              View Artwork
            </span>
          </div>
        </RouterLink>
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
            class="w-14 h-14 rounded-full bg-white/[0.04] border border-gold/25 flex items-center justify-center mx-auto mb-3.5"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="text-gold"
            >
              <path
                v-if="i === 0"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
              <path v-else-if="i === 1" d="M12 19l7-7 3 3-7 7-3-3z" />
              <path v-else-if="i === 2" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              <path
                v-else-if="i === 3"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
              <path
                v-else
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
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

      <div
        class="max-w-gallery mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center"
      >
        <div
          v-for="exhibition in exhibitions"
          :key="exhibition.id"
          class="relative rounded-lg overflow-hidden cursor-pointer h-[360px] w-full max-w-[420px] group bg-linen"
        >
          <img
            :src="exhibition.featuredImage"
            :alt="exhibition.name"
            class="w-full h-full object-cover transition-transform duration-800 group-hover:scale-[1.05]"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[rgba(33,77,53,0.9)] via-[rgba(33,77,53,0.2)] to-transparent flex flex-col justify-end p-7 group-hover:from-[rgba(33,77,53,0.95)] group-hover:via-[rgba(33,77,53,0.4)] transition-all duration-400"
          >
            <div class="text-[11px] font-medium tracking-[0.2em] text-gold mb-2 font-body">
              {{ exhibition.year }}
            </div>
            <div class="font-heading text-[20px] font-light text-white mb-4 leading-[1.2]">
              {{ exhibition.name }}
            </div>
            <div class="text-[11px] text-white/60 font-body mb-3">
              {{ exhibition.venue }} — {{ exhibition.location }}
            </div>
            <RouterLink
              to="/exhibitions"
              class="text-[11px] font-medium tracking-[0.12em] uppercase text-white inline-flex items-center gap-2 opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 font-body"
            >
              View Exhibition &rarr;
            </RouterLink>
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
          <div class="flex items-center justify-center gap-1 mb-6">
            <svg
              v-for="n in 5"
              :key="n"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="text-gold"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </div>
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
        <a
          href="mailto:hello@ohhyin.art"
          class="bg-white p-9 rounded-lg text-center transition-all duration-400 border border-transparent hover:border-gold hover:-translate-y-1 hover:shadow-card group"
        >
          <div
            class="w-12 h-12 rounded-full bg-ivory flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="text-gold"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div class="text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2 font-body">
            Email
          </div>
          <div class="text-[13px] font-medium text-charcoal font-body">hello@ohhyin.art</div>
        </a>

        <a
          href="https://instagram.com/ohhyin"
          target="_blank"
          class="bg-white p-9 rounded-lg text-center transition-all duration-400 border border-transparent hover:border-gold hover:-translate-y-1 hover:shadow-card group"
        >
          <div
            class="w-12 h-12 rounded-full bg-ivory flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="text-gold"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <div class="text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2 font-body">
            Instagram
          </div>
          <div class="text-[13px] font-medium text-charcoal font-body">@ohhyinsart</div>
        </a>

        <a
          :href="whatsappLink"
          target="_blank"
          class="bg-white p-9 rounded-lg text-center transition-all duration-400 border border-transparent hover:border-gold hover:-translate-y-1 hover:shadow-card group"
        >
          <div
            class="w-12 h-12 rounded-full bg-ivory flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-gold">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
          </div>
          <div class="text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2 font-body">
            WhatsApp
          </div>
          <div class="text-[13px] font-medium text-charcoal font-body">Quick Replies</div>
        </a>

        <div
          class="bg-white p-9 rounded-lg text-center transition-all duration-400 border border-transparent hover:border-gold hover:-translate-y-1 hover:shadow-card group"
        >
          <div
            class="w-12 h-12 rounded-full bg-ivory flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="text-gold"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div class="text-[10px] font-medium tracking-[0.18em] uppercase text-gold mb-2 font-body">
            Studio
          </div>
          <div class="text-[13px] font-medium text-charcoal font-body">Lagos, Nigeria</div>
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
            :key="social.label"
            :href="social.url"
            target="_blank"
            class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:border-gold hover:text-forest transition-all duration-300"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                v-if="social.label === 'IG'"
                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
              />
              <rect v-if="social.label === 'IG'" x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <line v-if="social.label === 'IG'" x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              <path
                v-if="social.label === 'X'"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              />
              <path
                v-if="social.label === 'WA'"
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                fill="currentColor"
              />
              <path
                v-if="social.label === 'SC'"
                d="M12.206 1c.577 0 2.553.166 4.037 2.007C17.153 4.21 17.6 6.187 17.4 8.655c.306.17.756-.044.94-.253.2-.227.433-.17.55-.085.12.085.2.32.04.56-.306.45-1.013 1.053-2.066 1.173-.16.027-.24.133-.213.293.027.16.133.24.293.213 1.173-.16 2.106.267 2.586.747.48.48.64 1.146.453 1.733-.133.427-.48.747-.96.907-.053.013-.093.053-.107.107-.013.053.013.107.053.133.373.267.56.64.533 1.04-.027.427-.267.8-.667 1.04-.08.053-.107.133-.08.213.027.08.107.133.187.133.373.027.64.213.747.48.107.267.053.56-.133.8-.267.347-.747.533-1.44.533-.16 0-.293.107-.347.267-.133.453-.48.747-.96.853-.027 0-.053.027-.067.053-.013.027-.013.053 0 .08.16.373.107.72-.16.987-.24.24-.587.347-.987.293-.107-.013-.213.04-.267.133-.213.373-.587.587-1.093.627-.027 0-.053.013-.067.04l-.453.587c-.16.2-.4.32-.667.32h-.027c-.267 0-.52-.12-.68-.32l-.453-.587c-.013-.027-.04-.04-.067-.04-.507-.04-.88-.253-1.093-.627-.053-.093-.16-.147-.267-.133-.4.053-.747-.053-.987-.293-.267-.267-.32-.613-.16-.987.013-.027.013-.053 0-.08-.013-.027-.04-.053-.067-.053-.48-.107-.827-.4-.96-.853-.053-.16-.187-.267-.347-.267-.693 0-1.173-.187-1.44-.533-.187-.24-.24-.533-.133-.8.107-.267.373-.453.747-.48.08 0 .16-.053.187-.133.027-.08 0-.16-.08-.213-.4-.24-.64-.613-.667-1.04-.027-.4.16-.773.533-1.04.053-.04.067-.093.053-.133-.013-.053-.053-.093-.107-.107-.48-.16-.827-.48-.96-.907-.187-.587-.027-1.253.453-1.733.48-.48 1.413-.907 2.586-.747.16.027.267-.053.293-.213.027-.16-.053-.267-.213-.293-1.053-.12-1.76-.723-2.066-1.173-.16-.24-.08-.475.04-.56.12-.085.35-.142.55.085.187.21.637.423.94.253-.2-2.467.247-4.445 1.157-5.648C9.587 1.166 11.563 1 12.14 1h.066z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
import heroArtwork from '@/components/images/hero-artwork.jpg'
import artist1 from '@/components/images/artist1.jpg'

export default {
  name: 'Home',

  data() {
    return {
      heroArtwork,
      artist1,

      stats: [
        { number: '40+', label: 'Original Paintings' },
        { number: '12', label: 'Collections' },
        { number: '6', label: 'Exhibitions' },
        { number: '250+', label: 'Collectors' },
      ],

      processSteps: [
        {
          title: 'Inspiration',
          desc: 'A moment, a memory, or a feeling that demands expression',
        },
        {
          title: 'Sketch',
          desc: 'Rough outlines capturing the essence and composition',
        },
        { title: 'Composition', desc: 'Building layers of color, texture, and depth' },
        {
          title: 'Painting',
          desc: 'Bringing the vision to life with deliberate strokes',
        },
        { title: 'Final Artwork', desc: 'A finished piece ready to tell its story' },
      ],

      footerNav: [
        { to: '/', label: 'Home' },
        { to: '/collections', label: 'Collections' },
        { to: '/exhibitions', label: 'Exhibitions' },
        { to: '/about', label: 'About' },
      ],

      services: ['Original Artworks', 'Commissions', 'Prints', 'Exhibitions'],
      legals: ['Privacy Policy', 'Terms of Service', 'Shipping', 'Returns'],
      socials: [
        { label: 'IG', url: 'https://instagram.com/ohhyin' },
        { label: 'X', url: 'https://x.com/ohhyin' },
        { label: 'WA', url: '' },
        { label: 'SC', url: 'https://snapchat.com/add/ohhyin' },
      ],
    }
  },

  computed: {
    featuredArtworks() {
      const all = this.$store.getters.getAllArtworks
      return [
        { ...all[0], span: 'sm:col-span-2 sm:row-span-2', link: '/artwork/1' },
        { ...all[1], span: '', link: '/artwork/2' },
        { ...all[2], span: '', link: '/artwork/3' },
        { ...all[3], span: 'sm:col-span-2', link: '/artwork/4' },
        { ...all[4], span: '', link: '/artwork/5' },
        { ...all[5], span: 'sm:col-span-2 sm:row-span-2', link: '/artwork/6' },
        { ...all[6], span: '', link: '/artwork/7' },
        { ...all[3], span: 'sm:col-span-2', link: '/artwork/4' },
      ]
    },
    sideCollections() {
      const all = this.$store.getters.getAllArtworks
      return [
        { name: 'The DNA', count: 12, image: all[7]?.image },
        { name: 'Memory Fragments', count: 9, image: all[8]?.image },
      ]
    },
    exhibitions() {
      return this.$store.getters.getAllExhibitions.slice(0, 3)
    },
    whatsappLink() {
      const number = this.$store.getters.getWhatsAppNumber
      const message = encodeURIComponent(
        'Hi, I would like to get in touch with you about your art.',
      )
      return `https://wa.me/${number}?text=${message}`
    },
  },

  mounted() {
    // Set WhatsApp social link dynamically
    this.socials[2].url = this.whatsappLink
  },
}
</script>
