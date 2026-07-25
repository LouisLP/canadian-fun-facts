import { defineSet } from '../../schema'
import bagelOvenImg from './bagel-wood-fired-oven.webp'
import biculturalismHearingImg from './bilingualism-biculturalism-hearing.webp'
import canadaDayImg from './canada-day-parliament-hill.webp'
import tojoImg from './chef-tojo.webp'
import citizenshipCrowdImg from './citizenship-crowd-flags.webp'
import littleItalyImg from './commercial-drive-little-italy.webp'
import falseCreekImg from './false-creek-skyline.webp'
import gingerBeefImg from './ginger-beef.webp'
import hawaiianPizzaImg from './hawaiian-pizza.webp'
import houseOfCommonsImg from './house-of-commons.webp'
import hasidicStreetImg from './montreal-hasidic-street.webp'
import trudeauImg from './pierre-trudeau.webp'
import stViateurImg from './st-viateur-storefront.webp'
import sushiPlatterImg from './sushi-platter.webp'
import ukrainianRallyImg from './toronto-ukrainian-rally.webp'
import chinatownGateImg from './vancouver-chinatown-gate.webp'
import indianWeddingImg from './vancouver-indian-wedding.webp'
import worldCupFansImg from './world-cup-fans.webp'

export default defineSet({
  slug: 'multiculturalism',
  date: '2026-07-27',
  title: 'Multiculturalism: A Mosaic',
  topic: 'culture',
  slides: [
    {
      heading: 'Official since 1971',
      facts: [
        'Canada was the **first country in the world** to make multiculturalism official policy: Pierre Trudeau, House of Commons, **October 8, 1971**.',
        'Parliament went further in **1988** with the Canadian Multiculturalism Act, the first national multiculturalism law anywhere.',
        '**23% of Canadians** were born abroad in the 2021 census: the highest share since Confederation, and the highest in the G7.',
        'That census counted more than **450 ethnic or cultural origins** and over **200 mother tongues**. Nearly half of Toronto was born outside the country.',
      ],
      images: [
        {
          src: trudeauImg,
          alt: 'Black-and-white portrait of Pierre Elliott Trudeau speaking, seated in front of a map',
        },
        {
          src: houseOfCommonsImg,
          alt: 'The empty House of Commons chamber in Ottawa, green desks in rows facing the Speaker\'s chair',
        },
        {
          src: biculturalismHearingImg,
          alt: 'Black-and-white photo of a 1960s government hearing, technicians running reel-to-reel recorders and headsets in the foreground',
        },
        {
          src: citizenshipCrowdImg,
          alt: 'A crowd of people of many backgrounds waving small Canadian flags at a citizenship ceremony',
        },
        {
          src: canadaDayImg,
          alt: 'A packed Canada Day crowd with flags and raised arms on Parliament Hill in Ottawa',
        },
        {
          src: worldCupFansImg,
          alt: 'Fans in a stadium holding up Canadian flags and cheering',
        },
      ],
    },
    {
      heading: 'Tile by tile',
      facts: [
        'Vancouver alone holds a Chinatown, a Little Italy, a Punjabi Market, and a Greektown, a pattern repeated in every big Canadian city.',
        'Yiddish was **Montreal\'s third language** by 1931, spoken end to end along Saint-Laurent Boulevard, still called The Main.',
        '**Richmond**, next door to Vancouver, is **60% foreign-born**, the highest share of any city in Canada.',
        '**1.36 million** Canadians report Ukrainian roots, third only to Ukraine and Russia.',
      ],
      images: [
        {
          src: chinatownGateImg,
          alt: 'The Millennium Gate over Pender Street in Vancouver\'s Chinatown, with a bilingual insurance sign in the foreground',
        },
        {
          src: littleItalyImg,
          alt: 'Little Italy banners on a lamppost at Commercial Drive and Graveley Street in Vancouver',
        },
        {
          src: indianWeddingImg,
          alt: 'A packed dance floor at a South Asian wedding reception, guests in saris and suits with arms raised',
        },
        {
          src: falseCreekImg,
          alt: 'Aerial view of Vancouver\'s False Creek, with Science World, the SkyTrain, and the downtown skyline',
        },
        {
          src: hasidicStreetImg,
          alt: 'Hasidic men in long coats and wide-brimmed hats walking down a snowy Montreal street past a Yiddish sign',
        },
        {
          src: ukrainianRallyImg,
          alt: 'A snowy Toronto square packed with people waving Ukrainian flags in front of the TORONTO sign',
        },
      ],
    },
    {
      heading: 'Cooked up in Canada',
      facts: [
        '**Hawaiian pizza** was invented in **Chatham, Ontario, 1962**: a Greek immigrant putting Hawaiian-branded pineapple on an Italian dish in Canada.',
        '**Ginger beef** is Calgarian, not Chinese: chef George Wong battered it at the Silver Inn in **1975** for Albertans who wanted some _crispy_ beef.',
        'A love letter to **Asian food in Vancouver**: Chinese, Japanese, Thai, and Vietnamese restaurants are some of the best in the world.',
        'Vancouver chef **Hidekazu Tojo** says he invented the **California roll**, flipping the rice outside for diners who wanted the seaweed hidden.',
        'Montreal bagels are hand-rolled, boiled in **honey water**, and wood-fired. Fairmount has been turning them out since **1919**.',
      ],
      images: [
        {
          src: hawaiianPizzaImg,
          alt: 'A sliced pizza topped with ham, bacon, and pineapple on a black pan',
        },
        {
          src: gingerBeefImg,
          alt: 'A bowl of crispy ginger beef over white rice, scattered with green onion and sesame seeds',
        },
        {
          src: bagelOvenImg,
          alt: 'A baker sliding a paddle of bagels into a wood-fired oven, trays of finished bagels in the foreground',
        },
        {
          src: stViateurImg,
          alt: 'A hand holding a sesame bagel in a paper bag in front of the St-Viateur Bagel storefront sign',
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
  ],
})
