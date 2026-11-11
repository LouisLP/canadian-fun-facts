import poutineImg from '../2025-10-06-inventions/poutine.webp'
import { defineSet, INBOX_CREDIT } from '../../schema'
import bacharachGermanyImg from './bacharach-germany.webp'
import banffAvenueImg from './banff-avenue.webp'
import canadianNatureImg from './canadian-nature.webp'
import canadianSushiImg from './canadian-sushi.webp'
import cardTapImg from './card-tap.webp'
import cashOnlySignImg from './cash-only-sign.webp'
import coconutImg from './coconut.webp'
import countingThreeGlassesImg from './counting-three-glasses.webp'
import germanTramImg from './german-tram.webp'
import iceTrainImg from './ice-train.webp'
import marienplatzImg from './marienplatz.webp'
import peachImg from './peach.webp'
import smallTalkDrinksImg from './small-talk-drinks.webp'
import staringEyeContactImg from './staring-eye-contact.webp'
import vancouverCambieSmalltalkImg from './vancouver-cambie-smalltalk.webp'

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
          src: countingThreeGlassesImg,
          alt: 'A film still of a uniformed German officer holding up three fingers beside a woman in a hat, subtitled "Three glasses."',
          credit: INBOX_CREDIT,
        },
        {
          src: staringEyeContactImg,
          alt: 'A film still of a grey-haired man in a white tank top staring wide-eyed straight at the camera',
          credit: INBOX_CREDIT,
        },
        {
          src: cashOnlySignImg,
          alt: 'A handwritten sign in a German shop window reading "Nur Barzahlung möglich", cash only',
          credit: INBOX_CREDIT,
        },
        {
          src: cardTapImg,
          alt: 'A phone held over a card terminal to pay by tap',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Peaches and coconuts',
      facts: [
        'The old metaphor sorts them: Canadians as **peaches**, soft outside with a firm core; Germans as **coconuts**, hard shell around a soft centre.',
        '"We should hang out" can be a friendly nothing in Canada, while a German invitation is **literal** and comes with a date.',
        'Coconut friendships take longer to crack open and tend to last; peach friendliness arrives instantly and can stay light.',
      ],
      images: [
        {
          src: peachImg,
          alt: 'A halved peach beside its stone on a wooden board',
          credit: INBOX_CREDIT,
        },
        {
          src: coconutImg,
          alt: 'A hammer cracking a whole coconut along its middle',
          credit: INBOX_CREDIT,
        },
        {
          src: smallTalkDrinksImg,
          alt: 'A bearded man and a woman chatting and smiling outside a café, each holding an iced drink',
          credit: INBOX_CREDIT,
        },
        {
          src: vancouverCambieSmalltalkImg,
          alt: 'A busy Vancouver street with cars and pedestrians, downtown towers and snow-capped mountains behind',
          credit: INBOX_CREDIT,
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
          alt: 'A plate of poutine: fries, cheese curds and gravy',
          credit: INBOX_CREDIT,
        },
        {
          src: banffAvenueImg,
          alt: 'Banff Avenue at dusk, shops lit beneath snow-covered Cascade Mountain',
          credit: INBOX_CREDIT,
        },
        {
          src: canadianSushiImg,
          alt: 'A slate platter of nigiri and sushi rolls with chopsticks, soy sauce and a cast-iron teapot, seen from above',
          credit: INBOX_CREDIT,
        },
        {
          src: canadianNatureImg,
          alt: 'A red kayak on a turquoise mountain lake beneath rocky, snow-streaked peaks',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Where Germany pulls ahead',
      facts: [
        'German law caps working time and guarantees paid holiday, with a statutory floor of **20 days** on a five-day week.',
        'Public infrastructure goes to Germany: trains, trams, and city centres built around **walking** rather than driving.',
        'Neighbouring countries sit **hours away** by train, so international travel is a weekend plan instead of an expedition.',
        'Neither wins outright: after years living in both, my answer depends on whether **nature** or **infrastructure** matters more that day.',
      ],
      images: [
        {
          src: iceTrainImg,
          alt: 'White ICE high-speed trains under the arched glass roof of Cologne main station',
          credit: INBOX_CREDIT,
        },
        {
          src: marienplatzImg,
          alt: 'Munich\'s neo-Gothic New Town Hall above a busy Marienplatz',
          credit: INBOX_CREDIT,
        },
        {
          src: germanTramImg,
          alt: 'A yellow tram stopped at a glass-roofed platform on a German city street',
          credit: INBOX_CREDIT,
        },
        {
          src: bacharachGermanyImg,
          alt: 'The town of Bacharach, Germany from above: a red church tower among slate roofs, the Rhine and wooded hills beyond',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
