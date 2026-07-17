import { defineSet } from '../../schema'
import blackberryImg from './blackberry-phone.svg'
import rollImg from './california-roll.svg'
import telephoneImg from './candlestick-telephone.svg'
import magnifierImg from './forensic-magnifier.svg'
import pizzaImg from './hawaiian-pizza.svg'
import insulinImg from './insulin-vial.svg'
import javaImg from './java-coffee.svg'
import fogImg from './london-fog.svg'
import appleImg from './mcintosh-apple.svg'
import pacemakerImg from './pacemaker-heart.svg'
import basketImg from './peach-basket.svg'
import peanutImg from './peanut-butter-jar.svg'
import poutineImg from './poutine-bowl.svg'
import radioImg from './radio-tower.svg'
import zipperImg from './zipper.svg'

export default defineSet({
  slug: 'inventions',
  date: '2026-07-17',
  title: 'Canadian Inventions: You\'re Welcome, World',
  topic: 'inventions',
  slides: [
    {
      heading: 'Invented it, ate it',
      facts: [
        '**Peanut butter** was patented by Montréal chemist **Marcellus Gilmore Edson in 1884** — his "peanut candy" paste was pitched as food for people who couldn\'t chew. You\'re welcome, every sandwich since.',
        'Canada keeps inventing *other countries\'* food: the **Hawaiian pizza** was born at a Greek-run restaurant in **Chatham, Ontario in 1962**, and Vancouver chef **Hidekazu Tojo** created the inside-out **California roll** to sneak seaweed past skeptical Western diners.',
        'The **London Fog** — Earl Grey, steamed milk, vanilla — has nothing to do with London. It was invented in a **Vancouver café** in the 1990s, reportedly for a pregnant customer who couldn\'t have her usual latte.',
        'Québec gave the world **poutine** (late-1950s snack-bar experiment, now national treasure) and **tourtière**, the spiced meat pie that has anchored réveillon feasts for centuries.',
        'Every single **McIntosh apple** on Earth descends from *one tree* John McIntosh found on his Ontario farm in **1811** — and yes, Apple\'s **Macintosh** computer was named after the fruit.',
      ],
      images: [
        {
          src: peanutImg,
          alt: 'A proud jar of peanut butter flanked by two peanuts',
          credit: 'in-house clip-art department',
        },
        {
          src: pizzaImg,
          alt: 'A pizza slice defiantly topped with pineapple and ham',
          credit: 'in-house clip-art department',
        },
        {
          src: rollImg,
          alt: 'Two California roll pieces with chopsticks at the ready',
          credit: 'in-house clip-art department',
        },
        {
          src: fogImg,
          alt: 'A steaming London Fog latte with a tea bag sneaking in',
          credit: 'in-house clip-art department',
        },
        {
          src: poutineImg,
          alt: 'A takeout box of fries, cheese curds, and gravy',
          credit: 'in-house clip-art department',
        },
        {
          src: appleImg,
          alt: 'A shiny red McIntosh apple with a single leaf',
          credit: 'in-house clip-art department',
        },
      ],
    },
    {
      heading: 'Calling, zipping, computing',
      facts: [
        'Alexander Graham Bell insisted the **telephone** was "invented in Canada, made in the United States" — he dreamed it up at his family home in **Brantford, Ontario**, and the first true long-distance call ran from Brantford to Paris… *Ontario*, in 1876.',
        'The modern **zipper** was perfected by Gideon Sundback, who patented it in **1917** and manufactured it in **St. Catharines, Ontario** — where his Lightning Fastener Company zipped up the world for decades.',
        'Québec-born **Reginald Fessenden** made the first **voice transmission by radio** in 1900, then on Christmas Eve 1906 delivered the world\'s first broadcast — reading scripture and playing *O Holy Night* on his violin to stunned ship operators expecting Morse code.',
        'The **Java programming language** was created by Calgary-born **James Gosling**, and the **BlackBerry** — the phone that invented the mobile inbox and ran the White House — came out of **Waterloo, Ontario**.',
      ],
      images: [
        {
          src: telephoneImg,
          alt: 'An old-timey candlestick telephone mid-ring',
          credit: 'in-house clip-art department',
        },
        {
          src: zipperImg,
          alt: 'A zipper zipped exactly halfway, as a compromise',
          credit: 'in-house clip-art department',
        },
        {
          src: radioImg,
          alt: 'A radio tower broadcasting music notes in every direction',
          credit: 'in-house clip-art department',
        },
        {
          src: javaImg,
          alt: 'A mug of coffee containing curly braces, as code should be',
          credit: 'in-house clip-art department',
        },
        {
          src: blackberryImg,
          alt: 'A BlackBerry phone with its beloved tiny keyboard, beside an actual blackberry',
          credit: 'in-house clip-art department',
        },
      ],
    },
    {
      heading: 'Life-savers and game-changers',
      facts: [
        '**Insulin** was discovered at the University of Toronto in **1921–22** by Frederick Banting and Charles Best. Banting sold the patent for **$1**, saying *"insulin does not belong to me, it belongs to the world"* — and became the youngest-ever Medicine Nobel laureate.',
        'North America\'s **first forensic science laboratory** opened in **Montréal in 1914** under Wilfrid Derome — beating the FBI\'s famous crime lab by nearly two decades.',
        '**Basketball** was invented by **James Naismith** of Almonte, Ontario, in 1891 — 13 rules, a soccer ball, and two peach baskets nailed to a gym balcony. Someone had to climb up and fetch the ball after every point.',
        'Bonus beat: the world\'s first **artificial pacemaker** was built in **1950** by John Hopps, a National Research Council engineer who stumbled into cardiology while researching hypothermia.',
      ],
      images: [
        {
          src: insulinImg,
          alt: 'An insulin vial and syringe next to a one-dollar price tag',
          credit: 'in-house clip-art department',
        },
        {
          src: magnifierImg,
          alt: 'A magnifying glass inspecting a suspicious fingerprint',
          credit: 'in-house clip-art department',
        },
        {
          src: basketImg,
          alt: 'A basketball waiting below the original peach-basket hoop',
          credit: 'in-house clip-art department',
        },
        {
          src: pacemakerImg,
          alt: 'A cartoon heart with a steady pulse line running through it',
          credit: 'in-house clip-art department',
        },
      ],
    },
  ],
})
