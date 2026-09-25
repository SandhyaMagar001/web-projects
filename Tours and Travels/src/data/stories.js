import { images } from "./images";

export const testimonials = [
  {
    name: "Elena V.",
    place: "Lisbon",
    trip: "Everest Base Camp",
    quote:
      "The rest days were treated as part of the route, not lost time. Namche felt unrushed, and the base-camp morning was quiet enough to take in.",
  },
  {
    name: "James Okonkwo",
    place: "Lagos",
    trip: "Kathmandu Heritage",
    quote:
      "We were walked through Patan’s courtyards with room to ask questions. It never felt like a monument checklist.",
  },
  {
    name: "Sofia Berg",
    place: "Stockholm",
    trip: "Chitwan Jungle Safari",
    quote:
      "The canoe at dawn was the part I remember. Our naturalist knew when to stop the boat and when to let the river stay still.",
  },
  {
    name: "Haruto Mori",
    place: "Osaka",
    trip: "Pokhara Lakeside Retreat",
    quote:
      "Sarangkot was worth the early start. The rest of the day was deliberately empty, which is what we had asked for.",
  },
];

export const posts = [
  {
    slug: "when-to-walk-in-nepal",
    title: "When to walk in Nepal",
    date: "March 12, 2026",
    read: "6 min",
    image: images.trekkers,
    excerpt:
      "Spring and autumn are the reliable windows. Here is how the months actually feel on the Everest and Annapurna trails.",
    paragraphs: [
      "October and November are the clearest months in both Khumbu and the Annapurna sanctuary. Mornings are cold above 4,000 metres, teahouses fill up, and domestic flights to Lukla are still weather-dependent even when the valley looks perfect.",
      "March through early May is the other strong season. Rhododendron blooms on the Annapurna foothills, and the high passes are usually open. Afternoons can haze over, so sunrise viewpoints matter more than midday photographs.",
      "Winter treks are possible on Poon Hill and the lower Annapurna villages. Everest Base Camp in December and January is a specialist trip: lodges stay open, but the cold at Gorak Shep is the deciding factor.",
      "Monsoon, from June into September, turns trails slick and views brief. Chitwan’s grasslands are lush then, but leeches and swollen rivers make it a poor choice for a first safari. We schedule most mountain departures outside those weeks.",
    ],
  },
  {
    slug: "a-slow-kathmandu-day",
    title: "A slow day in Kathmandu",
    date: "January 8, 2026",
    read: "5 min",
    image: images.boudha,
    excerpt:
      "The valley rewards a short list. One stupa, one square, and a long lunch will show you more than four rushed sites.",
    paragraphs: [
      "Start at Swayambhunath before the steps fill. The monkeys, the shops, and the view across the roofs are easier to read when you are not being moved along.",
      "Cross to Patan after coffee rather than trying to add Bhaktapur to the same morning. Patan’s square is a cluster of courtyards; the interest is in the side lanes, the metalworkers, and the museum if you like detail.",
      "Keep Boudhanath for late afternoon. The kora around the stupa is when the monument makes sense: people walking, shops open, and the white dome catching the last warm light.",
      "If you have only one extra night, sleep in Bhaktapur or Nagarkot instead of adding another Kathmandu neighborhood. Distance in the valley is short, but traffic is not.",
    ],
  },
  {
    slug: "chitwan-morning",
    title: "What a Chitwan morning looks like",
    date: "November 2, 2025",
    read: "4 min",
    image: images.chitwanJungle,
    excerpt:
      "Safari days start in the dark and slow down by lunch. The useful wildlife time is the first few hours.",
    paragraphs: [
      "A typical lodge morning begins with tea before sunrise and a short walk to the canoes on the Rapti. Mist sits on the grass, and the first animals are often birds and deer rather than rhino.",
      "The jeep portion follows, inside the park on set tracks. Sightings are never promised. A good naturalist will still read tracks, alarm calls, and the edge of the grassland.",
      "By late morning the light is hard and most guests return for lunch. The second outing, if you take one, is a walk in the buffer zone rather than a repeat of the same jeep loop.",
      "Two nights is the right minimum. One night gives you a single dawn. The drive from Kathmandu is long enough that rushing back the same afternoon wastes the reason you came.",
    ],
  },
];

export function getPost(slug) {
  return posts.find((item) => item.slug === slug);
}

export const gallery = [
  { src: images.hero, alt: "Stone stupa and prayer flags beneath snow peaks", place: "Everest", caption: "Trail stupa in the high country" },
  { src: images.everest, alt: "Snow peaks under a deep blue sky in the Everest region", place: "Everest", caption: "High peaks above the Khumbu" },
  { src: images.namche, alt: "Namche Bazaar seen from the trail toward Everest View", place: "Everest", caption: "Namche from the Everest View trail" },
  { src: images.boudhaCity, alt: "Aerial view of Boudhanath stupa in Kathmandu", place: "Kathmandu", caption: "Boudhanath from above" },
  { src: images.swayambhu, alt: "Swayambhunath stupa in Kathmandu", place: "Kathmandu", caption: "Swayambhunath" },
  { src: images.phewa, alt: "Phewa Lake and the hills of Pokhara", place: "Pokhara", caption: "Phewa Lake" },
  { src: images.phewaSunset, alt: "Sunset over Phewa Lake in Pokhara", place: "Pokhara", caption: "Evening on Phewa" },
  { src: images.annapurna, alt: "Annapurna South and Machapuchare from Ghandruk", place: "Annapurna", caption: "From Ghandruk" },
  { src: images.abc, alt: "Trail between Machapuchare and Annapurna Base Camp", place: "Annapurna", caption: "Toward the sanctuary" },
  { src: images.rhino, alt: "Greater one-horned rhinoceros in Chitwan National Park", place: "Chitwan", caption: "Rhino country" },
  { src: images.chitwanJungle, alt: "Forest inside Chitwan National Park", place: "Chitwan", caption: "Sal forest" },
  { src: images.trekkers, alt: "Two trekkers walking a mountain path", place: "Annapurna", caption: "On the trail" },
];
