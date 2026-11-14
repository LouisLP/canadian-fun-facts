import { defineSet, INBOX_CREDIT } from '../../schema'
import bantingBestImg from './banting-best.webp'
import bellTelephoneImg from './bell-telephone.webp'
import blackberryBoldImg from './blackberry-bold.webp'
import californiaRollImg from './california-roll.webp'
import deromeImg from './derome.webp'
import fessendenImg from './fessenden.webp'
import hawaiianPizzaImg from './hawaiian-pizza.webp'
import mcintoshAppleImg from './mcintosh-apple.webp'
import naismithImg from './naismith.webp'
import pacemakerImg from './pacemaker.webp'
import poutineImg from './poutine.webp'
import voiceover from './voiceover.m4a'
import zipperImg from './zipper.webp'

export default defineSet({
  slug: 'inventions',
  date: '2025-10-06',
  title: 'Inventions: You\'re Welcome, World',
  topic: 'inventions',
  voiceover: {
    src: voiceover,
    cues: [
      { at: 15.7, panel: 1 }, // "First of all, some foods"
      { at: 37.1, panel: 1, image: 0 }, // "Hawaiian pizza"
      { at: 53.3, panel: 1, image: 1 }, // "Next up, sushi"
      { at: 82.5, panel: 1 }, // "I don't have a picture for it here … London Fog"
      { at: 118.6, panel: 1, image: 2 }, // "Next up … poutine"
      { at: 162.6, panel: 1, image: 3 }, // "Next up, apples"
      { at: 188.9, panel: 2, image: 0 }, // "Next up, the telephone"
      { at: 202.3, panel: 2, image: 1 }, // "the zipper is Canadian"
      { at: 205.3, panel: 2, image: 2 }, // "the first voice transmission via radio"
      { at: 215.6, panel: 2, image: 3 }, // "the BlackBerry"
      { at: 221.4, panel: 2 }, // "we also created some other technological things"
      { at: 233.7, panel: 3 }, // "Next up, some more very important ones"
      { at: 237.0, panel: 3, image: 0 }, // "Insulin"
      { at: 264.3, panel: 3, image: 1 }, // "The first forensic science lab"
      { at: 278.5, panel: 3, image: 2 }, // "basketball was invented in Canada"
      { at: 300.6, panel: 3, image: 3 }, // "the first artificial pacemaker"
      { at: 314.7, panel: 4 }, // "Thank you very much, guys"
    ],
  },
  slides: [
    {
      heading: 'Invented it, ate it',
      facts: [
        '**Hawaiian pizza** is from Chatham, Ontario: in 1962 Sam Panopoulos tipped a can of pineapple onto a pie.',
        'My hometown names its food after other places: Vancouver claims both the **California roll** and the **London Fog** latte.',
        'My mom\'s home province gave the world **poutine**, a late-1950s snack-bar experiment in rural Québec.',
        'Every **McIntosh apple** on Earth descends from one tree found in Ontario in 1811; Apple\'s Macintosh computer is named after the fruit.',
      ],
      images: [
        {
          src: hawaiianPizzaImg,
          alt: 'A sliced Hawaiian pizza topped with ham and pineapple, seen from above',
          credit: INBOX_CREDIT,
        },
        {
          src: californiaRollImg,
          alt: 'Inside-out California rolls with crab and avocado on a plate',
          credit: INBOX_CREDIT,
        },
        {
          src: poutineImg,
          alt: 'A plate of poutine: fries, cheese curds and gravy',
          credit: INBOX_CREDIT,
        },
        {
          src: mcintoshAppleImg,
          alt: 'Red McIntosh apples hanging on the tree',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Calling, zipping, computing',
      facts: [
        'The **telephone** was conceived at Bell\'s family home in Brantford, Ontario; the first long-distance call ran from Brantford to Paris, Ontario in 1876.',
        'The modern **zipper**: patented by Gideon Sundback in 1917 and manufactured in St. Catharines, Ontario for decades.',
        'Québec-born **Reginald Fessenden** made the first radio voice transmission in 1900 and the world\'s first broadcast on Christmas Eve 1906.',
        'Calgary-born **James Gosling** created Java; Waterloo, Ontario built the **BlackBerry**, the phone that ran the White House.',
      ],
      images: [
        {
          src: bellTelephoneImg,
          alt: 'An early experimental telephone by Alexander Graham Bell, brass and black on a wooden base',
          credit: INBOX_CREDIT,
        },
        {
          src: zipperImg,
          alt: 'Extreme close-up of metal zipper teeth on blue fabric',
          credit: INBOX_CREDIT,
        },
        {
          src: fessendenImg,
          alt: 'Reginald Fessenden wearing headphones at a bench of early radio equipment',
          credit: INBOX_CREDIT,
        },
        {
          src: blackberryBoldImg,
          alt: 'Front and back of a BlackBerry Bold 9900 with its physical keyboard',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Life-savers and peach baskets',
      facts: [
        '**Insulin**: discovered at the University of Toronto in 1921–22; Banting sold the patent for **$1**, saying it belonged to the world.',
        'North America\'s first **forensic science lab** opened in Montréal in 1914, nearly two decades before the FBI\'s.',
        '**Basketball**: invented in 1891 by James Naismith of Almonte, Ontario, with 13 rules, a soccer ball, and two peach baskets.',
        'The first **artificial pacemaker** was built in 1950 by John Hopps, a National Research Council engineer researching hypothermia.',
      ],
      images: [
        {
          src: bantingBestImg,
          alt: 'Charles Best and Frederick Banting in their office, around 1924',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: deromeImg,
          alt: 'Wilfrid Derome, founder of the Montréal forensic lab, looking up from a microscope',
          credit: INBOX_CREDIT,
        },
        {
          src: naismithImg,
          alt: 'James Naismith holding an early basketball',
          credit: INBOX_CREDIT,
        },
        {
          src: pacemakerImg,
          alt: 'An early external pacemaker, a metal box with dials, beside its electrode lead',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
