import steamClockImg from '../2026-02-09-travel/gastown-steam-clock.webp'
import stanleyParkAerialImg from '../2026-02-09-travel/stanley-park-seawall.webp'
import { defineSet, INBOX_CREDIT } from '../../schema'
import brocktonPointLighthouseImg from './brockton-point-lighthouse.webp'
import coalHarbourNorthShoreImg from './coal-harbour-north-shore.webp'
import duskBeachImg from './dusk-beach.webp'
import englishBayInukshukImg from './english-bay-inukshuk.webp'
import greyBeachImg from './grey-beach.webp'
import grouseViewImg from './grouse-view.webp'
import jerichoBeachImg from './jericho-beach.webp'
import mountPleasantRainImg from './mount-pleasant-rain.webp'
import mountainBoulderImg from './mountain-boulder.webp'
import rainyStreetImg from './rainy-street.webp'
import robsonUmbrellasImg from './robson-umbrellas.webp'
import seawallSunsetImg from './seawall-sunset.webp'
import snowySkylineImg from './snowy-skyline.webp'
import voiceover from './voiceover.m4a'
import whistlerSkierImg from './whistler-skier.webp'
import winterBeachImg from './winter-beach.webp'

export default defineSet({
  slug: 'vancouver',
  date: '2026-10-19',
  title: 'Vancouver: Wet Coast, Best Coast',
  topic: 'travel',
  voiceover: {
    src: voiceover,
    cues: [
      { at: 17.6, panel: 1 }, // "why is Vancouver so wet?"
      { at: 20.7, panel: 1, image: 0 }, // "it rains all the time"
      { at: 93.7, panel: 1, image: 4 }, // "we're surrounded by mountains"
      { at: 107.8, panel: 2, image: 0 }, // "Next up, I grew up in Mount Pleasant"
      { at: 167.1, panel: 2, image: 3 }, // "the steam clock of Gastown"
      { at: 195.2, panel: 2, image: 1 }, // "towards Stanley Park and the Seawall"
      { at: 249.9, panel: 3 }, // "Speaking of, the beaches"
      { at: 277.2, panel: 3, image: 0 }, // "the beach in English Bay"
      { at: 291.4, panel: 3 }, // "at the school I went to, UBC"
      { at: 332.0, panel: 4 }, // "Mountains are also everywhere"
      { at: 336.6, panel: 4, image: 0 }, // "look towards mountains"
      { at: 343.0, panel: 4, image: 2 }, // "Grouse, Cypress and Seymour"
      { at: 348.0, panel: 4, image: 3 }, // "there's also Whistler"
      { at: 366.9, panel: 4 }, // "Speaking of Grouse … the Grouse Grind"
      { at: 411.8, panel: 5 }, // "So yeah, that's all I got for you today"
    ],
  },
  slides: [
    {
      heading: 'Raincouver',
      facts: [
        'Everyone calls it **Raincouver**: from November to March the grey drizzle barely lets up, and in October 2016 it rained **28 of 31** days.',
        'Yet Vancouver gets about **1,199 mm** of rain a year, less than Halifax (1,452 mm) or St. John\'s (1,514 mm).',
        'The trade-off: the mildest winters of any big Canadian city, with January averaging about **4°C**, so a few centimetres of snow shuts the town down.',
        'On a clear day, you can ski the North Shore in the morning and walk the beach at English Bay in the afternoon.',
      ],
      images: [
        {
          src: robsonUmbrellasImg,
          alt: 'People with umbrellas crossing a rain-soaked downtown Vancouver street',
          credit: INBOX_CREDIT,
        },
        {
          src: winterBeachImg,
          alt: 'Me bundled up in a toque and scarf on a pebble beach on a grey winter day, forest behind',
          credit: INBOX_CREDIT,
        },
        {
          src: greyBeachImg,
          alt: 'Freighters at anchor in a hazy bay, mountains faint behind them',
          credit: INBOX_CREDIT,
        },
        {
          src: rainyStreetImg,
          alt: 'Neon theatre signs reflected in wet pavement on Granville Street at night',
          credit: INBOX_CREDIT,
        },
        {
          src: snowySkylineImg,
          alt: 'Vancouver\'s West End towers beneath cloud-wrapped, snow-covered North Shore mountains',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Hometown glory',
      facts: [
        'I grew up in **Mount Pleasant**, Vancouver\'s first suburb, where **Brewery Creek** once powered four breweries at a time.',
        '**Stanley Park** covers **405 hectares**, about a fifth bigger than New York\'s Central Park, right on the edge of downtown.',
        'The **Seawall** around it took **63 years** to finish, and its 28 km path is the world\'s longest uninterrupted waterfront route.',
        'It all started in **Gastown** in 1867, with Gassy Jack Deighton, a barrel of whisky and a saloon; the steam clock only arrived in 1977.',
      ],
      images: [
        {
          src: mountPleasantRainImg,
          alt: 'A person in a red jacket with an umbrella crossing a wet Mount Pleasant street at night, lit by red traffic lights',
          credit: INBOX_CREDIT,
        },
        {
          src: stanleyParkAerialImg,
          alt: 'The Stanley Park seawall curving between forest and ocean, seen from above',
          credit: INBOX_CREDIT,
        },
        {
          src: brocktonPointLighthouseImg,
          alt: 'The red-and-white Brockton Point lighthouse on the Seawall, with North Vancouver and the mountains behind',
          credit: INBOX_CREDIT,
        },
        {
          src: steamClockImg,
          alt: 'The Gastown steam clock in Vancouver venting steam at dusk, street lamps lit',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Shore thing',
      facts: [
        'Summer evenings mean the beach: Kits, Jericho, English Bay, with the sun setting behind the freighters anchored in the bay.',
        'Every New Year\'s Day since **1920**, thousands run into English Bay for the **Polar Bear Swim**; the first one had about 10 swimmers.',
        'At low tide the water at **Spanish Banks** pulls back nearly **400 metres**, leaving sand flats you can walk out on.',
        'Below UBC, **Wreck Beach** became Canada\'s first official nude beach in **1991**, and stretches for about 7.8 km.',
      ],
      images: [
        {
          src: seawallSunsetImg,
          alt: 'An orange sunset over English Bay from a rocky shore, with freighters on the horizon',
          credit: INBOX_CREDIT,
        },
        {
          src: jerichoBeachImg,
          alt: 'My girlfriend wading out of the water at Jericho Beach on a sunny day, with the North Shore across the bay',
          credit: INBOX_CREDIT,
        },
        {
          src: englishBayInukshukImg,
          alt: 'The Inukshuk at English Bay silhouetted against a pink sunset',
          credit: INBOX_CREDIT,
        },
        {
          src: duskBeachImg,
          alt: 'Me on a wide sandy beach at dusk, looking down at my camera, with mountains across the water',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Peak performance',
      facts: [
        'Three ski hills, **Grouse, Cypress and Seymour**, sit right across the harbour from downtown, and the city lights up below you on a night run.',
        'The **Grouse Grind** climbs about 800 m in **2,830 steps**; locals call it "Mother Nature\'s Stairmaster".',
        'The **Capilano Suspension Bridge** spans about **140 m**, 70 m above the river; the first one, in 1889, was hemp rope and cedar planks.',
        'My hill of choice is **Whistler**, two hours up the Sea-to-Sky Highway: North America\'s biggest ski resort, at **8,171 acres**.',
      ],
      images: [
        {
          src: coalHarbourNorthShoreImg,
          alt: 'Clouds over the North Shore mountains, seen across Coal Harbour with a floatplane at the dock',
          credit: INBOX_CREDIT,
        },
        {
          src: mountainBoulderImg,
          alt: 'Me sitting on a boulder by a forest creek, looking up at a snow-capped mountain',
          credit: INBOX_CREDIT,
        },
        {
          src: grouseViewImg,
          alt: 'Skiers on a floodlit run at Grouse Mountain with the lights of Vancouver far below',
          credit: INBOX_CREDIT,
        },
        {
          src: whistlerSkierImg,
          alt: 'A skier in a red jacket carving through powder, a gondola line overhead',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
