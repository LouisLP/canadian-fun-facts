import { defineSet } from '../../schema'
import crowCloseUpImg from './crow-close-up.webp'
import crowOnWireImg from './crow-on-wire.webp'
import feedingGeeseImg from './feeding-geese-2006.webp'
import geeseInFlightImg from './geese-in-flight.webp'
import geeseStanleyParkImg from './geese-stanley-park.webp'
import glaucousWingedGullsImg from './glaucous-winged-gulls.webp'
import gooseFamilyThamesImg from './goose-family-thames.webp'
import gooseLowOverWaterImg from './goose-low-over-water.webp'
import gooseSasamatImg from './goose-sasamat-lake.webp'
import gullTakingOffImg from './gull-taking-off.webp'
import heronNestPairImg from './heron-nest-pair.webp'
import heronStanleyParkImg from './heron-over-stanley-park.webp'
import loonAndChickImg from './loon-and-chick.webp'
import loonOnLakeImg from './loon-on-lake.webp'
import loonWinterImg from './loon-winter-plumage.webp'
import loonsMountainLakeImg from './loons-mountain-lake.webp'
import snowyOwlLandingImg from './snowy-owl-landing.webp'
import snowyOwlsBoundaryBayImg from './snowy-owls-boundary-bay.webp'

export default defineSet({
  slug: 'birds',
  date: '2026-08-10',
  title: 'Birds of Canada: Loonie Tunes',
  topic: 'wildlife',
  slides: [
    {
      heading: 'Loonie by accident',
      facts: [
        'The dollar coin was meant to show a voyageur. The master dies vanished in transit in 1986 after the Mint shipped them by local courier to save **$43.50**.',
        'Loons can barely walk: their legs sit so far back they shove themselves along on their bellies, and takeoff needs up to **400 metres** of open water.',
        'The 1986 **Birds of Canada** notes gave every denomination a bird: robin on the $2, loon on the $20, snowy owl on the $50, Canada goose on the $100.',
        'Quebec adopted the snowy owl as its official bird in **1987**, the same year the loonie entered circulation. It is North America\'s heaviest owl.',
      ],
      images: [
        {
          src: loonOnLakeImg,
          alt: 'A common loon in black-and-white breeding plumage swimming on still water, its reflection below',
          credit: 'Enoch Leung, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: loonAndChickImg,
          alt: 'An adult common loon on a lake with a downy grey chick swimming alongside it',
          credit: 'Cephas, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: loonsMountainLakeImg,
          alt: 'Two common loons on a calm lake backed by spruce forest and distant mountains',
          credit: 'Trougnouf, CC BY 4.0, via Wikimedia Commons',
        },
        {
          src: loonWinterImg,
          alt: 'A common loon in plain grey winter plumage swimming close to the camera',
          credit: 'Mike\'s Birds, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: snowyOwlLandingImg,
          alt: 'A snowy owl dropping onto a snowbank with wings spread and talons forward against a blue sky',
          credit: 'Bert de Tilly, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: snowyOwlsBoundaryBayImg,
          alt: 'Two snowy owls perched on driftwood in a winter marsh at Boundary Bay, British Columbia',
          credit: 'Ingrid Taylar, CC BY 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Honk if you\'re Canadian',
      facts: [
        'Britain did this to itself: Canada geese joined a royal waterfowl collection in London\'s St James\'s Park in the late 1600s, and the UK population now tops **150,000**.',
        'The giant Canada goose was written off as extinct until a flock turned up wintering in Rochester, Minnesota, in **1962**.',
        'A flock took out both engines of US Airways 1549 shortly after takeoff in 2009, which is how the plane ended up in the **Hudson River**.',
        'Louis was hand-feeding them out of his palm in **2006**; adult geese hiss, charge, and beat intruders with their wings.',
      ],
      images: [
        {
          src: geeseStanleyParkImg,
          alt: 'Canada geese grazing on wet grass beside a seawall path, a city beach and apartment towers behind them',
          credit: 'Louis Lascelles-Palys',
        },
        {
          src: gooseSasamatImg,
          alt: 'A single Canada goose sitting on patchy grass in front of a dark conifer forest',
          credit: 'Louis Lascelles-Palys',
        },
        {
          src: feedingGeeseImg,
          alt: 'A child in a cap and backpack holding out a handful of food to four Canada geese on a sunlit park lawn',
          credit: 'Louis Lascelles-Palys',
        },
        {
          src: geeseInFlightImg,
          alt: 'Three Canada geese silhouetted in flight against a cloudy blue sky',
          credit: 'Ildar Sagdejev, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: gooseFamilyThamesImg,
          alt: 'A Canada goose swimming along a stone-walled English canal with five goslings following',
          credit: 'Jettthedog, CC0, via Wikimedia Commons',
        },
        {
          src: gooseLowOverWaterImg,
          alt: 'A Canada goose flying low over open water with its wings fully extended downward',
          credit: 'Frank Schulenburg, CC BY-SA 3.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Crows, herons, and definitely not seagulls',
      facts: [
        'Up to **10,000** crows commute from across Vancouver to one roost by Still Creek in Burnaby every night, a routine running since the 1970s.',
        '**Canuck the Crow** made news worldwide in May 2016 for lifting a knife from an active Vancouver police crime scene, an officer chasing after him.',
        'Stanley Park holds the largest urban Pacific great blue heron colony in North America: **100-plus nests** off Beach Avenue, watched on a city webcam.',
        'No bird is a seagull. This coast\'s default is the glaucous-winged gull, which drinks seawater and drips the salt back out through its **nostrils**.',
      ],
      images: [
        {
          src: crowOnWireImg,
          alt: 'A crow perched on a guy wire beneath a street light against a pale overcast sky',
          credit: 'Louis Lascelles-Palys',
        },
        {
          src: crowCloseUpImg,
          alt: 'A crow standing on a white railing in sunlight, its feathers showing a blue sheen',
          credit: 'Gordon Leggett, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: heronStanleyParkImg,
          alt: 'A great blue heron flying between bare spring treetops, wings raised and neck stretched out',
          credit: 'Louis Lascelles-Palys',
        },
        {
          src: heronNestPairImg,
          alt: 'Two great blue herons facing each other on a stick nest high in a tree at sunset',
          credit: 'Pete from Vancouver, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: gullTakingOffImg,
          alt: 'A gull lifting off from a wooden pier railing with its wings blurred in motion, sea and shoreline behind',
          credit: 'Louis Lascelles-Palys',
        },
        {
          src: glaucousWingedGullsImg,
          alt: 'Two adult glaucous-winged gulls with pale grey wings standing together on a weathered piling',
          credit: 'Tony Fox, CC BY-SA 3.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
