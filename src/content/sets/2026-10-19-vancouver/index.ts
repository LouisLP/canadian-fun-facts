import { defineSet } from '../../schema'
import canadaPlaceImg from './canada-place.webp'
import councilTentImg from './council-tent.webp'
import cypressSkiRunImg from './cypress-ski-run.webp'
import englishBayInukshukImg from './english-bay-inukshuk.webp'
import expo86LogoImg from './expo-86-logo.webp'
import expo86MonorailImg from './expo-86-monorail.webp'
import greyBeachImg from './grey-beach.webp'
import grouseViewImg from './grouse-view.webp'
import mainStreetImg from './main-street.webp'
import phyllisCormackImg from './phyllis-cormack.webp'
import rainyWindshieldImg from './rainy-windshield.webp'
import robsonUmbrellasImg from './robson-umbrellas.webp'
import scienceWorldImg from './science-world.webp'
import seawallImg from './seawall.webp'
import snowySkylineImg from './snowy-skyline.webp'
import stanleyParkAerialImg from './stanley-park-aerial.webp'
import steamClockImg from './steam-clock.webp'
import whistlerSkierImg from './whistler-skier.webp'

export default defineSet({
  slug: 'vancouver',
  date: '2026-10-19',
  title: 'Vancouver: Wet Coast, Best Coast',
  topic: 'travel',
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
          alt: 'Two people with umbrellas walking along a wet downtown Vancouver sidewalk past a bubble tea shop',
          credit: 'Wikimedia Commons',
        },
        {
          src: rainyWindshieldImg,
          alt: 'Rain-streaked windshield view of traffic on a grey bridge into downtown Vancouver',
          credit: 'Wikimedia Commons',
        },
        {
          src: greyBeachImg,
          alt: 'Black-and-white photo of a misty Vancouver beach with driftwood, freighters anchored offshore',
          credit: 'Wikimedia Commons',
        },
        {
          src: snowySkylineImg,
          alt: 'Downtown Vancouver towers and snow-dusted trees, with snowy North Shore mountains behind',
          credit: 'Wikimedia Commons',
        },
        {
          src: cypressSkiRunImg,
          alt: 'Snow-covered ski runs on Cypress Mountain',
          credit: 'Wikimedia Commons',
        },
        {
          src: englishBayInukshukImg,
          alt: 'The Inukshuk at English Bay on a sunny day, with people on the grass and ships in the bay',
          credit: 'Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Hometown glory',
      facts: [
        'I grew up in **Mount Pleasant**, Vancouver\'s first suburb, where **Brewery Creek** once powered four breweries at a time.',
        '**Stanley Park** covers 405 hectares, a fifth bigger than Central Park, ringed by the **28 km** Seawall, the world\'s longest uninterrupted waterfront path.',
        'It all started in **Gastown** in 1867, with Gassy Jack Deighton, a barrel of whisky and a saloon; the famous steam clock only arrived in 1977.',
        'Three ski hills, **Grouse, Cypress and Seymour**, sit right across the harbour from downtown, and the city lights up below you on a night run.',
        'My hill of choice is **Whistler**, two hours up the Sea-to-Sky Highway: North America\'s biggest ski resort, at **8,171 acres**.',
      ],
      images: [
        {
          src: mainStreetImg,
          alt: 'Main Street in Mount Pleasant in spring, with cherry blossoms, a street clock and low-rise shops',
          credit: 'Wikimedia Commons',
        },
        {
          src: stanleyParkAerialImg,
          alt: 'Aerial view of Stanley Park\'s forest and Coal Harbour, with downtown Vancouver beyond',
          credit: 'Wikimedia Commons',
        },
        {
          src: seawallImg,
          alt: 'Cyclists and walkers on the Stanley Park Seawall, with the marina and downtown towers across Coal Harbour',
          credit: 'Wikimedia Commons',
        },
        {
          src: steamClockImg,
          alt: 'The Gastown steam clock on a brick-paved corner, surrounded by tourists',
          credit: 'Wikimedia Commons',
        },
        {
          src: grouseViewImg,
          alt: 'View from Grouse Mountain over forest to Vancouver, Stanley Park and the Strait of Georgia',
          credit: 'Wikimedia Commons',
        },
        {
          src: whistlerSkierImg,
          alt: 'A skier in a red jacket on a wide open bowl at Whistler, with snowy peaks behind',
          credit: 'Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'World\'s fair game',
      facts: [
        'Vancouver incorporated on **6 April 1886**; two months later a land-clearing fire burned the brand-new city almost to the ground.',
        'For its 100th birthday the city threw **Expo 86**, with about **22 million** visits in under six months; my parents still talk about it fondly.',
        '**Canada Place** and its white sails started life as the fair\'s Canada Pavilion, and SkyTrain opened in December 1985 to carry the crowds.',
        'The fair lost about **$311 million**, but left behind landmarks the city still uses every day.',
        '**Greenpeace** was born here: in **1971**, activists sailed a chartered fishing boat out of Vancouver to protest a US nuclear test in Alaska.',
      ],
      images: [
        {
          src: councilTentImg,
          alt: 'Vancouver\'s first city council meeting after the 1886 fire, held at tables outside a tent signed City Hall',
          credit: 'Wikimedia Commons',
        },
        {
          src: expo86LogoImg,
          alt: 'The Expo 86 logo',
          credit: 'Wikimedia Commons',
        },
        {
          src: expo86MonorailImg,
          alt: 'Crowds walking beneath the monorail on the Expo 86 grounds',
          credit: 'Wikimedia Commons',
        },
        {
          src: canadaPlaceImg,
          alt: 'Canada Place and its white sail-shaped roof on the Vancouver waterfront',
          credit: 'Wikimedia Commons',
        },
        {
          src: scienceWorldImg,
          alt: 'Science World\'s geodesic dome, built as the Expo 86 Expo Centre, on False Creek',
          credit: 'Wikimedia Commons',
        },
        {
          src: phyllisCormackImg,
          alt: 'The Phyllis Cormack, the fishing boat Greenpeace sailed in 1971, docked in Tahsis, BC, in 1975',
          credit: 'Wikimedia Commons',
        },
      ],
    },
  ],
})
