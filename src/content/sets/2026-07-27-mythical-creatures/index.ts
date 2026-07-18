import { defineSet } from '../../schema'
import deadOfWinterImg from './dead-of-winter.webp'
import sheetMusicImg from './ogopogo-sheet-music.webp'
import ogopogoStatueImg from './ogopogo-statue.webp'
import okanaganLakeImg from './okanagan-lake.webp'
import rattlesnakeIslandImg from './rattlesnake-island.webp'
import dioramaImg from './sasquatch-diorama.webp'
import sasquatchForestImg from './sasquatch-forest.webp'
import provincialParkImg from './sasquatch-provincial-park.webp'
import roadsideFigureImg from './sasquatch-roadside-figure.webp'
import wendigoCostumeImg from './wendigo-costume.webp'
import wendigoArtImg from './wendigo-modern-art.webp'
import winterForestImg from './winter-forest.webp'

export default defineSet({
  slug: 'mythical-creatures',
  date: '2026-07-27',
  title: 'Mythical Creatures: Canada\'s Cryptid Roll Call',
  topic: 'oddities',
  slides: [
    {
      heading: 'Something in the lake',
      facts: [
        'Okanagan Lake\'s **Ogopogo** gets sold as Canada\'s Loch Ness Monster, but the Syilx story came first by centuries.',
        'In Syilx tradition the being is **n\'ha-a-itk**, a water spirit owed respect and an offering before you crossed the lake.',
        'The name "Ogopogo" isn\'t Indigenous at all: it came from a **1924 British music-hall song**.',
        'Over **200 sightings** are on record. None have ever been verified.',
      ],
      images: [
        {
          src: okanaganLakeImg,
          alt: 'Okanagan Lake seen from the shore at Peachland, British Columbia, with dry hills on both sides',
          credit: 'Christopher Jones, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: rattlesnakeIslandImg,
          alt: 'A rocky headland dropping into calm water at Ogopogo Gap, beside Rattlesnake Island on Okanagan Lake',
          credit: 'Extemporalist, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: ogopogoStatueImg,
          alt: 'A green humped Ogopogo sculpture in a Kelowna waterfront park',
          credit: 'GoToVan, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: sheetMusicImg,
          alt: 'Cover of the 1924 sheet music "The Ogo-Pogo: The Funny Fox-Trot", showing a cartoon creature playing a banjo',
          credit: 'Fred Low, public domain, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Big feet, bigger reputation',
      facts: [
        '"Sasquatch" is an anglicisation of **sásq\'ets**, a Halkomelem word from the Stó:lō people of the Fraser Valley.',
        'A BC schoolteacher, **J.W. Burns**, popularised the spelling in the 1920s while collecting Stó:lō accounts.',
        'Stories of large forest beings run through many Pacific Northwest Indigenous cultures, each with **its own name** and meaning.',
        'BC named a **provincial park** after the legend; thousands of sightings have been reported across the region.',
      ],
      images: [
        {
          src: sasquatchForestImg,
          alt: 'A narrow trail through a dense, moss-covered coastal forest in British Columbia',
          credit: 'Simon Fast, CC BY 3.0, via Wikimedia Commons',
        },
        {
          src: provincialParkImg,
          alt: 'Deer Lake in Sasquatch Provincial Park, British Columbia, with forested mountains reflected in still water',
          credit: 'mmmmngai@rogers.com, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: dioramaImg,
          alt: 'A museum diorama model of a Sasquatch figure crossing a fallen log over a ravine',
          credit: 'Chris Light, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: roadsideFigureImg,
          alt: 'A dark Sasquatch silhouette sculpture standing on a dry hillside beside pine trees',
          credit: 'public domain, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'The hunger that never ends',
      facts: [
        'The **Wendigo** comes from the traditional stories of several Algonquian-speaking peoples, tied to famine and hard winters.',
        'It works as a **moral warning** against greed: taking more than you need is what turns a person into one.',
        'The antlered movie monster is a **modern invention**. Traditional descriptions vary and often have no antlers.',
        'For the communities the stories belong to, this is **living tradition**, not a Halloween costume.',
      ],
      images: [
        {
          src: winterForestImg,
          alt: 'A snow-covered path running through a bare winter forest',
          credit: 'Thomas Metaxas, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: deadOfWinterImg,
          alt: 'Fallen dead branches and trees lying across deep snow in a winter woodland',
          credit: 'Danielle Scott, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: wendigoCostumeImg,
          alt: 'A modern antlered Wendigo costume worn at a fan convention, illustrating the recent pop-culture depiction',
          credit: 'GabboT, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: wendigoArtImg,
          alt: 'A modern digital illustration of a gaunt, antlerless Wendigo figure in a grey forest',
          credit: 'Віщун, CC BY-SA 4.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
