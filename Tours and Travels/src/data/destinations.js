import { images } from "./images";

export const destinations = [
  {
    slug: "kathmandu",
    name: "Kathmandu",
    tagline: "Courtyards, stupas, and a city that still trades",
    summary:
      "Three former kingdoms sit within a short drive of one another. The valley is the right place to begin, recover, or spend a trip entirely on foot.",
    image: images.boudhaCity,
    highlights: ["Boudhanath", "Swayambhunath", "Patan and Bhaktapur"],
    story: [
      "Kathmandu is not a single square. Patan’s courtyards, Bhaktapur’s brick lanes, and the great stupas at Boudha and Swayambhu each keep a different pace.",
      "We plan valley days with a private host, a car when the distances demand it, and long pauses for tea. Evenings stay in Thamel or a quieter neighborhood, depending on how you like to land.",
    ],
  },
  {
    slug: "pokhara",
    name: "Pokhara",
    tagline: "Lake light and a clear view of the Annapurnas",
    summary:
      "Phewa Lake, Sarangkot at dawn, and a walk up to the Peace Pagoda. Pokhara is both a rest stop and a journey of its own.",
    image: images.phewa,
    highlights: ["Phewa Lake", "Sarangkot sunrise", "World Peace Pagoda"],
    story: [
      "On a clear morning the Annapurna skyline sits above the lake as if it were close enough to touch. Most days we start early at Sarangkot, then leave the afternoon open for a boat or a slow lunch in Lakeside.",
      "Pokhara is also the practical gateway to Ghorepani, Ghandruk, and Annapurna Base Camp. A night here before and after a trek makes the altitude change kinder.",
    ],
  },
  {
    slug: "chitwan",
    name: "Chitwan",
    tagline: "River grass, sal forest, and a slower safari",
    summary:
      "Chitwan National Park is a lowland contrast to the mountains: canoe mornings, jeep tracks, and Tharu villages along the buffer zone.",
    image: images.chitwanJungle,
    highlights: ["Jeep safari", "Canoe on the Rapti", "Tharu cultural evening"],
    story: [
      "The park is reached by road from Kathmandu or Pokhara in about five to six hours. Lodges sit outside the core zone, which keeps the evenings quiet and the dawn starts simple.",
      "A well-paced visit is two nights. That allows a canoe, a walking excursion with a naturalist, and a jeep safari without turning wildlife into a checklist.",
    ],
  },
  {
    slug: "everest",
    name: "Everest",
    tagline: "Khumbu trails, Namche, and the base of the mountain",
    summary:
      "The Everest region is a high valley of stone villages, prayer flags, and a classic walk to the base of the world’s highest peak.",
    image: images.everest,
    highlights: ["Lukla flight", "Namche Bazaar", "Everest Base Camp"],
    story: [
      "The route begins with a short mountain flight to Lukla and a steady walk up the Dudh Koshi. Namche Bazaar is the acclimatization town; Tengboche, Dingboche, and Lobuche follow as the air thins.",
      "Everest Base Camp is a trek, not a climb. We build in rest days, use teahouses, and keep groups small so the pace can change if someone needs another night at the same village.",
    ],
  },
  {
    slug: "annapurna",
    name: "Annapurna",
    tagline: "Machapuchare, rhododendron forest, and Poon Hill",
    summary:
      "From a short Poon Hill sunrise walk to the sanctuary at Annapurna Base Camp, this region mixes villages, forest, and a famous amphitheater of peaks.",
    image: images.annapurna,
    highlights: ["Poon Hill", "Ghandruk", "Annapurna Base Camp"],
    story: [
      "The Annapurna foothills are greener and more populated than Khumbu. Stone steps pass farms, Gurung villages, and stands of rhododendron before the trail enters the sanctuary.",
      "Travelers who want the view without a long trek stop at Ghorepani and Poon Hill. Those heading to base camp continue through Chhomrong into the narrower valley beneath Machapuchare.",
    ],
  },
];

export function getDestination(slug) {
  return destinations.find((item) => item.slug === slug);
}
