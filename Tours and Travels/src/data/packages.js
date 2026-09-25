import { images } from "./images";

const cultureStay = ["Twin-share hotel", "Daily breakfast", "Private guide and vehicle on touring days", "Monument entry fees listed in the itinerary", "Airport or hotel transfers in Kathmandu"];
const cultureOut = ["International flights", "Travel insurance", "Lunches and dinners unless noted", "Tips and personal expenses"];

export const packages = [
  {
    slug: "kathmandu-heritage",
    title: "Kathmandu Heritage",
    destination: "kathmandu",
    regions: ["kathmandu"],
    region: "Kathmandu Valley",
    type: "Culture",
    durationDays: 3,
    duration: "3 days",
    price: 240,
    groupSize: "2–8",
    difficulty: "Easy",
    season: "Year-round",
    featured: true,
    image: images.boudha,
    gallery: [images.boudha, images.boudhaCity, images.swayambhu, images.boudhaDusk],
    summary:
      "A compact valley journey through Boudhanath, Swayambhunath, Patan, and Bhaktapur, paced for first-time visitors who want context rather than a rush of temples.",
    highlights: ["Boudhanath at dusk", "Swayambhunath", "Patan Durbar Square", "Bhaktapur brick lanes"],
    includes: cultureStay,
    excludes: cultureOut,
    itinerary: [
      { day: 1, title: "Arrival and Boudhanath", text: "Airport greeting, hotel check-in, and an evening circuit of Boudhanath as butter lamps are lit." },
      { day: 2, title: "Kathmandu and Patan", text: "Swayambhunath in the morning, then Patan Durbar Square and a courtyard walk with your host." },
      { day: 3, title: "Bhaktapur and departure", text: "Morning in Bhaktapur’s squares and potter’s square, then a transfer to the airport or onward hotel." },
    ],
  },
  {
    slug: "pokhara-lakeside",
    title: "Pokhara Lakeside Retreat",
    destination: "pokhara",
    regions: ["pokhara"],
    region: "Pokhara",
    type: "Leisure",
    durationDays: 4,
    duration: "4 days",
    price: 420,
    groupSize: "2–8",
    difficulty: "Easy",
    season: "October–May",
    featured: true,
    image: images.phewa,
    gallery: [images.phewa, images.phewaSunset, images.annapurna, images.highRange],
    summary:
      "Four unhurried days by Phewa Lake: a Sarangkot sunrise, a boat to the lakeshore, and time to watch the Annapurna skyline without a trekking schedule.",
    highlights: ["Sarangkot sunrise", "Phewa boat", "World Peace Pagoda", "Davis Falls and Gupteshwor"],
    includes: ["Twin-share lakeside hotel", "Daily breakfast", "Private car and guide", "Sarangkot and sightseeing entries", "Pokhara airport or bus-park transfers"],
    excludes: cultureOut,
    itinerary: [
      { day: 1, title: "Arrive Pokhara", text: "Scenic drive or short flight from Kathmandu. Evening walk along Lakeside as the ridges fade." },
      { day: 2, title: "Sarangkot and the ridge", text: "Pre-dawn transfer for sunrise over Machapuchare, then Davis Falls and the Gupteshwor cave on the way down." },
      { day: 3, title: "Lake and Peace Pagoda", text: "Boat across Phewa, a walk up to the World Peace Pagoda, and an open afternoon." },
      { day: 4, title: "Departure", text: "Breakfast and a transfer to Pokhara airport or the tourist bus for Kathmandu or Chitwan." },
    ],
  },
  {
    slug: "chitwan-safari",
    title: "Chitwan Jungle Safari",
    destination: "chitwan",
    regions: ["chitwan"],
    region: "Chitwan",
    type: "Wildlife",
    durationDays: 3,
    duration: "3 days",
    price: 310,
    groupSize: "2–6",
    difficulty: "Easy",
    season: "October–March",
    featured: true,
    image: images.rhino,
    gallery: [images.rhino, images.chitwanSafari, images.chitwanJungle],
    summary:
      "Two nights beside Chitwan National Park with a canoe on the Rapti, a walking excursion, a jeep safari, and an evening in a Tharu village.",
    highlights: ["Greater one-horned rhino habitat", "Canoe on the Rapti", "Jeep safari", "Tharu village evening"],
    includes: ["Jungle lodge, twin share", "All meals at the lodge", "Park fees and naturalist", "Canoe, walk, and jeep activities", "Shared road transfers from Kathmandu"],
    excludes: ["International flights", "Travel insurance", "Drinks and tips", "Private vehicle upgrade"],
    itinerary: [
      { day: 1, title: "Drive to Chitwan", text: "Morning departure from Kathmandu. Lodge arrival, a village walk, and a Tharu cultural program after dinner." },
      { day: 2, title: "River and jungle", text: "Canoe at first light, a guided walk in the buffer zone, and an afternoon jeep safari inside the park." },
      { day: 3, title: "Birding and return", text: "Optional birding from the riverbank, then the drive back to Kathmandu or on to Pokhara." },
    ],
  },
  {
    slug: "everest-base-camp",
    title: "Everest Base Camp",
    destination: "everest",
    regions: ["everest", "kathmandu"],
    region: "Everest",
    type: "Trek",
    durationDays: 14,
    duration: "14 days",
    price: 1640,
    groupSize: "2–10",
    difficulty: "Challenging",
    season: "March–May, September–November",
    featured: true,
    image: images.everest,
    gallery: [images.everest, images.everestNamche, images.namche, images.hero, images.trekkers],
    summary:
      "The classic teahouse route from Lukla to Everest Base Camp and Kala Patthar, with two acclimatization days and a Kathmandu buffer on either side.",
    highlights: ["Lukla flight", "Namche acclimatization", "Tengboche monastery", "Everest Base Camp", "Kala Patthar sunrise"],
    includes: ["Kathmandu hotel, twin share, two nights", "Teahouse lodging on the trek", "Breakfast, lunch, and dinner on trek days", "Sagarmatha permit and TIMS", "Guide, porter, and Lukla flights"],
    excludes: ["International flights", "Travel insurance", "Kathmandu lunches and dinners", "Sleeping bag and down jacket rental", "Tips"],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", text: "Transfer, briefing, and a gear check. Overnight in the city at 1,400 m." },
      { day: 2, title: "Fly to Lukla, trek to Phakding", text: "Mountain flight to Lukla at 2,840 m and a gentle walk to Phakding at 2,610 m." },
      { day: 3, title: "To Namche Bazaar", text: "Cross the Dudh Koshi and climb to Namche Bazaar at 3,440 m." },
      { day: 4, title: "Namche rest day", text: "Acclimatization hike toward Everest View, then a free afternoon in the market." },
      { day: 5, title: "To Tengboche", text: "Trail through Phunki Tenga to Tengboche monastery at 3,860 m." },
      { day: 6, title: "To Dingboche", text: "Descend to the river, then climb into the Imja valley and Dingboche at 4,410 m." },
      { day: 7, title: "Dingboche rest day", text: "A higher walk toward Nangkartshang for acclimatization, then rest." },
      { day: 8, title: "To Lobuche", text: "Pass the memorials at Thukla and reach Lobuche at 4,940 m." },
      { day: 9, title: "Everest Base Camp", text: "Walk to Gorak Shep and on to Everest Base Camp at 5,364 m. Sleep at Gorak Shep." },
      { day: 10, title: "Kala Patthar, then Pheriche", text: "Sunrise from Kala Patthar at 5,545 m and a long descent to Pheriche." },
      { day: 11, title: "To Namche Bazaar", text: "Retrace the trail through Tengboche to Namche." },
      { day: 12, title: "To Lukla", text: "Final trekking day down to Lukla." },
      { day: 13, title: "Fly to Kathmandu", text: "Morning flight when weather allows, with a spare buffer built into the schedule." },
      { day: 14, title: "Departure", text: "Transfer to the international airport, or extra nights if you want the valley after the trek." },
    ],
  },
  {
    slug: "annapurna-base-camp",
    title: "Annapurna Base Camp",
    destination: "annapurna",
    regions: ["annapurna", "pokhara"],
    region: "Annapurna",
    type: "Trek",
    durationDays: 11,
    duration: "11 days",
    price: 1280,
    groupSize: "2–10",
    difficulty: "Challenging",
    season: "March–May, October–November",
    featured: true,
    image: images.annapurna,
    gallery: [images.annapurna, images.abc, images.trekkers, images.phewa],
    summary:
      "A village-to-sanctuary trek beneath Machapuchare, with Pokhara on either side and a night in the amphitheater at Annapurna Base Camp.",
    highlights: ["Ghandruk village", "Chhomrong", "Machapuchare views", "Annapurna Base Camp", "Jhinu hot springs"],
    includes: ["Pokhara and Kathmandu hotels as listed", "Teahouse lodging and meals on the trek", "ACAP permit and TIMS", "Guide and porter", "Ground transport to the trailhead"],
    excludes: ["International flights", "Travel insurance", "City meals", "Hot-shower charges in teahouses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", text: "Briefing and overnight in the city." },
      { day: 2, title: "To Pokhara", text: "Drive or fly west. Evening by Phewa Lake." },
      { day: 3, title: "Nayapul to Ghandruk", text: "Drive to the trailhead and walk up to the Gurung village of Ghandruk." },
      { day: 4, title: "To Chhomrong", text: "Contour through forest and cross toward Chhomrong, the last large village." },
      { day: 5, title: "To Himalaya", text: "Descend to the Modi Khola and climb into bamboo forest at Himalaya." },
      { day: 6, title: "To Deurali", text: "The valley narrows. Overnight at Deurali below the sanctuary gate." },
      { day: 7, title: "Annapurna Base Camp", text: "Enter the sanctuary and reach base camp at about 4,130 m." },
      { day: 8, title: "Descend to Bamboo", text: "Sunrise among the peaks, then a long walk down to Bamboo." },
      { day: 9, title: "To Jhinu Danda", text: "Continue out to Jhinu and the riverside hot springs." },
      { day: 10, title: "Drive to Pokhara", text: "Short walk to the road and a drive back to the lake." },
      { day: 11, title: "Departure", text: "Fly or drive to Kathmandu for your onward flight." },
    ],
  },
  {
    slug: "poon-hill",
    title: "Ghorepani Poon Hill",
    destination: "annapurna",
    regions: ["annapurna", "pokhara"],
    region: "Annapurna",
    type: "Trek",
    durationDays: 5,
    duration: "5 days",
    price: 620,
    groupSize: "2–12",
    difficulty: "Moderate",
    season: "October–May",
    featured: true,
    image: images.ridge,
    gallery: [images.ridge, images.annapurna, images.trekkers, images.phewaSunset],
    summary:
      "A short Annapurna foothill trek for travelers who want stone villages, a famous sunrise, and a return to Pokhara within five days.",
    highlights: ["Ulleri staircase", "Ghorepani", "Poon Hill sunrise", "Ghandruk"],
    includes: ["Two Pokhara hotel nights", "Teahouse lodging and meals on the trek", "ACAP permit and TIMS", "Guide and porter", "Trailhead transfers"],
    excludes: ["International flights", "Travel insurance", "Pokhara meals", "Tips"],
    itinerary: [
      { day: 1, title: "Kathmandu to Pokhara", text: "Travel west and settle by the lake." },
      { day: 2, title: "Nayapul to Tikhedhunga", text: "Drive to Nayapul and walk the riverside trail to Tikhedhunga." },
      { day: 3, title: "To Ghorepani", text: "The long stone stair through Ulleri, then rhododendron forest into Ghorepani." },
      { day: 4, title: "Poon Hill and Ghandruk", text: "Sunrise from Poon Hill at 3,210 m, then a walk across to Ghandruk." },
      { day: 5, title: "Back to Pokhara", text: "Descend to the road and return to Pokhara for departure or extra nights." },
    ],
  },
  {
    slug: "classic-circuit",
    title: "Kathmandu, Pokhara and Chitwan",
    destination: "kathmandu",
    regions: ["kathmandu", "pokhara", "chitwan"],
    region: "Nepal circuit",
    type: "Circuit",
    durationDays: 8,
    duration: "8 days",
    price: 980,
    groupSize: "2–8",
    difficulty: "Moderate",
    season: "October–May",
    featured: false,
    image: images.phewaSunset,
    gallery: [images.boudhaCity, images.phewa, images.rhino, images.swayambhu],
    summary:
      "The classic first journey: heritage in the valley, two lake days in Pokhara, and a safari night in Chitwan before you fly home.",
    highlights: ["Valley monuments", "Phewa and Sarangkot", "Chitwan safari", "Private road transfers"],
    includes: ["Twin-share hotels and jungle lodge", "Breakfast daily, all meals in Chitwan", "Private guide and vehicle", "Listed entries and one safari program", "Kathmandu airport transfers"],
    excludes: cultureOut.concat(["Domestic flights"]),
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", text: "Greeting, transfer, and an evening stroll around Boudhanath." },
      { day: 2, title: "Valley heritage", text: "Swayambhunath and Patan with a private host." },
      { day: 3, title: "Drive to Pokhara", text: "Overland along the Prithvi Highway. Evening in Lakeside." },
      { day: 4, title: "Pokhara day", text: "Sarangkot sunrise, the lake, and the Peace Pagoda." },
      { day: 5, title: "To Chitwan", text: "Drive south to the park lodge and a village introduction." },
      { day: 6, title: "Safari day", text: "Canoe, nature walk, and jeep safari." },
      { day: 7, title: "Return to Kathmandu", text: "Morning activity if time allows, then the drive back to the valley." },
      { day: 8, title: "Departure", text: "Breakfast and airport transfer." },
    ],
  },
  {
    slug: "nagarkot-sunrise",
    title: "Nagarkot and Bhaktapur",
    destination: "kathmandu",
    regions: ["kathmandu"],
    region: "Kathmandu Valley",
    type: "Culture",
    durationDays: 2,
    duration: "2 days",
    price: 180,
    groupSize: "2–8",
    difficulty: "Easy",
    season: "October–May",
    featured: false,
    image: images.swayambhu,
    gallery: [images.swayambhu, images.boudha, images.highRange],
    summary:
      "One night on the valley rim at Nagarkot for a Himalayan sunrise, with a morning in Bhaktapur on the way back to Kathmandu.",
    highlights: ["Nagarkot sunrise", "Bhaktapur Durbar Square", "Valley rim walk"],
    includes: ["One night Nagarkot hotel", "Breakfast", "Private car and guide", "Bhaktapur entry"],
    excludes: cultureOut,
    itinerary: [
      { day: 1, title: "Kathmandu to Nagarkot", text: "Afternoon drive to the ridge. Sunset view if the sky is clear." },
      { day: 2, title: "Sunrise and Bhaktapur", text: "Dawn over the range, then Bhaktapur before returning to Kathmandu." },
    ],
  },
];

export function getPackage(slug) {
  return packages.find((item) => item.slug === slug);
}

export function packagesForDestination(slug) {
  return packages.filter(
    (item) => item.destination === slug || item.regions.includes(slug),
  );
}

export function filterPackages(list, filters) {
  const destination = filters.destination || "all";
  const type = filters.type || "all";
  const budget = filters.budget || "any";
  const days = filters.days || "any";
  const query = (filters.q || "").trim().toLowerCase();

  return list.filter((item) => {
    if (
      destination !== "all" &&
      item.destination !== destination &&
      !item.regions.includes(destination)
    ) {
      return false;
    }
    if (type !== "all" && item.type !== type) return false;
    if (budget !== "any" && item.price > Number(budget)) return false;
    if (days !== "any" && item.durationDays > Number(days)) return false;
    if (query) {
      const haystack = [item.title, item.summary, item.region, item.type, ...item.highlights]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
}
