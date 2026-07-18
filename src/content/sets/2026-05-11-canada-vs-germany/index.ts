import { defineSet } from '../../schema'
import algonquinImg from './algonquin-autumn.webp'
import beerGardenImg from './beer-garden.webp'
import cafeImg from './cafe-conversation.webp'
import cardTerminalImg from './card-terminal.webp'
import coconutImg from './coconut.webp'
import cologneImg from './cologne-station.webp'
import countingImg from './counting-fingers.webp'
import dinnerTableImg from './dinner-table.webp'
import euroCashImg from './euro-cash.webp'
import farmersMarketImg from './farmers-market.webp'
import departuresImg from './frankfurt-departures.webp'
import moraineImg from './moraine-lake.webp'
import munichImg from './munich-pedestrian-zone.webp'
import peachImg from './peach.webp'
import poutineImg from './poutine.webp'
import transitImg from './transit-interior.webp'

export default defineSet({
  slug: 'canada-vs-germany',
  date: '2026-05-11',
  title: 'Cultural Shifts: My Notes From Both Sides',
  topic: 'culture',
  slides: [
    {
      heading: 'Small gestures, big gaps',
      facts: [
        'Canadians start counting on the **index finger**; Germans start with the **thumb** and work outwards.',
        'Order one beer with a raised index finger in Germany and the thumb-first habit can land you **two**.',
        'A held gaze reads as intense in Canada; in Germany longer eye contact is ordinary, **transit included**.',
        'Canada taps a card almost everywhere, while plenty of German shops and restaurants still expect **cash**.',
      ],
      images: [
        {
          src: countingImg,
          alt: 'A hand with numbers inked on the finger segments, used for counting by hand',
          credit: 'Rhetos, CC0, via Wikimedia Commons',
        },
        {
          src: transitImg,
          alt: 'The interior of a Toronto subway car with empty seats',
          credit: 'Dillan Payne, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: euroCashImg,
          alt: 'A scattered pile of euro banknotes',
          credit: 'Markus Spiske, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: cardTerminalImg,
          alt: 'A card payment terminal displaying a prompt to insert or tap a card',
          credit: 'Daylon124, CC0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Peaches and coconuts',
      facts: [
        'The old metaphor sorts them: Canadians as **peaches**, soft outside with a firm core; Germans as **coconuts**, hard shell around a soft centre.',
        'Canadian conversation runs on polite back-and-forth; German conversation goes **straight to the point**, and rules carry weight.',
        '"We should hang out" can be a friendly nothing in Canada, while a German invitation is **literal** and comes with a date.',
        'Coconut friendships take longer to crack open and tend to last; peach friendliness arrives instantly and can stay light.',
      ],
      images: [
        {
          src: peachImg,
          alt: 'A peach cut in half showing the soft flesh and the hard stone at its centre',
          credit: 'Jack Dykinga, USDA, public domain, via Wikimedia Commons',
        },
        {
          src: coconutImg,
          alt: 'A whole coconut beside one cracked open to show the white flesh inside',
          credit: 'Ivar Leidus, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: cafeImg,
          alt: 'Two people sitting and talking at a table in a busy cafe',
          credit: 'W.carter, CC0, via Wikimedia Commons',
        },
        {
          src: dinnerTableImg,
          alt: 'A dining table set with plates, glasses, and crackers for a holiday meal',
          credit: 'daryl_mitchell, CC BY-SA 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Where Canada pulls ahead',
      facts: [
        'Food culture goes to Canada: **poutine** at one end, kitchens from every community the country has taken in at the other.',
        'Nature is the easy call, with **Banff** and Algonquin putting real wilderness within a drive.',
        'Strangers chat in Canada, and that everyday **friendliness** is genuine even when it stays on the surface.',
      ],
      images: [
        {
          src: poutineImg,
          alt: 'A plate of poutine: fries topped with cheese curds and gravy',
          credit: 'Antonydstevens, CC0, via Wikimedia Commons',
        },
        {
          src: moraineImg,
          alt: 'A person sitting above the turquoise water of Moraine Lake below the Rocky Mountains',
          credit: 'David Zhang, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: algonquinImg,
          alt: 'Mixed autumn forest in Algonquin Provincial Park, Ontario',
          credit: 'David Zhang, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: farmersMarketImg,
          alt: 'Shoppers and a produce vendor inside the St. Jacobs Farmers Market in Ontario',
          credit: 'Allie_Caulfield, CC BY 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Where Germany pulls ahead',
      facts: [
        'German law caps working time and guarantees paid holiday, with a statutory floor of **20 days** on a five-day week.',
        'Public infrastructure goes to Germany: trains, trams, and city centres built around **walking** rather than driving.',
        'Neighbouring countries sit **hours away** by train, so international travel is a weekend plan instead of an expedition.',
        'Neither country wins outright; the honest answer depends on whether **nature** or **infrastructure** matters more to you.',
      ],
      images: [
        {
          src: cologneImg,
          alt: 'A train pulling through the vaulted train shed of Cologne main station',
          credit: 'Martin Falbisoner, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: munichImg,
          alt: 'Crowds walking through a pedestrian shopping street in Munich',
          credit: 'Mattes, public domain, via Wikimedia Commons',
        },
        {
          src: beerGardenImg,
          alt: 'People at long tables in a Munich beer garden lit by string lights in the evening',
          credit: 'Flo Sorg, CC0, via Wikimedia Commons',
        },
        {
          src: departuresImg,
          alt: 'Travellers below the large departures board at Frankfurt Airport',
          credit: 'Erica Fischer, CC BY 2.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
