import { defineSet, INBOX_CREDIT } from '../../schema'
import balatroTitleImg from './balatro-title.webp'
import blackberryClassicImg from './blackberry-classic.webp'
import clearpathHuskyImg from './clearpath-husky.webp'
import deadByDaylightImg from './dead-by-daylight.webp'
import eaOfficeImg from './ea-office.webp'
import jamesGoslingImg from './james-gosling.webp'
import obsidianLogoImg from './obsidian-logo.webp'
import ottoRobotImg from './otto-robot.webp'
import robotiqGripperBoxImg from './robotiq-gripper-box.webp'
import sanctuaryAiRobotImg from './sanctuary-ai-robot.webp'
import shopifyOfficeImg from './shopify-office.webp'
import ubisoftMontrealImg from './ubisoft-montreal.webp'

export default defineSet({
  slug: 'industry-tech',
  date: '2026-04-20',
  title: 'Some Assembly Required',
  topic: 'business',
  slides: [
    {
      heading: 'Do the robot',
      facts: [
        '**Clearpath Robotics** in Kitchener, Ontario builds the Husky and Jackal rovers that universities and labs worldwide run their research on.',
        '**OTTO Motors**, Clearpath\'s industrial arm, makes self-driving vehicles that haul pallets around warehouses and factory floors.',
        'My hometown\'s **Sanctuary AI** builds general-purpose humanoid robots aimed at doing the physical work people do.',
        '**Robotiq**, out of Lévis, Quebec, makes the grippers and sensors that let collaborative robot arms handle real objects.',
      ],
      images: [
        {
          src: clearpathHuskyImg,
          alt: 'A yellow Clearpath Husky rover carrying a sensor mast through long grass',
          credit: INBOX_CREDIT,
        },
        {
          src: ottoRobotImg,
          alt: 'A low black OTTO autonomous vehicle driving down a warehouse aisle',
          credit: INBOX_CREDIT,
        },
        {
          src: sanctuaryAiRobotImg,
          alt: 'A grey and white humanoid robot raising one hand, in a dark studio',
          credit: INBOX_CREDIT,
        },
        {
          src: robotiqGripperBoxImg,
          alt: 'A robot arm with a suction-cup gripper lifting a cardboard box',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Press start',
      facts: [
        '**Ubisoft Montreal** is one of the largest game studios on the planet, and Assassin\'s Creed and Far Cry were built inside it.',
        '**EA Vancouver** in Burnaby is one of Electronic Arts\' biggest studios, home to the EA Sports NHL and FC franchises.',
        '**Dead by Daylight** comes out of Montreal\'s Behaviour Interactive, the largest independent game studio in Canada.',
        '**Balatro**, the poker roguelike that sold millions of copies, came from a single anonymous Saskatchewan developer called LocalThunk.',
      ],
      images: [
        {
          src: ubisoftMontrealImg,
          alt: 'The red brick Ubisoft Montreal studio on a street corner, banners hanging between its windows',
          credit: INBOX_CREDIT,
        },
        {
          src: deadByDaylightImg,
          alt: 'Dead by Daylight key art: four survivors in a dark forest with a masked killer looming behind them',
          credit: INBOX_CREDIT,
        },
        {
          src: eaOfficeImg,
          alt: 'The Electronic Arts office building, glass and wood-panelled storeys under a blue sky, with the EA logo on its tower',
          credit: INBOX_CREDIT,
        },
        {
          src: balatroTitleImg,
          alt: 'The Balatro title art: the game\'s name with an ace of spades for the A, beside three joker cards on a red swirl',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Ship it',
      facts: [
        '**Shopify**, run out of Ottawa, powers millions of online stores and ranks among the biggest e-commerce platforms anywhere.',
        '**Java** and **PHP** both trace back to Canadians: James Gosling grew up in Calgary, Rasmus Lerdorf in King City, Ontario.',
        '**BlackBerry** ruled the smartphone from Waterloo, then pivoted to cybersecurity and the QNX software now running inside millions of cars.',
        'The **Obsidian** note-taking app was built by two University of Waterloo grads who started it while quarantined in 2020.',
      ],
      images: [
        {
          src: shopifyOfficeImg,
          alt: 'A spiral wooden staircase in the open-plan interior of Shopify\'s Ottawa headquarters',
          credit: INBOX_CREDIT,
        },
        {
          src: jamesGoslingImg,
          alt: 'James Gosling, creator of Java, speaking on stage in an orange T-shirt',
          credit: INBOX_CREDIT,
        },
        {
          src: blackberryClassicImg,
          alt: 'Two hands typing with their thumbs on a phone with a slide-out physical keyboard',
          credit: INBOX_CREDIT,
        },
        {
          src: obsidianLogoImg,
          alt: 'The Obsidian logo, a purple faceted crystal, on a dark circuit-board pattern',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
