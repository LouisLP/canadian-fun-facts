import { defineSet, INBOX_CREDIT } from '../../schema'
import brownRatImg from './brown-rat.webp'
import cashBillsImg from './cash-bills.webp'
import coinsPileImg from './coins-pile.webp'
import dimeImg from './dime.webp'
import fallingIceSignImg from './falling-ice-sign.webp'
import penniesImg from './pennies.webp'
import petRatImg from './pet-rat.webp'
import ratPatrolImg from './rat-patrol.webp'
import ratPropagandaPosterImg from './rat-propaganda-poster.webp'
import roofIciclesImg from './roof-icicles.webp'
import shovellingSnowRoofImg from './shovelling-snow-roof.webp'
import snowyStreetImg from './snowy-street.webp'

export default defineSet({
  slug: 'weird-laws',
  date: '2026-03-16',
  title: 'Weird Laws: Mind the Fine Print',
  topic: 'oddities',
  slides: [
    {
      heading: 'Nickel and dimed',
      facts: [
        'Canada\'s **Currency Act** caps how much of a bill a store must accept in coins, so a jar of change is not always legal tender.',
        'Nickels count for only $5 per payment; loonies stop counting past **$25**, and toonies past **$40**.',
        'The penny had the tightest cap of all at **25¢**, and the rule survives even though Canada quit minting them in **2012**.',
      ],
      images: [
        {
          src: coinsPileImg,
          alt: 'A heap of Canadian coins, mostly loonies and toonies',
          credit: INBOX_CREDIT,
        },
        {
          src: penniesImg,
          alt: 'Close-up of overlapping 1973 Canadian pennies',
          credit: INBOX_CREDIT,
        },
        {
          src: dimeImg,
          alt: 'The reverse of a 2015 Canadian dime, showing the Bluenose schooner under sail',
          credit: INBOX_CREDIT,
        },
        {
          src: cashBillsImg,
          alt: 'Canadian polymer banknotes fanned out: a $100, $50, $20, $10 and $5',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'The rat race Alberta won',
      facts: [
        'Alberta has kept itself effectively **rat-free** since rats first turned up on its eastern border in **1950**.',
        'The Agricultural Pests Act declares the Norway rat a pest, making it illegal to import, sell or keep one.',
        'Pet rats are out. Permits go only to **research facilities and zoos**, so tameness is no defence.',
      ],
      images: [
        {
          src: ratPatrolImg,
          alt: 'Two Alberta pest-control officers looking over a farm building',
          credit: INBOX_CREDIT,
        },
        {
          src: brownRatImg,
          alt: 'A brown rat sniffing along a ledge, seen head-on',
          credit: INBOX_CREDIT,
        },
        {
          src: ratPropagandaPosterImg,
          alt: 'A vintage Alberta public health poster of a large rat, reading "You can\'t ignore the rat. He\'s a menace to health, home, industry. Kill him!"',
          credit: INBOX_CREDIT,
        },
        {
          src: petRatImg,
          alt: 'Close-up of a brown rat peering over the edge of a rock',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Shovel it or pay for it',
      facts: [
        'Plenty of municipalities require homeowners to clear dangerous snow and ice off a roof before it can drop on anyone below.',
        'Leave it and you risk a **fine**, plus liability if the falling ice wrecks a car or injures a passerby.',
        'In my hometown, Vancouver, sidewalks must be clear by **10 a.m.** the morning after a snowfall.',
      ],
      images: [
        {
          src: fallingIceSignImg,
          alt: 'A sidewalk sign reading "Danger: falling ice and snow"',
          credit: INBOX_CREDIT,
        },
        {
          src: snowyStreetImg,
          alt: 'People crossing a snow-covered Vancouver street during a snowstorm',
          credit: INBOX_CREDIT,
        },
        {
          src: shovellingSnowRoofImg,
          alt: 'Two men shovelling deep snow off the roof of a house',
          credit: INBOX_CREDIT,
        },
        {
          src: roofIciclesImg,
          alt: 'A row of long icicles hanging from the snow-covered eaves of a house above its windows',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
