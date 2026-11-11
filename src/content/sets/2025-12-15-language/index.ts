import { commonsCredit, defineSet, INBOX_CREDIT } from '../../schema'
import arretSignImg from './arret-sign.webp'
import depanneurImg from './depanneur.webp'
import doubleDoubleImg from './double-double.webp'
import jellyBeanRowImg from './jelly-bean-row.webp'
import loonieImg from './loonie.webp'
import notreDameBasilicaImg from './notre-dame-basilica.webp'
import petitChamplainImg from './petit-champlain.webp'
import prairieElevatorImg from './prairie-elevator.webp'
import rogersCentreImg from './rogers-centre.webp'
import roseDesVentsImg from './rose-des-vents.webp'
import toonieImg from './toonie.webp'
import toqueImg from './toque.webp'

export default defineSet({
  slug: 'language',
  date: '2025-12-15',
  title: 'Language: Talk Eh to Me',
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
          alt: 'A smiling woman pulling on a red and black toque with a pom-pom',
          credit: INBOX_CREDIT,
        },
        {
          src: loonieImg,
          alt: 'A 1987 loonie showing a common loon on a lake, lying on dark wood',
          credit: INBOX_CREDIT,
        },
        {
          src: toonieImg,
          alt: 'A Canadian two-dollar toonie coin standing on its edge',
          credit: commonsCredit('Carol VanHook', 'CC BY-SA 2.0'),
        },
        {
          src: doubleDoubleImg,
          alt: 'A Tim Hortons coffee cup beside a plate of donuts',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Joual of the crown',
      facts: [
        'My mom\'s home province speaks **joual**, an everyday French that can sound worlds apart from the French of France.',
        'Words melt together in speech: **je suis** collapses through j\'suis and chuis down to chu.',
        'Québécois swears come from the Catholic **church**: tabarnak, câlisse and ostie all started as religious words.',
        'Everyday talk borrows English: **char** for car, toune for tune, and c\'est le fun for it\'s fun.',
      ],
      images: [
        {
          src: petitChamplainImg,
          alt: 'Rue du Petit-Champlain in Old Quebec, lit up at dusk in winter',
          credit: INBOX_CREDIT,
        },
        {
          src: arretSignImg,
          alt: 'A red ARRÊT stop sign on a leafy Montreal street',
          credit: INBOX_CREDIT,
        },
        {
          src: notreDameBasilicaImg,
          alt: 'The blue-lit vaulted interior and altar of Notre-Dame Basilica in Montreal',
          credit: INBOX_CREDIT,
        },
        {
          src: depanneurImg,
          alt: 'A Montreal corner store under a large red DÉPANNEUR sign',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Colour me Canadian',
      facts: [
        'Canadians spell the British way (**colour**, centre, cheque) but usually pronounce those words the American way.',
        'The final letter is **zed**, not "zee", one of the surest giveaways of a Canadian accent.',
        'French schooling reaches far beyond Quebec: I did all of elementary school in French, at a Francophone school in **Vancouver**.',
        'Accents swing by region: **Newfoundland** English can sound almost Irish, while the Prairies echo the American Midwest.',
      ],
      images: [
        {
          src: rogersCentreImg,
          alt: 'The Rogers Centre stadium in Toronto, its name spelled with the British "centre"',
          credit: INBOX_CREDIT,
        },
        {
          src: roseDesVentsImg,
          alt: 'The entrance of École Rose-des-Vents, a French-language school in Vancouver',
          credit: INBOX_CREDIT,
        },
        {
          src: jellyBeanRowImg,
          alt: 'Brightly painted row houses in St. John\'s, Newfoundland',
          credit: INBOX_CREDIT,
        },
        {
          src: prairieElevatorImg,
          alt: 'Old wooden grain elevators beside a rail line on the Prairies at sunset',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
