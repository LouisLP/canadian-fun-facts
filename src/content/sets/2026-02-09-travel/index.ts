import { commonsCredit, defineSet, INBOX_CREDIT } from '../../schema'
import canadaLineTrainImg from './canada-line-train.webp'
import canadaTimeZonesImg from './canada-time-zones.webp'
import capeSpearImg from './cape-spear.webp'
import gastownSteamClockImg from './gastown-steam-clock.webp'
import jadeCanoeImg from './jade-canoe.webp'
import lynnCanyonImg from './lynn-canyon.webp'
import spindleWhorlImg from './spindle-whorl.webp'
import stJohnsBatteryImg from './st-johns-battery.webp'
import stanleyParkSeawallImg from './stanley-park-seawall.webp'
import vancouverSkylineMountainsImg from './vancouver-skyline-mountains.webp'
import welcomeFiguresImg from './welcome-figures.webp'
import yvrAerialImg from './yvr-aerial.webp'
import yvrAquariumImg from './yvr-aquarium.webp'
import yvrCreekImg from './yvr-creek.webp'
import yvrObservationImg from './yvr-observation.webp'
import yvrTotemControlTowerImg from './yvr-totem-control-tower.webp'

export default defineSet({
  slug: 'travel',
  date: '2026-02-09',
  title: 'Travel: Gate Expectations',
  topic: 'travel',
  slides: [
    {
      heading: 'Landing on top',
      facts: [
        'Skytrax ranks YVR the **10th best airport in the world**, and the best in North America for a record **15th time**.',
        'A **free public observation area** on Level 4 of the domestic terminal lets people without a ticket watch planes take off and land.',
        'The international terminal holds a **114,000-litre aquarium** stocked with more than 5,000 sea creatures, plus indoor streams and waterfalls.',
      ],
      images: [
        {
          src: yvrAerialImg,
          alt: 'Aerial view of Vancouver International Airport\'s terminals and aprons at dusk, mountains on the horizon',
          credit: INBOX_CREDIT,
        },
        {
          src: yvrAquariumImg,
          alt: 'Travellers at the tall aquarium in YVR\'s international terminal, a Northwest Coast carving above it',
          credit: INBOX_CREDIT,
        },
        {
          src: yvrCreekImg,
          alt: 'YVR\'s international terminal from above, with an indoor creek and greenery among the shops',
          credit: INBOX_CREDIT,
        },
        {
          src: yvrObservationImg,
          alt: 'Telescopes at the windows of YVR\'s public observation area, overlooking the apron',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Art on arrival',
      facts: [
        'Bill Reid\'s **Spirit of Haida Gwaii: The Jade Canoe** has anchored the international terminal since **1996**.',
        '**Thirteen** figures crowd the canoe, most of them mythological Haida beings: Raven, Wolf, Eagle, Bear Mother, and Mouse Woman among them.',
        'The same sculpture appeared on the back of the Canadian **$20 bill**.',
        'Carved poles, weavings, and sculpture fill the terminals, making YVR a working gallery of **Northwest Coast Indigenous art**.',
      ],
      images: [
        {
          src: jadeCanoeImg,
          alt: 'The Spirit of Haida Gwaii bronze canoe sculpture, crowded with figures, in the airport terminal',
          credit: INBOX_CREDIT,
        },
        {
          src: spindleWhorlImg,
          alt: 'Susan Point\'s carved red cedar Flight Spindle Whorl mounted on a stone wall at YVR',
          credit: INBOX_CREDIT,
        },
        {
          src: welcomeFiguresImg,
          alt: 'Two carved cedar Musqueam welcome figures in the YVR arrivals hall',
          credit: INBOX_CREDIT,
        },
        {
          src: yvrTotemControlTowerImg,
          alt: 'The winged top of a carved pole inside the airport atrium, with the control tower visible through the glass',
          credit: commonsCredit('Adam Jones', 'CC BY-SA 2.0'),
        },
      ],
    },
    {
      heading: 'Six ways to be late',
      facts: [
        'Canada spans **six time zones**, so a domestic flight can hand out jet lag without ever crossing a border.',
        'Newfoundland sits **half an hour** off everyone else at UTC-3:30, the only active half-hour zone in the Americas.',
        'Vancouver to St. John\'s moves the clock **4.5 hours**: half the nine that separate my hometown from Germany, where I live now.',
        '**Cape Spear**, Newfoundland is the easternmost point of North America and catches the sunrise before anywhere else in the country.',
      ],
      images: [
        {
          src: canadaTimeZonesImg,
          alt: 'Map of Canada shaded into its six time zones with UTC offsets labelled',
          credit: commonsCredit('Mappify', 'CC BY-SA 4.0'),
        },
        {
          src: capeSpearImg,
          alt: 'The white Cape Spear lighthouse with the sun rising behind it',
          credit: INBOX_CREDIT,
        },
        {
          src: stJohnsBatteryImg,
          alt: 'Colourful houses of the Battery clinging to the rock at the mouth of St. John\'s harbour',
          credit: INBOX_CREDIT,
        },
        {
          src: gastownSteamClockImg,
          alt: 'The Gastown steam clock in Vancouver venting steam at dusk, street lamps lit',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Mountains on the meter',
      facts: [
        'From YVR, the Pacific Ocean, the North Shore mountains, and temperate rainforest all sit within about **45 minutes**.',
        'The **Canada Line** connects the airport to downtown Vancouver in roughly **25 minutes**.',
        'SkyTrain runs **fully driverless**, and once held the record for the world\'s longest automated rapid transit system.',
        'Three SkyTrain lines and more than **50 stations** cover Metro Vancouver.',
      ],
      images: [
        {
          src: vancouverSkylineMountainsImg,
          alt: 'Towers along Burrard Inlet beneath the snow-dusted North Shore mountains',
          credit: INBOX_CREDIT,
        },
        {
          src: stanleyParkSeawallImg,
          alt: 'The Stanley Park seawall curving between forest and ocean, seen from above',
          credit: INBOX_CREDIT,
        },
        {
          src: lynnCanyonImg,
          alt: 'A suspension bridge through the rainforest at Lynn Canyon in North Vancouver',
          credit: INBOX_CREDIT,
        },
        {
          src: canadaLineTrainImg,
          alt: 'A Canada Line train on its elevated guideway passing the YVR control tower',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
