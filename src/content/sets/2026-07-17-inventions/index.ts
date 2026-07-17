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
        '**Peanut butter** was patented by Montréal chemist **Marcellus Gilmore Edson in 1884** — his "peanut candy" paste was pitched as food for people who couldn\'t chew. You\'re welcome, every sandwich since.',
        'Canada keeps inventing *other countries\'* food: the **Hawaiian pizza** was born at a Greek-run restaurant in **Chatham, Ontario in 1962**, and Vancouver chef **Hidekazu Tojo** created the inside-out **California roll** to sneak seaweed past skeptical Western diners.',
        'The **London Fog** — Earl Grey, steamed milk, vanilla — has nothing to do with London. It was invented in a **Vancouver café** in the 1990s, reportedly for a pregnant customer who couldn\'t have her usual latte.',
        'Québec gave the world **poutine** (late-1950s snack-bar experiment, now national treasure) and **tourtière**, the spiced meat pie that has anchored réveillon feasts for centuries.',
        'Every single **McIntosh apple** on Earth descends from *one tree* John McIntosh found on his Ontario farm in **1811** — and yes, Apple\'s **Macintosh** computer was named after the fruit.',
      ],
      images: [
        {
          src: peanutImg,
          alt: 'An open jar of peanut butter with a spoonful resting on top',
          credit: 'Silar, CC0, via Wikimedia Commons',
        },
        {
          src: pizzaImg,
          alt: 'A sliced Hawaiian pizza with ham and pineapple, photographed in Toronto no less',
          credit: 'Avelludo, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: rollImg,
          alt: 'California rolls arranged on a plate, seaweed successfully hidden inside',
          credit: 'Tim Reckmann, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: fogImg,
          alt: 'A London Fog latte in a white cup, milk foam hiding the Earl Grey below',
          credit: 'Andy Li, CC0, via Wikimedia Commons',
        },
        {
          src: poutineImg,
          alt: 'A plate of poutine from Windsor, Ontario — fries, squeaky curds, gravy',
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
        'Alexander Graham Bell insisted the **telephone** was "invented in Canada, made in the United States" — he dreamed it up at his family home in **Brantford, Ontario**, and the first true long-distance call ran from Brantford to Paris… *Ontario*, in 1876.',
        'The modern **zipper** was perfected by Gideon Sundback, who patented it in **1917** and manufactured it in **St. Catharines, Ontario** — where his Lightning Fastener Company zipped up the world for decades.',
        'Québec-born **Reginald Fessenden** made the first **voice transmission by radio** in 1900, then on Christmas Eve 1906 delivered the world\'s first broadcast — reading scripture and playing *O Holy Night* on his violin to stunned ship operators expecting Morse code.',
        'The **Java programming language** was created by Calgary-born **James Gosling**, and the **BlackBerry** — the phone that invented the mobile inbox and ran the White House — came out of **Waterloo, Ontario**.',
      ],
      images: [
        {
          src: telephoneImg,
          alt: 'An early-1900s candlestick telephone with its earpiece hanging at the ready',
          credit: 'Nuberger13, public domain, via Wikimedia Commons',
        },
        {
          src: zipperImg,
          alt: 'A brass zipper on denim, zipped exactly halfway, as a compromise',
          credit: 'CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: fessendenImg,
          alt: 'Reginald Fessenden posing with his oscillator, around 1914',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: goslingImg,
          alt: 'James Gosling, father of Java, smiling like a man with good garbage collection',
          credit: 'Peter Campbell, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: blackberryImg,
          alt: 'A BlackBerry Bold 9900 and its beloved tiny keyboard',
          credit: 'P2u111, CC BY 4.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Life-savers and game-changers',
      facts: [
        '**Insulin** was discovered at the University of Toronto in **1921–22** by Frederick Banting and Charles Best. Banting sold the patent for **$1**, saying *"insulin does not belong to me, it belongs to the world"* — and became the youngest-ever Medicine Nobel laureate.',
        'North America\'s **first forensic science laboratory** opened in **Montréal in 1914** under Wilfrid Derome — beating the FBI\'s famous crime lab by nearly two decades.',
        '**Basketball** was invented by **James Naismith** of Almonte, Ontario, in 1891 — 13 rules, a soccer ball, and two peach baskets nailed to a gym balcony. Someone had to climb up and fetch the ball after every point.',
        'Bonus beat: the world\'s first **artificial pacemaker** was built in **1950** by John Hopps, a National Research Council engineer who stumbled into cardiology while researching hypothermia.',
      ],
      images: [
        {
          src: bantingBestImg,
          alt: 'Charles Best and Frederick Banting in their office, around 1924',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: fingerprintImg,
          alt: 'A suspiciously crisp fingerprint on a fingertip, evidence-ready',
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
