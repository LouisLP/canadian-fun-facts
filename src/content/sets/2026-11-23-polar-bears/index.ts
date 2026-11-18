import { commonsCredit, defineSet, webCredit } from '../../schema'
import bearCrossingSignImg from './bear-crossing-sign.webp'
import bearHelicopterLiftImg from './bear-helicopter-lift.webp'
import bearLookingUpImg from './bear-looking-up.webp'
import bearPeekingOverBuggyImg from './bear-peeking-over-buggy.webp'
import bearUnderTundraBuggyImg from './bear-under-tundra-buggy.webp'
import bearsSparringImg from './bears-sparring.webp'
import motherAndCubsWalkingImg from './mother-and-cubs-walking.webp'
import motherAndCubsImg from './mother-and-cubs.webp'
import polarBearCloseUpImg from './polar-bear-close-up.webp'
import polarBearJailImg from './polar-bear-jail.webp'

export default defineSet({
  slug: 'polar-bears',
  date: '2026-11-23',
  title: 'Polar Bears: Ice to Meet You',
  topic: 'wildlife',
  // Last one sits on top of the title-panel fan. Credits: Dangerous Business (first two),
  // Ansgar Walk on Wikimedia Commons, CC BY 2.5 (close-up).
  covers: [bearLookingUpImg, bearPeekingOverBuggyImg, polarBearCloseUpImg],
  slides: [
    {
      heading: 'Bear Market',
      facts: [
        'Bear safety, the folk version: **if it\'s black, fight back; if it\'s brown, lie down; if it\'s white, goodnight**.',
        'Canada is home to about **two-thirds** of the world\'s polar bears.',
        'Cubs are born in snow dens about the size of their mother\'s **paw**, weighing barely **half a kilo**.',
      ],
      images: [
        {
          src: motherAndCubsImg,
          alt: 'A polar bear mother lying in the snow with two cubs in warm low sunlight, Wapusk National Park, Manitoba',
          credit: commonsCredit('Ansgar Walk', 'CC BY 2.5'),
        },
        {
          src: motherAndCubsWalkingImg,
          alt: 'A polar bear mother walking across snowy tundra towards the camera, two cubs following behind her',
          credit: webCredit('Dangerous Business'),
        },
      ],
    },
    {
      heading: 'Waiting for the Freeze',
      facts: [
        'Every fall, hundreds of bears gather near **Churchill**, Manitoba, waiting for Hudson Bay to freeze so they can hunt seals.',
        'The town has about **870** people and roughly **10,000** bear-season visitors.',
        'They ride **Tundra Buggies**; the first, built in **1979**, was an old school bus on crop-sprayer tires.',
      ],
      images: [
        {
          src: bearsSparringImg,
          alt: 'Two polar bears sparring in the snow among brown willow shrubs near Churchill, Manitoba',
          credit: webCredit('Dangerous Business'),
        },
        {
          src: bearUnderTundraBuggyImg,
          alt: 'A polar bear standing on its hind legs between the giant tires of a Tundra Buggy, paws on its underside',
          credit: webCredit('Dangerous Business'),
        },
      ],
    },
    {
      heading: 'Open-Door Policy',
      facts: [
        'Locals leave their **car doors unlocked** so anyone who meets a bear can jump in; sightings go to **675-BEAR**.',
        'Repeat visitors land in the **polar bear jail** for up to **30 days**, then fly out under a helicopter, dangling in a net.',
      ],
      images: [
        {
          src: bearCrossingSignImg,
          alt: 'A diamond polar bear warning sign beside a snowy road on the Hudson Bay shore, an inukshuk standing on the rocks behind',
          credit: webCredit('Dangerous Business'),
        },
        {
          src: polarBearJailImg,
          alt: 'The grey Quonset-hut Polar Bear Holding Facility in Churchill, with a Manitoba sign on its side',
          credit: commonsCredit('Emma', 'CC BY 2.0'),
        },
        {
          src: bearHelicopterLiftImg,
          alt: 'A yellow helicopter hovering low in blowing snow while two workers in hi-vis vests hook a netted, sedated polar bear to its line',
          credit: webCredit('Churchill Polar Bears'),
        },
      ],
    },
  ],
})
