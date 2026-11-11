import { commonsCredit, defineSet, INBOX_CREDIT } from '../../schema'
import celineDionImg from './celine-dion.webp'
import deadpoolViaductImg from './deadpool-viaduct.webp'
import drakeImg from './drake.webp'
import filmSetSignsImg from './film-set-signs.webp'
import filmTrucksImg from './film-trucks.webp'
import jimCarreyImg from './jim-carrey.webp'
import justinBieberImg from './justin-bieber.webp'
import keanuReevesImg from './keanu-reeves.webp'
import margaretAtwoodImg from './margaret-atwood.webp'
import ryanGoslingImg from './ryan-gosling.webp'
import ryanReynoldsImg from './ryan-reynolds.webp'
import sandraOhImg from './sandra-oh.webp'
import steveNashImg from './steve-nash.webp'
import theWeekndImg from './the-weeknd.webp'
import vancouverSkylineImg from './vancouver-skyline.webp'
import wayneGretzkyImg from './wayne-gretzky.webp'

export default defineSet({
  slug: 'filming-celebrities',
  date: '2025-11-10',
  title: 'Hollywood North: The Star Factory',
  topic: 'culture',
  slides: [
    {
      heading: 'Hollywood North',
      facts: [
        'My hometown is North America\'s **third-largest** film and TV hub, behind Los Angeles, where I later worked as a video editor, and New York.',
        'On screen Vancouver rarely plays itself, doubling instead for **Seattle, New York, or Los Angeles**.',
        'Deadpool, Twilight, The X-Files and Supernatural all shot in **British Columbia**; Deadpool closed Vancouver\'s Georgia Viaduct for its freeway fight.',
      ],
      images: [
        {
          src: vancouverSkylineImg,
          alt: 'Aerial view of downtown Vancouver\'s towers with the harbour and mountains behind',
          credit: INBOX_CREDIT,
        },
        {
          src: deadpoolViaductImg,
          alt: 'A performer in the Deadpool costume on the Georgia Viaduct film set in Vancouver, with crew nearby',
          credit: INBOX_CREDIT,
        },
        {
          src: filmTrucksImg,
          alt: 'Film production trucks and a prop police car parked on a downtown Vancouver street',
          credit: INBOX_CREDIT,
        },
        {
          src: filmSetSignsImg,
          alt: 'Film-crew directional signs reading "TO SET" and "WORK TRUCKS" on a Vancouver street',
          credit: commonsCredit('Emma0mb', 'CC BY 4.0'),
        },
      ],
    },
    {
      heading: 'Leading men, made in Canada',
      facts: [
        '**Ryan Reynolds** grew up in Vancouver and still shoots there whenever a production will let him.',
        '**Keanu Reeves** was raised in Toronto; **Jim Carrey** came up through the city\'s comedy clubs after dropping out at 15.',
        '**Ryan Gosling** got his start as an Ontario kid on Disney\'s Mickey Mouse Club, alongside Britney Spears and Justin Timberlake.',
      ],
      images: [
        {
          src: ryanReynoldsImg,
          alt: 'Ryan Reynolds in a red velvet suit at a premiere',
          credit: INBOX_CREDIT,
        },
        {
          src: keanuReevesImg,
          alt: 'Keanu Reeves in a dark suit at an event',
          credit: INBOX_CREDIT,
        },
        {
          src: jimCarreyImg,
          alt: 'Jim Carrey smiling at a film premiere',
          credit: INBOX_CREDIT,
        },
        {
          src: ryanGoslingImg,
          alt: 'Ryan Gosling in a dark red shirt at an event',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Canada runs the charts',
      facts: [
        '**Drake**, from Toronto, is one of the most-streamed artists in history and turned his hometown\'s **6ix** into a global brand.',
        '**Justin Bieber** was a kid from **Stratford, Ontario** posting YouTube covers when a manager found him.',
        '**The Weeknd**, born Abel Tesfaye in Toronto, holds some of Spotify\'s biggest all-time streaming records.',
        '**Céline Dion** has sold over **200 million** records; fellow crooner Michael Bublé adds tens of millions more.',
      ],
      images: [
        {
          src: drakeImg,
          alt: 'Drake on stage with his arms spread wide under red lights',
          credit: INBOX_CREDIT,
        },
        {
          src: justinBieberImg,
          alt: 'Justin Bieber walking a stadium stage in front of a huge crowd',
          credit: INBOX_CREDIT,
        },
        {
          src: theWeekndImg,
          alt: 'The Weeknd in a red jacket performing the Super Bowl halftime show under fireworks',
          credit: INBOX_CREDIT,
        },
        {
          src: celineDionImg,
          alt: 'Céline Dion singing on stage in a gold dress',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Famous in every field',
      facts: [
        '**Sandra Oh**, raised near Ottawa, was the first woman of Asian descent nominated for a lead-drama acting **Emmy**.',
        '**Margaret Atwood** put Canadian literature on the world map; The Handmaid\'s Tale has stayed in print since **1985**.',
        '**Wayne Gretzky**, "The Great One," still holds or shares more than **60 NHL records** decades after retiring.',
        '**Steve Nash**, from British Columbia, won back-to-back NBA **MVP** awards in 2005 and 2006.',
      ],
      images: [
        {
          src: sandraOhImg,
          alt: 'Sandra Oh in an orange gown at the 2023 Oscars',
          credit: INBOX_CREDIT,
        },
        {
          src: margaretAtwoodImg,
          alt: 'Portrait of Margaret Atwood resting her cheek on her hand',
          credit: INBOX_CREDIT,
        },
        {
          src: wayneGretzkyImg,
          alt: 'Wayne Gretzky hoisting the Stanley Cup with the Edmonton Oilers in 1984',
          credit: INBOX_CREDIT,
        },
        {
          src: steveNashImg,
          alt: 'Steve Nash dribbling in a purple Phoenix Suns jersey',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
