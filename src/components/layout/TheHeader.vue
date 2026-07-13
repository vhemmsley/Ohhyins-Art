<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-600',
      isScrolled ? 'py-2.5' : 'py-5',
    ]"
  >
    <div
      :class="[
        'max-w-gallery mx-auto transition-all duration-600',
        isScrolled
          ? 'bg-ivory/94 backdrop-blur-2xl rounded-full shadow-soft px-8 border border-border/50'
          : 'px-8',
      ]"
    >
      <div class="flex items-center justify-between h-[68px]">
        <!-- Logo with Image -->
        <RouterLink to="/" class="flex items-center gap-3 group">
          <img
            src="../../../public/logo4.png"
            alt="Ohhyin's Art"
            class="h-24 w-auto object-contain transition-transform duration-400 group-hover:scale-105"
          />
        </RouterLink>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-10">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="[
              'relative text-[13px] font-medium tracking-wide transition-colors duration-300 py-1 font-body',
              $route.path === link.to
                ? 'text-forest font-semibold'
                : 'text-charcoal hover:text-forest',
            ]"
          >
            {{ link.label }}
            <span
              :class="[
                'absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] bg-gold rounded-full transition-all duration-350',
                $route.path === link.to ? 'w-full' : 'w-0 group-hover:w-full',
              ]"
            />
          </RouterLink>
        </nav>

        <!-- CTA -->
        <RouterLink
          to="/commission"
          class="hidden lg:inline-flex items-center px-7 py-2.5 bg-forest text-white text-xs font-medium tracking-elegant uppercase rounded-full transition-all duration-400 border-[1.5px] border-forest font-body hover:bg-botanical hover:border-botanical hover:-translate-y-0.5 hover:shadow-button"
        >
          Commission
        </RouterLink>

        <!-- Mobile Toggle -->
        <button class="lg:hidden p-2 text-forest" @click="mobileOpen = true" aria-label="Open menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="fade">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 bg-ivory/98 backdrop-blur-3xl z-[999] flex flex-col items-center justify-center gap-8"
      >
        <button
          class="absolute top-6 right-6 text-forest text-3xl"
          @click="mobileOpen = false"
          aria-label="Close menu"
        >
          &times;
        </button>
        <RouterLink
          v-for="link in [...navLinks, { to: '/commission', label: 'Commission' }]"
          :key="link.to"
          :to="link.to"
          class="font-heading text-3xl text-forest hover:text-gold transition-colors duration-300 font-light"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </Transition>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',

  data() {
    return {
      isScrolled: false,
      mobileOpen: false,
      navLinks: [
        { to: '/', label: 'Home' },
        { to: '/collections', label: 'Collections' },
        { to: '/exhibitions', label: 'Exhibitions' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
      ],
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
  },
}
</script>

<style scoped>
.duration-350 {
  transition-duration: 350ms;
}
.duration-400 {
  transition-duration: 400ms;
}
.duration-600 {
  transition-duration: 600ms;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
