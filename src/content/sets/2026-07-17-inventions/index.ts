import { defineSet } from '../../schema'
import bantingBestImg from './banting-best.webp'
import blackberryImg from './blackberry-bold.webp'
import rollImg from './california-roll.webp'
import telephoneImg from './candlestick-telephone.webp'
import fessendenImg from './fessenden.webp'
import fingerprintImg from './fingerprint.webp'
import pizzaImg from './hawaiian-pizza.webp'
import goslingImg from './james-gosling.webp'
import fogImg from './london-fog.webp'
import appleImg from './mcintosh-apple.webp'
import naismithImg from './naismith.webp'
import pacemakerImg from './pacemaker.webp'
import peanutImg from './peanut-butter.webp'
import poutineImg from './poutine.webp'
import zipperImg from './zipper.webp'

export default defineSet({
  slug: 'inventions',
  date: '2026-07-17',
  title: 'Canadian Inventions: You\'re Welcome, World',
  topic: 'inventions',
  slides: [
    {
      heading: 'Invented it, ate it',
      facts: [
        '**Peanut butter**: patented in 1884 by Montréal chemist Marcellus Gilmore Edson, pitched as food for people who couldn\'t chew.',
        'Canada invents other countries\' food: the **Hawaiian pizza** (Chatham, Ontario, 1962) and the inside-out **California roll** (Vancouver chef Hidekazu Tojo).',
        'The **London Fog** latte comes from a 1990s Vancouver café, not London.',
        'Québec gave the world **poutine**, a late-1950s snack-bar experiment, and **tourtière**, centuries on réveillon tables.',
        'Every **McIntosh apple** on Earth descends from one tree found in Ontario in 1811; Apple\'s Macintosh computer is named after the fruit.',
      ],
      images: [
        {
          src: peanutImg,
          alt: 'An open jar of peanut butter with a spoonful resting on top',
          credit: 'Silar, CC0, via Wikimedia Commons',
        },
        {
          src: pizzaImg,
          alt: 'A sliced Hawaiian pizza with ham and pineapple',
          credit: 'Avelludo, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: rollImg,
          alt: 'California rolls arranged on a plate',
          credit: 'Tim Reckmann, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: fogImg,
          alt: 'A London Fog latte in a white cup',
          credit: 'Andy Li, CC0, via Wikimedia Commons',
        },
        {
          src: poutineImg,
          alt: 'A plate of poutine with fries, cheese curds, and gravy',
          credit: 'Antonydstevens, CC0, via Wikimedia Commons',
        },
        {
          src: appleImg,
          alt: 'A McIntosh Red apple from a 1909 nursery catalogue plate',
          credit: 'Brown Brothers Continental Nurseries catalogue (1909), public domain, via Wikimedia Commons',
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
          src: telephoneImg,
          alt: 'An early-1900s candlestick telephone with its earpiece on the hook',
          credit: 'Nuberger13, public domain, via Wikimedia Commons',
        },
        {
          src: zipperImg,
          alt: 'A brass zipper on denim, zipped halfway',
          credit: 'CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: fessendenImg,
          alt: 'Reginald Fessenden posing with his oscillator, around 1914',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: goslingImg,
          alt: 'James Gosling, creator of Java, smiling at the camera',
          credit: 'Peter Campbell, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: blackberryImg,
          alt: 'A BlackBerry Bold 9900 with its physical keyboard',
          credit: 'P2u111, CC BY 4.0, via Wikimedia Commons',
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
          src: fingerprintImg,
          alt: 'A close-up of a fingerprint on a fingertip',
          credit: 'Frettie, CC BY 3.0, via Wikimedia Commons',
        },
        {
          src: naismithImg,
          alt: 'James Naismith holding a ball and the original peach basket',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: pacemakerImg,
          alt: 'A modern pacemaker resting in the palm of a hand',
          credit: 'Steven Fruitsmaak, CC BY 3.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
