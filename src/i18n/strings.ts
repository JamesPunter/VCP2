export const STRINGS = {
  nav: {
    home: 'Home',
    prices: 'Prijzen',
    book: 'Reserveren',
    location: 'Locatie',
    contact: 'Contact',
    faq: 'FAQ',
  },
  footer: {
    navHeading: 'Navigatie',
    contactHeading: 'Contact',
    brandSubtitle: 'Amsterdam-Oost',
    tagline:
      'Een industriële loft van ruim 60m² met 5 meter plafondhoogte — ideaal voor fotografie, film, podcasts, workshops en presentaties in Amsterdam-Oost.',
    availability: 'Bereikbaar 07:30 – 23:00',
    copyright: (y: number) =>
      `© ${y} Studio Le Garage Amsterdam. K.v.K. 33252574`,
    addressLine: 'Veemarkt 31, 1019 DA Amsterdam-Oost',
  },
  home: {
    heroLine: 'Creative Production Space',
    aboutTitle: 'Over de studio',
    aboutP1:
      'Studio Le Garage is een industriële loftstudio van 60m² gelegen in Amsterdam-Oost, aan de Veemarkt 31. Met een plafondhoogte van 5 meter, een dansvloer van 40m² met spiegelwand en volop daglicht biedt de studio een unieke omgeving voor fotoshoots, filmopnames, workshops, repetities en evenementen.',
    aboutP2:
      'De ruimte is volledig uitgerust met een keuken, toilet, driefasige stroomvoorziening en gratis WiFi. Een vaste Studio Host is aanwezig om je dag soepel te laten verlopen.',
    aboutP3:
      'De studio is te huur per dagdeel — ochtend, middag of avond — en is ook beschikbaar in het weekend op aanvraag.',
    infoAddress: 'Veemarkt 31 - 1019 DA Amsterdam',
  },
  prijzen: {
    heroTitle: 'Onze prijzen',
    heroLead:
      'Wij werken met vaste tijdblokken. Kies het blok dat het beste bij jouw productie past.',
    vatNote: 'Alle tarieven zijn exclusief 21% BTW, tenzij anders vermeld.',
    featuredBadge: 'Meest gekozen',
    reserveCta: 'Reserveer dit blok',
    weekendUnderCards:
      'Wilt u gebruik maken van de studio in het weekend, neem contact met ons op.',
    includedHeading: 'Alles wat je nodig hebt',
    blocks: {
      ochtend: {
        label: 'Ochtend',
        sublabel: 'Morning',
        desc: 'Ideaal voor producties met dagelijks ochtendlicht.',
      },
      middag: {
        label: 'Middag',
        sublabel: 'Afternoon',
        desc: 'Ruimte voor een volledige middagproductie.',
      },
      dagdeel: {
        label: 'Hele Dag',
        sublabel: 'Full Day',
        desc: 'De beste keuze voor grote producties met ruime opbouw- en afbraaktijd.',
      },
      avond: {
        label: 'Avond',
        sublabel: 'Evening',
        desc: 'Geschikt voor avondopnames, events en presentaties.',
      },
    },
    vatInclSuffix: 'incl. BTW',
    onRequest: 'Op aanvraag',
    contactForMore: 'Neem contact op',
    includedItems: [
      'Studio 60 m² met dansvloer (40 m²) en spiegelwand',
      'Keuken, toilet, koffie en thee',
      'Elektra, driefasestroom en gratis WiFi',
      'Studio Host tijdens je tijdblok',
      'Laden en lossen voor de deur; basis uitrusting aanwezig',
    ],
  },
} as const
