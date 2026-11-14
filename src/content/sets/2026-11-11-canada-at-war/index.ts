import { commonsCredit, defineSet, webCredit } from '../../schema'
import flandersBookImg from './flanders-fields-book.webp'
import mccraeImg from './john-mccrae.webp'
import junoImg from './juno-beach-landing.webp'
import tulipsImg from './parliament-tulips.webp'
import tombImg from './tomb-poppies.webp'
import utrechtImg from './utrecht-liberation.webp'
import vancouverImg from './vancouver-skyline.webp'
import vimyImg from './vimy-memorial.webp'
import winnipegImg from './winnipeg-skyline.webp'

export default defineSet({
  slug: 'canada-at-war',
  date: '2026-11-11',
  title: 'Lest We Forget',
  topic: 'history',
  slides: [
    {
      heading: 'Poppy Culture',
      facts: [
        '**Remembrance Day**: two minutes of silence at the **11th hour of the 11th day of the 11th month**, when the 1918 armistice took effect.',
        'The poppy comes from **"In Flanders Fields"**, written by army doctor **John McCrae** at Ypres in May 1915, the day after burying his friend.',
        'The Legion hands out about **20 million** poppies a year; since 2000, people leave theirs on the **Tomb of the Unknown Soldier** in Ottawa.',
      ],
      images: [
        {
          src: tombImg,
          alt: 'The Tomb of the Unknown Soldier in Ottawa covered in red poppies on Remembrance Day',
          credit: commonsCredit('Fil.Al from Comox, Canada', 'CC BY 2.0'),
        },
        {
          src: mccraeImg,
          alt: 'Black and white portrait of Lieutenant-Colonel John McCrae in uniform',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: flandersBookImg,
          alt: 'The text of "In Flanders Fields" on an open bronze book at a John McCrae memorial, with a red poppy pinned to it',
          credit: webCredit('Wikipedia, "In Flanders Fields"'),
        },
      ],
    },
    {
      heading: 'Over the Top',
      facts: [
        '**Vimy Ridge**, April 1917: all four Canadian divisions attacked together for the first time, taking the ridge in four days; **3,598** dead.',
        'Some **14,000** Canadians came ashore at **Juno Beach** on D-Day, 6 June 1944.',
        'Canadians led the **liberation of the Netherlands** in 1945; the Dutch still send Ottawa **tulips** every year, which grew into the Canadian Tulip Festival.',
      ],
      images: [
        {
          src: vimyImg,
          alt: 'The twin white pylons of the Canadian National Vimy Memorial in France at dusk',
          credit: commonsCredit('Roland Turner from Birmingham, Great Britain', 'CC BY-SA 2.0'),
        },
        {
          src: junoImg,
          alt: 'Canadian soldiers wading ashore with bicycles from a landing craft at Juno Beach, 6 June 1944',
          credit: commonsCredit('Canadian Official photographer', 'public domain'),
        },
        {
          src: utrechtImg,
          alt: 'Dutch children and adults waving at a Canadian Army vehicle in the province of Utrecht, 1945',
          credit: commonsCredit('Fotograaf Onbekend / Anefo', 'CC0'),
        },
        {
          src: tulipsImg,
          alt: 'Red and white tulips in front of the Peace Tower on Parliament Hill, Ottawa',
          credit: commonsCredit('Andrew Scheer', 'CC0'),
        },
      ],
    },
    {
      heading: 'Pole Position',
      facts: [
        'Both my dad\'s parents were **Polish**, a paramedic and a nurse; they met in a hospital after my grandpa took **grenade shrapnel** to the cheek.',
        'After the war Poland fell under Soviet control; Polish Allied veterans could resettle across the **Commonwealth**, and they chose **Canada**.',
        'They settled in **Winnipeg**, where my dad was born; one of the best decisions he ever made was leaving for **Vancouver**.',
      ],
      images: [
        {
          src: winnipegImg,
          alt: 'Winnipeg skyline and the Esplanade Riel bridge reflected in the Red River at dusk',
          credit: commonsCredit('Ethan Sahagun', 'CC BY 4.0'),
        },
        {
          src: vancouverImg,
          alt: 'Aerial view of downtown Vancouver, False Creek and BC Place, with the North Shore mountains behind',
          credit: webCredit('Wikipedia, "Vancouver"'),
        },
      ],
    },
  ],
})
