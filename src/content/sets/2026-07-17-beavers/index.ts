import { defineSet } from '../../schema'
import damImg from './beaver-dam.svg'
import nickelImg from './beaver-nickel.svg'
import teethImg from './beaver-teeth.svg'

export default defineSet({
  slug: 'beavers',
  date: '2026-07-17',
  title: 'Beavers: Nature\'s Construction Crew',
  topic: 'wildlife',
  slides: [
    {
      heading: 'The world\'s longest beaver dam is visible from space',
      body: 'Deep in **Wood Buffalo National Park**, Alberta, sits a beaver dam roughly **850 metres long** — about eight football fields. It was discovered on satellite imagery in 2007, and researchers think generations of beavers have been working on it since the 1970s.',
      image: {
        src: damImg,
        alt: 'Extremely sophisticated drawing of a beaver beside a stick dam',
        credit: 'in-house clip-art department',
      },
      source: 'https://en.wikipedia.org/wiki/Beaver_dam',
    },
    {
      heading: 'Beaver teeth are orange on purpose',
      body: 'Beaver incisors are orange because the enamel contains **iron**, which makes them harder and more resistant to acid than regular white enamel. They also *never stop growing* — all that wood-chewing is basically dental care.',
      image: {
        src: teethImg,
        alt: 'A beaver face proudly displaying two big orange front teeth',
        credit: 'in-house clip-art department',
      },
      source: 'https://www.smithsonianmag.com/science-nature/new-insights-how-beaver-teeth-are-so-strong-180954513/',
    },
    {
      heading: 'The beaver has been official since 1975',
      body: 'The beaver became an **official emblem of Canada** on March 24, 1975, via the *National Symbol of Canada Act*. It had already been on the nickel since 1937 — the paperwork just took a few decades to catch up.',
      image: {
        src: nickelImg,
        alt: 'A Canadian nickel featuring a very smug beaver',
        credit: 'in-house clip-art department',
      },
      source: 'https://www.canada.ca/en/canadian-heritage/services/official-symbols-canada.html',
    },
  ],
})
