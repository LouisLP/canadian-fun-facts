import { defineSet } from '../../schema'
import ratPosterImg from './alberta-rat-poster.webp'
import autumnLakeImg from './autumn-lake-reflection.webp'
import borealForestImg from './boreal-forest-bridge.webp'
import frontenacImg from './chateau-frontenac.webp'
import polarBearImg from './churchill-polar-bear.webp'
import bridgeImg from './confederation-bridge.webp'
import fishingVillageImg from './fishing-village-harbour.webp'
import greatSlaveImg from './great-slave-lake.webp'
import hopewellImg from './hopewell-rocks.webp'
import howeSoundImg from './howe-sound.webp'
import inukshukImg from './inukshuk.webp'
import jellybeanImg from './jellybean-row.webp'
import notreDameImg from './montreal-notre-dame.webp'
import moraineImg from './moraine-lake.webp'
import niagaraImg from './niagara-horseshoe.webp'
import quebecDuskImg from './old-quebec-dusk.webp'
import quebecWinterImg from './old-quebec-winter.webp'
import peggysCoveImg from './peggys-cove.webp'
import prairieImg from './prairie-horizon.webp'
import klondikeImg from './ss-klondike.webp'
import torontoImg from './toronto-skyline.webp'
import tenPeaksImg from './valley-of-ten-peaks.webp'
import whitePassImg from './white-pass-railway.webp'
import auroraImg from './yukon-aurora.webp'

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
          src: howeSoundImg,
          alt: 'Snow-capped mountains rising above the deep blue water of Howe Sound in British Columbia',
          credit: 'Shafik Diwan, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: moraineImg,
          alt: 'Jagged Rocky Mountain peaks reflected in the still water of Moraine Lake, Banff National Park',
          credit: 'Terry Ott, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: prairieImg,
          alt: 'A line of power poles receding toward a flat, unbroken prairie horizon',
          credit: 'Saffron Blaze, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: polarBearImg,
          alt: 'A polar bear walking across mossy tundra near Churchill, Manitoba',
          credit: 'TravelingOtter, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: tenPeaksImg,
          alt: 'The snow-capped Valley of the Ten Peaks above the turquoise water of Moraine Lake',
        },
        {
          src: ratPosterImg,
          alt: 'A vintage Alberta public health poster reading "You can\'t ignore the rat", above the slogan "Let\'s keep Alberta rat-free"',
        },
      ],
    },
    {
      heading: 'Where most of us live',
      facts: [
        'Toronto hides a city underground: **PATH** runs **30 km** of walkways linking more than 70 buildings downtown.',
        'Niagara Falls is far from the tallest, but its flow rate ranks among the world\'s highest, so it **never freezes**.',
        'By area, Québec is Canada\'s largest province, bigger than **Spain, France, and Germany combined**.',
        'Jacques Cartier reached Hochelaga in **1535**, which is why much of Québec still wears European-looking architecture.',
      ],
      images: [
        {
          src: niagaraImg,
          alt: 'Aerial view of the Horseshoe Falls at Niagara, mist rising from the curved crest',
          credit: 'FuchsiaPeacock, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: torontoImg,
          alt: 'The Toronto skyline at dusk with the CN Tower lit above the lakefront',
          credit: 'Jchmrt, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: frontenacImg,
          alt: 'The Château Frontenac above snow-covered Quebec City at sunset',
          credit: 'Wilfredor, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: notreDameImg,
          alt: 'The twin-towered stone facade of Notre-Dame Basilica in Old Montreal, lit at night',
          credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: quebecWinterImg,
          alt: 'Aerial view of Old Quebec at blue hour in winter, snow on the rooftops and ice on the St. Lawrence',
        },
        {
          src: quebecDuskImg,
          alt: 'Panorama of Quebec City at dusk under a pink sky, the Château Frontenac rising above the old town',
        },
      ],
    },
    {
      heading: 'Where the tide runs the show',
      facts: [
        'The Bay of Fundy has the **highest tides on Earth**, rising and falling up to **16 metres** twice a day.',
        'Nova Scotia means **New Scotland**, and its **13,000 km** of coastline is dotted with fishing villages and old pirate history.',
        'The **13 km** Confederation Bridge links PEI to the mainland: the world\'s longest bridge over **ice-covered water**.',
        'Newfoundland keeps its own time zone, offset by **30 minutes**; St. John\'s is North America\'s **easternmost city**.',
      ],
      images: [
        {
          src: hopewellImg,
          alt: 'Tree-topped sandstone sea stacks at Hopewell Rocks, exposed on the sea floor at low tide',
          credit: 'Dennis G. Jarvis, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: peggysCoveImg,
          alt: 'The white lighthouse at Peggys Cove, Nova Scotia, standing on bare granite in fog',
          credit: 'TravelingOtter, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: bridgeImg,
          alt: 'The Confederation Bridge on its concrete piers, curving away across the water',
          credit: 'Wladyslaw, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: jellybeanImg,
          alt: 'Brightly painted row houses on a street corner in St. John\'s, Newfoundland',
          credit: 'miketnorton, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: fishingVillageImg,
          alt: 'A red fishing shack and clapboard houses reflected in the calm water of a Nova Scotia harbour, with a red dory moored alongside',
        },
        {
          src: autumnLakeImg,
          alt: 'Autumn foliage in red and gold along a forested shoreline, mirrored in a still lake',
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
          src: auroraImg,
          alt: 'Green aurora borealis streaking across a dark sky above silhouetted spruce trees',
          credit: 'Anthony DeLorenzo, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: klondikeImg,
          alt: 'The SS Klondike sternwheeler moored on the bank of the Yukon River at Whitehorse',
          credit: 'Bo Mertz, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: greatSlaveImg,
          alt: 'The rocky shoreline of Great Slave Lake at Yellowknife under a clear sky',
          credit: 'CambridgeBayWeather, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: inukshukImg,
          alt: 'A large stone inukshuk with outstretched arms standing against a clear blue sky',
          credit: 'Fabian Roudra Baroi, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: whitePassImg,
          alt: 'A vintage White Pass railway train winding along a mountainside above fields of pink fireweed',
        },
        {
          src: borealForestImg,
          alt: 'A wooden footbridge crossing a creek in dense, mossy northern forest',
        },
      ],
    },
  ],
})
