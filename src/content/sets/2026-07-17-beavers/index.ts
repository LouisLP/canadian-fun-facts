import { defineSet } from '../../schema'
import chompImg from './beaver-chomp.svg'
import damImg from './beaver-dam.svg'
import flagImg from './beaver-flag.svg'
import hardhatImg from './beaver-hardhat.svg'
import lodgeImg from './beaver-lodge.svg'
import nickelImg from './beaver-nickel.svg'
import peltImg from './beaver-pelt-coin.svg'
import satelliteImg from './beaver-satellite.svg'
import scubaImg from './beaver-scuba.svg'
import stampImg from './beaver-stamp.svg'
import tailSlapImg from './beaver-tail-slap.svg'
import teethImg from './beaver-teeth.svg'

export default defineSet({
  slug: 'beavers',
  date: '2026-07-17',
  title: 'Beavers: Nature\'s Construction Crew',
  topic: 'wildlife',
  slides: [
    {
      heading: 'Dam fine engineering',
      facts: [
        'Deep in **Wood Buffalo National Park**, Alberta, sits a beaver dam roughly **850 metres long** — about eight football fields. It was discovered on satellite imagery in 2007, and researchers think generations of beavers have been working on it since the 1970s.',
        'Beavers build because they *hate the sound of running water* — play a recording of a trickling stream and they\'ll pile sticks on the speaker.',
        'A beaver lodge has **underwater-only entrances**, a dry sleeping platform, and stays above freezing all winter — igloo engineering, but soggier.',
        'All that damming creates wetlands that filter water and shelter fish, frogs, and birds — ecologists call beavers a **keystone species**.',
      ],
      images: [
        {
          src: damImg,
          alt: 'Extremely sophisticated drawing of a beaver beside a stick dam',
          credit: 'in-house clip-art department',
        },
        {
          src: satelliteImg,
          alt: 'A satellite beaming down at a very long beaver dam',
          credit: 'in-house clip-art department',
        },
        {
          src: lodgeImg,
          alt: 'A dome-shaped beaver lodge with a secret underwater entrance',
          credit: 'in-house clip-art department',
        },
        {
          src: hardhatImg,
          alt: 'A beaver wearing a construction hard hat',
          credit: 'in-house clip-art department',
        },
      ],
      sources: [
        'https://en.wikipedia.org/wiki/Beaver_dam',
        'https://www.pbs.org/wnet/nature/leave-it-to-beavers-infographic-beaver-dams/8847/',
      ],
    },
    {
      heading: 'Built different',
      facts: [
        'Beaver incisors are orange because the enamel contains **iron**, which makes them harder and more resistant to acid than regular white enamel. They also *never stop growing* — all that wood-chewing is basically dental care.',
        'The famous flat tail is a **rudder**, a **kickstand**, a winter **fat reserve**, and an alarm: one hard slap on the water sends the whole colony diving.',
        'Beavers can stay underwater for up to **15 minutes**, with transparent eyelids that work like built-in goggles and lips that seal *behind* their teeth so they can chew while submerged.',
        'At up to **30-odd kilograms**, the beaver is North America\'s largest rodent — second in the world only to the capybara.',
      ],
      images: [
        {
          src: teethImg,
          alt: 'A beaver face proudly displaying two big orange front teeth',
          credit: 'in-house clip-art department',
        },
        {
          src: tailSlapImg,
          alt: 'A beaver mid tail-slap, splashing water everywhere',
          credit: 'in-house clip-art department',
        },
        {
          src: scubaImg,
          alt: 'A beaver swimming underwater with goggle-like eyes',
          credit: 'in-house clip-art department',
        },
        {
          src: chompImg,
          alt: 'A beaver gnawing enthusiastically through a tree trunk',
          credit: 'in-house clip-art department',
        },
      ],
      sources: [
        'https://www.smithsonianmag.com/science-nature/new-insights-how-beaver-teeth-are-so-strong-180954513/',
        'https://www.hww.ca/en/wildlife/mammals/beaver.html',
      ],
    },
    {
      heading: 'A national icon',
      facts: [
        'The beaver became an **official emblem of Canada** on March 24, 1975, via the *National Symbol of Canada Act* — the paperwork just took a few decades to catch up.',
        'It has starred on the **Canadian nickel since 1937**, one of the longest-running coin designs in the country.',
        'Canada\'s very first postage stamp, the **Three-Penny Beaver of 1851**, put a rodent where every other country put a monarch.',
        'During the fur trade, one prime pelt — a "**made beaver**" — was literally a unit of currency at Hudson\'s Bay Company posts.',
      ],
      images: [
        {
          src: nickelImg,
          alt: 'A Canadian nickel featuring a very smug beaver',
          credit: 'in-house clip-art department',
        },
        {
          src: stampImg,
          alt: 'The 1851 Three-Penny Beaver postage stamp, lovingly recreated',
          credit: 'in-house clip-art department',
        },
        {
          src: flagImg,
          alt: 'A beaver standing proudly beside a Canadian flag',
          credit: 'in-house clip-art department',
        },
        {
          src: peltImg,
          alt: 'A beaver pelt next to a gold coin, the original currency exchange',
          credit: 'in-house clip-art department',
        },
      ],
      sources: [
        'https://www.canada.ca/en/canadian-heritage/services/official-symbols-canada.html',
        'https://en.wikipedia.org/wiki/Three-Penny_Beaver',
      ],
    },
  ],
})
