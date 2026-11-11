import bantingAndBestImg from '../2025-10-06-inventions/banting-best.webp'
import { commonsCredit, defineSet, INBOX_CREDIT } from '../../schema'
import bantingInsulinImg from './banting-insulin.webp'
import bondarInSpaceImg from './bondar-in-space.webp'
import bondarPortraitImg from './bondar-portrait.webp'
import desmondTenDollarImg from './desmond-ten-dollar.webp'
import hadfieldCupolaImg from './hadfield-cupola.webp'
import hadfieldGuitarImg from './hadfield-guitar.webp'
import suzukiForestImg from './suzuki-forest.webp'
import suzukiSpeakingCrowdImg from './suzuki-speaking-crowd.webp'
import terryFoxRunningImg from './terry-fox-running.webp'
import terryFoxStatuesImg from './terry-fox-statues.webp'
import violaDesmondElderlyImg from './viola-desmond-elderly.webp'

export default defineSet({
  slug: 'heroes',
  date: '2026-05-25',
  title: 'Heroes: North Stars',
  topic: 'people',
  slides: [
    {
      heading: 'Canadians in orbit',
      facts: [
        'Chris Hadfield was the **first Canadian to command the International Space Station**, and the first Canadian to walk in space.',
        'Canada\'s **first woman in space**, Roberta Bondar flew aboard Discovery in 1992, and she is also the world\'s **first neurologist** to leave the planet.',
      ],
      images: [
        {
          src: hadfieldGuitarImg,
          alt: 'Chris Hadfield in a red shirt playing an acoustic guitar while floating in the space station\'s cupola, Earth in the windows',
          credit: INBOX_CREDIT,
        },
        {
          src: hadfieldCupolaImg,
          alt: 'Chris Hadfield looking out at Earth through the windows of the International Space Station cupola',
          credit: commonsCredit('NASA', 'public domain'),
        },
        {
          src: bondarInSpaceImg,
          alt: 'Roberta Bondar floating inside a space shuttle cabin among equipment',
          credit: INBOX_CREDIT,
        },
        {
          src: bondarPortraitImg,
          alt: 'Official portrait of Roberta Bondar in an orange launch suit beside a Canadian flag',
          credit: commonsCredit('NASA', 'public domain'),
        },
      ],
    },
    {
      heading: 'Nobel pursuits',
      facts: [
        'Frederick Banting co-discovered **insulin**, and at **32** he became the youngest person ever to win the Nobel Prize in medicine.',
        'Vancouver-born like me, geneticist David Suzuki hosted CBC\'s The Nature of Things for **44 years**, from 1979 to 2023.',
      ],
      images: [
        {
          src: bantingAndBestImg,
          alt: 'Charles Best and Frederick Banting in their office, around 1924',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: bantingInsulinImg,
          alt: 'A vial labelled insulin injection standing beside a syringe',
          credit: INBOX_CREDIT,
        },
        {
          src: suzukiForestImg,
          alt: 'David Suzuki sitting among moss-covered logs in an old-growth forest',
          credit: INBOX_CREDIT,
        },
        {
          src: suzukiSpeakingCrowdImg,
          alt: 'David Suzuki speaking at a glass lectern, wearing an embroidered vest over a black shirt',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Standing their ground',
      facts: [
        'On one leg, Terry Fox, an SFU student decades before I was, covered **5,373 km** in 143 days; his run has raised over **C$1 billion**.',
        'Viola Desmond refused a whites-only cinema seat in 1946 and was convicted over a **one-cent** tax gap; she now fronts Canada\'s **$10 bill**.',
      ],
      images: [
        {
          src: terryFoxRunningImg,
          alt: 'Terry Fox running along a highway on his prosthetic leg, a police car following behind him',
          credit: INBOX_CREDIT,
        },
        {
          src: terryFoxStatuesImg,
          alt: 'Bronze statues of Terry Fox running, outside BC Place in Vancouver',
          credit: INBOX_CREDIT,
        },
        {
          src: desmondTenDollarImg,
          alt: 'Canada\'s purple $10 note with a portrait of Viola Desmond',
          credit: INBOX_CREDIT,
        },
        {
          src: violaDesmondElderlyImg,
          alt: 'An elderly woman raising her hands as she speaks in front of a banner showing a portrait of Viola Desmond',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
