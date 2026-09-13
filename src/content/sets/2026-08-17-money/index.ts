import { defineSet } from '../../schema'
import dimeBluenoseImg from './dime-bluenose.webp'
import fiftyDollarNoteImg from './fifty-dollar-note.webp'
import fiveDollarNoteImg from './five-dollar-note.webp'
import hundredDollarNoteImg from './hundred-dollar-note.webp'
import loonieImg from './loonie.webp'
import nickelBeaverImg from './nickel-beaver.webp'
import penny2012Img from './penny-2012.webp'
import quarterCaribouImg from './quarter-caribou.webp'
import tenDollarNoteImg from './ten-dollar-note.webp'
import toonieImg from './toonie.webp'
import twentyDollarNoteImg from './twenty-dollar-note.webp'
import violaDesmondImg from './viola-desmond.webp'

export default defineSet({
  slug: 'money',
  date: '2026-08-17',
  title: 'Money: Making Change',
  topic: 'business',
  slides: [
    {
      heading: 'A zoo in your pocket',
      facts: [
        'The last Canadian penny was struck on **4 May 2012**: each one cost **1.6 cents** to make, and roughly 35 billion were pulled back and melted down.',
        'The nickel\'s beaver, the dime\'s Bluenose schooner and the quarter\'s caribou have all been there since **1937**; the nickel itself is now 94.5% steel.',
        'A common loon is on our one-dollar coin (the Loonie), it has **11-sides** so nobody would mistake it for a quarter.',
        'The toonie\'s polar bear has been struck since **1996** on two metals: a nickel ring around an aluminum-bronze centre.',
        'US defence contractors filed espionage reports on Canada\'s 2004 coloured **poppy quarter**, calling it nanotechnology. It was just anti-scratch coating...',
      ],
      images: [
        {
          src: nickelBeaverImg,
          alt: 'Several Canadian five-cent coins on a dark wooden surface, each showing a beaver on a log',
          credit: 'inbox, source unverified',
        },
        {
          src: dimeBluenoseImg,
          alt: 'Three Canadian ten-cent coins showing the schooner Bluenose under sail, resting on an old chart of the Nova Scotia coast',
          credit: 'inbox, source unverified',
        },
        {
          src: loonieImg,
          alt: 'A Canadian one-dollar coin showing a common loon swimming past a treed shoreline, on dark weathered wood',
          credit: 'inbox, source unverified',
        },
        {
          src: toonieImg,
          alt: 'A Canadian two-dollar coin with a gold-coloured centre showing a polar bear, ringed by a silver-coloured outer band',
          credit: 'inbox, source unverified',
        },
        {
          src: quarterCaribouImg,
          alt: 'A Canadian twenty-five-cent coin showing a caribou head, sitting on top of a pile of mixed Canadian coins',
          credit: 'inbox, source unverified',
        },
        {
          src: penny2012Img,
          alt: 'A 2012 Canadian one-cent coin showing two maple leaves on a stem, against a background of blurred pennies',
          credit: 'inbox, source unverified',
        },
      ],
    },
    {
      heading: 'Your wallet is full of plastic',
      facts: [
        'Canadian notes aren\'t paper: the polymer rolled out from 2011-2013 lasts at least **2.5x longer** than paper notes, and gets shredded into pellets and recycled.',
        '**Fronts**: Wilfrid Laurier on the $5, John A. Macdonald on the $10, Elizabeth II on the $20, Mackenzie King on the $50, Robert Borden on the $100.',
        '**Backs**: Canadarm2 and Dextre in orbit, The Canadian crossing the Rockies, the Vimy memorial, the icebreaker CCGS Amundsen, and a vial of insulin.',
        'The vertical **Viola Desmond** $10 arrived in 2018, the first Canadian woman on a circulating note, and was voted the world\'s best banknote of the year.',
        '**King Charles III** reached Canadian coins in December 2023 and reaches the $20 note in **early 2027**.',
      ],
      images: [
        {
          src: fiveDollarNoteImg,
          alt: 'Front and back of the blue Canadian five-dollar polymer note, showing Wilfrid Laurier and the Canadarm2 robotic arm with an astronaut',
          credit: 'inbox, source unverified',
        },
        {
          src: tenDollarNoteImg,
          alt: 'Front and back of the purple Canadian ten-dollar polymer note, showing John A. Macdonald and a passenger train in the Rockies',
          credit: 'inbox, source unverified',
        },
        {
          src: hundredDollarNoteImg,
          alt: 'Front and back of the brown Canadian hundred-dollar polymer note, showing Robert Borden and a researcher at a microscope beside a vial of insulin',
          credit: 'inbox, source unverified',
        },
        {
          src: violaDesmondImg,
          alt: 'Black-and-white studio portrait of Viola Desmond in a light blouse with a heart pendant',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: twentyDollarNoteImg,
          alt: 'Front and back of the green Canadian twenty-dollar polymer note, showing Queen Elizabeth II and the Canadian National Vimy Memorial',
          credit: 'inbox, source unverified',
        },
        {
          src: fiftyDollarNoteImg,
          alt: 'Front and back of the red Canadian fifty-dollar polymer note, showing Mackenzie King and the research icebreaker CCGS Amundsen',
          credit: 'inbox, source unverified',
        },
      ],
    },
  ],
})
