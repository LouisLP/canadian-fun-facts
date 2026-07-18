import { defineSet } from '../../schema'
import backpackImg from './arcteryx-backpack.webp'
import jacketImg from './arcteryx-jacket.webp'
import logoImg from './arcteryx-logo.webp'
import squareOneImg from './arcteryx-square-one.webp'
import gooseFlagshipImg from './canada-goose-flagship.webp'
import gooseGreenlandImg from './canada-goose-greenland.webp'
import gooseLabelImg from './canada-goose-label.webp'
import gooseManotickImg from './canada-goose-manotick.webp'
import lululemonChelseaImg from './lululemon-chelsea.webp'
import lululemonRobsonImg from './lululemon-robson.webp'
import lululemonStorefrontImg from './lululemon-storefront.webp'
import lululemonYogaImg from './lululemon-yoga.webp'
import mecEdmontonImg from './mec-edmonton.webp'
import mecStoreImg from './mec-store.webp'
import sportChekChinookImg from './sportchek-chinook.webp'
import sportChekEdmontonImg from './sportchek-edmonton.webp'

export default defineSet({
  slug: 'brands',
  date: '2025-12-01',
  title: 'Retail Therapy, Canadian Style',
  topic: 'business',
  slides: [
    {
      heading: 'Stretch goals',
      facts: [
        'Lululemon started in **1998** in Vancouver, where the first store doubled as a yoga studio at night to help cover the rent.',
        'The brand went public in 2007, raising about **US$328 million** on its stock-market debut.',
        'In 2013 it recalled its black Luon yoga pants for being too sheer, pulling roughly **17%** of the women\'s bottoms it stocked.',
        'Founder Chip Wilson quit as chairman that same year after saying **some women\'s bodies** just don\'t work for the pants.',
      ],
      images: [
        {
          src: lululemonRobsonImg,
          alt: 'A Lululemon store on Robson Street in Vancouver',
          credit: 'GoToVan, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: lululemonYogaImg,
          alt: 'A woman meditating cross-legged on a yoga mat outdoors in a park',
          credit: 'lululemon athletica, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: lululemonChelseaImg,
          alt: 'A Lululemon storefront with the brand name above the windows',
          credit: 'Philafrenzy, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: lululemonStorefrontImg,
          alt: 'Entrance to a Lululemon store inside a shopping mall',
          credit: 'Windmemories, CC BY-SA 4.0, via Wikimedia Commons',
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
          src: sportChekChinookImg,
          alt: 'A Sport Chek store entrance inside a shopping mall',
          credit: 'Rowanlovescars, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: sportChekEdmontonImg,
          alt: 'Exterior of a Sport Chek store at West Edmonton Mall',
          credit: 'Rowanlovescars, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: mecStoreImg,
          alt: 'A Mountain Equipment Co-op store exterior',
          credit: 'Simon Law, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: mecEdmontonImg,
          alt: 'Exterior of the MEC store in Edmonton',
          credit: 'Myke2020, public domain, via Wikimedia Commons',
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
          src: gooseFlagshipImg,
          alt: 'A Canada Goose flagship store entrance at Sherway Gardens mall',
          credit: 'Canmenwalker, CC BY 4.0, via Wikimedia Commons',
        },
        {
          src: gooseLabelImg,
          alt: 'The round Canada Goose Arctic Program badge stitched on a cream knit garment',
          credit: 'Qirille, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: gooseGreenlandImg,
          alt: 'A small blue Canada Goose shop in Kangerlussuaq, Greenland',
          credit: 'Quintin Soloviev, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: gooseManotickImg,
          alt: 'A Canada Goose shop on the main street of Manotick, Ontario',
          credit: 'Peter Jakubinek, CC BY-SA 4.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Bird is the word',
      facts: [
        'Arc\'teryx started in North Vancouver in **1989** as Rock Solid, making climbing harnesses before it renamed in 1991.',
        'The name and skeletal logo come from **Archaeopteryx**, the fossil linking dinosaurs to birds.',
        'Its breakthrough was the **Vapor** harness, thermolaminated to cut bulk without sacrificing strength.',
        'The Vancouver label is no longer Canadian-owned: it now belongs to Finland\'s **Amer Sports**, led by China\'s Anta.',
      ],
      images: [
        {
          src: jacketImg,
          alt: 'A hiker in an orange Arc\'teryx insulated jacket on a snowy mountain ridge',
          credit: 'Olgierd, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: squareOneImg,
          alt: 'An Arc\'teryx store inside Square One shopping centre',
          credit: 'Canmenwalker, CC BY 4.0, via Wikimedia Commons',
        },
        {
          src: backpackImg,
          alt: 'A black Arc\'teryx Alpha backpack with the skeletal bird logo',
          credit: 'Jjanhone, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: logoImg,
          alt: 'The Arc\'teryx Archaeopteryx skeleton logo',
          credit: 'Olgierd, CC BY 2.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
