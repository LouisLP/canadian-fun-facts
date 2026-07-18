import { defineSet } from '../../schema'
import bantingBestImg from './banting-and-best.webp'
import bantingHouseImg from './banting-house.webp'
import bondarImg from './bondar-portrait.webp'
import cupolaImg from './hadfield-cupola.webp'
import hadfieldImg from './hadfield-portrait.webp'
import sts42Img from './sts-42-crew.webp'
import suzukiImg from './suzuki-portrait.webp'
import suzukiSpeakingImg from './suzuki-speaking.webp'
import mileZeroImg from './terry-fox-mile-zero.webp'
import monumentImg from './terry-fox-monument.webp'
import clarionImg from './the-clarion.webp'
import violaImg from './viola-desmond-portrait.webp'

export default defineSet({
  slug: 'heroes',
  date: '2026-05-25',
  title: 'Canadian Heroes: North Stars',
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
          src: hadfieldImg,
          alt: 'Official portrait of Chris Hadfield in a white spacesuit, holding his helmet beside a Canadian flag',
          credit: 'Robert Markowitz, public domain, via Wikimedia Commons',
        },
        {
          src: cupolaImg,
          alt: 'Chris Hadfield looking out at Earth through the windows of the International Space Station cupola',
          credit: 'NASA, public domain, via Wikimedia Commons',
        },
        {
          src: bondarImg,
          alt: 'Official portrait of Roberta Bondar in an orange launch suit beside a Canadian flag',
          credit: 'NASA, public domain, via Wikimedia Commons',
        },
        {
          src: sts42Img,
          alt: 'The seven STS-42 crew members, including Roberta Bondar, in orange flight suits with a shuttle launch behind them',
          credit: 'NASA, public domain, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Nobel pursuits',
      facts: [
        'Frederick Banting co-discovered **insulin**, and at **32** he became the youngest person ever to win the Nobel Prize in medicine.',
        'Geneticist David Suzuki hosted CBC\'s The Nature of Things for **44 years**, from 1979 until he stepped down in 2023.',
      ],
      images: [
        {
          src: bantingBestImg,
          alt: 'Frederick Banting and Charles Best standing with a laboratory dog on the roof of the University of Toronto Medical Building in 1921',
          credit: 'Thomas Fisher Rare Book Library, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: bantingHouseImg,
          alt: 'The yellow-brick Banting House museum in London, Ontario, with a statue in the front garden',
          credit: 'Adam Bishop, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: suzukiImg,
          alt: 'Portrait of David Suzuki in a red shirt, smiling',
          credit: 'Stephen Barnett, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: suzukiSpeakingImg,
          alt: 'David Suzuki speaking at a podium microphone in a red shirt',
          credit: 'Stephen Michael Barnett, CC BY 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Standing their ground',
      facts: [
        'Running on one leg, Terry Fox covered **5,373 km** in 143 days in 1980; the run named for him has since raised over **C$1 billion**.',
        'Viola Desmond refused a whites-only cinema seat in 1946 and was convicted over a **one-cent** tax gap; she now fronts Canada\'s **$10 bill**.',
      ],
      images: [
        {
          src: monumentImg,
          alt: 'The bronze Terry Fox monument in Thunder Bay, Ontario, showing him mid-stride above a wall of provincial shields',
          credit: 'Guinevere Orvis, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: mileZeroImg,
          alt: 'Bronze statue of Terry Fox running at the Mile 0 memorial in St. John\'s, Newfoundland',
          credit: 'Gordon Leggett, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: violaImg,
          alt: 'Black and white portrait photograph of Viola Desmond',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: clarionImg,
          alt: 'Front page of The Clarion newspaper from 1946 reporting Viola Desmond taking action against segregation',
          credit: 'Nova Scotia Archives, no known copyright restrictions, via Wikimedia Commons',
        },
      ],
    },
  ],
})
