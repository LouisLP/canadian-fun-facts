import { defineSet } from '../../schema'
import bigHouseImg from './big-house.webp'
import housePostImg from './house-post.webp'
import inukshukImg from './inukshuk.webp'
import metisSashImg from './metis-sash.webp'
import moaGreatHallImg from './moa-great-hall.webp'
import musqueamDrummerImg from './musqueam-drummer.webp'
import orcaImg from './orca.webp'
import ravenImg from './raven.webp'
import spiritBearImg from './spirit-bear.webp'
import thunderbirdImg from './thunderbird.webp'
import totemPoleImg from './totem-pole.webp'
import welcomeFigureImg from './welcome-figure.webp'

export default defineSet({
  slug: 'indigenous-peoples',
  date: '2026-07-20',
  title: 'Canada\'s First Peoples',
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
          alt: 'A stone inukshuk on a snowy shoreline in Sylvia Grinnell Territorial Park, Nunavut',
          credit: 'Films Oiseau de nuit, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: metisSashImg,
          alt: 'A finger-woven Métis arrowhead sash (ceinture fléchée) in orange, black, and white',
          credit: 'Wilfredor, CC0, via Wikimedia Commons',
        },
        {
          src: totemPoleImg,
          alt: 'A weathered carved totem pole standing among evergreens in Stanley Park, Vancouver',
          credit: 'Another Believer, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: bigHouseImg,
          alt: 'A painted Kwakwaka\'wakw big house beside a totem pole at Thunderbird Park, Victoria',
          credit: 'Ryan Bushby (HighInBC), CC BY-SA 2.5, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'On unceded ground',
      facts: [
        'Vancouver sits on the **unceded** territory of the Musqueam, Squamish, and Tsleil-Waututh Nations, land never signed away by treaty.',
        'The Musqueam language, **hən̓q̓əmin̓əm̓**, is a Coast Salish tongue now endangered and kept alive through UBC and community classes.',
        'Many Coast Salish nations line the coast and rivers, among them the Musqueam, Squamish, and **Stó:lō**, the "people of the river."',
        'Vancouver\'s Trutch Street, named for an official hostile to First Nations, was renamed **šxʷməθkʷəy̓əmasəm** (Musqueamview) in a name gifted by Musqueam.',
      ],
      images: [
        {
          src: welcomeFigureImg,
          alt: 'A tall carved Coast Salish welcome figure by artist Susan Point on the White Rock waterfront, BC',
          credit: 'Almccon, CC0, via Wikimedia Commons',
        },
        {
          src: musqueamDrummerImg,
          alt: 'A drummer in regalia performing at a Musqueam community gathering in Vancouver',
          credit: 'Jeremy Board, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: moaGreatHallImg,
          alt: 'Carved house posts, feast dishes, and bentwood boxes in the Great Hall of UBC\'s Museum of Anthropology',
          credit: 'Daderot, public domain, via Wikimedia Commons',
        },
        {
          src: housePostImg,
          alt: 'A large weathered Northwest Coast house post on display at UBC\'s Museum of Anthropology',
          credit: 'Xicotencatl, CC BY-SA 4.0, via Wikimedia Commons',
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
          alt: 'A common raven in flight with wings and tail fully spread against a pale sky',
          credit: 'Mykola Swarnyk, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: orcaImg,
          alt: 'The tall dorsal fin of a killer whale breaking calm water off Vancouver Island at dusk',
          credit: 'Buiobuione, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: spiritBearImg,
          alt: 'A cream-coloured Kermode spirit bear wading in a stream in British Columbia',
          credit: 'Maximilian Helm, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: thunderbirdImg,
          alt: 'A brightly painted totem pole topped by a carved thunderbird with outstretched wings, Stanley Park',
          credit: 'Ymblanter, CC BY-SA 4.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
