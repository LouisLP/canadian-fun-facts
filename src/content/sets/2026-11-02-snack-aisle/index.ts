import { defineSet, INBOX_CREDIT } from '../../schema'
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
import voiceover from './voiceover.m4a'

export default defineSet({
  slug: 'snack-aisle',
  date: '2026-11-02',
  title: 'The Snack Aisle: Aisle Be Back',
  topic: 'food',
  voiceover: {
    src: voiceover,
    cues: [
      { at: 30.3, panel: 1 }, // "First of all, chip flavors"
      { at: 37.9, panel: 1, image: 0 }, // "ketchup chips"
      { at: 42.9, panel: 1, image: 3 }, // "ketchup chips kind of have like a sour kind of sweetness"
      { at: 60.2, panel: 1, image: 1 }, // "all dressed"
      { at: 97.6, panel: 1 }, // "recently Lays bought the brand"
      { at: 109.4, panel: 1, image: 0 }, // "the Lays ketchup chips"
      { at: 114.1, panel: 2 }, // "Next up, we got candies"
      { at: 121.4, panel: 2, image: 0 }, // "smarties, they're like these little circular chocolates"
      { at: 132.4, panel: 2, image: 1 }, // "little like pill shaped … chalk tasting candies"
      { at: 144.8, panel: 2, image: 0 }, // "actual smarties like we get here"
      { at: 151.0, panel: 2, image: 2 }, // "a chocolate in Canada called Coffee Crisp"
      { at: 173.4, panel: 2, image: 3 }, // "we have Caramilk"
      { at: 186.5, panel: 2 }, // "Caramilk and Smarties were some of my favorites"
      { at: 194.1, panel: 3 }, // "And all right, here, I have to talk about KD"
      { at: 213.3, panel: 3, image: 0 }, // "the boxes even have … the letters KD on it"
      { at: 221.8, panel: 3, image: 2 }, // "just like a plastic cheese tasting mac and cheese"
      { at: 236.9, panel: 3 }, // "another one to put on your list"
      { at: 240.8, panel: 4 }, // "And last, this one is super weird"
      { at: 250.5, panel: 4, image: 0 }, // "you get milk in bags"
      { at: 256.5, panel: 4 }, // "rows in the refrigerated section"
      { at: 277.5, panel: 4, image: 1 }, // "you put it in a pitcher"
      { at: 283.9, panel: 4, image: 2 }, // "you cut the corner"
      { at: 299.3, panel: 5 }, // "Anyway, that's all I got for you today"
    ],
  },
  slides: [
    {
      heading: 'All Dressed Up',
      facts: [
        '**All-dressed**, one of my two favourite chips, stacks four flavours: ketchup, BBQ, sour cream and onion, salt and vinegar.',
        'The name started on pizza (**toute garnie** in French: the works); Quebec\'s **Yum Yum** had a chip version by 1978.',
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
          alt: 'A bowl of red-dusted ketchup chips beside a bag of Lay\'s Ketchup',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Bar None',
      facts: [
        'Our **Smarties** are chocolate; America\'s chalky candy rolls with the same name are sold here as **Rockets**.',
        '**Coffee Crisp**, a favourite of mine, dates to **1938** and is made at Nestlé\'s Toronto factory.',
        '**Caramilk** launched in 1968, and its ads spent about **40 years** teasing how the caramel gets inside.',
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
          alt: 'A 4-litre pack of Neilson milk beside a loose milk bag and a pitcher holding another',
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
