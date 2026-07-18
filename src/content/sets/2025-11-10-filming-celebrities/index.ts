import { defineSet } from '../../schema'
import celineDionImg from './celine-dion.webp'
import drakeImg from './drake.webp'
import filmSetSignsImg from './film-set-signs.webp'
import jimCarreyImg from './jim-carrey.webp'
import justinBieberImg from './justin-bieber.webp'
import keanuReevesImg from './keanu-reeves.webp'
import margaretAtwoodImg from './margaret-atwood.webp'
import ryanGoslingImg from './ryan-gosling.webp'
import ryanReynoldsImg from './ryan-reynolds.webp'
import sandraOhImg from './sandra-oh.webp'
import steveNashImg from './steve-nash.webp'
import theWeekndImg from './the-weeknd.webp'
import torontoSkylineImg from './toronto-skyline.webp'
import vancouverFilmSetImg from './vancouver-film-set.webp'
import vancouverSkylineImg from './vancouver-skyline.webp'
import wayneGretzkyImg from './wayne-gretzky.webp'

export default defineSet({
  slug: 'filming-celebrities',
  date: '2025-11-10',
  title: 'Hollywood North: Canada\'s Star Factory',
  topic: 'culture',
  slides: [
    {
      heading: 'Hollywood North',
      facts: [
        'Vancouver is North America\'s **third-largest** film and TV production hub, behind only Los Angeles and New York.',
        'On screen the city rarely plays itself, doubling instead for **Seattle, New York, or Los Angeles**.',
        'Deadpool, Twilight, The X-Files, and Supernatural all shot in **British Columbia**.',
        'The Revenant froze its cast in **Alberta**, and Titanic filmed its modern-day scenes in **Nova Scotia**.',
      ],
      images: [
        {
          src: vancouverSkylineImg,
          alt: 'The downtown Vancouver waterfront skyline with mountains behind it',
          credit: 'Quintin Soloviev, CC BY 4.0, via Wikimedia Commons',
        },
        {
          src: vancouverFilmSetImg,
          alt: 'A wrecked car dressing a Vancouver street as a film set for The Last of Us',
          credit: 'MSTakesPictures, CC BY 4.0, via Wikimedia Commons',
        },
        {
          src: filmSetSignsImg,
          alt: 'Film-crew directional signs reading "TO SET" and "WORK TRUCKS" on a Vancouver street',
          credit: 'Emma0mb, CC BY 4.0, via Wikimedia Commons',
        },
        {
          src: torontoSkylineImg,
          alt: 'The CN Tower and Toronto skyline lit up at night',
          credit: 'Wladyslaw, CC BY 3.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Leading men, made in Canada',
      facts: [
        '**Ryan Reynolds** grew up in Vancouver and still shoots there whenever a production will let him.',
        '**Keanu Reeves** was raised in Toronto; **Jim Carrey** came up through the city\'s comedy clubs after dropping out at 15.',
        '**Ryan Gosling** got his start as an Ontario kid on Disney\'s Mickey Mouse Club, alongside Britney Spears and Justin Timberlake.',
        'Mike Myers and Seth Rogen keep the comedy pipeline flowing, from **Wayne\'s World** to Superbad.',
      ],
      images: [
        {
          src: ryanReynoldsImg,
          alt: 'Ryan Reynolds smiling on a red carpet',
          credit: 'Dick Thomas Johnson, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: keanuReevesImg,
          alt: 'Black-and-white portrait of a bearded Keanu Reeves',
          credit: 'Marybel Le Pape, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: jimCarreyImg,
          alt: 'Black-and-white side profile of Jim Carrey',
          credit: 'Jean-François Gornet, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: ryanGoslingImg,
          alt: 'Ryan Gosling in a plaid shirt at an event',
          credit: 'Elen Nivrae, CC BY 2.0, via Wikimedia Commons',
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
          alt: 'Drake performing on stage with a microphone',
          credit: 'The Come Up Show, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: justinBieberImg,
          alt: 'Justin Bieber singing in a white t-shirt',
          credit: 'Lou Stejskal, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: theWeekndImg,
          alt: 'Black-and-white photo of The Weeknd singing into a microphone',
          credit: 'Kayla Johnson, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: celineDionImg,
          alt: 'Céline Dion singing on stage with an outstretched hand',
          credit: 'Anirudh Koul, CC BY 2.0, via Wikimedia Commons',
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
          alt: 'Sandra Oh laughing in front of a Toronto film festival backdrop',
          credit: 'Sara Komatsu, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: margaretAtwoodImg,
          alt: 'Margaret Atwood speaking into a microphone in front of bookshelves',
          credit: 'Frankie Fouganthin, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: wayneGretzkyImg,
          alt: 'Wayne Gretzky skating in a hockey uniform on the ice',
          credit: 'Rick Dikeman, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: steveNashImg,
          alt: 'Steve Nash in a basketball jersey holding a cup courtside',
          credit: 'Keith Allison, CC BY-SA 2.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
