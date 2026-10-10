import bantingBestImg from '../2025-10-06-inventions/banting-best.webp'
import naismithImg from '../2025-10-06-inventions/naismith.webp'
import syrupBottleImg from '../2025-10-27-maple/syrup-bottle.webp'
import productsImg from '../2025-10-27-maple/syrup-products.webp'
import frozenYukonRiverImg from '../2026-01-05-cold/frozen-yukon-river.webp'
import ratPosterImg from '../2026-06-29-provinces-territories/alberta-rat-poster.webp'
import polarBearImg from '../2026-06-29-provinces-territories/churchill-polar-bear.webp'
import hopewellImg from '../2026-06-29-provinces-territories/hopewell-rocks.webp'
import beaverFlagImg from '../2026-07-20-beavers/beaver-canada-day-flag.webp'
import parliamentHillImg from '../2026-07-27-multiculturalism/canada-day-parliament-hill.webp'
import tojoImg from '../2026-07-27-multiculturalism/chef-tojo.webp'
import sushiPlatterImg from '../2026-07-27-multiculturalism/sushi-platter.webp'
import dildoSignImg from '../2026-08-03-place-names/dildo-hillside-sign.webp'
import canuckWithKnifeImg from '../2026-08-10-birds/canuck-with-knife.webp'
import eagleCarvingImg from '../2026-08-10-birds/eagle-carving.webp'
import lakeLouiseImg from '../2026-09-07-lakes/lake-louise.webp'
import moraineLakeImg from '../2026-09-07-lakes/moraine-lake.webp'
import { defineSet } from '../../schema'

// A farewell best-of: every fact and image is reused from an earlier set, so
// images are imported from their original folders rather than duplicated.
export default defineSet({
  slug: 'greatest-hits',
  date: '2026-10-26',
  title: 'Greatest Hits: One for the Road',
  topic: 'people',
  slides: [
    {
      heading: 'Made here, loved everywhere',
      facts: [
        'Just over a year of Mondays and **23 sets** later, this is my last one, so here are my favourite facts from all of them.',
        '**Insulin**: discovered at the University of Toronto in 1921–22; Banting sold the patent for **$1**, saying it belonged to the world.',
        '**Basketball**: invented in 1891 by James Naismith of Almonte, Ontario, with 13 rules, a soccer ball, and two peach baskets.',
        'Vancouver chef **Hidekazu Tojo** invented the **California roll** and **inside-out roll**, flipping the rice outside for diners who wanted the seaweed hidden.',
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
          src: tojoImg,
          alt: 'A sushi chef in whites and a headband plating fish behind a wooden counter',
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
        '**Dildo, Newfoundland** is a real place, and has a Hollywood-style sign on the hillside (paid for by Jimmy Kimmel).',
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
          src: canuckWithKnifeImg,
          alt: 'A crow standing on gravel with a serrated wooden-handled kitchen knife gripped in its beak, a red band on one leg',
          credit: 'inbox, source unverified',
        },
      ],
    },
    {
      heading: 'Wild at heart',
      facts: [
        'Canada holds **62%** of the world\'s lakes: **879,800** of the 1.42 million bigger than ten hectares, more than every other country combined.',
        'The Bay of Fundy has the **highest tides on Earth**, rising and falling up to **16 metres** twice a day.',
        'In a small town in the Yukon, it hit **−63°C** in 1947; hot water turns into snow instantly when you toss it.',
        'Beavers hate the sound of **running water**: play a recording of a trickle and they\'ll pile sticks on the speaker.',
        'Churchill, Manitoba is the **Polar Bear Capital of the World**, and also hosts one of the biggest **beluga** populations anywhere.',
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
    {
      heading: 'Close to home',
      facts: [
        'My dad, **Ted Palys**, is a criminology professor who often teaches a course on Aboriginal justice, and was honoured with an **eagle feather**.',
        'I have never been prouder of home: **Mark Carney** is doing a great job representing us and standing up to the big evil below. **Elbows up!**',
        'Reach out any time for **Canada recommendations**, or when you just want to hear some good old Canadian **politeness**.',
        'And for the record: **maple syrup** is the most incredible thing.',
      ],
      // TODO: the four images below are stand-ins borrowed from earlier sets;
      // swap in personal photos (Dad / the feather, Carney or Elbows up, etc.).
      images: [
        {
          src: eagleCarvingImg,
          alt: 'A carved and painted wooden eagle with outstretched wings on top of a Northwest Coast pole in British Columbia',
          credit: 'Chris English, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: parliamentHillImg,
          alt: 'A packed Canada Day crowd with flags and raised arms on Parliament Hill in Ottawa',
        },
        {
          src: syrupBottleImg,
          alt: 'A maple-leaf-shaped glass bottle of Canadian maple syrup beside pancakes',
          credit: 'Jan Smith, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: beaverFlagImg,
          alt: 'A beaver holding a small Canadian flag and wearing a red maple-leaf hat',
        },
      ],
    },
  ],
})
