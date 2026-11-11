import { defineSet, INBOX_CREDIT } from '../../schema'
import harrisonSasquatchImg from './harrison-sasquatch.webp'
import ogopogoLegendPosterImg from './ogopogo-legend-poster.webp'
import ogopogoPaintingImg from './ogopogo-painting.webp'
import ogopogoStatueImg from './ogopogo-statue.webp'
import okanaganLakeImg from './okanagan-lake.webp'
import sasquatchMoviePosterImg from './sasquatch-movie-poster.webp'
import sasquatchParkSignImg from './sasquatch-park-sign.webp'
import sasquatchPhotoImg from './sasquatch-photo.webp'
import wendigoClassicIllustrationImg from './wendigo-classic-illustration.webp'
import wendigoRenderingImg from './wendigo-rendering.webp'
import winterForestImg from './winter-forest.webp'

export default defineSet({
  slug: 'mythical-creatures',
  date: '2026-04-06',
  title: 'Mythical Creatures: Cryptid Roll Call',
  topic: 'oddities',
  slides: [
    {
      heading: 'Something in the lake',
      facts: [
        'Okanagan Lake\'s **Ogopogo** gets sold as Canada\'s Loch Ness Monster, but the Syilx story came first by centuries.',
        'In Syilx tradition the being is **n\'ha-a-itk**, a water spirit owed respect and an offering before you crossed the lake.',
        'The name "Ogopogo" isn\'t Indigenous at all: it came from a **1924 British music-hall song**.',
      ],
      images: [
        {
          src: ogopogoStatueImg,
          alt: 'The green Ogopogo statue on the Kelowna waterfront, mouth open and humps trailing behind',
          credit: INBOX_CREDIT,
        },
        {
          src: okanaganLakeImg,
          alt: 'Sunset over Okanagan Lake, the hills in silhouette',
          credit: INBOX_CREDIT,
        },
        {
          src: ogopogoPaintingImg,
          alt: 'A painting of long-necked serpents swimming in a green lake, one coiling beneath the surface',
          credit: INBOX_CREDIT,
        },
        {
          src: ogopogoLegendPosterImg,
          alt: 'A collage of four black-and-white pictures of a humped serpent in a lake',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Big feet, bigger reputation',
      facts: [
        '"Sasquatch" is an anglicisation of **sásq\'ets**, a Halkomelem word from the Stó:lō people of the Fraser Valley.',
        'A BC schoolteacher, **J.W. Burns**, popularised the spelling in the 1920s while collecting Stó:lō accounts.',
        'BC named a **provincial park** after the legend; thousands of sightings have been reported across the region.',
      ],
      images: [
        {
          src: sasquatchParkSignImg,
          alt: 'A carved wooden sign for Sasquatch Provincial Park listing Hicks Lake and Deer Lake',
          credit: INBOX_CREDIT,
        },
        {
          src: harrisonSasquatchImg,
          alt: 'A carved wooden Sasquatch sitting outside a shop in Harrison Hot Springs',
          credit: INBOX_CREDIT,
        },
        {
          src: sasquatchPhotoImg,
          alt: 'A blurry film frame of a dark, ape-like figure walking upright through a clearing and looking back at the camera',
          credit: INBOX_CREDIT,
        },
        {
          src: sasquatchMoviePosterImg,
          alt: 'The poster for the film Sasquatch: The Legend of Bigfoot, a dark ape-like silhouette in a forest above riders crossing a river',
          credit: INBOX_CREDIT,
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
          alt: 'A snowy forest at night with the moon behind bare branches',
          credit: INBOX_CREDIT,
        },
        {
          src: wendigoClassicIllustrationImg,
          alt: 'An illustration of a tall, gaunt creature with a deer skull and antlers for a head, standing in a misty forest',
          credit: INBOX_CREDIT,
        },
        {
          src: wendigoRenderingImg,
          alt: 'A digital drawing of a crouching, emaciated creature with a deer skull head and large antlers',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
