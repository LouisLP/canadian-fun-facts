import { defineSet } from '../../schema'
import boilingSapImg from './boiling-sap.webp'
import cabaneImg from './cabane-a-sucre.webp'
import skyImg from './maple-against-sky.webp'
import plasticBucketImg from './plastic-sap-bucket.webp'
import sapBucketsImg from './sap-buckets.webp'
import sugarHouseImg from './sugar-house-boiling.webp'
import leafImg from './sugar-maple-leaf.webp'
import treeImg from './sugar-maple-tree.webp'
import bottleImg from './syrup-bottle.webp'
import gradesImg from './syrup-grades.webp'
import jugsImg from './syrup-jugs.webp'
import productsImg from './syrup-products.webp'
import rainbowImg from './syrup-rainbow.webp'
import taffyImg from './taffy-on-snow.webp'
import traditionalTapImg from './traditional-tap.webp'
import tubingTapImg from './tubing-tap.webp'

export default defineSet({
  slug: 'maple',
  date: '2026-07-17',
  title: 'Maple: Canada\'s Liquid Gold',
  topic: 'food',
  slides: [
    {
      heading: 'The sweetest superpower',
      facts: [
        'Canada makes about **75%** of the world\'s maple syrup, and Quebec alone pours out the vast majority of it.',
        'It takes roughly **40 litres of sap** to boil down into a single litre of finished syrup.',
        'Sugar maples stockpile **starch** all winter and convert it to sweet, tappable sap each spring.',
        'A maple usually needs about **40 years** of growth before it is wide enough to tap.',
      ],
      images: [
        {
          src: treeImg,
          alt: 'A large sugar maple in full golden-orange autumn foliage',
          credit: 'James St. John, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: leafImg,
          alt: 'Yellow sugar maple leaves fallen on grass',
          credit: 'James St. John, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: skyImg,
          alt: 'Maple branches and leaves against a bright blue sky',
          credit: 'Mangoandmay, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: bottleImg,
          alt: 'A maple-leaf-shaped glass bottle of Canadian maple syrup beside pancakes',
          credit: 'Jan Smith, CC BY 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Tap dancing',
      facts: [
        'Sap only runs when nights freeze and days thaw: **no cold snap, no syrup**.',
        'Producers can\'t schedule the harvest; the trees and the spring weather set the **production calendar**.',
        'Traditional taps drip into hanging buckets; modern sugar bushes web whole forests with **plastic tubing** and vacuum.',
        'Tapping doesn\'t kill the tree: the hole heals over and the same maple keeps giving sap for **decades**.',
      ],
      images: [
        {
          src: traditionalTapImg,
          alt: 'A gloved hand holding a traditional metal maple tap in the snow',
          credit: 'Jomegat, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: plasticBucketImg,
          alt: 'A lidded plastic sap bucket hung on a tapped maple trunk',
          credit: 'Rhavasy, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: sapBucketsImg,
          alt: 'Two metal sap buckets hanging on a maple trunk in bare early-spring woods',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: tubingTapImg,
          alt: 'Blue plastic sap tubing joined at a maple tap in the snow',
          credit: 'Jomegat, CC BY-SA 4.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Sugar shack season',
      facts: [
        'Fresh sap is barely sweet at about **2% sugar**; hours of boiling drive off the water until syrup is left.',
        'Quebec\'s **cabane à sucre** turns the boil-down into a whole feast built around the season\'s syrup.',
        'Pour hot syrup onto clean snow and it sets into chewy **maple taffy**, called tire d\'érable.',
        'Colour grades run from pale **golden** to very **dark**, with the darker syrup carrying the stronger maple flavour.',
      ],
      images: [
        {
          src: cabaneImg,
          alt: 'A worker tending a wood-fired evaporator inside a Quebec sugar shack, steam rising',
          credit: 'Emmanuel Huybrechts, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: boilingSapImg,
          alt: 'A man boiling maple sap over a wood-fired arch in a sugar shack',
          credit: 'Missouri State Archives, no known copyright restrictions, via Wikimedia Commons',
        },
        {
          src: sugarHouseImg,
          alt: 'Children watching maple sap boil in long evaporator pans at a sugar house',
          credit: 'BiblioArchives / LibraryArchives, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: taffyImg,
          alt: 'A person eating maple taffy off a stick beside a basin of snow',
          credit: 'Chris Lund, public domain, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'The great syrup heist',
      facts: [
        'Quebec runs a **strategic reserve** of maple syrup, warehousing millions of kilograms to steady prices year to year.',
        'Across **2011 and 2012**, thieves siphoned about **3,000 tonnes** from the reserve and refilled the barrels with water.',
        'The stolen syrup was worth around **C$18 million**, the biggest agricultural theft in Canadian history.',
        'A single barrel of maple syrup can be worth **more than a barrel of crude oil**.',
      ],
      images: [
        {
          src: productsImg,
          alt: 'Rows of bottled maple syrup for sale at a market stall',
          credit: 'Ross Dunn, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: gradesImg,
          alt: 'Four small bottles of maple syrup ranging from pale gold to dark amber',
          credit: 'Dvortygirl, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: rainbowImg,
          alt: 'Metal pans holding maple syrup in graded shades from light to dark',
          credit: 'rachaelvoorhees, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: jugsImg,
          alt: 'A leaf-shaped bottle of Grade A maple syrup',
          credit: 'Willis Lam, CC BY-SA 2.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
