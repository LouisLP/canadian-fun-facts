import { defineSet } from '../../schema'
import blackberryImg from './blackberry-phones.webp'
import jackalImg from './clearpath-jackal.webp'
import gripperImg from './cobot-gripper.webp'
import controllerImg from './game-controller.webp'
import gamingLoungeImg from './gaming-lounge.webp'
import humanoidImg from './humanoid-robots.webp'
import goslingImg from './james-gosling.webp'
import pokerImg from './poker-hand.webp'
import lerdorfImg from './rasmus-lerdorf.webp'
import shopifyImg from './shopify-office.webp'
import ubisoftImg from './ubisoft-montreal.webp'
import agvImg from './warehouse-agv.webp'

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
        'Vancouver\'s **Sanctuary AI** builds general-purpose humanoid robots aimed at doing the physical work people do.',
        '**Robotiq**, out of Lévis, Quebec, makes the grippers and sensors that let collaborative robot arms handle real objects.',
      ],
      images: [
        {
          src: jackalImg,
          alt: 'A small four-wheeled Clearpath Jackal research robot fitted with a spinning laser scanner',
          credit: 'Luke J. Allen, public domain, via Wikimedia Commons',
        },
        {
          src: agvImg,
          alt: 'An automated guided vehicle carrying a loaded pallet through an industrial plant',
          credit: 'Timmo at ek robotics GmbH, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: humanoidImg,
          alt: 'Two full-size humanoid robots standing on display stands in an exhibition hall',
          credit: 'Syced, CC0, via Wikimedia Commons',
        },
        {
          src: gripperImg,
          alt: 'A collaborative robot arm with a gripper picking parts from a tray on a workbench',
          credit: 'Jeff Green/Rethink Robotics, CC BY 4.0, via Wikimedia Commons',
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
          src: ubisoftImg,
          alt: 'The red brick Ubisoft building in Montreal\'s Plateau neighbourhood, signage on the roofline',
          credit: 'Guilhem Vellut, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: controllerImg,
          alt: 'Two hands holding a red wired game controller mid-play',
          credit: '$ir$terlin, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: gamingLoungeImg,
          alt: 'People gathered among rows of gaming PCs and racing seats in a dark neon-lit gaming lounge',
          credit: 'Masterandbeef, CC0, via Wikimedia Commons',
        },
        {
          src: pokerImg,
          alt: 'A fanned poker hand of five hearts on a green felt table, standing in for the card game Balatro',
          credit: 'Guts Gaming, CC BY 2.0, via Wikimedia Commons',
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
          src: shopifyImg,
          alt: 'The Shopify name and shopping-bag logo on a directory sign in an office lobby',
          credit: 'Raysonho @ Open Grid Scheduler / Grid Engine, CC0, via Wikimedia Commons',
        },
        {
          src: blackberryImg,
          alt: 'Three BlackBerry phones with physical keyboards lined up side by side',
          credit: 'Kt38138, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: goslingImg,
          alt: 'James Gosling, creator of Java, speaking and gesturing with one hand',
          credit: 'Peter Campbell, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: lerdorfImg,
          alt: 'Portrait of Rasmus Lerdorf, creator of PHP, in front of a metal wall',
          credit: 'William Stadtwald Demchick, CC BY-SA 4.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
