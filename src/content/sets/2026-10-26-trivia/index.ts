import bantingBestImg from '../2025-10-06-inventions/banting-best.webp'
import naismithImg from '../2025-10-06-inventions/naismith.webp'
import syrupJugsImg from '../2025-10-27-maple/syrup-jugs.webp'
import syrupProductsImg from '../2025-10-27-maple/syrup-products.webp'
import timHortonsCupImg from '../2025-12-15-language/tim-hortons-cup.webp'
import auroraYukonImg from '../2026-01-05-cold/aurora-yukon.webp'
import frozenYukonRiverImg from '../2026-01-05-cold/frozen-yukon-river.webp'
import ratAtWaterImg from '../2026-03-16-weird-laws/rat-at-water.webp'
import ratPosterImg from '../2026-06-29-provinces-territories/alberta-rat-poster.webp'
import jellybeanRowImg from '../2026-06-29-provinces-territories/jellybean-row.webp'
import oldQuebecWinterImg from '../2026-06-29-provinces-territories/old-quebec-winter.webp'
import torontoSkylineImg from '../2026-06-29-provinces-territories/toronto-skyline.webp'
import yukonAuroraImg from '../2026-06-29-provinces-territories/yukon-aurora.webp'
import parliamentHillImg from '../2026-07-27-multiculturalism/canada-day-parliament-hill.webp'
import tojoImg from '../2026-07-27-multiculturalism/chef-tojo.webp'
import sushiPlatterImg from '../2026-07-27-multiculturalism/sushi-platter.webp'
import captainDildoImg from '../2026-08-03-place-names/captain-dildo-statue.webp'
import dildoSignImg from '../2026-08-03-place-names/dildo-hillside-sign.webp'
import canuckWithKnifeImg from '../2026-08-10-birds/canuck-with-knife.webp'
import crowOnWireImg from '../2026-08-10-birds/crow-on-wire.webp'
import loonieImg from '../2026-08-17-money/loonie.webp'
import toonieImg from '../2026-08-17-money/toonie.webp'
import lakeLouiseImg from '../2026-09-07-lakes/lake-louise.webp'
import moraineLakeImg from '../2026-09-07-lakes/moraine-lake.webp'
import robsonUmbrellasImg from '../2026-10-19-vancouver/robson-umbrellas.webp'
import seawallSunsetImg from '../2026-10-19-vancouver/seawall-sunset.webp'
import { defineSet } from '../../schema'
import markCarneyImg from './mark-carney.webp'

