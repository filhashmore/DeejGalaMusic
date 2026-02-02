export const siteConfig = {
  artist: {
    name: "Deej Gala",
    tagline: "Welcome to the music of Deej Gala. Cheers ✌️🌎",
    role: "Singer • Songwriter • Producer",
    bio: `Deej Gala is an independent singer, songwriter, and producer crafting indie pop with electronic influences.

With a DIY approach and a passion for authentic sound, Deej creates music that blends catchy melodies with heartfelt lyrics. From the bedroom studio to streaming platforms worldwide, every track is a labor of love.`,
  },

  social: {
    spotify: "https://open.spotify.com/artist/27M1k4nrHxBFTIvcoENcsV",
    instagram: "https://www.instagram.com/deejgala",
    twitter: "https://x.com/deejgala",
  },

  spotifyEmbed: {
    artistId: "27M1k4nrHxBFTIvcoENcsV",
    // Featured track - Stupid Love
    featuredTrackId: "4iV5W9uYEdYUVa79Axb7Rh",
  },

  discography: {
    ep: [
      {
        title: "Baby Steps",
        year: 2019,
        type: "EP",
        spotifyUrl: "https://open.spotify.com/album/...",
      },
    ],
    singles: [
      {
        title: "4URLUV",
        year: 2022,
        duration: "4:11",
        popular: true,
        spotifyUrl: "https://open.spotify.com/track/...",
      },
      {
        title: "Best I Could Be",
        subtitle: "What Makes You Alive",
        year: 2021,
        duration: "2:47",
        popular: true,
        spotifyUrl: "https://open.spotify.com/track/...",
      },
      {
        title: "Light Me Up",
        year: 2021,
        duration: "3:00",
        popular: true,
        spotifyUrl: "https://open.spotify.com/track/...",
      },
      {
        title: "Starting Over",
        year: 2021,
        duration: "2:20",
        spotifyUrl: "https://open.spotify.com/track/...",
      },
      {
        title: "Stupid Love",
        year: 2021,
        duration: "2:36",
        popular: true,
        spotifyUrl: "https://open.spotify.com/track/...",
      },
      {
        title: "Heart Drop",
        year: 2020,
        spotifyUrl: "https://open.spotify.com/track/...",
      },
      {
        title: "Our Time Is Through",
        year: 2020,
        spotifyUrl: "https://open.spotify.com/track/...",
      },
      {
        title: "Waiting for You",
        year: 2020,
        spotifyUrl: "https://open.spotify.com/track/...",
      },
    ],
  },

  images: {
    hero: "/images/Deej_Gala_Cyber_Punk_01.png",
    about: "/images/Deej_Gala_Cyber_Punk_02.png",
    gallery: [
      "/images/Deej_Gala_Cyber_Punk_01.png",
      "/images/Deej_Gala_Cyber_Punk_02.png",
    ],
  },

  contact: {
    email: "deejgala@email.com",
    bookingNote: "For bookings and inquiries, reach out via Instagram DM or email.",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Music", href: "#music" },
    { label: "Gallery", href: "#gallery" },
    { label: "Connect", href: "#connect" },
  ],
};

export type SiteConfig = typeof siteConfig;
