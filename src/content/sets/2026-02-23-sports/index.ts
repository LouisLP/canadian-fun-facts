import { defineSet, INBOX_CREDIT } from '../../schema'
import alphonsoDaviesSmilingImg from './alphonso-davies-smiling.webp'
import bcPlaceImg from './bc-place.webp'
import canadianFifaTeamImg from './canadian-fifa-team.webp'
import canadianHockeyWinImg from './canadian-hockey-win.webp'
import crosbyGoldenGoalImg from './crosby-golden-goal.webp'
import gretzkyOilersImg from './gretzky-oilers.webp'
import howeAndGretzkyImg from './howe-and-gretzky.webp'
import jonathanDavidImg from './jonathan-david.webp'
import lacrosseTeamsUsaVsCanadaImg from './lacrosse-teams-usa-vs-canada.webp'
import olympicCanadaTeamImg from './olympic-canada-team.webp'
import olympicCauldronImg from './olympic-cauldron.webp'
import olympicFansCheeringImg from './olympic-fans-cheering.webp'
import pondHockeyImg from './pond-hockey.webp'
import wayneGretzkyNumberImg from './wayne-gretzky-number.webp'
import wayneGretzkyPointsImg from './wayne-gretzky-points.webp'
import womenHockeyGoldImg from './women-hockey-gold.webp'

export default defineSet({
  slug: 'sports',
  date: '2026-02-23',
  title: 'Sports: Home Field Advantage',
  topic: 'sports',
  slides: [
    {
      heading: 'Three\'s company',
      facts: [
        'The 2026 World Cup is the first ever hosted by **three countries**: Canada, the United States, and Mexico.',
        'Canada hosts men\'s World Cup matches for the **first time ever**, in Toronto and at BC Place in my hometown, Vancouver.',
        'The field grew to **48 teams**, up from 32; **Alphonso Davies** and Jonathan David headline Canada\'s squad.',
      ],
      images: [
        {
          src: bcPlaceImg,
          alt: 'Aerial view of BC Place stadium in Vancouver at night, its roof lit blue among the downtown towers',
          credit: INBOX_CREDIT,
        },
        {
          src: jonathanDavidImg,
          alt: 'Jonathan David in Canada\'s red number 10 shirt, gesturing after scoring',
          credit: INBOX_CREDIT,
        },
        {
          src: canadianFifaTeamImg,
          alt: 'Canada\'s men\'s soccer team in white kits posing for a team photo on the pitch before a World Cup match',
          credit: INBOX_CREDIT,
        },
        {
          src: alphonsoDaviesSmilingImg,
          alt: 'Alphonso Davies smiling with both hands raised, in a black Canada number 19 shirt',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Going for gold in Vancouver',
      facts: [
        'Canada won **14 gold medals** at the 2010 Olympics in my hometown, Vancouver, a Winter Games record at the time.',
        'Alexandre Bilodeau\'s moguls win was the **first gold Canada ever won on home soil**, after hosting in 1976 and 1988.',
        'Gold number 14 came last: Sidney Crosby\'s overtime **golden goal** against the United States.',
      ],
      images: [
        {
          src: olympicCauldronImg,
          alt: 'The Vancouver 2010 Olympic cauldron alight on the waterfront, mountains behind',
          credit: INBOX_CREDIT,
        },
        {
          src: crosbyGoldenGoalImg,
          alt: 'Sidney Crosby in a white Canada jersey shouting with his arms spread after scoring the 2010 golden goal',
          credit: INBOX_CREDIT,
        },
        {
          src: olympicFansCheeringImg,
          alt: 'A fan in a Canada hockey jersey holding a Canada scarf overhead in a cheering crowd dressed in red',
          credit: INBOX_CREDIT,
        },
        {
          src: olympicCanadaTeamImg,
          alt: 'Team Canada athletes in red jackets and toques at an Olympic ceremony, one waving a large Canadian flag',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'Our game, on grass and on ice',
      facts: [
        'Lacrosse is Canada\'s official national **summer** sport and hockey the official national **winter** sport, both set in law in 1994.',
        'Canada has won more Olympic ice hockey gold medals than any other country, **14** across the men\'s and women\'s tournaments.',
        'Canada\'s women won gold at every Olympics from **2002 through 2014**, then again in 2022.',
      ],
      images: [
        {
          src: womenHockeyGoldImg,
          alt: 'Canada\'s women\'s hockey team in red, cheering with their gold medals at the 2022 Olympics',
          credit: INBOX_CREDIT,
        },
        {
          src: pondHockeyImg,
          alt: 'Skaters playing pond hockey on frozen Lake Louise beneath snow-covered mountains',
          credit: INBOX_CREDIT,
        },
        {
          src: lacrosseTeamsUsaVsCanadaImg,
          alt: 'Canadian players in red and American players in white battling for the ball in a box lacrosse game',
          credit: INBOX_CREDIT,
        },
        {
          src: canadianHockeyWinImg,
          alt: 'Team Canada hockey players in red celebrating on the ice, the captain lifting a trophy as fireworks go off',
          credit: INBOX_CREDIT,
        },
      ],
    },
    {
      heading: 'The Great One',
      facts: [
        'Wayne Gretzky has **more career assists** than any other player in NHL history has total points.',
        'His **99** is retired league-wide, the one number no NHL player is allowed to wear.',
        'He wanted **#9** for his hero Gordie Howe, but a junior teammate already had it, so he doubled up.',
      ],
      images: [
        {
          src: gretzkyOilersImg,
          alt: 'Wayne Gretzky skating in a blue Edmonton Oilers jersey with the captain\'s C',
          credit: INBOX_CREDIT,
        },
        {
          src: howeAndGretzkyImg,
          alt: 'Gordie Howe playfully hooking a young Wayne Gretzky around the neck with a hockey stick',
          credit: INBOX_CREDIT,
        },
        {
          src: wayneGretzkyPointsImg,
          alt: 'A graphic ranking the players with the most points in NHL history, Gretzky first with 2857, beside a photo of him in an Oilers jersey',
          credit: INBOX_CREDIT,
        },
        {
          src: wayneGretzkyNumberImg,
          alt: 'Wayne Gretzky seen from behind in a blue New York Rangers jersey with his name and the number 99',
          credit: INBOX_CREDIT,
        },
      ],
    },
  ],
})