// A farewell quiz: every answer is a fact from an earlier set, so images are
// imported from their original folders rather than duplicated.
export default defineSet({
  slug: 'trivia',
  date: '2026-10-26',
  title: 'Last Call Trivia',
  topic: 'people',
  slides: [
    {
      kind: 'quiz',
      question: 'How many states are there in Canada?',
      answer: 'Zero! We have provinces',
      facts: [
        '**10 provinces** and **3 territories**; the newest, Nunavut, was carved out of the Northwest Territories in **1999**.',
      ],
      images: [
        {
          src: torontoSkylineImg,
          alt: 'The Toronto skyline at dusk with the CN Tower lit above the lakefront',
          credit: 'Jchmrt, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: oldQuebecWinterImg,
          alt: 'Aerial view of Old Quebec at blue hour in winter, snow on the rooftops and ice on the St. Lawrence',
        },
        {
          src: jellybeanRowImg,
          alt: 'Brightly painted row houses on a street corner in St. John\'s, Newfoundland',
          credit: 'miketnorton, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: yukonAuroraImg,
          alt: 'Green aurora borealis streaking across a dark sky above silhouetted spruce trees',
          credit: 'Anthony DeLorenzo, CC BY 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      kind: 'quiz',
      question: 'What\'s the name of our Prime Minister?',
      answer: 'Mark Carney',
      facts: [
        'Prime Minister since **March 2025**, after running both the **Bank of Canada** and the **Bank of England**.',
        'I have never been prouder of home: he is standing up for us to the big neighbour below. **Elbows up!**',
      ],
      images: [
        {
          src: markCarneyImg,
          alt: 'Portrait of Prime Minister Mark Carney in a dark suit and blue tie',
          credit: 'Simon Dawson / No 10 Downing Street, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: parliamentHillImg,
          alt: 'A packed Canada Day crowd with flags and raised arms on Parliament Hill in Ottawa',
        },
      ],
    },
    {
      kind: 'quiz',
      question: 'What\'s banned in Alberta?',
      answer: 'Rats!',
      facts: [
        'Alberta has kept itself effectively **rat-free** since rats first turned up on its eastern border in **1950**.',
        'Pet rats are out too: permits go only to **research facilities and zoos**.',
      ],
      images: [
        {
          src: ratPosterImg,
          alt: 'A vintage Alberta public health poster reading "You can\'t ignore the rat", above the slogan "Let\'s keep Alberta rat-free"',
        },
        {
          src: ratAtWaterImg,
          alt: 'A brown rat crouched at the edge of still water, its reflection visible below',
          credit: 'Charles J. Sharp, CC BY-SA 4.0, via Wikimedia Commons',
        },
      ],
    },
    {
      kind: 'quiz',
      question: 'What do we call our $1 and $2 coins?',
      answer: 'The loonie and the toonie',
      facts: [
        'The **loonie** is named for the common loon on its tail side, and has **11 sides** so nobody mistakes it for a quarter.',
        'The **toonie** followed in **1996**: a polar bear on a gold-coloured centre, ringed in silver.',
      ],
      images: [
        {
          src: loonieImg,
          alt: 'A Canadian one-dollar coin showing a common loon swimming past a treed shoreline, on dark weathered wood',
          credit: 'inbox, source unverified',
        },
        {
          src: toonieImg,
          alt: 'A Canadian two-dollar coin with a gold-coloured centre showing a polar bear, ringed by a silver-coloured outer band',
          credit: 'inbox, source unverified',
        },
      ],
    },
    {
      kind: 'quiz',
      question: 'Which sport did a Canadian invent with a soccer ball and two peach baskets?',
      answer: 'Basketball',
      facts: [
        'Invented in **1891** by James Naismith of Almonte, Ontario, with just **13 rules**.',
      ],
      images: [
        {
          src: naismithImg,
          alt: 'James Naismith holding a ball and the original peach basket',
          credit: 'public domain, via Wikimedia Commons',
        },
      ],
    },
    {
      kind: 'quiz',
      question: 'How much did Banting sell the insulin patent for?',
      choices: ['$1', '$1,000', '$1 million'],
      answer: 'One dollar',
      facts: [
        'Insulin was discovered at the University of Toronto in **1921–22**; Banting sold the patent for **$1**, saying it belonged to the world.',
      ],
      images: [
        {
          src: bantingBestImg,
          alt: 'Charles Best and Frederick Banting in their office, around 1924',
          credit: 'public domain, via Wikimedia Commons',
        },
      ],
    },
    {
      kind: 'quiz',
      question: 'What did thieves steal from Quebec in 2011 and 2012?',
      choices: ['Hockey sticks', 'Maple syrup', 'Poutine gravy'],
      answer: 'Maple syrup',
      facts: [
        'They siphoned about **3,000 tonnes** from the province\'s strategic syrup reserve and refilled the barrels with water.',
      ],
      images: [
        {
          src: syrupProductsImg,
          alt: 'Rows of bottled maple syrup for sale at a market stall',
          credit: 'Ross Dunn, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: syrupJugsImg,
          alt: 'A leaf-shaped bottle of Grade A maple syrup',
          credit: 'Willis Lam, CC BY-SA 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      kind: 'quiz',
      question: 'What\'s the coldest temperature ever recorded in North America?',
      choices: ['−43°C', '−53°C', '−63°C'],
      answer: '−63°C',
      facts: [
        '**Snag, Yukon**, in February **1947**.',
      ],
      images: [
        {
          src: frozenYukonRiverImg,
          alt: 'A snow-covered river partly frozen over in the Yukon, photographed around 1898',
          credit: 'Eric A. Hegg, public domain, via Wikimedia Commons',
        },
        {
          src: auroraYukonImg,
          alt: 'Green northern lights arcing over a lit wooden cabin in the Yukon',
          credit: 'Anthony DeLorenzo, CC BY 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      kind: 'quiz',
      question: 'What share of the world\'s lakes are in Canada?',
      choices: ['12%', '32%', '62%'],
      answer: '62%',
      facts: [
        '**879,800** of the 1.42 million lakes bigger than ten hectares, more than every other country combined.',
      ],
      images: [
        {
          src: lakeLouiseImg,
          alt: 'Turquoise water of Lake Louise leading to a snow-covered glacier and mountain face, framed by conifers and rocks in the foreground',
          credit: 'inbox, source unverified',
        },
        {
          src: moraineLakeImg,
          alt: 'Moraine Lake at sunrise, its blue water below the Valley of the Ten Peaks lit orange along the summits',
          credit: 'inbox, source unverified',
        },
      ],
    },
    {
      kind: 'quiz',
      question: 'Which sushi roll was invented in Vancouver?',
      answer: 'The California roll',
      facts: [
        'Chef **Hidekazu Tojo** says he flipped the rice to the outside for diners who wanted the seaweed hidden.',
      ],
      images: [
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
      kind: 'quiz',
      question: 'Which Newfoundland town got a Hollywood-style sign from Jimmy Kimmel?',
      answer: 'Dildo',
      facts: [
        'Kimmel talked the town up for weeks in **2019**, was named honorary mayor, and paid for the sign on the hillside.',
      ],
      images: [
        {
          src: dildoSignImg,
          alt: 'Large white block letters spelling DILDO standing on a wooded hillside, with workers on the scaffolding beneath them',
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
      kind: 'quiz',
      question: 'What did Canuck the Crow steal from a Vancouver crime scene?',
      choices: ['A badge', 'A knife', 'A donut'],
      answer: 'A knife',
      facts: [
        'Made news worldwide in **May 2016**, with a police officer chasing after him.',
      ],
      images: [
        {
          src: canuckWithKnifeImg,
          alt: 'A crow standing on gravel with a serrated wooden-handled kitchen knife gripped in its beak, a red band on one leg',
          credit: 'inbox, source unverified',
        },
        {
          src: crowOnWireImg,
          alt: 'A crow perched on a guy wire beneath a street light against a pale overcast sky',
          credit: 'Louis Lascelles-Palys',
        },
      ],
    },
    {
      kind: 'quiz',
      question: 'What do you get when you order a double-double?',
      answer: 'Two creams, two sugars',
      facts: [
        'In a **Tim Hortons** coffee, ordered so often it made it into the Canadian Oxford Dictionary.',
      ],
      images: [
        {
          src: timHortonsCupImg,
          alt: 'A red Tim Hortons coffee cup with a Canada 150 design',
          credit: 'Coastal Elite, CC BY-SA 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      kind: 'quiz',
      question: 'Where was I born and raised?',
      choices: ['Toronto', 'Montreal', 'Vancouver'],
      answer: 'Vancouver!',
      facts: [
        'Mild winters, ocean, mountains, and plenty of rain: in October 2016 it rained **28 of 31** days.',
        'Thanks for having me, and reach out any time for **Canada recommendations**.',
      ],
      images: [
        {
          src: robsonUmbrellasImg,
          alt: 'Two people with umbrellas walking along a wet downtown Vancouver sidewalk past a bubble tea shop',
          credit: 'Wikimedia Commons',
        },
        {
          src: seawallSunsetImg,
          alt: 'An orange sunset over English Bay from a rocky shore, with freighters on the horizon',
          credit: 'Louis Lascelles-Palys',
        },
      ],
    },
  ],
})
