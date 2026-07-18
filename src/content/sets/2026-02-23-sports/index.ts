import { defineSet } from '../../schema'
import daviesSmilingImg from './alphonso-davies-smiling.webp'
import daviesImg from './alphonso-davies.webp'
import bcPlaceImg from './bc-place-world-cup.webp'
import bilodeauImg from './bilodeau-gold.webp'
import bmoFieldImg from './bmo-field.webp'
import fifaTeamImg from './canadian-fifa-team.webp'
import hockeyWinImg from './canadian-hockey-win.webp'
import howeImg from './gordie-howe.webp'
import gretzkyPortraitImg from './gretzky-portrait.webp'
import gretzkyRangersImg from './gretzky-rangers.webp'
import gretzkyStatueImg from './gretzky-statue.webp'
import victoryCeremonyImg from './hockey-victory-ceremony.webp'
import davidImg from './jonathan-david.webp'
import lacrosseImg from './lacrosse-goalie.webp'
import lacrosseTeamsImg from './lacrosse-teams-usa-vs-canada.webp'
import olympicCanadaTeamImg from './olympic-canada-team.webp'
import cauldronImg from './olympic-cauldron.webp'
import olympicFansImg from './olympic-fans-cheering.webp'
import olympicHockeyImg from './olympic-hockey-game.webp'
import outdoorRinkImg from './outdoor-rink-fort-chipewyan.webp'
import pondHockeyImg from './pond-hockey.webp'
import streetCelebrationImg from './street-celebration.webp'
import gretzkyNumberImg from './wayne-gretzky-number.webp'
import gretzkyPointsImg from './wayne-gretzky-points.webp'

export default defineSet({
  slug: 'sports',
  date: '2026-02-23',
  title: 'Sports: Canada\'s Home Field Advantage',
  topic: 'sports',
  slides: [
    {
      heading: 'Three\'s company',
      facts: [
        'The 2026 World Cup is the first ever hosted by **three countries**: Canada, the United States, and Mexico.',
        'Canada is hosting men\'s World Cup matches for the **first time ever**, in Vancouver and Toronto.',
        'The field expanded to **48 teams**, up from 32, making this the largest World Cup ever played.',
        '**Alphonso Davies** and **Jonathan David** headline the Canadian squad.',
      ],
      images: [
        {
          src: bcPlaceImg,
          alt: 'The interior of BC Place in Vancouver, red seats around a green pitch, before a Canada match',
          credit: 'Aeacad, CC0, via Wikimedia Commons',
        },
        {
          src: daviesImg,
          alt: 'Alphonso Davies in a black and red Canada warm-up shirt on the pitch',
          credit: 'Bryan Berlin, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: davidImg,
          alt: 'Jonathan David in Canada\'s number 10 shirt during a World Cup match',
          credit: 'Bryan Berlin, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: bmoFieldImg,
          alt: 'The exterior of BMO Field in Toronto under a clear sky',
          credit: 'Wladyslaw, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: fifaTeamImg,
        },
        {
          src: daviesSmilingImg,
        },
      ],
    },
    {
      heading: 'Going for gold in Vancouver',
      facts: [
        'Canada won **14 gold medals** at the 2010 Vancouver Olympics, a Winter Games record at the time.',
        'That broke the old record of **13**, shared by the Soviet Union in 1976 and Norway in 2002; Norway has since taken it back.',
        'Alexandre Bilodeau\'s moguls win was the **first gold Canada ever won on home soil**, after hosting in 1976 and 1988.',
        'Canada was the first host nation to top the Winter Olympic gold count since **Norway in 1952**.',
      ],
      images: [
        {
          src: cauldronImg,
          alt: 'The Vancouver 2010 Olympic cauldron burning in downtown Vancouver at dusk',
          credit: 'Anthonymaw, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: bilodeauImg,
          alt: 'Alexandre Bilodeau\'s gold medal ceremony shown on a large screen, captioned Gold Men\'s Moguls',
          credit: 'Michael Francis McCarthy, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: olympicHockeyImg,
          alt: 'Canadian and American players skating during an ice hockey game at the 2010 Winter Olympics',
          credit: 'Robert Scoble, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: streetCelebrationImg,
          alt: 'Crowds in hockey jerseys filling a Vancouver street at night to celebrate a gold medal',
          credit: 'Duncan Rawlinson, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: olympicFansImg,
        },
        {
          src: olympicCanadaTeamImg,
        },
      ],
    },
    {
      heading: 'Our game, on grass and on ice',
      facts: [
        'Lacrosse is Canada\'s official national **summer** sport and hockey the official national **winter** sport, both set in law in 1994.',
        'Canada has won more Olympic ice hockey gold medals than any other country, **14** across the men\'s and women\'s tournaments.',
        'Canada\'s men went **50 years** between Olympic hockey golds, from 1952 all the way to 2002.',
        'Canada\'s women won gold at every Olympics from **2002 through 2014**, then again in 2022.',
      ],
      images: [
        {
          src: lacrosseImg,
          alt: 'A goalie in a Canada national indoor lacrosse jersey guarding the net',
          credit: 'RicLaf, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: pondHockeyImg,
          alt: 'Players skating on a cleared outdoor pond rink beside snow-covered houses',
          credit: 'Laslovarga, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: victoryCeremonyImg,
          alt: 'Fans in red filling an arena for the Olympic ice hockey victory ceremony in Vancouver',
          credit: 's.yume, CC BY 2.0, via Wikimedia Commons',
        },
        {
          src: outdoorRinkImg,
          alt: 'A black and white photo of a hockey game on an outdoor rink at Fort Chipewyan, Alberta',
          credit: 'Provincial Archives of Alberta, no known copyright restrictions, via Wikimedia Commons',
        },
        {
          src: lacrosseTeamsImg,
        },
        {
          src: hockeyWinImg,
        },
      ],
    },
    {
      heading: 'The Great One',
      facts: [
        'Wayne Gretzky has **more career assists** than any other player in NHL history has total points.',
        'He retired in 1999 holding **61 NHL records**, including the only 200-point seasons ever played.',
        'His **99** is retired league-wide, the one number no NHL player is allowed to wear.',
        'He wanted **#9** for his hero Gordie Howe, but a junior teammate already had it, so he doubled up.',
      ],
      images: [
        {
          src: gretzkyRangersImg,
          alt: 'Wayne Gretzky skating in a New York Rangers jersey',
          credit: 'Håkan Dahlström, CC BY-SA 3.0, via Wikimedia Commons',
        },
        {
          src: gretzkyStatueImg,
          alt: 'A bronze statue of Wayne Gretzky raising the Stanley Cup outside the Wayne Gretzky Centre in Brantford',
          credit: 'Jfvoll, CC BY-SA 4.0, via Wikimedia Commons',
        },
        {
          src: gretzkyPortraitImg,
          alt: 'A portrait of Wayne Gretzky wearing a black jacket and a Turin 2006 lanyard',
          credit: 'Kris Krüg, CC BY-SA 2.0, via Wikimedia Commons',
        },
        {
          src: howeImg,
          alt: 'Gordie Howe standing at a rink holding a paper cup',
          credit: 'Arnie Lee, CC BY 3.0, via Wikimedia Commons',
        },
        {
          src: gretzkyPointsImg,
        },
        {
          src: gretzkyNumberImg,
        },
      ],
    },
  ],
})
