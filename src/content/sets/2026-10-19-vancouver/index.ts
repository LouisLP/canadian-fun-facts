import type { SlideImage } from '../../schema'
import { defineSet } from '../../schema'
import placeholderImg from './placeholder.webp'

// TODO: swap for real photos. Each alt doubles as the shot to find.
function placeholder(shot: string): SlideImage {
  return { src: placeholderImg, alt: `Placeholder: ${shot}`, credit: 'placeholder' }
}

export default defineSet({
  slug: 'vancouver',
  date: '2026-10-19',
  title: 'Vancouver: Wet Coast, Best Coast',
  topic: 'travel',
  slides: [
    {
      heading: 'Raincouver',
      facts: [
        'Everyone calls it **Raincouver**: from November to March the grey drizzle barely lets up, and in October 2016 it rained **28 of 31** days.',
        'Yet Vancouver gets about **1,199 mm** of rain a year, less than Halifax (1,452 mm) or St. John\'s (1,514 mm).',
        'The trade-off: the mildest winters of any big Canadian city, with January averaging about **4°C**, so a few centimetres of snow shuts the town down.',
        'On a clear day, you can ski the North Shore in the morning and walk the beach at English Bay in the afternoon.',
      ],
      images: [
        placeholder('umbrellas on Robson or Granville Street in the rain'),
        placeholder('the Seawall on a grey, drizzly day'),
        placeholder('rain on a window, with the North Shore mountains hidden in cloud'),
        placeholder('downtown skyline under low cloud'),
        placeholder('a rare snow day in the city'),
        placeholder('English Bay beach on a sunny day'),
      ],
    },
    {
      heading: 'Hometown glory',
      facts: [
        'I grew up in **Mount Pleasant**, Vancouver\'s first suburb, where **Brewery Creek** once powered four breweries at a time.',
        '**Stanley Park** covers 405 hectares, a fifth bigger than Central Park, ringed by the **28 km** Seawall, the world\'s longest uninterrupted waterfront path.',
        'It all started in **Gastown** in 1867, with Gassy Jack Deighton, a barrel of whisky and a saloon; the famous steam clock only arrived in 1977.',
        'Three ski hills, **Grouse, Cypress and Seymour**, sit right across the harbour from downtown, and the city lights up below you on a night run.',
        'My hill of choice is **Whistler**, two hours up the Sea-to-Sky Highway: North America\'s biggest ski resort, at **8,171 acres**.',
      ],
      images: [
        placeholder('Main Street in Mount Pleasant'),
        placeholder('aerial of Stanley Park and downtown'),
        placeholder('cyclists and walkers on the Seawall, Lions Gate Bridge behind'),
        placeholder('the Gastown steam clock, steaming'),
        placeholder('city view from the top of Grouse Mountain'),
        placeholder('Whistler Blackcomb ski runs'),
      ],
    },
    {
      heading: 'World\'s fair game',
      facts: [
        'Vancouver incorporated on **6 April 1886**; two months later a land-clearing fire burned the brand-new city almost to the ground.',
        'For its 100th birthday the city threw **Expo 86**, with about **22 million** visits in under six months; my parents still talk about it fondly.',
        '**Canada Place** and its white sails started life as the fair\'s Canada Pavilion, and SkyTrain opened in December 1985 to carry the crowds.',
        'The fair lost about **$311 million**, but left behind landmarks the city still uses every day.',
        '**Greenpeace** was born here: in **1971**, activists sailed a chartered fishing boat out of Vancouver to protest a US nuclear test in Alaska.',
      ],
      images: [
        placeholder('the 1886 photo of city council meeting in a tent after the fire'),
        placeholder('Expo 86 poster or Expo Ernie, the mascot'),
        placeholder('archive crowd shot at Expo 86'),
        placeholder('Canada Place sails from the water'),
        placeholder('Science World dome on False Creek'),
        placeholder('the Greenpeace boat leaving Vancouver in 1971'),
      ],
    },
  ],
})
