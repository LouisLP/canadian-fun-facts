import { defineSet } from '../../schema'
import allDressedImg from './all-dressed-ruffles.webp'
import caramilkImg from './caramilk-bar-open.webp'
import coffeeCrispImg from './coffee-crisp-bar.webp'
import kdBowlImg from './kd-bowl.webp'
import kdBoxHeldImg from './kd-box-held.webp'
import kdBoxImg from './kd-box.webp'
import ketchupBrandsImg from './ketchup-chip-brands.webp'
import ketchupCloseupImg from './ketchup-chip-closeup.webp'
import ketchupBagImg from './ketchup-chips-bag.webp'
import milkBagCuttingImg from './milk-bag-cutting.webp'
import milkBagHandImg from './milk-bag-hand.webp'
import milkBagPitcherImg from './milk-bag-pitcher.webp'
import smartiesChocolateImg from './smarties-chocolate.webp'
import smartiesUsImg from './smarties-us.webp'

const INBOX_CREDIT = 'Sourced by Louis Lascelles-Palys'

export default defineSet({
  slug: 'snack-aisle',
  date: '2026-11-02',
  title: 'The Snack Aisle: Aisle Be Back',
  topic: 'food',
  slides: [
    {
      heading: 'All Dressed Up',
      facts: [
        '**All-dressed**, one of my two favourite chips, stacks four flavours: ketchup, BBQ, sour cream and onion, salt and vinegar.',
        'The name started on pizza (**toute garnie** in French: the works); Quebec\'s **Yum Yum** had a chip version by **1978**.',
        '**Ketchup chips**, my other favourite, were mainly a **Hostess** product through the 1970s and 80s, before Frito-Lay bought the brand.',
      ],
      images: [
        {
          src: ketchupBagImg,
          alt: 'A bag of Lay\'s Ketchup chips surrounded by chips and tomatoes on a red background',
          credit: INBOX_CREDIT,
        },
        {
          src: allDressedImg,
          alt: 'A bag of Ruffles All Dressed chips',
          credit: INBOX_CREDIT,
        },
        {
          src: ketchupBrandsImg,
          alt: 'Rows of ketchup chip bags from different brands laid side by side',
          credit: INBOX_CREDIT,
        },
        {
          src: ketchupCloseupImg,
          alt: 'A woman holding a large ridged ketchup chip up to the camera, the bag behind it',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Bar None',
      facts: [
        'Our **Smarties** are chocolate; America\'s chalky candy rolls with the same name are sold here as **Rockets**.',
        '**Coffee Crisp**, a favourite of mine, dates to **1938** and is made at Nestlé\'s Toronto factory.',
        '**Caramilk** launched in **1968**, and its ads spent about **40 years** teasing how the caramel gets inside.',
      ],
      images: [
        {
          src: smartiesChocolateImg,
          alt: 'A tube of Nestlé Smarties on a pile of colourful candy-coated chocolates',
          credit: INBOX_CREDIT,
        },
        {
          src: smartiesUsImg,
          alt: 'A pile of American Smarties, wrapped rolls of pastel candy tablets',
          credit: INBOX_CREDIT,
        },
        {
          src: coffeeCrispImg,
          alt: 'A Coffee Crisp bar cut open to show its wafer layers, the wrapper behind it',
          credit: INBOX_CREDIT,
        },
        {
          src: caramilkImg,
          alt: 'A Caramilk wrapper behind a broken bar showing the caramel inside',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Say Cheese',
      facts: [
        'Canadians buy about **1.7 million** of the 7 million boxes of macaroni and cheese Kraft sells worldwide each week.',
        'Here it\'s **Kraft Dinner**, or just **KD**; Americans call it Kraft Mac & Cheese.',
      ],
      images: [
        {
          src: kdBoxImg,
          alt: 'A box of KD Extra Creamy macaroni and cheese',
          credit: INBOX_CREDIT,
        },
        {
          src: kdBoxHeldImg,
          alt: 'A smiling man in a kitchen holding a box of KD toward the camera',
          credit: INBOX_CREDIT,
        },
        {
          src: kdBowlImg,
          alt: 'A white bowl of orange macaroni and cheese on a wooden board beside a green checked cloth, seen from above',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'It\'s in the Bag',
      facts: [
        'A 4-litre pack of milk holds three **1⅓-litre** bags; drop one in a pitcher and snip the corner.',
        '**Metric conversion** helped bags stick, since moving the cut was easier than redesigning jugs.',
        'They\'ve vanished from **BC and Alberta**: I never saw one in Vancouver, only at my grandma\'s in **Quebec**.',
      ],
      images: [
        {
          src: milkBagHandImg,
          alt: 'A hand holding a full bag of milk over a wooden floor',
          credit: INBOX_CREDIT,
        },
        {
          src: milkBagPitcherImg,
          alt: 'A 4-litre pack of Neilson milk next to a white pitcher holding one milk bag',
          credit: INBOX_CREDIT,
        },
        {
          src: milkBagCuttingImg,
          alt: 'A milk bag in a white pitcher, with hand-drawn labels marking a corner cut for the milk to pour out and another to let air in',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
