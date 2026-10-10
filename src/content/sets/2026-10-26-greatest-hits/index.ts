import bantingBestImg from '../2025-10-06-inventions/banting-best.webp'
import pizzaImg from '../2025-10-06-inventions/hawaiian-pizza.webp'
import naismithImg from '../2025-10-06-inventions/naismith.webp'
import productsImg from '../2025-10-27-maple/syrup-products.webp'
import frozenYukonRiverImg from '../2026-01-05-cold/frozen-yukon-river.webp'
import bantingDogImg from '../2026-05-25-heroes/banting-and-best.webp'
import ratPosterImg from '../2026-06-29-provinces-territories/alberta-rat-poster.webp'
import polarBearImg from '../2026-06-29-provinces-territories/churchill-polar-bear.webp'
import hopewellImg from '../2026-06-29-provinces-territories/hopewell-rocks.webp'
import damImg from '../2026-07-20-beavers/beaver-dam.webp'
import tojoImg from '../2026-07-27-multiculturalism/chef-tojo.webp'
import sushiPlatterImg from '../2026-07-27-multiculturalism/sushi-platter.webp'
import captainDildoImg from '../2026-08-03-place-names/captain-dildo-statue.webp'
import dildoSignImg from '../2026-08-03-place-names/dildo-hillside-sign.webp'
import haHaPostOfficeImg from '../2026-08-03-place-names/ha-ha-post-office-sign.webp'
import canuckWithKnifeImg from '../2026-08-10-birds/canuck-with-knife.webp'
import lakeLouiseImg from '../2026-09-07-lakes/lake-louise.webp'
import moraineLakeImg from '../2026-09-07-lakes/moraine-lake.webp'
import { defineSet } from '../../schema'

// A farewell best-of: every fact and image is reused from an earlier set, so
// images are imported from their original folders rather than duplicated.
export default defineSet({
  slug: 'greatest-hits',
  date: '2026-10-26',
  title: 'Greatest Hits: One for the Road',
  topic: 'culture',
  slides: [
    {
      heading: 'Made here, loved everywhere',
      facts: [
        'Just over a year of Mondays and **23 sets** later, this is my last one, so here are my favourite facts from all of them.',
        '**Insulin**: discovered at the University of Toronto in 1921–22; Banting sold the patent for **$1**, saying it belonged to the world.',
        '**Basketball**: invented in 1891 by James Naismith of Almonte, Ontario, with 13 rules, a soccer ball, and two peach baskets.',
        '**Hawaiian pizza** was invented in **Chatham, Ontario, 1962**: a Greek immigrant putting Hawaiian-branded pineapple on an Italian dish in Canada.',
        'Vancouver chef **Hidekazu Tojo** says he invented the **California roll**, flipping the rice outside for diners who wanted the seaweed hidden.',
      ],
      images: [
        {
          src: bantingBestImg,
          alt: 'Charles Best and Frederick Banting in their office, around 1924',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: naismithImg,
          alt: 'James Naismith holding a ball and the original peach basket',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: pizzaImg,
          alt: 'A sliced Hawaiian pizza with ham and pineapple',
          credit: 'Avelludo, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: tojoImg,
          alt: 'A sushi chef in whites and a headband plating fish behind a wooden counter',
        },
        {
          src: bantingDogImg,
          alt: 'Frederick Banting and Charles Best standing with a laboratory dog on the roof of the University of Toronto Medical Building in 1921',
          credit: 'Thomas Fisher Rare Book Library, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: sushiPlatterImg,
          alt: 'An overhead platter of nigiri and rolls with soy sauce, wasabi, and chopsticks on stone',
        },
      ],
    },
    {
      heading: 'Only in Canada, eh',
      facts: [
        'Across **2011 and 2012**, thieves siphoned about **3,000 tonnes** from Quebec\'s strategic syrup reserve and refilled the barrels with water.',
        'Alberta has kept itself effectively **rat-free** since rats first turned up on its eastern border in **1950**; pet rats are illegal.',
        '**Jimmy Kimmel** talked up Dildo, Newfoundland for weeks in 2019, was named honorary mayor, and paid for the Hollywood-style sign on the hillside.',
        '**Saint-Louis-du-Ha! Ha!** holds a Guinness record for **the most exclamation marks in a place name**, at two.',
        '**Canuck the Crow** made news worldwide in May 2016 for lifting a knife from an active Vancouver police crime scene, an officer chasing after him.',
      ],
      images: [
        {
          src: productsImg,
          alt: 'Rows of bottled maple syrup for sale at a market stall',
          credit: 'Ross Dunn, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: ratPosterImg,
          alt: 'A vintage Alberta public health poster reading "You can\'t ignore the rat", above the slogan "Let\'s keep Alberta rat-free"',
        },
        {
          src: dildoSignImg,
          alt: 'Large white block letters spelling DILDO standing on a wooded hillside, with workers on the scaffolding beneath them',
          credit: 'inbox, source unverified',
        },
        {
          src: haHaPostOfficeImg,
          alt: 'A red Canada Post sign on a white clapboard wall reading Saint-Louis-du-Ha! Ha!',
          credit: 'inbox, source unverified',
        },
        {
          src: canuckWithKnifeImg,
          alt: 'A crow standing on gravel with a serrated wooden-handled kitchen knife gripped in its beak, a red band on one leg',
          credit: 'inbox, source unverified',
        },
        {
          src: captainDildoImg,
          alt: 'A visitor in a yellow rain jacket posing beside a wooden statue of a bearded fisherman in yellow oilskins labelled CAPT. DILDO, fishing boats behind',
          credit: 'inbox, source unverified',
        },
      ],
    },
    {
      heading: 'Wild at heart',
      facts: [
        'Canada holds **62%** of the world\'s lakes: **879,800** of the 1.42 million bigger than ten hectares, more than every other country combined.',
        'The Bay of Fundy has the **highest tides on Earth**, rising and falling up to **16 metres** twice a day.',
        '**Snag, Yukon** hit **−63°C** in 1947; toss boiling water into that kind of cold and it bursts into snow before it lands.',
        'Beavers hate the sound of **running water**: play a recording of a trickle and they\'ll pile sticks on the speaker.',
        'Churchill, Manitoba is the **Polar Bear Capital of the World**, and hosts one of the largest **beluga** populations anywhere.',
      ],
      images: [
        {
          src: lakeLouiseImg,
          alt: 'Turquoise water of Lake Louise leading to a snow-covered glacier and mountain face, framed by conifers and rocks in the foreground',
          credit: 'inbox, source unverified',
        },
        {
          src: hopewellImg,
          alt: 'Tree-topped sandstone sea stacks at Hopewell Rocks, exposed on the sea floor at low tide',
          credit: 'Dennis G. Jarvis, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: frozenYukonRiverImg,
          alt: 'A snow-covered river partly frozen over in the Yukon, photographed around 1898',
          credit: 'Eric A. Hegg, public domain, via Wikimedia Commons',
        },
        {
          src: damImg,
          alt: 'A beaver dam of gnawed logs holding back a calm pond on a forest stream',
          credit: 'Jakub Hałun, CC BY 4.0, via Wikimedia Commons',
        },
        {
          src: polarBearImg,
          alt: 'A polar bear walking across mossy tundra near Churchill, Manitoba',
          credit: 'TravelingOtter, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: moraineLakeImg,
          alt: 'Moraine Lake at sunrise, its blue water below the Valley of the Ten Peaks lit orange along the summits',
          credit: 'inbox, source unverified',
        },
      ],
    },
  ],
})
