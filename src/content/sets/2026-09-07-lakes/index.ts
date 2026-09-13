import { defineSet } from '../../schema'
import abrahamLakeImg from './abraham-lake.webp'
import emeraldLakeImg from './emerald-lake.webp'
import greatLakesMapImg from './great-lakes-map.webp'
import greatSlaveKayakingImg from './great-slave-kayaking.webp'
import lakeErieImg from './lake-erie.webp'
import lakeHuronImg from './lake-huron.webp'
import lakeLouiseImg from './lake-louise.webp'
import lakeMichiganImg from './lake-michigan.webp'
import lakeOntarioImg from './lake-ontario.webp'
import lakeSuperiorImg from './lake-superior.webp'
import moraineLakeImg from './moraine-lake.webp'
import spottedLakeImg from './spotted-lake.webp'

export default defineSet({
  slug: 'lakes',
  date: '2026-09-07',
  title: 'Lakes: In Too Deep',
  topic: 'geography',
  slides: [
    {
      heading: 'HOMES, or SHAME',
      facts: [
        '**HOMES**: Huron, Ontario, Michigan, Erie, Superior, holding more than **20%** of the world\'s surface fresh water between them.',
        'Canada shares four of the five. Lake Michigan is entirely American, and the largest lake on Earth sitting inside a single country.',
        'Trump signed an executive order on **27 August 2026** renaming Lake Ontario "Lake America"; swap it in and HOMES rearranges to **SHAME**.',
        '**Lake Superior**: the world\'s largest freshwater lake by surface area at **82,100 km²**, more than New Brunswick and PEI combined.',
      ],
      images: [
        {
          src: greatLakesMapImg,
          alt: 'Coloured map of the five Great Lakes with the Canada-United States border marked through them, labelling Superior, Michigan, Huron, Erie and Ontario',
          credit: 'inbox, source unverified',
        },
        {
          src: lakeSuperiorImg,
          alt: 'A lighthouse on a high cliff above Lake Superior at dusk, with a full moon in a pink and blue sky and snow on the shoreline below',
          credit: 'inbox, source unverified',
        },
        {
          src: lakeHuronImg,
          alt: 'Clear turquoise water over pale limestone slabs in a rocky cove on Lake Huron, backed by a low cliff and green forest',
          credit: 'inbox, source unverified',
        },
        {
          src: lakeOntarioImg,
          alt: 'The Toronto skyline and CN Tower silhouetted against an orange sunset, seen from the surface of Lake Ontario',
          credit: 'inbox, source unverified',
        },
        {
          src: lakeErieImg,
          alt: 'Aerial view of a wooded point of land tapering into Lake Erie, with farm fields behind it and sun glinting off the water',
          credit: 'inbox, source unverified',
        },
        {
          src: lakeMichiganImg,
          alt: 'A white lighthouse at the end of a concrete pier reaching into Lake Michigan, lit against an orange and pink sunset',
          credit: 'inbox, source unverified',
        },
      ],
    },
    {
      heading: 'Puddle superpower',
      facts: [
        'Canada holds **62%** of the world\'s lakes: **879,800** of the 1.42 million bigger than ten hectares, more than every other country combined.',
        '**Great Slave Lake** in the Northwest Territories is the deepest lake in North America, dropping to **614 m** in Christie Bay.',
        'Lake Louise and Moraine Lake get their colour from **rock flour**: glacier-ground silt hanging in the meltwater, scattering blue and green back out.',
        'BC\'s **Spotted Lake**, Kłlil\'xʷ to the Syilx Okanagan, evaporates into dozens of mineral pools each summer and has long been treated as a healing site.',
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
        {
          src: emeraldLakeImg,
          alt: 'Bright green water of Emerald Lake in Yoho National Park with two canoes on it, ringed by steep forested slopes and a rocky peak',
          credit: 'inbox, source unverified',
        },
        {
          src: greatSlaveKayakingImg,
          alt: 'Three sea kayakers paddling on Great Slave Lake beneath a tall sheer cliff topped with spruce trees',
          credit: 'inbox, source unverified',
        },
        {
          src: spottedLakeImg,
          alt: 'Spotted Lake in the dry hills near Osoyoos, its bed showing dozens of pale circular mineral pools separated by ridges',
          credit: 'Mykola Swarnyk, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: abrahamLakeImg,
          alt: 'Stacks of white methane bubbles frozen inside the clear ice of Abraham Lake, with snowy mountains behind',
          credit: 'Joli Rumi, CC BY-SA 4.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
