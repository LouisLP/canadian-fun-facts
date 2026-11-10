import { defineSet } from '../../schema'
import budTrimmingImg from './bud-trimming.webp'
import budsOnBanknotesImg from './buds-on-banknotes.webp'
import cannabisGrowRoomImg from './cannabis-grow-room.webp'
import cannabisJarsImg from './cannabis-jars.webp'
import cannabisLeafFlagImg from './cannabis-leaf-flag.webp'
import caribooCansImg from './cariboo-cans.webp'
import craftBeerFlightsImg from './craft-beer-flights.webp'
import molsonCanadianImg from './molson-canadian.webp'
import mooseheadLagerImg from './moosehead-lager.webp'
import superfastBrowniesImg from './superfast-brownies.webp'
import tofinoBrewingFlightsImg from './tofino-brewing-flights.webp'
import tofinoBrewingGrowlersImg from './tofino-brewing-growlers.webp'

export default defineSet({
  slug: 'drugs-and-alcohol',
  date: '2026-09-14',
  title: 'Booze & Bud: High Spirits',
  topic: 'culture',
  slides: [
    {
      heading: 'True north, strong and tipsy',
      facts: [
        'Canada runs on cheap, easy-drinking lagers, but the craft beer scene is serious too, and surprisingly, there are **860 wineries** from the Okanagan to Niagara.',
        '**Molson**, founded in Montreal in **1786**, is North America\'s oldest brewery; **Moosehead** (1867) is Canada\'s oldest independent one.',
        'Canada\'s first craft brewery poured its first pint in **1982** at Horseshoe Bay, just outside Vancouver, where I was born and raised.',
        'The **Caesar** was invented in Calgary in **1969**: vodka, clam and tomato juice. Canadians now drink about 400 million a year.',
        'American booze has been off most provincial shelves since **March 2025** over Trump\'s tariffs; Ontario still refuses to restock without a trade deal.',
      ],
      images: [
        {
          src: molsonCanadianImg,
          alt: 'Four bottles of Molson Canadian on ice inside an upturned hockey helmet, held in front of a red Molson Canadian hockey jersey',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
        {
          src: mooseheadLagerImg,
          alt: 'A hand holding up a green bottle of Moosehead Canadian Lager in front of a stone building on a sunny street',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
        {
          src: craftBeerFlightsImg,
          alt: 'People at a long table with wooden paddles of small craft beer tasting glasses and glasses of water',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
        {
          src: tofinoBrewingFlightsImg,
          alt: 'Two flights of Tofino Brewing beers, from dark to pale, beside a board of cheese, charcuterie and bread on a driftwood table',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
        {
          src: tofinoBrewingGrowlersImg,
          alt: 'Two amber Tofino Brewing Company growlers on beach rocks at sunset, with surfers in the water behind',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
        {
          src: caribooCansImg,
          alt: 'Three green cans of Cariboo Genuine beer on a wooden railing, with an ocean inlet and snowy mountains behind',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
      ],
    },
    {
      heading: 'Oh Cannabis',
      facts: [
        'Legal since **17 October 2018**: Canada was the second country to legalize recreational cannabis nationwide, after Uruguay, and the first in the G7.',
        'In Vancouver, a joint after work gets the same shrug as a glass of wine: **31%** of BC adults used cannabis in the past year.',
        'Legal age: **18** in Alberta, **21** in Quebec, 19 everywhere else. A Quebecer can buy a beer three years before a joint.',
        'Edibles hit legal shelves in **December 2019**, but brownies were always homemade: I stirred a bag into a batch for my music video Superfast at 19.',
        'Canopy Growth grew weed inside an abandoned **Hershey chocolate factory** in Smiths Falls, Ontario, then sold it back to Hershey in 2023 for **$53 million**.',
      ],
      images: [
        {
          src: cannabisLeafFlagImg,
          alt: 'A Canadian flag with a red cannabis leaf in place of the maple leaf, seen from below against a blue sky with people standing beneath it',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
        {
          src: superfastBrowniesImg,
          alt: 'Black-and-white video still of a young man leaning into frame beside a mixing bowl of brownie batter, holding up a small bag of dried cannabis',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
        {
          src: cannabisGrowRoomImg,
          alt: 'A worker in a white protective suit and mask tending rows of flowering cannabis plants in a large indoor grow room',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
        {
          src: cannabisJarsImg,
          alt: 'Glass jars of dried cannabis buds with metal leaf badges and strain labels including Blue Dream and Lemon Diesel',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
        {
          src: budTrimmingImg,
          alt: 'A gloved hand holding a small cannabis bud in tweezers in front of green cannabis leaves',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
        {
          src: budsOnBanknotesImg,
          alt: 'Three dried cannabis buds resting on Canadian polymer banknotes',
          credit: 'Sourced by Louis Lascelles-Palys',
        },
      ],
    },
  ],
})
