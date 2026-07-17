import { defineSet } from '../../schema'
import arretImg from './arret-sign.webp'
import depanneurImg from './depanneur.webp'
import jellyBeanImg from './jelly-bean-row.webp'
import loonImg from './loon.webp'
import prairieImg from './prairie-elevator.webp'
import churchImg from './quebec-church.webp'
import flagImg from './quebec-flag.webp'
import scotiabankImg from './scotiabank-centre.webp'
import speedImg from './speed-limit-kmh.webp'
import timHortonsImg from './tim-hortons-cup.webp'
import toonieImg from './toonie.webp'
import toqueImg from './toque.webp'

export default defineSet({
  slug: 'language',
  date: '2026-07-20',
  title: 'Talk Canadian to Me',
  topic: 'culture',
  slides: [
    {
      heading: 'The everyday, eh?',
      facts: [
        '**Eh** is Canada\'s all-purpose tag, turning a statement into a question or checking that you\'re still listening.',
        'A knit winter hat is a **toque** (also spelled tuque), said like "took", never a beanie.',
        'The **loonie** and **toonie** are the $1 and $2 coins, nicknamed for the loon stamped on the dollar.',
        'Order a **double-double** at Tim Hortons and you get a coffee with two creams and two sugars.',
      ],
      images: [
        {
          src: toqueImg,
          alt: 'A hand-knit wool toque in pink, purple and green',
          credit: 'Rathernotto, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: loonImg,
          alt: 'A common loon swimming on calm water',
          credit: 'Enoch Leung, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: toonieImg,
          alt: 'A Canadian two-dollar toonie coin standing on its edge',
          credit: 'Carol VanHook, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: timHortonsImg,
          alt: 'A red Tim Hortons coffee cup with a Canada 150 design',
          credit: 'Coastal Elite, CC BY-SA 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Joual of the crown',
      facts: [
        'Quebec\'s everyday French, called **joual**, can sound worlds apart from the French of France.',
        'Words melt together in speech: **je suis** collapses through j\'suis and chuis down to chu.',
        'Québécois swears come from the Catholic **church**: tabarnak, câlisse and ostie all started as religious words.',
        'Everyday talk borrows English: **char** for car, toune for tune, and c\'est le fun for it\'s fun.',
      ],
      images: [
        {
          src: flagImg,
          alt: 'Quebec\'s blue-and-white fleur-de-lis flag flying from a building',
          credit: 'Tony Webster, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: arretImg,
          alt: 'A Montreal stop sign reading ARRÊT in French',
          credit: 'Tony Webster, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: churchImg,
          alt: 'The ornate interior entrance of a Catholic church in Quebec',
          credit: 'Wilfredor, CC0, via Wikimedia Commons',
        },
        {
          src: depanneurImg,
          alt: 'A Montreal corner store with a Dépanneur sign above the door',
          credit: 'Coastal Elite, CC BY-SA 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Colour me Canadian',
      facts: [
        'Canadians spell the British way (**colour**, centre, cheque) but usually pronounce those words the American way.',
        'The final letter is **zed**, not "zee", one of the surest giveaways of a Canadian accent.',
        'Canada runs on the **metric system** for nearly everything, yet people still give height in feet and weight in pounds.',
        'Accents swing by region: **Newfoundland** English can sound almost Irish, while the Prairies echo the American Midwest.',
      ],
      images: [
        {
          src: speedImg,
          alt: 'A Canadian road sign reading MAXIMUM 100, in kilometres per hour',
          credit: 'Ken Lund, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: jellyBeanImg,
          alt: 'Brightly painted row houses on a hillside in St. John\'s, Newfoundland',
          credit: 'Kenny Louie, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: scotiabankImg,
          alt: 'The Scotiabank Centre arena in Halifax, its name spelled with the British "centre"',
          credit: 'A Disappearing Act, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: prairieImg,
          alt: 'A wooden grain elevator beside a dirt road on the Saskatchewan prairie',
          credit: 'John Kaminski, CC BY-SA 4.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
