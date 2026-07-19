import { defineSet } from '../../schema'
import canadaDayImg from './beaver-canada-day-flag.webp'
import carryingBranchImg from './beaver-carrying-branch.webp'
import chewedTreeImg from './beaver-chewing.webp'
import damImg from './beaver-dam.webp'
// import emblemImg from './beaver-emblem.webp'
import grippingLogImg from './beaver-gripping-log.webp'
import cruisingImg from './beaver-in-water.webp'
import lodgeImg from './beaver-lodge.webp'
import damBankImg from './beaver-on-dam-bank.webp'
import peltImg from './beaver-pelt.webp'
import pondAerialImg from './beaver-pond-aerial.webp'
import portraitTailImg from './beaver-portrait-tail.webp'
import restingOnDamImg from './beaver-resting-on-dam.webp'
import swimmingImg from './beaver-swimming.webp'
import treeCuttingImg from './beaver-tree-cutting.webp'
import hoppersImg from './beavers-animated-film.webp'
import beavertailImg from './beavertail.webp'
import nickelImg from './canadian-nickel.webp'
import stampImg from './three-penny-beaver.webp'

export default defineSet({
  slug: 'beavers',
  date: '2026-07-20',
  title: 'Beavers: Nature\'s Construction Crew',
  topic: 'wildlife',
  slides: [
    {
      heading: 'A national icon',
      facts: [
        'Francis cover your ears: in the fur trade, one prime pelt, a "**made beaver**", served as currency at Hudson\'s Bay Company posts.',
        'Official **emblem of Canada** since March 24, 1975, under the National Symbol of Canada Act.',
        'On the **Canadian nickel since 1937**, one of the country\'s longest-running coin designs.',
        'Canada\'s first postage stamp, the **Three-Penny Beaver** of 1851, featured a rodent where other countries put a monarch.',
        'We even have a dessert named after them: the **beaver tail**, a fried dough pastry with sweet toppings.',
      ],
      images: [
        {
          src: nickelImg,
          alt: 'Both sides of a 1937 Canadian five-cent coin, the beaver perched on its rock',
          credit: 'Awmcphee, CC0, via Wikimedia Commons',
        },
        {
          src: peltImg,
          alt: 'A beaver pelt stretched on a round willow frame',
          credit: 'Thomas Quine, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: stampImg,
          alt: 'The 1851 Three-Penny Beaver, Canada\'s first postage stamp',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: beavertailImg,
          alt: 'A beaver tail-shaped fried dough pastry with sweet toppings',
        },
        {
          src: canadaDayImg,
          alt: 'A beaver holding a small Canadian flag and wearing a red maple-leaf hat',
        },
        {
          src: restingOnDamImg,
          alt: 'A beaver dozing against a branch on its dam, mirrored in the still pond below',
        },
      ],
    },
    {
      heading: 'Built different',
      facts: [
        'Beaver incisors are orange from **iron** in the enamel: harder, more acid-resistant, and never stop growing.',
        'The flat tail is a rudder, a kickstand, a winter **fat reserve**, and an alarm: one slap sends the whole colony diving.',
        'Up to **15 minutes** underwater, with transparent eyelids for goggles and lips that seal behind the teeth for submerged chewing.',
        'At up to **30 kilograms**, North America\'s largest rodent, second in the world only to the capybara.',
      ],
      images: [
        {
          src: treeCuttingImg,
          alt: 'A beaver pressed against a half-gnawed tree trunk in the snow, mid-chew',
          credit: 'D. Gordon E. Robertson, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: swimmingImg,
          alt: 'A swimming beaver with its broad flat tail floating at the surface',
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
        {
          src: grippingLogImg,
          alt: 'A soaking-wet beaver clambering along a debarked log, webbed hind feet and scaly tail in full view',
        },
        {
          src: portraitTailImg,
          alt: 'A beaver sitting back on its broad paddle tail, front paws held together at its chest',
        },
      ],
    },
    {
      heading: 'Dam fine engineering',
      facts: [
        'World\'s longest beaver dam: **850 metres**, in Alberta\'s Wood Buffalo National Park, spotted via satellite in 2007.',
        'Beavers hate the sound of **running water**: play a recording of a trickle and they\'ll pile sticks on the speaker.',
        'Lodges have **underwater-only entrances**, a dry sleeping platform, and stay above freezing all winter.',
        'Beaver wetlands filter water and shelter fish, frogs, and birds; ecologists call beavers a **keystone species**.',
        'Go watch "**Hoppers**"! A newer Disney movie about a girl who gets her consciousness transferred into a beaver\'s body.',
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
          src: hoppersImg,
          alt: 'Two cartoon beavers sitting on a riverbank in an animated film',
        },
        {
          src: carryingBranchImg,
          alt: 'A beaver hauling a leafy branch across a pond',
          credit: 'Jeffery J. Nichols, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: damBankImg,
          alt: 'A beaver sitting upright on a bank of stripped sticks at the edge of blue water',
        },
      ],
    },
  ],
})
