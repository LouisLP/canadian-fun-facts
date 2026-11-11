import celineDionImg from '../2025-11-10-filming-celebrities/celine-dion.webp'
import drakeImg from '../2025-11-10-filming-celebrities/drake.webp'
import { defineSet, INBOX_CREDIT } from '../../schema'
import avrilLavigneComplicatedImg from './avril-lavigne-complicated.webp'
import bieberBabyEraImg from './bieber-baby-era.webp'
import celineEurovisionImg from './celine-eurovision.webp'
import deadmau5Img from './deadmau5.webp'
import eurovisionSongContestImg from './eurovision-song-contest.webp'
import michaelBublePortraitImg from './michael-buble-portrait.webp'
import nardwuarRecordsImg from './nardwuar-records.webp'
import nardwuarSabrinaCarpenterImg from './nardwuar-sabrina-carpenter.webp'
import nardwuarSnoopImg from './nardwuar-snoop.webp'
import nardwuarTimotheeChalametImg from './nardwuar-timothee-chalamet.webp'
import shawnMendesImg from './shawn-mendes.webp'
import sum41Img from './sum41.webp'
import titanicBowSceneImg from './titanic-bow-scene.webp'
import weekndRedJacketImg from './weeknd-red-jacket.webp'

export default defineSet({
  slug: 'music',
  date: '2026-06-15',
  title: 'Music: On Repeat',
  topic: 'culture',
  slides: [
    {
      heading: 'Born to chart',
      facts: [
        'Drake has landed more than **400 Billboard Hot 100 entries**, more than any artist since the chart began in 1958.',
        'The Weeknd\'s **Blinding Lights** sits atop Billboard\'s Greatest of All Time Hot 100, ahead of every song ever released.',
        'At **16**, Justin Bieber topped the Billboard 200 with My World 2.0, the youngest solo male to do so since Stevie Wonder in 1963.',
        'Shawn Mendes built his audience on **Vine**, posting six-second song covers from Pickering, Ontario, before any label signed him.',
      ],
      images: [
        {
          src: drakeImg,
          alt: 'Drake on stage with his arms spread wide under red lights',
          credit: INBOX_CREDIT,
        },
        {
          src: weekndRedJacketImg,
          alt: 'The Weeknd in profile wearing a red jacket and dark sunglasses, lit in warm gold light',
          credit: INBOX_CREDIT,
        },
        {
          src: bieberBabyEraImg,
          alt: 'A young Justin Bieber with a side-swept fringe and a plaid shirt, leaning on a guitar',
          credit: INBOX_CREDIT,
        },
        {
          src: shawnMendesImg,
          alt: 'Shawn Mendes laughing on stage with an acoustic guitar',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Winning by a single point',
      facts: [
        'Celine Dion won **Eurovision 1988** representing **Switzerland**, not Canada, with the French-language song Ne partez pas sans moi.',
        'The margin was **one point**: 137 for Switzerland against 136 for the United Kingdom, the closest finish since 1969.',
        'My Heart Will Go On, her **Titanic** theme, became one of the best-selling singles ever recorded.',
      ],
      images: [
        {
          src: celineEurovisionImg,
          alt: 'A young Celine Dion singing at Eurovision 1988 in a white jacket and tutu skirt',
          credit: INBOX_CREDIT,
        },
        {
          src: eurovisionSongContestImg,
          alt: 'The Eurovision Song Contest logo over a crowd in an arena lit with blue stage lights',
          credit: INBOX_CREDIT,
        },
        {
          src: titanicBowSceneImg,
          alt: 'The bow scene from the film Titanic: a man holding a woman by the waist as she spreads her arms at the ship\'s railing at sunset',
          credit: INBOX_CREDIT,
        },
        {
          src: celineDionImg,
          alt: 'Céline Dion singing on stage in a gold dress',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Punk, house, and heavy rotation',
      facts: [
        'Sum 41 formed in Ajax, Ontario, and named themselves for the day they started playing: **41 days** into summer break.',
        'Deadmau5, born Joel Zimmerman in Niagara Falls, Ontario, plays behind a giant illuminated **mouse helmet**.',
        'Arcade Fire took Album of the Year at the **2011 Grammys** for The Suburbs, beating Eminem, Katy Perry, and Lady Gaga.',
        'The roster runs deep: Alanis Morissette, Rush, Avril Lavigne, Nelly Furtado, Nickelback, Feist, and Michael Bublé.',
      ],
      images: [
        {
          src: sum41Img,
          alt: 'Sum 41\'s Deryck Whibley on stage with a guitar, both arms raised',
          credit: INBOX_CREDIT,
        },
        {
          src: deadmau5Img,
          alt: 'Deadmau5 performing in his mouse-head helmet, its face lit with a green grin',
          credit: INBOX_CREDIT,
        },
        {
          src: avrilLavigneComplicatedImg,
          alt: 'Avril Lavigne at a microphone in the Complicated music video, a drummer behind her',
          credit: INBOX_CREDIT,
        },
        {
          src: michaelBublePortraitImg,
          alt: 'Michael Bublé in a camel coat on a city rooftop, looking off to the side',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Doot doola doot doo',
      facts: [
        'Nardwuar the Human Serviette has hosted the same **CiTR** radio show in my hometown, Vancouver, since October **1987**.',
        'He opens interviews with obscure personal details his guests have often forgotten themselves, dug up through **deep research**.',
        'He closes each interview with a call and response: he sings "doot doola doot doo" and the guest answers **"doot doo!"**',
      ],
      images: [
        {
          src: nardwuarSnoopImg,
          alt: 'Snoop Dogg in a Vancouver Canucks jersey beside Nardwuar in his tartan cap',
          credit: INBOX_CREDIT,
        },
        {
          src: nardwuarRecordsImg,
          alt: 'Nardwuar in a tartan cap holding up a record sleeve in front of shelves of vinyl',
          credit: INBOX_CREDIT,
        },
        {
          src: nardwuarSabrinaCarpenterImg,
          alt: 'Sabrina Carpenter and Nardwuar, in a tartan cap and polka-dot shirt, posing in a record shop',
          credit: INBOX_CREDIT,
        },
        {
          src: nardwuarTimotheeChalametImg,
          alt: 'A thumbnail reading "Nardwuar vs. Timothée Chalamet" beside the two of them pointing at the camera in a record shop',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
