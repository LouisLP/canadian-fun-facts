import { defineSet, INBOX_CREDIT } from '../../schema'
import auroraCabinImg from './aurora-cabin.webp'
import auroraLakeImg from './aurora-lake.webp'
import auroraTeepeesImg from './aurora-teepees.webp'
import auroraYellowknifeImg from './aurora-yellowknife.webp'
import boilingWaterImg from './boiling-water.webp'
import bonhommeImg from './bonhomme.webp'
import frozenEyelashesImg from './frozen-eyelashes.webp'
import iceCanoeRaceImg from './ice-canoe-race.webp'
import iceFogImg from './ice-fog.webp'
import icePalaceDayImg from './ice-palace-day.webp'
import icePalaceNightImg from './ice-palace-night.webp'
import polarBearSwimImg from './polar-bear-swim.webp'
import rideauCanalSkatingImg from './rideau-canal-skating.webp'
import tireDerableImg from './tire-derable.webp'
import yukonSignImg from './yukon-sign.webp'
import yukonWinterImg from './yukon-winter.webp'

export default defineSet({
  slug: 'cold',
  date: '2026-01-05',
  title: 'The Cold: Deep Freeze',
  topic: 'weather',
  slides: [
    {
      heading: 'The world\'s biggest winter party',
      facts: [
        'Quebec City\'s **Carnaval** is the world\'s largest winter carnival, drawing crowds into the cold every February.',
        'Its snowman host **Bonhomme**, in a red tuque and arrow sash, has led the celebrations since **1955**.',
        'The signature ice canoe race sends teams paddling and hauling their boats across the **frozen St. Lawrence**.',
        'Builders raise a towering **ice palace** from thousands of ice blocks, a tradition going back to **1894**.',
      ],
      images: [
        {
          src: bonhommeImg,
          alt: 'Bonhomme Carnaval, a snowman mascot in a red tuque and arrow sash, hugging a visitor in front of the ice palace',
          credit: INBOX_CREDIT,
        },
        {
          src: icePalaceNightImg,
          alt: 'The Carnaval ice palace glowing blue and green at night, with a crowd in front',
          credit: INBOX_CREDIT,
        },
        {
          src: iceCanoeRaceImg,
          alt: 'Teams pushing ice canoes across the frozen St. Lawrence at the start of a race',
          credit: INBOX_CREDIT,
        },
        {
          src: icePalaceDayImg,
          alt: 'Towers of the Carnaval ice palace in daylight, with a line of visitors',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Traditions worth freezing for',
      facts: [
        'My hometown has charged into English Bay every New Year\'s Day since **1920**: Vancouver\'s **Polar Bear Swim** is Canada\'s oldest.',
        'Ottawa\'s **Rideau Canal** freezes into a 7.8 km skateway, and some locals genuinely skate it to work.',
        'Pour hot syrup onto clean snow and it stiffens into **tire d\'érable**, chewy maple taffy on a stick.',
        'Below about −30°C, breath freezes onto **eyelashes**, hair and scarves within minutes.',
      ],
      images: [
        {
          src: polarBearSwimImg,
          alt: 'Hundreds of swimmers charging into English Bay at Vancouver\'s New Year\'s Day Polar Bear Swim',
          credit: INBOX_CREDIT,
        },
        {
          src: rideauCanalSkatingImg,
          alt: 'Crowds skating on the frozen Rideau Canal in Ottawa, the Château Laurier behind',
          credit: INBOX_CREDIT,
        },
        {
          src: tireDerableImg,
          alt: 'Maple taffy on wooden sticks set on snow',
          credit: INBOX_CREDIT,
        },
        {
          src: frozenEyelashesImg,
          alt: 'A woman in a white toque with frost-covered eyelashes and hair',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Life at sixty below',
      facts: [
        '**Snag, Yukon** recorded **−63°C** in February 1947, the coldest temperature ever measured in North America.',
        'In the frozen stillness, voices and barking dogs reportedly carried for **kilometres**.',
        'Exhaled breath froze instantly into ice crystals that hung in the air and hissed softly.',
        'Toss a cup of **boiling water** into that kind of cold and it bursts into snow before it lands.',
      ],
      images: [
        {
          src: boilingWaterImg,
          alt: 'A person flinging boiling water into an arc of ice crystals in front of a low sun',
          credit: INBOX_CREDIT,
        },
        {
          src: iceFogImg,
          alt: 'Ice fog hanging over a road in the Yukon, the sun a dim glow',
          credit: INBOX_CREDIT,
        },
        {
          src: yukonSignImg,
          alt: 'A YUKON sign caked in thick frost and snow',
          credit: INBOX_CREDIT,
        },
        {
          src: yukonWinterImg,
          alt: 'Snow-covered mountains above a frosted spruce forest in deep winter',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'The sky puts on a show',
      facts: [
        'The **aurora borealis** glows across northern Canada when solar particles strike the upper atmosphere.',
        '**Yellowknife** sits beneath the auroral oval, making it one of Earth\'s best spots to catch the lights.',
        'The common green light comes from **oxygen**; rarer reds and purples appear higher up or from nitrogen.',
      ],
      images: [
        {
          src: auroraTeepeesImg,
          alt: 'Green aurora over glowing teepees at Aurora Village near Yellowknife',
          credit: INBOX_CREDIT,
        },
        {
          src: auroraCabinImg,
          alt: 'Bands of green aurora above a lit log cabin in a snowy forest',
          credit: INBOX_CREDIT,
        },
        {
          src: auroraLakeImg,
          alt: 'Green and purple aurora reflected in a mountain lake',
          credit: INBOX_CREDIT,
        },
        {
          src: auroraYellowknifeImg,
          alt: 'Green aurora arcs reflected in still water at Yellowknife',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
