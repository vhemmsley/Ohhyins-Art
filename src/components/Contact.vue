<template>
  <main class="bg-ivory overflow-x-hidden min-h-screen">
    <!-- Page Header -->
    <section class="pt-32 pb-16">
      <div class="max-w-gallery mx-auto px-8">
        <div class="text-center mb-4">
          <div class="inline-flex items-center gap-3 mb-6">
            <span class="w-8 h-px bg-gold" />
            <span class="text-[11px] font-medium tracking-[0.3em] uppercase text-gold font-body"
              >Get in Touch</span
            >
            <span class="w-8 h-px bg-gold" />
          </div>
          <h1
            class="font-heading text-[clamp(40px,5vw,64px)] font-light text-forest leading-[1.05] tracking-tight mb-4"
          >
            Contact
          </h1>
          <p class="text-[15px] text-muted max-w-lg mx-auto leading-[1.75] font-light font-body">
            Whether you are interested in a piece, a commission, or simply want to say hello — I
            would love to hear from you.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Grid -->
    <section class="pb-24">
      <div class="max-w-gallery mx-auto px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <!-- Left — Contact Info -->
          <div>
            <div class="mb-10">
              <div class="flex items-center gap-3 mb-4">
                <span class="w-6 h-px bg-gold" />
                <span class="text-[10px] font-medium tracking-gallery uppercase text-gold font-body"
                  >Reach Out</span
                >
              </div>
              <h2
                class="font-heading text-[clamp(24px,2.5vw,36px)] font-light text-forest leading-[1.15] tracking-tight mb-4"
              >
                Let's Start a Conversation
              </h2>
              <p class="text-[15px] text-muted leading-[1.75] font-light font-body">
                Every great collaboration begins with a simple message. Choose your preferred
                channel below — I respond to all inquiries within 24 hours.
              </p>
            </div>

            <!-- Social Links -->
            <div class="space-y-4">
              <!-- WhatsApp -->
              <a
                :href="whatsappLink"
                target="_blank"
                class="flex items-center gap-5 p-5 bg-white rounded-xl border border-border/50 hover:border-gold/50 hover:shadow-card transition-all duration-400 group"
              >
                <div
                  class="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="text-[#25D366]"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-[13px] font-medium text-forest font-body">WhatsApp</div>
                  <div class="text-[12px] text-muted font-body truncate">
                    Quick replies, anytime
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-soft group-hover:text-gold transition-colors flex-shrink-0"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>

              <!-- Instagram -->
              <a
                href="https://instagram.com/ohhyin"
                target="_blank"
                class="flex items-center gap-5 p-5 bg-white rounded-xl border border-border/50 hover:border-gold/50 hover:shadow-card transition-all duration-400 group"
              >
                <div
                  class="w-12 h-12 rounded-full bg-[#E4405F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E4405F]/20 transition-colors"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="text-[#E4405F]"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                    />
                    <path
                      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                    />
                    <line
                      x1="17.5"
                      y1="6.5"
                      x2="17.51"
                      y2="6.5"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-[13px] font-medium text-forest font-body">Instagram</div>
                  <div class="text-[12px] text-muted font-body truncate">
                    @ohhyin — Behind the scenes
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-soft group-hover:text-gold transition-colors flex-shrink-0"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>

              <!-- X / Twitter -->
              <a
                href="https://x.com/ohhyin"
                target="_blank"
                class="flex items-center gap-5 p-5 bg-white rounded-xl border border-border/50 hover:border-gold/50 hover:shadow-card transition-all duration-400 group"
              >
                <div
                  class="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 group-hover:bg-black/10 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="text-black"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-[13px] font-medium text-forest font-body">X / Twitter</div>
                  <div class="text-[12px] text-muted font-body truncate">
                    @ohhyin — Thoughts & updates
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-soft group-hover:text-gold transition-colors flex-shrink-0"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>

              <!-- Snapchat -->
              <a
                href="https://snapchat.com/add/ohhyin"
                target="_blank"
                class="flex items-center gap-5 p-5 bg-white rounded-xl border border-border/50 hover:border-gold/50 hover:shadow-card transition-all duration-400 group"
              >
                <div
                  class="w-12 h-12 rounded-full bg-[#FFFC00]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFFC00]/30 transition-colors"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="text-[#0F0F0F]"
                  >
                    <path
                      d="M12.206 1c.577 0 2.553.166 4.037 2.007C17.153 4.21 17.6 6.187 17.4 8.655c.306.17.756-.044.94-.253.2-.227.433-.17.55-.085.12.085.2.32.04.56-.306.45-1.013 1.053-2.066 1.173-.16.027-.24.133-.213.293.027.16.133.24.293.213 1.173-.16 2.106.267 2.586.747.48.48.64 1.146.453 1.733-.133.427-.48.747-.96.907-.053.013-.093.053-.107.107-.013.053.013.107.053.133.373.267.56.64.533 1.04-.027.427-.267.8-.667 1.04-.08.053-.107.133-.08.213.027.08.107.133.187.133.373.027.64.213.747.48.107.267.053.56-.133.8-.267.347-.747.533-1.44.533-.16 0-.293.107-.347.267-.133.453-.48.747-.96.853-.027 0-.053.027-.067.053-.013.027-.013.053 0 .08.16.373.107.72-.16.987-.24.24-.587.347-.987.293-.107-.013-.213.04-.267.133-.213.373-.587.587-1.093.627-.027 0-.053.013-.067.04l-.453.587c-.16.2-.4.32-.667.32h-.027c-.267 0-.52-.12-.68-.32l-.453-.587c-.013-.027-.04-.04-.067-.04-.507-.04-.88-.253-1.093-.627-.053-.093-.16-.147-.267-.133-.4.053-.747-.053-.987-.293-.267-.267-.32-.613-.16-.987.013-.027.013-.053 0-.08-.013-.027-.04-.053-.067-.053-.48-.107-.827-.4-.96-.853-.053-.16-.187-.267-.347-.267-.693 0-1.173-.187-1.44-.533-.187-.24-.24-.533-.133-.8.107-.267.373-.453.747-.48.08 0 .16-.053.187-.133.027-.08 0-.16-.08-.213-.4-.24-.64-.613-.667-1.04-.027-.4.16-.773.533-1.04.053-.04.067-.093.053-.133-.013-.053-.053-.093-.107-.107-.48-.16-.827-.48-.96-.907-.187-.587-.027-1.253.453-1.733.48-.48 1.413-.907 2.586-.747.16.027.267-.053.293-.213.027-.16-.053-.267-.213-.293-1.053-.12-1.76-.723-2.066-1.173-.16-.24-.08-.475.04-.56.12-.085.35-.142.55.085.187.21.637.423.94.253-.2-2.467.247-4.445 1.157-5.648C9.587 1.166 11.563 1 12.14 1h.066z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-[13px] font-medium text-forest font-body">Snapchat</div>
                  <div class="text-[12px] text-muted font-body truncate">
                    @ohhyin — Daily studio life
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-soft group-hover:text-gold transition-colors flex-shrink-0"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>

              <!-- Email -->
              <a
                href="mailto:hello@ohhyin.art"
                class="flex items-center gap-5 p-5 bg-white rounded-xl border border-border/50 hover:border-gold/50 hover:shadow-card transition-all duration-400 group"
              >
                <div
                  class="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center flex-shrink-0 group-hover:bg-forest/10 transition-colors"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    class="text-forest"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-[13px] font-medium text-forest font-body">Email</div>
                  <div class="text-[12px] text-muted font-body truncate">hello@ohhyin.art</div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-soft group-hover:text-gold transition-colors flex-shrink-0"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Right — Contact Form -->
          <div class="lg:sticky lg:top-28">
            <div class="bg-white rounded-2xl p-8 md:p-10 border border-border/50 shadow-card">
              <div class="mb-8">
                <div class="flex items-center gap-3 mb-3">
                  <span class="w-6 h-px bg-gold" />
                  <span
                    class="text-[10px] font-medium tracking-gallery uppercase text-gold font-body"
                    >Send a Message</span
                  >
                </div>
                <h3 class="font-heading text-2xl font-light text-forest mb-2">Drop a Line</h3>
                <p class="text-[13px] text-muted font-body">
                  Fill in the form below and I will get back to you as soon as possible.
                </p>
              </div>

              <form @submit.prevent="submitForm" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      class="text-[11px] font-medium tracking-elegant uppercase text-soft font-body block mb-1.5"
                      >First Name</label
                    >
                    <input
                      v-model="form.firstName"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-linen border border-border rounded-lg text-[13px] font-body text-forest focus:border-gold focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      class="text-[11px] font-medium tracking-elegant uppercase text-soft font-body block mb-1.5"
                      >Last Name</label
                    >
                    <input
                      v-model="form.lastName"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-linen border border-border rounded-lg text-[13px] font-body text-forest focus:border-gold focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    class="text-[11px] font-medium tracking-elegant uppercase text-soft font-body block mb-1.5"
                    >Email</label
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 bg-linen border border-border rounded-lg text-[13px] font-body text-forest focus:border-gold focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    class="text-[11px] font-medium tracking-elegant uppercase text-soft font-body block mb-1.5"
                    >Subject</label
                  >
                  <select
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 bg-linen border border-border rounded-lg text-[13px] font-body text-forest focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="purchase">Purchase Inquiry</option>
                    <option value="commission">Commission Request</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="exhibition">Exhibition / Event</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                <div>
                  <label
                    class="text-[11px] font-medium tracking-elegant uppercase text-soft font-body block mb-1.5"
                    >Message</label
                  >
                  <textarea
                    v-model="form.message"
                    rows="5"
                    required
                    class="w-full px-4 py-3 bg-linen border border-border rounded-lg text-[13px] font-body text-forest focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full py-4 bg-forest text-white text-xs font-semibold tracking-elegant uppercase rounded-full transition-all duration-400 border-[1.5px] border-forest font-body hover:bg-botanical hover:border-botanical hover:-translate-y-0.5 hover:shadow-button"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="py-20 bg-linen">
      <div class="max-w-3xl mx-auto px-8 text-center">
        <span class="font-heading text-[56px] text-gold opacity-20 leading-[0.5] block mb-4"
          >&ldquo;</span
        >
        <p
          class="font-heading text-[clamp(20px,2.5vw,28px)] italic font-light text-forest leading-[1.5] mb-6"
        >
          Art is not what you see, but what you make others see.
        </p>
        <div class="text-[12px] text-muted font-body tracking-elegant uppercase">— Edgar Degas</div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Contact',

  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      },
    }
  },

  computed: {
    whatsappLink() {
      const number = this.$store.getters.getWhatsAppNumber
      const message = encodeURIComponent(
        'Hi, I would like to get in touch with you about your art.',
      )
      return `https://wa.me/${number}?text=${message}`
    },
  },

  mounted() {
    window.scrollTo(0, 0)
  },

  methods: {
    submitForm() {
      const fullName = `${this.form.firstName} ${this.form.lastName}`
      const subjectLine = this.form.subject.charAt(0).toUpperCase() + this.form.subject.slice(1)
      const body = encodeURIComponent(
        `Name: ${fullName}\nEmail: ${this.form.email}\nSubject: ${subjectLine}\n\n${this.form.message}`,
      )
      window.location.href = `mailto:hello@ohhyin.art?subject=${encodeURIComponent(subjectLine + ' Inquiry from ' + fullName)}&body=${body}`
      this.form = { firstName: '', lastName: '', email: '', subject: '', message: '' }
    },
  },
}
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}
</style>
