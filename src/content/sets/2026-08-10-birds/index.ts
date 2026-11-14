import { commonsCredit, defineSet, INBOX_CREDIT } from '../../schema'
import canuckWithKnifeImg from './canuck-with-knife.webp'
import crowOnWireImg from './crow-on-wire.webp'
import eagleCatchingFishImg from './eagle-catching-fish.webp'
import eagleCarvingImg from './eagle-feather.webp'
import eagleOnBoatBowImg from './eagle-on-boat-bow.webp'
import feedingGeeseImg from './feeding-geese-2006.webp'
import geeseInFlightImg from './geese-in-flight.webp'
import geeseStanleyParkImg from './geese-stanley-park.webp'
import glaucousWingedGullsImg from './glaucous-winged-gulls.webp'
import gooseLowOverWaterImg from './goose-charging.webp'
import gooseFamilyThamesImg from './goose-family-thames.webp'
import gooseSasamatImg from './goose-sasamat-lake.webp'
import gullTakingOffImg from './gull-taking-off.webp'
import heronNestPairImg from './heron-nest-pair.webp'
import heronStanleyParkImg from './heron-over-stanley-park.webp'
import loonAndChickImg from './loon-and-chick.webp'
import loonOnLakeImg from './loon-on-lake.webp'
import snowyOwlLandingImg from './snowy-owl-landing.webp'
import voiceover from './voiceover.m4a'

export default defineSet({
  slug: 'birds',
  date: '2026-08-10',
  title: 'Birds: Loonie Tunes',
  topic: 'wildlife',
  voiceover: {
    src: voiceover,
    cues: [
      { at: 22.1, panel: 1, image: 0 }, // "First of all, loons"
      { at: 78.6, panel: 1, image: 1 }, // "little loon ducklings or loonlings"
      { at: 85.9, panel: 1, image: 2 }, // "Next up we got snowy owls"
      { at: 111.0, panel: 1, image: 3 }, // "Next up we got eagles"
      { at: 130.2, panel: 1, image: 5 }, // "shed a feather to be able to give a feather"
      { at: 171.8, panel: 2 }, // "Next up oh my god geese are horrible"
      { at: 188.4, panel: 2, image: 5 }, // "They hiss at you"
      { at: 210.1, panel: 2, image: 0 }, // "you go around the seawall"
      { at: 228.8, panel: 2, image: 2 }, // "not feeding them like I am in this picture"
      { at: 234.3, panel: 2 }, // "but they are a symbol of Canada"
      { at: 247.2, panel: 3 }, // "next up we have some of the … lesser interesting ones"
      { at: 258.4, panel: 3, image: 0 }, // "Crows often commute in thousands"
      { at: 288.5, panel: 3, image: 1 }, // "Canuck the Crow"
      { at: 326.4, panel: 3, image: 2 }, // "Next up we got herons in Stanley Park"
      { at: 340.8, panel: 3, image: 3 }, // "a heron nest"
      { at: 369.8, panel: 3, image: 4 }, // "Lastly I want to talk about seagulls"
      { at: 378.8, panel: 3, image: 5 }, // "This coastal bird is called a glaucous-winged gull"
      { at: 404.7, panel: 4 }, // "Thank you very much guys"
    ],
  },
  slides: [
    {
      heading: 'Loonies, lemmings, and eagle feathers',
      facts: [
        'I hope you all remember our dollar coin is the **loonie**, for its common loon: a bird closer kin to penguins than to ducks!',
        'Loons can barely walk: legs set so far back they shove along on their bellies, and takeoff needs up to **400 metres** of open water.',
        'Snowy owls swallow lemmings whole, **three to five a day** and over **1,600 a year** for one adult. They hear them moving under the snow.',
        'Nova Scotia courtrooms have stocked **eagle feathers** since **2018**, offered like a Bible to anyone who would rather affirm the truth holding one.',
      ],
      images: [
        {
          src: loonOnLakeImg,
          alt: 'Close-up of a common loon in breeding plumage, red eye and checkered back, on the water',
          credit: INBOX_CREDIT,
        },
        {
          src: loonAndChickImg,
          alt: 'A downy loon chick riding on its parent\'s back',
          credit: INBOX_CREDIT,
        },
        {
          src: snowyOwlLandingImg,
          alt: 'A snowy owl coming in to land on snow, wings raised and yellow eyes on the camera',
          credit: INBOX_CREDIT,
        },
        {
          src: eagleOnBoatBowImg,
          alt: 'A bald eagle perched on the bow of a moored aluminum boat, snow-covered mountains behind',
          credit: INBOX_CREDIT,
        },
        {
          src: eagleCatchingFishImg,
          alt: 'A bald eagle with wings spread striking the water with its talons',
          credit: INBOX_CREDIT,
        },
        {
          src: eagleCarvingImg,
          alt: 'A hand holding an eagle feather beside a case of feathers kept for court oaths',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Honk if you\'re Canadian',
      facts: [
        'Britain did this to itself: Canada geese joined a London royal collection in the late 1600s; the UK now has over **150,000**. Oops.',
        'The giant Canada goose was written off as extinct until a flock turned up wintering in Rochester, Minnesota, in **1962**.',
        'A flock took out both engines of US Airways 1549 shortly after takeoff in 2009, landing the plane in the **Hudson River**.',
        'I hand-fed them from my palm in **2006**; adults hiss, charge and beat intruders with their wings. Only clueless tourists and kids are this brave.',
      ],
      images: [
        {
          src: geeseStanleyParkImg,
          alt: 'Canada geese grazing on wet grass beside a seawall path, a city beach and apartment towers behind them',
          credit: INBOX_CREDIT,
        },
        {
          src: gooseSasamatImg,
          alt: 'A single Canada goose sitting on patchy grass in front of a dark conifer forest',
          credit: INBOX_CREDIT,
        },
        {
          src: feedingGeeseImg,
          alt: 'A child in a cap and backpack holding out a handful of food to four Canada geese on a sunlit park lawn',
          credit: INBOX_CREDIT,
        },
        {
          src: geeseInFlightImg,
          alt: 'A flock of Canada geese flying across a clear blue sky',
          credit: INBOX_CREDIT,
        },
        {
          src: gooseFamilyThamesImg,
          alt: 'A Canada goose swimming along a stone-walled English canal with five goslings following',
          credit: commonsCredit('Jettthedog', 'CC0'),
        },
        {
          src: gooseLowOverWaterImg,
          alt: 'A Canada goose charging through grass with its neck lowered and beak open',
          credit: INBOX_CREDIT,
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
          credit: INBOX_CREDIT,
        },
        {
          src: canuckWithKnifeImg,
          alt: 'A crow standing on gravel with a serrated wooden-handled kitchen knife gripped in its beak, a red band on one leg',
          credit: INBOX_CREDIT,
        },
        {
          src: heronStanleyParkImg,
          alt: 'A great blue heron flying between bare spring treetops, wings raised and neck stretched out',
          credit: INBOX_CREDIT,
        },
        {
          src: heronNestPairImg,
          alt: 'Two great blue herons standing over a stick nest in a bare tree in Stanley Park',
          credit: INBOX_CREDIT,
        },
        {
          src: gullTakingOffImg,
          alt: 'A gull lifting off from a wooden pier railing with its wings blurred in motion, sea and shoreline behind',
          credit: INBOX_CREDIT,
        },
        {
          src: glaucousWingedGullsImg,
          alt: 'A glaucous-winged gull calling from a rock, pale grey wings and pink legs',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
