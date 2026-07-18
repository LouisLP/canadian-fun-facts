import { defineSet } from '../../schema'
import auroraCampingImg from './aurora-camping.webp'
import auroraYellowknifeGreenImg from './aurora-yellowknife-green.webp'
import auroraYellowknifeImg from './aurora-yellowknife.webp'
import auroraYukonImg from './aurora-yukon.webp'
import bonhommeSnowBathImg from './bonhomme-snow-bath.webp'
import bonhommeImg from './bonhomme.webp'
import downtownWhitehorseImg from './downtown-whitehorse.webp'
import frostyFenceImg from './frosty-fence.webp'
import frozenYukonRiverImg from './frozen-yukon-river.webp'
import iceCanoeRaceImg from './ice-canoe-race.webp'
import icePalaceImg from './ice-palace-1895.webp'
import polarBearSwimImg from './polar-bear-swim.webp'
import rideauCanalSkatingImg from './rideau-canal-skating.webp'
import tireDerableImg from './tire-derable.webp'
import vintageSkierImg from './vintage-skier.webp'
import whitehorseWinterTreesImg from './whitehorse-winter-trees.webp'

export default defineSet({
  slug: 'cold',
  date: '2026-01-05',
  title: 'The Cold: Canada\'s Deep Freeze',
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
          alt: 'The Bonhomme Carnaval mascot, a snowman in a red tuque and a colourful woven sash, waving',
          credit: 'Jeangagnon, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: icePalaceImg,
          alt: 'A tall snow-and-ice palace with turrets at the 1895 Quebec winter carnival',
          credit: 'Bibliothèque et Archives nationales du Québec, public domain, via Wikimedia Commons',
        },
        {
          src: iceCanoeRaceImg,
          alt: 'Two racers pushing an ice canoe over broken ice on the St. Lawrence River',
          credit: 'Cephas, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: bonhommeSnowBathImg,
          alt: 'The Bonhomme mascot with a crowd of cheering people taking a snow bath in swimwear',
          credit: 'Marc-Lautenbacher, CC BY-SA 4.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Traditions worth freezing for',
      facts: [
        'On New Year\'s Day, **polar bear dips** send crowds sprinting into water barely above freezing.',
        'Ottawa\'s **Rideau Canal** freezes into a 7.8 km skateway, and some locals genuinely skate it to work.',
        'Pour hot syrup onto clean snow and it stiffens into **tire d\'érable**, chewy maple taffy on a stick.',
        'Canadians have a saying for all of it: **no bad weather, only bad clothes**.',
      ],
      images: [
        {
          src: polarBearSwimImg,
          alt: 'A swimmer emerging from cold ocean water with arms raised at a winter polar bear swim',
          credit: 'GoToVan, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: rideauCanalSkatingImg,
          alt: 'People skating along the frozen Rideau Canal in Ottawa under a grey winter sky',
          credit: 'Ahunt, CC0, via Wikimedia Commons',
        },
        {
          src: tireDerableImg,
          alt: 'A ribbon of maple taffy wound onto a wooden stick held to a person\'s mouth',
          credit: 'Gachepi, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: vintageSkierImg,
          alt: 'A woman in 1940s winter clothing holding a pair of cross-country skis over her shoulder',
          credit: 'Conrad Poirier, public domain, via Wikimedia Commons',
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
          src: whitehorseWinterTreesImg,
          alt: 'Bare snow-covered trees in a frozen woodland near Whitehorse, Yukon',
          credit: 'Anthony DeLorenzo, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: frostyFenceImg,
          alt: 'Trees and a fence thickly coated in white hoar frost on a cold prairie morning',
          credit: 'daryl_mitchell, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: frozenYukonRiverImg,
          alt: 'A snow-covered river partly frozen over in the Yukon, photographed around 1898',
          credit: 'Eric A. Hegg, public domain, via Wikimedia Commons',
        },
        {
          src: downtownWhitehorseImg,
          alt: 'A snowy main street of downtown Whitehorse, Yukon, with parked cars and shopfronts',
          credit: 'US Mission Canada, CC BY 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'The sky puts on a show',
      facts: [
        'The **aurora borealis** glows across northern Canada when solar particles strike the upper atmosphere.',
        '**Yellowknife** sits beneath the auroral oval, making it one of Earth\'s best spots to catch the lights.',
        'The common green light comes from **oxygen**; rarer reds and purples appear higher up or from nitrogen.',
        'Clear, dark winter nights in the North stretch the aurora **viewing season** to its longest.',
      ],
      images: [
        {
          src: auroraYellowknifeImg,
          alt: 'Green aurora borealis over silhouetted trees and watchers near Yellowknife',
          credit: 'public domain, via Wikimedia Commons',
        },
        {
          src: auroraYellowknifeGreenImg,
          alt: 'Faint aurora and a field of stars in the night sky over Yellowknife',
          credit: 'TravelingOtter, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: auroraYukonImg,
          alt: 'Green northern lights arcing over a lit wooden cabin in the Yukon',
          credit: 'Anthony DeLorenzo, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: auroraCampingImg,
          alt: 'Aurora over a lake with a glowing tent pitched on a lakeside dock',
          credit: 'Sebastian Schlaeger, CC BY-SA 2.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
