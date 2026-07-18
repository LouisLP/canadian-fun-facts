import { defineSet } from '../../schema'
import cashBillsImg from './cash-bills.webp'
import coinsPileImg from './coins-pile.webp'
import dimeImg from './dime.webp'
import iciclesImg from './icicles.webp'
import loonieImg from './loonie.webp'
import nickelImg from './nickel-beaver.webp'
import ratAtWaterImg from './rat-at-water.webp'
import ratByFenceImg from './rat-by-fence.webp'
import ratEatingImg from './rat-eating.webp'
import petRatImg from './pet-rat.webp'
import ratOnGravelImg from './rat-on-gravel.webp'
import ratPropagandaImg from './rat-propaganda-poster.webp'
import roofIciclesImg from './roof-icicles.webp'
import shovellingRoofImg from './shovelling-roof.webp'
import snowCurlImg from './snow-curl-roof.webp'
import shovellingSnowRoofImg from './shovelling-snow-roof.webp'
import snowPiledImg from './snow-piled-roof.webp'
import toonieImg from './toonie.webp'

export default defineSet({
  slug: 'weird-laws',
  date: '2026-03-16',
  title: 'Weird Laws: Mind the Fine Print',
  topic: 'oddities',
  slides: [
    {
      heading: 'Nickel and dimed',
      facts: [
        'Canada\'s **Currency Act** caps how much of a bill a store has to accept in coins, so a jar of change is not always legal tender.',
        'Nickels count for only **$5** per payment; dimes, quarters and 50¢ pieces share a single **$10** ceiling.',
        'Loonies stop counting past **$25**, and toonies past **$40**.',
        'The penny had the tightest cap of all at **25¢**, and the rule survives even though Canada quit minting them in **2012**.',
      ],
      images: [
        {
          src: coinsPileImg,
          alt: 'Hands sifting through a large pile of assorted coins spread across a table',
          credit: 'Morgan, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: nickelImg,
          alt: 'Close-up of the beaver side of a 1987 Canadian five-cent coin',
          credit: 'Mark Morgan, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: loonieImg,
          alt: 'A Canadian one-dollar coin showing the loon on a plain white background',
          credit: 'Creative Tools, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: toonieImg,
          alt: 'A Canadian two-dollar coin standing on edge, its polar bear side lit against a dark background',
          credit: 'Carol VanHook, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: dimeImg,
        },
        {
          src: cashBillsImg,
        },
      ],
    },
    {
      heading: 'The rat race Alberta won',
      facts: [
        'Alberta has kept itself effectively **rat-free** since rats first turned up on its eastern border in **1950**.',
        'The Agricultural Pests Act declares the Norway rat a pest, making it illegal to import, sell or keep one.',
        'Pet rats are out. Permits go only to **research facilities and zoos**, so tameness is no defence.',
        'Every landowner and municipality in the province is legally required to help keep rats from settling in.',
      ],
      images: [
        {
          src: ratAtWaterImg,
          alt: 'A brown rat crouched at the edge of still water, its reflection visible below',
          credit: 'Charles J. Sharp, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: ratEatingImg,
          alt: 'A brown rat feeding on the ground beside a discarded tin can',
          credit: 'Zeynel Cebeci, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: ratByFenceImg,
          alt: 'A brown rat sniffing a plastic tub beside a chain-link fence',
          credit: 'Chuck Homler d/b/a Focus On Wildlife, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: ratOnGravelImg,
          alt: 'A brown rat standing on gravel in bright sunlight',
          credit: 'AnemoneProjectors, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: ratPropagandaImg,
        },
        {
          src: petRatImg,
        },
      ],
    },
    {
      heading: 'Shovel it or pay for it',
      facts: [
        'Plenty of municipalities require homeowners to clear dangerous snow and ice off a roof before it can drop on anyone below.',
        'Leave it and you risk a **fine**, plus liability if the falling ice wrecks a car or injures a passerby.',
        'Sidewalks usually count too, with most cities giving you a fixed window after a snowfall to clear the walk.',
        'These rules are **municipal**, not national, so the same frozen roof can be fine in one city and an offence in the next.',
      ],
      images: [
        {
          src: shovellingRoofImg,
          alt: 'A person standing on the snow-covered roof of a house, shovelling snow off the edge',
          credit: 'Artaxerxes, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: snowCurlImg,
          alt: 'A thick curl of snow overhanging the edge of a house roof',
          credit: 'Lee Snook (MORA), public domain, via Wikimedia Commons',
        },
        {
          src: snowPiledImg,
          alt: 'Deep snow piled across a roof and capping two stone chimneys',
          credit: 'Lee Snook (MORA), public domain, via Wikimedia Commons',
        },
        {
          src: iciclesImg,
          alt: 'Long icicles dripping from a snowy edge against a clear blue sky',
          credit: 'Hsoosalu, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: shovellingSnowRoofImg,
        },
        {
          src: roofIciclesImg,
        },
      ],
    },
  ],
})
