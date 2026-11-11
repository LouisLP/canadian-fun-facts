import { defineSet, INBOX_CREDIT } from '../../schema'
import archaeopteryxFossilImg from './archaeopteryx-fossil.webp'
import arcteryxFactoryImg from './arcteryx-factory.webp'
import arcteryxShellImg from './arcteryx-shell.webp'
import arcteryxStoreImg from './arcteryx-store.webp'
import canadaGooseBadgeImg from './canada-goose-badge.webp'
import canadaGooseFactoryImg from './canada-goose-factory.webp'
import kanukParkaImg from './kanuk-parka.webp'
import lululemonKitsilanoImg from './lululemon-kitsilano.webp'
import lululemonLeggingsImg from './lululemon-leggings.webp'
import lululemonStorefrontImg from './lululemon-storefront.webp'
import lululemonYogaImg from './lululemon-yoga.webp'
import mecPackImg from './mec-pack.webp'
import mecVancouverImg from './mec-vancouver.webp'
import snowMantraImg from './snow-mantra.webp'
import sportchekFlagshipImg from './sportchek-flagship.webp'
import sportchekHockeyImg from './sportchek-hockey.webp'

export default defineSet({
  slug: 'brands',
  date: '2025-12-01',
  title: 'Brands: Retail Therapy',
  topic: 'business',
  slides: [
    {
      heading: 'Stretch goals',
      facts: [
        'Lululemon began in **1998** in Kitsilano, the Vancouver neighbourhood where I went to high school; the first shop hosted night yoga to make rent.',
        'The brand went public in 2007, raising about **US$328 million** on its stock-market debut.',
        'In 2013 it recalled its black Luon yoga pants for being too sheer, pulling roughly **17%** of the women\'s bottoms it stocked.',
      ],
      images: [
        {
          src: lululemonKitsilanoImg,
          alt: 'The Lululemon store on West 4th Avenue in Kitsilano, Vancouver, under a colourful mural',
          credit: INBOX_CREDIT,
        },
        {
          src: lululemonLeggingsImg,
          alt: 'A curved wall of leggings on display inside a Lululemon store',
          credit: INBOX_CREDIT,
        },
        {
          src: lululemonYogaImg,
          alt: 'A crowd doing yoga on colourful mats at a Lululemon event, seen from above',
          credit: INBOX_CREDIT,
        },
        {
          src: lululemonStorefrontImg,
          alt: 'A Lululemon flagship store with its name across a glass canopy',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Gear we go',
      facts: [
        'Sport Chek is Canada\'s biggest sporting-goods chain, running roughly **190 stores** from coast to coast.',
        'Canadian Tire bought Sport Chek\'s parent company in 2011 for **$771 million**.',
        'MEC was born in **1971** after UBC students got stranded by a snowstorm on Mount Baker and decided Canada needed its own climbing-gear co-op.',
        'MEC sold only to members who bought a **$5** lifetime share; it lost co-op status in 2020 and returned to Canadian owners in **2025**.',
      ],
      images: [
        {
          src: sportchekFlagshipImg,
          alt: 'Sport Chek\'s Vancouver flagship store lit up at dusk',
          credit: INBOX_CREDIT,
        },
        {
          src: sportchekHockeyImg,
          alt: 'Racks of hockey sticks inside a Sport Chek store',
          credit: INBOX_CREDIT,
        },
        {
          src: mecVancouverImg,
          alt: 'MEC\'s flagship store in Vancouver, its facade printed with a mountain range',
          credit: INBOX_CREDIT,
        },
        {
          src: mecPackImg,
          alt: 'A red-and-yellow canvas MEC rucksack',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Cold hard cash',
      facts: [
        'Canada Goose began in a Toronto warehouse in **1957** as Metro Sportswear, sewing woolen vests and snowmobile suits.',
        'Its **Snow Mantra** parka was built for scientists at Antarctica\'s McMurdo Station and is billed as the warmest coat on Earth.',
        'Canada Goose went **fur-free** in 2022, dropping the coyote-fur trim that drew years of protest.',
        'Rival Kanuk has hand-sewn its parkas in **Montreal since 1970**; founder Louis Grenier got his start making kayak spray skirts in a garage.',
      ],
      images: [
        {
          src: canadaGooseBadgeImg,
          alt: 'The Canada Goose Arctic Program badge on a red parka, with factory sewers at work behind',
          credit: INBOX_CREDIT,
        },
        {
          src: canadaGooseFactoryImg,
          alt: 'Workers sewing parkas on a Canada Goose factory floor in Toronto',
          credit: INBOX_CREDIT,
        },
        {
          src: snowMantraImg,
          alt: 'A red Canada Goose Snow Mantra parka with a fur-trimmed hood',
          credit: INBOX_CREDIT,
        },
        {
          src: kanukParkaImg,
          alt: 'A red Kanuk winter parka',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Bird is the word',
      facts: [
        'Arc\'teryx started in North Vancouver in **1989** as Rock Solid, making climbing harnesses before it renamed in 1991.',
        'The skeletal logo traces the **Berlin specimen** of Archaeopteryx, the dinosaur-to-bird fossil kept in the city where I later worked.',
        'Its breakthrough was the **Vapor** harness, thermolaminated to cut bulk without sacrificing strength.',
        'The Vancouver label is no longer Canadian-owned: it now belongs to Finland\'s **Amer Sports**, led by China\'s Anta.',
      ],
      images: [
        {
          src: arcteryxShellImg,
          alt: 'An orange Arc\'teryx shell jacket',
          credit: INBOX_CREDIT,
        },
        {
          src: arcteryxFactoryImg,
          alt: 'Rows of sewing stations at Arc\'teryx\'s ARC\'One factory in Metro Vancouver',
          credit: INBOX_CREDIT,
        },
        {
          src: archaeopteryxFossilImg,
          alt: 'An Archaeopteryx fossil with spread wings pressed in limestone',
          credit: INBOX_CREDIT,
        },
        {
          src: arcteryxStoreImg,
          alt: 'An Arc\'teryx storefront with the skeletal bird logo in the window',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
