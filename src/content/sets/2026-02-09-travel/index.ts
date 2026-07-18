import { defineSet } from '../../schema'
import canadaLineImg from './canada-line-train.webp'
import timeZonesImg from './canada-time-zones.webp'
import capeSpearImg from './cape-spear.webp'
import cathedralGroveImg from './cathedral-grove.webp'
import steamClockImg from './gastown-steam-clock.webp'
import jadeCanoePortImg from './jade-canoe-port-side.webp'
import jadeCanoeImg from './jade-canoe.webp'
import rowhousesImg from './st-johns-rowhouses.webp'
import seawallImg from './stanley-park-seawall.webp'
import skylineImg from './vancouver-skyline-mountains.webp'
import aerialImg from './yvr-aerial-sunset.webp'
import concourseImg from './yvr-concourse-d.webp'
import terminalImg from './yvr-international-terminal.webp'
import lufthansaImg from './yvr-lufthansa-747.webp'
import totemTowerImg from './yvr-totem-control-tower.webp'
import totemPoleImg from './yvr-totem-pole.webp'

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
        'No airport has won Best in North America more often: Vancouver has taken it in **15 of the last 17 years**.',
        'A **free public observation area** on Level 4 of the domestic terminal lets people without a ticket watch planes take off and land.',
        'The international terminal holds a **114,000-litre aquarium** stocked with more than 5,000 sea creatures, plus indoor streams and waterfalls.',
      ],
      images: [
        {
          src: aerialImg,
          alt: 'Aerial view of Vancouver International Airport at sunset, seen from a passing aircraft window',
          credit: 'Shawn from Airdrie, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: terminalImg,
          alt: 'An indoor landscape of rocks, logs and running water inside YVR\'s international terminal',
          credit: 'Wpcpey, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: lufthansaImg,
          alt: 'A Lufthansa Boeing 747 on the tarmac at YVR with snow-capped mountains behind it',
          credit: 'Shwangtianyuan, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: concourseImg,
          alt: 'A moving walkway running down a wide, sunlit concourse at Vancouver International Airport',
          credit: 'Sunnya343, CC BY-SA 4.0, via Wikimedia Commons',
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
          alt: 'The Spirit of Haida Gwaii bronze canoe sculpture filled with figures, in the airport terminal',
          credit: 'Tony Hisgett, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: jadeCanoePortImg,
          alt: 'The port side of the Jade Canoe sculpture, with two visitors standing beside it for scale',
          credit: 'D. Gordon E. Robertson, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: totemPoleImg,
          alt: 'A tall carved pole rising through the glass-walled Graham Clarke Atrium at YVR',
          credit: 'FaysaLBinDaruL, CC BY 4.0, via Wikimedia Commons',
        },
        {
          src: totemTowerImg,
          alt: 'The winged top of a carved pole inside the airport atrium, with the control tower visible through the glass',
          credit: 'Adam Jones, CC BY-SA 2.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Six ways to be late',
      facts: [
        'Canada spans **six time zones**, so a domestic flight can hand out jet lag without ever crossing a border.',
        'Newfoundland sits **half an hour** off everyone else at UTC-3:30, the only active half-hour zone in the Americas.',
        'Vancouver to St. John\'s means moving the clock **four and a half hours**.',
        '**Cape Spear**, Newfoundland is the easternmost point of North America and catches the sunrise before anywhere else in the country.',
      ],
      images: [
        {
          src: timeZonesImg,
          alt: 'Map of Canada shaded into its six time zones with UTC offsets labelled',
          credit: 'Mappify, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: capeSpearImg,
          alt: 'The lighthouse at Cape Spear, Newfoundland, on a rocky headland above the Atlantic',
          credit: 'Tony Kocurko, CC BY 3.0, via Wikimedia Commons',
        },
        {
          src: rowhousesImg,
          alt: 'Brightly painted row houses on a street in St. John\'s, Newfoundland',
          credit: 'Mike from Vancouver, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: steamClockImg,
          alt: 'The Gastown steam clock in Vancouver venting steam from its pipes',
          credit: 'Dietmar Rabich, CC BY-SA 4.0, via Wikimedia Commons',
        },
      ],
    },
    {
      heading: 'Mountains on the meter',
      facts: [
        'From YVR, the Pacific Ocean, the North Shore mountains, and temperate rainforest all sit within about **45 minutes**.',
        'The **Canada Line** connects the airport to downtown Vancouver in roughly **25 minutes**.',
        'SkyTrain runs **fully driverless**, and once held the record for the world\'s longest automated rapid transit system.',
        'Three SkyTrain lines and more than **50 stations** cover Metro Vancouver, though the network still trails most European cities.',
      ],
      images: [
        {
          src: skylineImg,
          alt: 'Downtown Vancouver\'s towers with the snow-capped North Shore mountains rising behind',
          credit: 'Kyle Pearce, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: seawallImg,
          alt: 'Cyclists and walkers on the Stanley Park seawall beside a marina, with the city across the water',
          credit: 'GoToVan, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: cathedralGroveImg,
          alt: 'Old-growth Douglas firs in Cathedral Grove on Vancouver Island',
          credit: 'Kevstan, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: canadaLineImg,
          alt: 'A Canada Line SkyTrain crossing an elevated guideway with mountains in the distance',
          credit: 'Tim Wu, CC BY-SA 4.0, via Wikimedia Commons',
        },
      ],
    },
  ],
})
