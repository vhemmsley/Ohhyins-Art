import { createStore } from 'vuex'

// Import artwork images
import heyjago from '@/components/images/artworks/heyjago.jpg'
import difffeathers from '@/components/images/artworks/difffeathers.jpg'
import fourhead from '@/components/images/artworks/fourhead.jpg'
import clientsOrder from '@/components/images/artworks/clients-order.jpg'
import chillgirl from '@/components/images/artworks/chillgirl.jpg'
import balance from '@/components/images/artworks/balance.jpg'
import numb from '@/components/images/artworks/numb.jpg'
import dna from '@/components/images/artworks/DNA.jpg'
import duskVeil from '@/components/images/artworks/dusk-veil.jpg'

// Import exhibition images
import arthotel from '@/components/images/exhibitions/arthotel.jpg'
import abuja1 from '@/components/images/exhibitions/arthotel.jpg'
import abuja2 from '@/components/images/exhibitions/arthotel.jpg'
import abuja3 from '@/components/images/exhibitions/arthotel.jpg'
import abuja4 from '@/components/images/exhibitions/arthotel.jpg'
import arthotel2 from '@/components/images/exhibitions/arthotel.jpg'
import arthotel3 from '@/components/images/exhibitions/arthotel.jpg'
import arthotel4 from '@/components/images/exhibitions/arthotel.jpg'
import arthotel5 from '@/components/images/exhibitions/arthotel.jpg'
import arthotel6 from '@/components/images/exhibitions/arthotel.jpg'

