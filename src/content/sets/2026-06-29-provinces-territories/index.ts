import { defineSet, INBOX_CREDIT } from '../../schema'
import albertaRatPosterImg from './alberta-rat-poster.webp'
import autumnLakeReflectionImg from './autumn-lake-reflection.webp'
import borealForestBridgeImg from './boreal-forest-bridge.webp'
import churchillPolarBearsImg from './churchill-polar-bears.webp'
import confederationBridgeImg from './confederation-bridge.webp'
import dawsonCityImg from './dawson-city.webp'
import fishingVillageHarbourImg from './fishing-village-harbour.webp'
import hopewellRocksImg from './hopewell-rocks.webp'
import iqaluitImg from './iqaluit.webp'
import niagaraHorseshoeImg from './niagara-horseshoe.webp'
import oldQuebecDuskImg from './old-quebec-dusk.webp'
import oldQuebecWinterImg from './old-quebec-winter.webp'
import prairieRoadImg from './prairie-road.webp'
import torontoPathImg from './toronto-path.webp'
import valleyOfTenPeaksImg from './valley-of-ten-peaks.webp'
import whitePassRailwayImg from './white-pass-railway.webp'

export default defineSet({
  slug: 'provinces-territories',
  date: '2026-06-29',
  title: 'Coast to Coast to Coast: All 13 of Us',
  topic: 'geography',
  slides: [
    {
      heading: 'Peaks, prairie, and polar bears',
      facts: [
        'British Columbia stacks **Pacific coastline**, temperate rainforest, and mountain ranges into one province; the Okanagan grows wine and peaches.',
        'Alberta is famously **rat-free**, and holds Canada\'s richest **dinosaur fossil** beds alongside the Rockies of Banff and Jasper.',
        'Saskatchewan is flat enough that long, unobstructed horizons show the **curvature of the Earth**; it also holds over **100,000 lakes**.',
        'Churchill, Manitoba is the **Polar Bear Capital of the World**, and hosts one of the largest **beluga** populations anywhere.',
      ],
      images: [
        {
          src: valleyOfTenPeaksImg,
          alt: 'The snow-capped Valley of the Ten Peaks above the turquoise water of Moraine Lake',
          credit: INBOX_CREDIT,
        },
        {
          src: albertaRatPosterImg,
          alt: 'A vintage Alberta public health poster reading "You can\'t ignore the rat", above the slogan "Let\'s keep Alberta rat-free"',
          credit: INBOX_CREDIT,
        },
        {
          src: prairieRoadImg,
          alt: 'A dirt road curving past a pond and yellow canola fields under a wide Saskatchewan sky',
          credit: INBOX_CREDIT,
        },
        {
          src: churchillPolarBearsImg,
          alt: 'A polar bear and two cubs walking past a white tundra buggy near Churchill, Manitoba',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Where most of us live',
      facts: [
        'Most Canadians live here, though my own big-city ranking still goes **Vancouver**, Montreal, Toronto.',
        'Toronto hides a city underground: **PATH** runs **30 km** of walkways linking more than 70 buildings downtown.',
        'Niagara Falls is far from the tallest, but its flow rate ranks among the world\'s highest, so it **never freezes**.',
        'By area, Québec is Canada\'s largest province, bigger than **Spain, France, and Germany combined**.',
      ],
      images: [
        {
          src: torontoPathImg,
          alt: 'Two people walking through a glass-and-steel tube walkway on Toronto\'s PATH network',
          credit: INBOX_CREDIT,
        },
        {
          src: niagaraHorseshoeImg,
          alt: 'The Horseshoe Falls at Niagara from directly above, mist boiling out of the curve',
          credit: INBOX_CREDIT,
        },
        {
          src: oldQuebecWinterImg,
          alt: 'Aerial view of Old Quebec at blue hour in winter, snow on the rooftops and ice on the St. Lawrence',
          credit: INBOX_CREDIT,
        },
        {
          src: oldQuebecDuskImg,
          alt: 'Panorama of Quebec City at dusk under a pink sky, the Château Frontenac rising above the old town',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Where the tide runs the show',
      facts: [
        'The Bay of Fundy, in the one southern region I haven\'t visited, has the **highest tides on Earth**: up to **16 metres**, twice a day.',
        'Nova Scotia means **New Scotland**, and its **13,000 km** of coastline is dotted with fishing villages and old pirate history.',
        'The **13 km** Confederation Bridge links PEI to the mainland: the world\'s longest bridge over **ice-covered water**.',
        'Newfoundland keeps its own time zone, offset by **30 minutes**; St. John\'s is North America\'s **easternmost city**.',
      ],
      images: [
        {
          src: hopewellRocksImg,
          alt: 'People walking the sea floor among the tree-topped Hopewell Rocks at low tide',
          credit: INBOX_CREDIT,
        },
        {
          src: confederationBridgeImg,
          alt: 'The arches of the Confederation Bridge glowing orange at sunset, reflected in wet sand',
          credit: INBOX_CREDIT,
        },
        {
          src: fishingVillageHarbourImg,
          alt: 'A red fishing shack and clapboard houses reflected in the calm water of a Nova Scotia harbour, with a red dory moored alongside',
          credit: INBOX_CREDIT,
        },
        {
          src: autumnLakeReflectionImg,
          alt: 'Autumn foliage in red and gold along a forested shoreline, mirrored in a still lake',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'The top third',
      facts: [
        'The **Klondike Gold Rush** pulled tens of thousands of prospectors north in the late 1890s and built Dawson City almost overnight.',
        'Yukon is one of the best places in Canada to catch the **aurora borealis**, especially on dark nights near Whitehorse.',
        'The Northwest Territories has **11 official languages**, and Great Slave Lake is the **deepest lake in North America**.',
        'Nunavut was created in **1999**, Canada\'s newest and largest territory, with roughly 40,000 people and an **Inuit majority**.',
      ],
      images: [
        {
          src: dawsonCityImg,
          alt: 'Brightly painted false-front buildings along a street in Dawson City, Yukon',
          credit: INBOX_CREDIT,
        },
        {
          src: whitePassRailwayImg,
          alt: 'A vintage White Pass railway train winding along a mountainside above fields of pink fireweed',
          credit: INBOX_CREDIT,
        },
        {
          src: borealForestBridgeImg,
          alt: 'A wooden footbridge crossing a creek in dense, mossy northern forest',
          credit: INBOX_CREDIT,
        },
        {
          src: iqaluitImg,
          alt: 'Colourful houses along the tidal flats at Iqaluit, Nunavut, with hills across the bay',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
