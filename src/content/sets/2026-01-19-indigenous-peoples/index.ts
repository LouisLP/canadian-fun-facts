import { commonsCredit, defineSet, INBOX_CREDIT } from '../../schema'
import bigHouseImg from './big-house.webp'
import haidaPolesImg from './haida-poles.webp'
import inukshukImg from './inukshuk.webp'
import metisSashImg from './metis-sash.webp'
import moaGreatHallImg from './moa-great-hall.webp'
import musqueamDrummerImg from './musqueam-drummer.webp'
import musqueamviewSignImg from './musqueamview-sign.webp'
import orcaImg from './orca.webp'
import ravenImg from './raven.webp'
import spiritBearImg from './spirit-bear.webp'
import thunderbirdImg from './thunderbird.webp'
import welcomeFigureImg from './welcome-figure.webp'

export default defineSet({
  slug: 'indigenous-peoples',
  date: '2026-01-19',
  title: 'First Peoples',
  topic: 'people',
  slides: [
    {
      heading: 'A country named "village"',
      facts: [
        'The name **Canada** comes from the Huron-Iroquois word **kanata**, meaning village or settlement, borrowed by Jacques Cartier in 1535.',
        'The Constitution recognizes three distinct Indigenous peoples: **First Nations**, Inuit, and Métis, each with its own histories and rights.',
        'The Métis Nation grew from the **Red River** settlement and the Prairie provinces, not from Quebec as often assumed.',
        'Most Inuit live across **Inuit Nunangat**, four Arctic homelands spanning the Northwest Territories, Nunavut, northern Quebec, and Labrador.',
      ],
      images: [
        {
          src: inukshukImg,
          alt: 'A stone inukshuk on a rocky Arctic shore with sea ice behind',
          credit: INBOX_CREDIT,
        },
        {
          src: metisSashImg,
          alt: 'A woven red Métis sash tied at a person\'s waist',
          credit: INBOX_CREDIT,
        },
        {
          src: haidaPolesImg,
          alt: 'Weathered Haida poles standing among spruce at SG̱ang Gwaay, Haida Gwaii',
          credit: INBOX_CREDIT,
        },
        {
          src: bigHouseImg,
          alt: 'A painted Kwakwaka\'wakw big house beside a totem pole at Thunderbird Park, Victoria',
          credit: commonsCredit('Ryan Bushby (HighInBC)', 'CC BY-SA 2.5'),
        },
      ],
    },
    {
      heading: 'On unceded ground',
      facts: [
        'Vancouver, where I was born and raised, sits on the **unceded** territory of the Musqueam, Squamish, and Tsleil-Waututh Nations, land never signed away by treaty.',
        'The Musqueam language, **hən̓q̓əmin̓əm̓**, is a Coast Salish tongue now endangered and kept alive through UBC and community classes.',
        'Many Coast Salish nations line the coast and rivers, among them the Musqueam, Squamish, and **Stó:lō**, the "people of the river."',
        'Vancouver\'s Trutch Street, named for an official hostile to First Nations, was renamed **šxʷməθkʷəy̓əmasəm** (Musqueamview) in a name gifted by Musqueam.',
      ],
      images: [
        {
          src: welcomeFigureImg,
          alt: 'A carved cedar Musqueam figure against a blue sky',
          credit: INBOX_CREDIT,
        },
        {
          src: musqueamviewSignImg,
          alt: 'Street signs reading šxʷməθkʷəy̓əmasəm St and Musqueamview St in Vancouver',
          credit: INBOX_CREDIT,
        },
        {
          src: moaGreatHallImg,
          alt: 'Totem poles and house frames in the glass-walled Great Hall of UBC\'s Museum of Anthropology',
          credit: INBOX_CREDIT,
        },
        {
          src: musqueamDrummerImg,
          alt: 'A drummer in regalia performing at a Musqueam community gathering in Vancouver',
          credit: commonsCredit('Jeremy Board', 'CC BY 2.0'),
        },
      ],
    },
    {
      heading: 'Spirit of the coast',
      facts: [
        'In many Northwest Coast stories the **raven** is both trickster and creator, releasing the sun, moon, and stars into the sky.',
        'The **orca** stands for family and unity, travelling in tight lifelong pods and honoured as a guardian of the sea.',
        'The **bear** signals strength, protection, and healing; the rare white **spirit bear** carries special meaning on the BC coast.',
        'The **thunderbird** is a powerful supernatural being whose beating wings make thunder and who keeps natural forces in balance.',
      ],
      images: [
        {
          src: ravenImg,
          alt: 'Bill Reid\'s yellow cedar sculpture The Raven and the First Men, a raven perched on a clamshell of emerging figures',
          credit: INBOX_CREDIT,
        },
        {
          src: orcaImg,
          alt: 'A pod of orcas surfacing along a forested British Columbia shoreline',
          credit: INBOX_CREDIT,
        },
        {
          src: spiritBearImg,
          alt: 'A cream-coloured Kermode spirit bear crossing a rainforest stream',
          credit: INBOX_CREDIT,
        },
        {
          src: thunderbirdImg,
          alt: 'A brightly painted totem pole topped by a carved thunderbird with outstretched wings, Stanley Park',
          credit: commonsCredit('Ymblanter', 'CC BY-SA 4.0'),
        },
      ],
    },
  ],
})