const store = createStore({
  state: {
    artworks: [
      {
        id: 1,
        title: 'An Open Head',
        medium: 'Acrylic on Canvas',
        dimensions: '36 x 36 inches',
        price: '₦450,000',
        year: '2025',
        status: 'available',
        category: 'acrylic',
        image: heyjago,
        description:
          'A powerful exploration of vulnerability and openness. This piece invites the viewer to look beyond the surface and confront the raw emotions that lie within.',
        artistNote:
          'I created this piece during a period of intense self-reflection. The open head represents the courage it takes to be truly seen.',
      },
      {
        id: 2,
        title: 'Different Feathers',
        medium: 'Acrylic on Canvas',
        dimensions: '36 x 36 inches',
        price: '₦380,000',
        year: '2025',
        status: 'available',
        category: 'acrylic',
        image: difffeathers,
        description:
          'A celebration of diversity and individuality. Each feather tells its own story, yet together they form something greater.',
        artistNote:
          'Our differences are what make us beautiful. Like feathers, we are all unique yet part of the same flock.',
      },
      {
        id: 3,
        title: 'Four Head',
        medium: 'Acrylic on Canvas',
        dimensions: '36 x 36 inches',
        price: '₦420,000',
        year: '2025',
        status: 'sold',
        category: 'acrylic',
        image: fourhead,
        description:
          'An abstract portrait exploring the many faces we wear. The four heads represent different aspects of identity.',
        artistNote:
          'We all have multiple versions of ourselves. This piece asks: which one is the real you?',
      },
      {
        id: 4,
        title: "Client's Order",
        medium: 'Oil on Canvas',
        dimensions: '48 x 48 inches',
        price: '₦650,000',
        year: '2024',
        status: 'available',
        category: 'oil',
        image: clientsOrder,
        description:
          'A commissioned piece capturing the essence of Lagos nightlife — vibrant, chaotic, and full of life.',
        artistNote:
          'Commission work challenges me to grow. This piece taught me to trust the process.',
      },
      {
        id: 5,
        title: 'Chill Girl',
        medium: 'Oil on Canvas',
        dimensions: '30 x 40 inches',
        price: '₦520,000',
        year: '2024',
        status: 'available',
        category: 'oil',
        image: chillgirl,
        description:
          'A portrait of serenity in chaos. The subject exudes calm confidence amid turmoil.',
        artistNote:
          'She reminds me of my younger self — unsure of the future but determined to face it with grace.',
      },
      {
        id: 6,
        title: 'BALANCE',
        medium: 'Acrylic on Canvas',
        dimensions: '60 x 36 inches (5x3ft)',
        price: '₦850,000',
        year: '2025',
        status: 'available',
        category: 'acrylic',
        image: balance,
        description:
          'A large-scale statement piece about finding equilibrium. Ideal for a feature wall.',
        artistNote: 'Balance is not something you find — it is something you create.',
      },
      {
        id: 7,
        title: 'Numb',
        medium: 'Acrylic on Canvas',
        dimensions: '36 x 36 inches',
        price: '₦400,000',
        year: '2025',
        status: 'available',
        category: 'acrylic',
        image: numb,
        description:
          'An emotional landscape painted in the aftermath of loss. The muted palette conveys the fog of grief.',
        artistNote: 'Art was the only language that made sense when words failed.',
      },
      {
        id: 8,
        title: 'The DNA',
        medium: 'Mixed Media',
        dimensions: '40 x 40 inches',
        price: '₦580,000',
        year: '2024',
        status: 'commission',
        category: 'mixed',
        image: dna,
        description:
          'Layers of fabric, paper, and paint build a textured surface that speaks to heritage and identity.',
        artistNote: 'Our DNA carries stories we will never fully know.',
      },
      {
        id: 9,
        title: 'Dusk Veil',
        medium: 'Oil on Canvas',
        dimensions: '48 x 60 inches',
        price: '₦720,000',
        year: '2024',
        status: 'sold',
        category: 'oil',
        image: duskVeil,
        description: 'A twilight landscape capturing the magical moment between day and night.',
        artistNote: 'There is a brief window each evening when the world holds its breath.',
      },
    ],

    exhibitions: [
      {
        id: 1,
        year: '2025',
        name: 'Humanizing Art Exhibit',
        venue: 'The Art Hotel',
        location: 'Lagos, Nigeria',
        description:
          "A landmark solo exhibition showcasing the full breadth of Ohhyin's work. Featured over 20 original pieces including the debut of 'An Open Head' and 'BALANCE'. The exhibition explored themes of identity, vulnerability, and human connection through vibrant acrylic and oil compositions.",
        date: 'March 15 – April 30, 2025',
        featuredImage: arthotel,
        images: [arthotel, arthotel2, arthotel3, arthotel4, arthotel5, arthotel6],
      },
      {
        id: 2,
        year: '2025',
        name: 'Abuja Gallery Showcase',
        venue: 'Abuja Gallery',
        location: 'Abuja, Nigeria',
        description:
          "An intimate curated selection highlighting the emotional depth of Ohhyin's portraiture. The showcase brought together collectors, critics, and art enthusiasts for an evening of conversation and appreciation.",
        date: 'June 10 – June 24, 2025',
        featuredImage: abuja1,
        images: [abuja1, abuja2, abuja3, abuja4],
      },
      {
        id: 3,
        year: '2025',
        name: 'Abuja Gallery Showcase',
        venue: 'Abuja Gallery',
        location: 'Abuja, Nigeria',
        description:
          "An intimate curated selection highlighting the emotional depth of Ohhyin's portraiture. The showcase brought together collectors, critics, and art enthusiasts for an evening of conversation and appreciation.",
        date: 'June 10 – June 24, 2025',
        featuredImage: abuja1,
        images: [abuja1, abuja2, abuja3, abuja4],
      },
    ],

    // Stats for hero section
    stats: [
      { number: '6+', label: 'Years of Art' },
      { number: '50+', label: 'Artworks' },
      { number: '12+', label: 'Exhibitions' },
      { number: '100+', label: 'Collectors' },
    ],

    // Hero image (uses first artwork image as featured)
    heroImage: heyjago,

    // Artist portrait image (reuse an artwork image as placeholder)
    artistImage: chillgirl,

    // Side collections for Signature Collections section
    sideCollections: [
      { name: 'Abstract Emotions', image: fourhead, count: 12 },
      { name: 'Oil Portraits', image: clientsOrder, count: 8 },
    ],

    // Creative process steps
    processSteps: [
      {
        title: 'Inspiration',
        desc: 'Moments, memories, and emotions spark the first idea.',
        icon: 'spark',
      },
      {
        title: 'Sketching',
        desc: 'Rough outlines capture the composition and energy.',
        icon: 'pencil',
      },
      {
        title: 'Composition',
        desc: 'Colors and textures are planned on the canvas.',
        icon: 'palette',
      },
      { title: 'Painting', desc: 'Layers of paint bring the vision to life.', icon: 'brush' },
      { title: 'Final Touch', desc: 'The last details that make each piece unique.', icon: 'star' },
    ],

    // Contact info
    contactInfo: {
      email: 'hello@ohhyin.com',
      instagram: '@ohhyin',
      phone: '+234 80 1234 5678',
      studio: 'Lagos, Nigeria',
    },

    whatsappNumber: '2348012345678',
  },

  getters: {
    // Artwork getters
    getArtworkById: (state) => (id) => {
      return state.artworks.find((a) => a.id === parseInt(id))
    },
    getRelatedArtworks: (state) => (id, category) => {
      return state.artworks
        .filter((a) => a.id !== parseInt(id) && a.category === category)
        .slice(0, 4)
    },
    getAllArtworks: (state) => state.artworks,
    getArtworksByCategory: (state) => (category) => {
      return state.artworks.filter((a) => a.category === category)
    },
    getAvailableArtworks: (state) => {
      return state.artworks.filter((a) => a.status === 'available')
    },
    getSoldArtworks: (state) => {
      return state.artworks.filter((a) => a.status === 'sold')
    },
    getCommissionArtworks: (state) => {
      return state.artworks.filter((a) => a.status === 'commission')
    },

    // Exhibition getters
    getAllExhibitions: (state) => state.exhibitions,
    getExhibitionById: (state) => (id) => {
      return state.exhibitions.find((e) => e.id === parseInt(id))
    },
    getExhibitionsByYear: (state) => (year) => {
      return state.exhibitions.filter((e) => e.year === year)
    },

    // Hero / Home page getters
    getStats: (state) => state.stats,
    getHeroImage: (state) => state.heroImage,
    getArtistImage: (state) => state.artistImage,
    getSideCollections: (state) => state.sideCollections,
    getProcessSteps: (state) => state.processSteps,
    getContactInfo: (state) => state.contactInfo,

    // WhatsApp getter
    getWhatsAppNumber: (state) => state.whatsappNumber,
  },

  mutations: {
    // Artwork mutations
    SET_ARTWORKS(state, artworks) {
      state.artworks = artworks
    },
    ADD_ARTWORK(state, artwork) {
      state.artworks.push(artwork)
    },
    UPDATE_ARTWORK(state, updatedArtwork) {
      const index = state.artworks.findIndex((a) => a.id === updatedArtwork.id)
      if (index !== -1) {
        state.artworks.splice(index, 1, updatedArtwork)
      }
    },
    DELETE_ARTWORK(state, id) {
      state.artworks = state.artworks.filter((a) => a.id !== id)
    },

    // Exhibition mutations
    SET_EXHIBITIONS(state, exhibitions) {
      state.exhibitions = exhibitions
    },
    ADD_EXHIBITION(state, exhibition) {
      state.exhibitions.push(exhibition)
    },
    UPDATE_EXHIBITION(state, updatedExhibition) {
      const index = state.exhibitions.findIndex((e) => e.id === updatedExhibition.id)
      if (index !== -1) {
        state.exhibitions.splice(index, 1, updatedExhibition)
      }
    },
    DELETE_EXHIBITION(state, id) {
      state.exhibitions = state.exhibitions.filter((e) => e.id !== id)
    },

    // Home page mutations
    SET_STATS(state, stats) {
      state.stats = stats
    },
    SET_HERO_IMAGE(state, image) {
      state.heroImage = image
    },
    SET_ARTIST_IMAGE(state, image) {
      state.artistImage = image
    },
    SET_SIDE_COLLECTIONS(state, collections) {
      state.sideCollections = collections
    },
    SET_PROCESS_STEPS(state, steps) {
      state.processSteps = steps
    },
    SET_CONTACT_INFO(state, info) {
      state.contactInfo = info
    },

    // WhatsApp mutation
    SET_WHATSAPP_NUMBER(state, number) {
      state.whatsappNumber = number
    },
  },

  actions: {
    // Artwork actions
    fetchArtworks({ commit }) {
      // Example: fetch from API and commit SET_ARTWORKS
      // For now, data is already in state
    },
    addArtwork({ commit }, artwork) {
      commit('ADD_ARTWORK', artwork)
    },
    updateArtwork({ commit }, artwork) {
      commit('UPDATE_ARTWORK', artwork)
    },
    deleteArtwork({ commit }, id) {
      commit('DELETE_ARTWORK', id)
    },

    // Exhibition actions
    fetchExhibitions({ commit }) {
      // Example: fetch from API and commit SET_EXHIBITIONS
    },
    addExhibition({ commit }, exhibition) {
      commit('ADD_EXHIBITION', exhibition)
    },
    updateExhibition({ commit }, exhibition) {
      commit('UPDATE_EXHIBITION', exhibition)
    },
    deleteExhibition({ commit }, id) {
      commit('DELETE_EXHIBITION', id)
    },
  },
})

export default store
