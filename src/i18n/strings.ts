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
      heroTitle: 'Onze prijzen, per dagdeel of een hele dag!',
      heroLead:
        'Wij werken met vaste tijdblokken. Kies het blok dat het beste bij jouw productie past.',
      vatNote: 'Alle tarieven zijn exclusief 21% BTW, tenzij anders vermeld.',
      featuredBadge: 'Meest gekozen',
      reserveCta: 'Reserveer dit blok',
      weekendContact: 'Neem contact op',
      includedHeading: 'Alles wat je nodig hebt',
      includedLead:
        'Elk tijdblok geeft je toegang tot de volledige studio met alle bijbehorende faciliteiten. Geen extra\'s, geen verborgen kosten.',
      weekendTitle: 'Weekendboekingen',
      weekendBody:
        'Op zaterdag en zondag zijn tarieven op aanvraag. Neem contact met ons op voor beschikbaarheid en prijzen. Op zondag is parkeren gratis.',
      weekendBtn: 'Weekend aanvragen',
      gearTitle: 'Specialistisch materiaal',
      gearBody:
        'Heb je naast de standaard uitrusting extra apparatuur nodig? Dat is in overleg te regelen via onze partners. Vermeld je wensen bij de boeking.',
      ratesHelp: 'Vragen over tarieven?',
      ratesHours: '07:30 – 23:00, ook in het weekend',
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
        weekend: {
          label: 'Weekend',
          sublabel: 'Za & Zo',
          desc: 'Weekendtarieven worden op aanvraag bepaald. Gratis parkeren op zondag.',
        },
      },
      vatInclSuffix: 'incl. BTW',
      onRequest: 'Op aanvraag',
      contactForMore: 'Neem contact op',
      includedItems: [
        'Gebruik van de volledige studio (60m²)',
        'Mobiele dansvloer (40m²) met spiegelwand',
        'Koffie en thee',
        'Keuken en toilet op begane grond',
        'Elektra en driepolige stroom',
        'Studio Host aanwezig voor ondersteuning',
        'Gratis laden en lossen voor de deur',
        'Standaard statieven en C-stands',
        'Basisverlichting aanwezig',
      ],
      gearFootnote:
        'Heb je naast de standaard uitrusting extra apparatuur nodig? Dat is in overleg te regelen via onze partners. Vermeld je wensen bij de boeking.',
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
      weekendContact: 'Contact us',
      includedHeading: 'Everything you need',
      includedLead:
        'Each time block gives you access to the full studio with all associated facilities. No extras, no hidden costs.',
      weekendTitle: 'Weekend bookings',
      weekendBody:
        'On Saturday and Sunday, rates are on request. Contact us for availability and prices. Parking is free on Sundays.',
      weekendBtn: 'Request weekend',
      gearTitle: 'Specialist equipment',
      gearBody:
        'Need extra equipment beyond the standard kit? We can arrange this with our partners. Note your requirements when booking.',
      ratesHelp: 'Questions about rates?',
      ratesHours: '07:30 – 23:00, including weekends',
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
        weekend: {
          label: 'Weekend',
          sublabel: 'Sat & Sun',
          desc: 'Weekend rates are determined on request. Free parking on Sundays.',
        },
      },
      vatInclSuffix: 'incl. VAT',
      onRequest: 'On request',
      contactForMore: 'Contact us',
      includedItems: [
        'Full studio use (60m²)',
        'Mobile dance floor (40m²) with mirror wall',
        'Coffee and tea',
        'Kitchen and toilet on ground floor',
        'Electricity and three-phase power',
        'Studio Host present for support',
        'Free loading and unloading at the door',
        'Standard tripods and C-stands',
        'Basic lighting available',
      ],
      gearFootnote:
        'Do you need additional equipment beyond the standard kit? This can be arranged through our partners. Note your requirements when booking.',
    },
  },
} as const
