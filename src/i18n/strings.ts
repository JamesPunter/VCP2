export type Lang = 'nl' | 'en'

export const STRINGS = {
  nl: {
    nav: {
      home: 'Home',
      prices: 'Prijzen',
      book: 'Reserveren',
      location: 'Locatie',
      contact: 'Contact',
      faq: 'FAQ',
    },
    utility: {
      langNl: 'NL',
      langEn: 'EN',
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
  },
  en: {
    nav: {
      home: 'Home',
      prices: 'Prices',
      book: 'Book',
      location: 'Location',
      contact: 'Contact',
      faq: 'FAQ',
    },
    utility: {
      langNl: 'NL',
      langEn: 'EN',
    },
    footer: {
      navHeading: 'Navigation',
      contactHeading: 'Contact',
      brandSubtitle: 'Amsterdam-Oost',
      tagline:
        'An industrial loft of over 60m² with a 5-metre ceiling — ideal for photography, film, podcasts, workshops and presentations in Amsterdam-Oost.',
      availability: 'Available 07:30 – 23:00',
      copyright: (y: number) =>
        `© ${y} Studio Le Garage Amsterdam. K.v.K. 33252574`,
      addressLine: 'Veemarkt 31, 1019 DA Amsterdam-Oost',
    },
    home: {
      heroLine: 'Creative Production Space',
      aboutTitle: 'About the studio',
      aboutP1:
        'Studio Le Garage is an industrial loft studio of 60m² located in Amsterdam-Oost, at Veemarkt 31. With a ceiling height of 5 metres, a 40m² dance floor with mirror wall and plenty of natural light, the studio offers a unique setting for photo shoots, film recordings, workshops, rehearsals and events.',
      aboutP2:
        'The space is fully equipped with a kitchen, toilet, three-phase power supply and free WiFi. A dedicated Studio Host is present to ensure your day runs smoothly.',
      aboutP3:
        'The studio is available for hire by time block — morning, afternoon or evening — and is also available at weekends on request.',
      infoAddress: 'Veemarkt 31 - 1019 DA Amsterdam',
    },
    prijzen: {
      heroTitle: 'Our prices, per time block or full day!',
      heroLead:
        'We work with fixed time blocks. Choose the block that best suits your production.',
      vatNote: 'All rates are exclusive of 21% VAT, unless stated otherwise.',
      featuredBadge: 'Most popular',
      reserveCta: 'Book this slot',
      weekendUnderCards:
        'Would you like to use the studio at the weekend? Please contact us.',
      includedHeading: 'Everything you need',
      blocks: {
        ochtend: {
          label: 'Morning',
          sublabel: 'Ochtend',
          desc: 'Ideal for productions making use of morning light.',
        },
        middag: {
          label: 'Afternoon',
          sublabel: 'Middag',
          desc: 'Space for a full afternoon production.',
        },
        dagdeel: {
          label: 'Full Day',
          sublabel: 'Hele Dag',
          desc: 'The best choice for large productions with ample set-up and breakdown time.',
        },
        avond: {
          label: 'Evening',
          sublabel: 'Avond',
          desc: 'Suitable for evening shoots, events and presentations.',
        },
      },
      vatInclSuffix: 'incl. VAT',
      onRequest: 'On request',
      contactForMore: 'Contact us',
      includedItems: [
        '60 m² studio with dance floor (40 m²) and mirror wall',
        'Kitchen, toilet, coffee and tea',
        'Power, three-phase electricity and free WiFi',
        'Studio Host during your time slot',
        'Loading at the door; basic kit on site',
      ],
    },
  },
} as const
