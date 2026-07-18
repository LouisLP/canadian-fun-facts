import { defineSet } from '../../schema'
import arcadeFireImg from './arcade-fire.webp'
import avrilLavigneImg from './avril-lavigne-complicated.webp'
import bieberBabyEraImg from './bieber-baby-era.webp'
import bieberImg from './bieber.webp'
import celineConciertoImg from './celine-concierto.webp'
import celinePortraitImg from './celine-im-alive.webp'
import celineLaserImg from './celine-laser.webp'
import celineTakingChancesImg from './celine-taking-chances.webp'
import deadmau5Img from './deadmau5.webp'
import drakeImg from './drake.webp'
import eurovisionImg from './eurovision-song-contest.webp'
import kaytranadaImg from './kaytranada.webp'
import michaelBubleImg from './michael-buble-portrait.webp'
import nardwuar2019Img from './nardwuar-2019.webp'
import nardwuarPortraitImg from './nardwuar-portrait.webp'
import nardwuarSabrinaImg from './nardwuar-sabrina-carpenter.webp'
import nardwuarTedx2Img from './nardwuar-tedx-2.webp'
import nardwuarTedxImg from './nardwuar-tedx.webp'
import nardwuarTimotheeImg from './nardwuar-timothee-chalamet.webp'
import shawnMendesImg from './shawn-mendes.webp'
import sum41Img from './sum41.webp'
import titanicImg from './titanic-bow-scene.webp'
import weekndRedJacketImg from './weeknd-red-jacket.webp'
import weekndImg from './weeknd.webp'

export default defineSet({
  slug: 'music',
  date: '2026-06-15',
  title: 'Music: Canada on Repeat',
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
          alt: 'Drake singing into a microphone on a dark stage, wearing a black jacket and gold chains',
          credit: 'The Come Up Show, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: weekndImg,
          alt: 'A packed Stade de France during a Weeknd stadium concert, the stage lit through smoke',
          credit: 'Zakarie Faibis, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: bieberImg,
          alt: 'Justin Bieber in a purple cap leaning on a metal stage rig railing at a night concert',
          credit: 'Heather Sokol, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: shawnMendesImg,
          alt: 'Shawn Mendes playing a black electric guitar and singing at a microphone under spotlights',
          credit: 'Josiah VanDien, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: bieberBabyEraImg,
        },
        {
          src: weekndRedJacketImg,
        },
      ],
    },
    {
      heading: 'Winning by a single point',
      facts: [
        'Celine Dion won **Eurovision 1988** representing **Switzerland**, not Canada, with the French-language song Ne partez pas sans moi.',
        'The margin was **one point**: 137 for Switzerland against 136 for the United Kingdom, the closest finish since 1969.',
        'She grew up in Charlemagne, Quebec, the youngest of **14 children**, and barely spoke English when she won.',
        'My Heart Will Go On, her **Titanic** theme, became one of the best-selling singles ever recorded.',
      ],
      images: [
        {
          src: celinePortraitImg,
          alt: 'Close portrait of Celine Dion on stage in a black top',
          credit: 'Anirudh Koul, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: celineTakingChancesImg,
          alt: 'Celine Dion singing into a handheld microphone with one arm raised, lit in blue and pink',
          credit: 'Anirudh Koul, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: celineConciertoImg,
          alt: 'Celine Dion performing on a bare stage against a deep blue backdrop',
          credit: 'Anirudh Koul, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: celineLaserImg,
          alt: 'A packed arena during a Celine Dion concert, green lasers sweeping above the stage',
          credit: 'Anirudh Koul, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: eurovisionImg,
        },
        {
          src: titanicImg,
        },
      ],
    },
    {
      heading: 'Punk, house, and heavy rotation',
      facts: [
        'Sum 41 formed in Ajax, Ontario, and named themselves for the day they started playing: **41 days** into summer break.',
        'Deadmau5, born Joel Zimmerman in Niagara Falls, Ontario, plays behind a giant illuminated **mouse helmet**.',
        'Kaytranada, Haitian-born and raised near Montreal, won the **Polaris Prize** for 99.9% and a **Grammy** for Bubba.',
        'Arcade Fire took Album of the Year at the **2011 Grammys** for The Suburbs, beating Eminem, Katy Perry, and Lady Gaga.',
        'The roster runs deep: Alanis Morissette, Rush, Avril Lavigne, Nelly Furtado, Nickelback, Feist, and Michael Bublé.',
      ],
      images: [
        {
          src: sum41Img,
          alt: 'A member of Sum 41 playing electric guitar and singing on an outdoor stage',
          credit: 'Dana Beveridge, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: deadmau5Img,
          alt: 'Deadmau5 performing at a DJ console wearing his large mouse-head helmet',
          credit: 'GoatLordServant, CC BY 4.0, via Wikimedia Commons',
        },
        {
          src: kaytranadaImg,
          alt: 'Kaytranada at a DJ booth in front of a large screen showing a black-and-white close-up of him',
          credit: 'ManoSolo13241324, CC0, via Wikimedia Commons',
        },
        {
          src: arcadeFireImg,
          alt: 'Arcade Fire performing in the round on a central arena stage under blue lights',
          credit: 'swimfinfan, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: avrilLavigneImg,
        },
        {
          src: michaelBubleImg,
        },
      ],
    },
    {
      heading: 'Doot doola doot doo',
      facts: [
        'Nardwuar the Human Serviette, born John Ruskin, has hosted the same **CiTR** radio show in Vancouver since October **1987**.',
        'He opens interviews with obscure personal details his guests have often forgotten themselves, dug up through **deep research**.',
        'Every guest gets **hand-picked gifts** tied to their own history, from rare records to local oddities.',
        'He closes each interview with a call and response: he sings "doot doola doot doo" and the guest answers **"doot doo!"**',
      ],
      images: [
        {
          src: nardwuarPortraitImg,
          alt: 'Studio portrait of Nardwuar in a tartan cap and green suit against a yellow background',
          credit: 'William Jans, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: nardwuarTedxImg,
          alt: 'Nardwuar speaking into a microphone on a TEDx Vancouver stage in a red jacket and tartan trousers',
          credit: 'TEDx Vancouver, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: nardwuarTedx2Img,
          alt: 'Nardwuar in a tartan cap and red jacket pointing towards the camera',
          credit: 'TEDx Vancouver, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: nardwuar2019Img,
          alt: 'Nardwuar holding a microphone, wearing a tartan cap and a patterned sweater',
          credit: 'SUPA CINDY, CC BY 3.0, via Wikimedia Commons',
        },
        {
          src: nardwuarSabrinaImg,
        },
        {
          src: nardwuarTimotheeImg,
        },
      ],
    },
  ],
})
