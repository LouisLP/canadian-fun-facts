import { defineSet } from '../../schema'
import carryingBranchImg from './beaver-carrying-branch.jpg'
import chewedTreeImg from './beaver-chewing.jpg'
import damImg from './beaver-dam.jpg'
import emblemImg from './beaver-emblem.jpg'
import cruisingImg from './beaver-in-water.jpg'
import lodgeImg from './beaver-lodge.jpg'
import peltImg from './beaver-pelt.jpg'
import pondAerialImg from './beaver-pond-aerial.jpg'
import swimmingImg from './beaver-swimming.jpg'
import treeCuttingImg from './beaver-tree-cutting.jpg'
import nickelImg from './canada-nickel-1937.jpg'
import stampImg from './three-penny-beaver.jpg'

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
          alt: 'A beaver dam of gnawed logs holding back a calm pond on a forest stream',
          credit: 'Jakub Hałun, CC BY 4.0, via Wikimedia Commons',
        },
        {
          src: pondAerialImg,
          alt: 'Aerial view of a beaver wetland strewn with dozens of felled tree trunks',
          credit: 'Ermell, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: lodgeImg,
          alt: 'A snow-dusted beaver lodge of piled sticks rising out of an icy marsh',
          credit: 'U.S. Fish and Wildlife Service, public domain, via Wikimedia Commons',
        },
        {
          src: carryingBranchImg,
          alt: 'A beaver hauling a leafy branch across a pond to the construction site',
          credit: 'Jeffery J. Nichols, CC BY-SA 4.0, via Wikimedia Commons',
        },
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
          src: treeCuttingImg,
          alt: 'A beaver pressed against a half-gnawed tree trunk in the snow, mid-chew',
          credit: 'D. Gordon E. Robertson, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: swimmingImg,
          alt: 'A swimming beaver with its broad flat tail floating at the surface, ready to slap',
          credit: 'Bureau of Land Management Alaska, public domain, via Wikimedia Commons',
        },
        {
          src: cruisingImg,
          alt: 'A beaver cruising low through still water at dusk, only head and back showing',
          credit: 'U.S. Fish and Wildlife Service, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: chewedTreeImg,
          alt: 'A large tree trunk chewed most of the way through by beaver teeth',
          credit: 'U.S. Fish and Wildlife Service, public domain, via Wikimedia Commons',
        },
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
          alt: 'Both sides of a 1937 Canadian five-cent coin, the beaver perched on its rock',
          credit: 'Awmcphee, CC0, via Wikimedia Commons',
        },
        {
          src: stampImg,
          alt: 'The 1851 Three-Penny Beaver, Canada\'s first postage stamp',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: emblemImg,
          alt: 'A wet-furred beaver at the water\'s edge, looking every bit the national emblem',
          credit: 'Joanne Clifford, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: peltImg,
          alt: 'A beaver pelt stretched on a round willow frame, fur-trade style',
          credit: 'Thomas Quine, CC BY 2.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
