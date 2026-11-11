import { defineSet, INBOX_CREDIT } from '../../schema'
import leafBottlesImg from './leaf-bottles.webp'
import reserveBarrelsImg from './reserve-barrels.webp'
import reserveWorkerImg from './reserve-worker.webp'
import sapBucketsImg from './sap-buckets.webp'
import sapDripImg from './sap-drip.webp'
import sapTubingImg from './sap-tubing.webp'
import shackMealImg from './shack-meal.webp'
import sugarMapleLeafImg from './sugar-maple-leaf.webp'
import sugarMaplesImg from './sugar-maples.webp'
import sugarShackImg from './sugar-shack.webp'
import syrupDrawOffImg from './syrup-draw-off.webp'
import syrupGradesImg from './syrup-grades.webp'
import syrupPourImg from './syrup-pour.webp'
import taffyOnSnowImg from './taffy-on-snow.webp'
import tapDrillImg from './tap-drill.webp'
import warehouseBarrelsImg from './warehouse-barrels.webp'

export default defineSet({
  slug: 'maple',
  date: '2025-10-27',
  title: 'Maple: Liquid Gold',
  topic: 'food',
  slides: [
    {
      heading: 'The sweetest superpower',
      facts: [
        'Canada makes about **75%** of the world\'s maple syrup; Quebec, my mom\'s home province, pours out roughly **90%** of that.',
        'It takes roughly **40 litres of sap** to boil down into a single litre of finished syrup.',
        'A maple usually needs about **40 years** of growth before it is wide enough to tap.',
        'Colour grades run from pale **golden** to very **dark**, with the darker syrup carrying the stronger maple flavour.',
      ],
      images: [
        {
          src: sugarMaplesImg,
          alt: 'A row of maples in blazing orange and red autumn colour',
          credit: INBOX_CREDIT,
        },
        {
          src: sugarMapleLeafImg,
          alt: 'Red maple leaves backlit against a pale sky',
          credit: INBOX_CREDIT,
        },
        {
          src: syrupPourImg,
          alt: 'Maple syrup being poured over pancakes topped with blueberries',
          credit: INBOX_CREDIT,
        },
        {
          src: syrupGradesImg,
          alt: 'Three bottles of maple syrup labelled dark, amber and golden',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Tap dancing',
      facts: [
        'Sap only runs when nights freeze and days thaw: **no cold snap, no syrup**.',
        'Traditional taps drip into hanging buckets; modern sugar bushes web whole forests with **plastic tubing** and vacuum.',
        'Tapping doesn\'t kill the tree: the hole heals over and the same maple keeps giving sap for **decades**.',
      ],
      images: [
        {
          src: sapDripImg,
          alt: 'A drop of sap falling from a metal spile into a bucket',
          credit: INBOX_CREDIT,
        },
        {
          src: sapBucketsImg,
          alt: 'Metal sap buckets hanging on maple trunks in a snowy sugar bush',
          credit: INBOX_CREDIT,
        },
        {
          src: sapTubingImg,
          alt: 'Blue sap tubing strung between maple trunks in snowy woods',
          credit: INBOX_CREDIT,
        },
        {
          src: tapDrillImg,
          alt: 'A cordless drill boring a tap hole into a maple trunk',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Sugar shack season',
      facts: [
        'Fresh sap is barely sweet at about **2% sugar**; hours of boiling drive off the water until syrup is left.',
        'Quebec\'s **cabane à sucre** turns the boil-down into a whole feast built around the season\'s syrup.',
        'Pour hot syrup onto clean snow and it sets into chewy **maple taffy**, called tire d\'érable.',
      ],
      images: [
        {
          src: syrupDrawOffImg,
          alt: 'A sugar maker pouring hot syrup into a jug inside a steam-filled Quebec sugar shack',
          credit: INBOX_CREDIT,
        },
        {
          src: sugarShackImg,
          alt: 'A weathered wooden sugar shack in snowy woods, with a sap bucket on a maple in the foreground',
          credit: INBOX_CREDIT,
        },
        {
          src: shackMealImg,
          alt: 'A sugar-shack spread of baked beans, ham, sausages and pork rinds on a checkered tablecloth',
          credit: INBOX_CREDIT,
        },
        {
          src: taffyOnSnowImg,
          alt: 'Maple taffy being rolled onto wooden sticks on a tray of snow',
          credit: INBOX_CREDIT,
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
          src: reserveBarrelsImg,
          alt: 'Thousands of white syrup barrels stacked to the ceiling in Quebec\'s strategic reserve warehouse',
          credit: INBOX_CREDIT,
        },
        {
          src: reserveWorkerImg,
          alt: 'A worker rolling a steel syrup barrel past stacks of barrels in the reserve',
          credit: INBOX_CREDIT,
        },
        {
          src: warehouseBarrelsImg,
          alt: 'Syrup barrels standing on the floor of a Quebec warehouse',
          credit: INBOX_CREDIT,
        },
        {
          src: leafBottlesImg,
          alt: 'Three maple-leaf-shaped glass bottles of maple syrup',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
