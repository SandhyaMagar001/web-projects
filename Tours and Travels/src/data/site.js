export const company = {
  name: "Himalaya Crest",
  tagline: "Nepal journeys",
  phoneDisplay: "+977 1 452 0180",
  phoneTel: "+97714520180",
  whatsapp: "9779851012345",
  email: "journeys@himalayacrest.example",
  address: "Durbar Marg, Kathmandu 44600, Nepal",
  hours: "Sunday–Friday, 9:00–18:00 NPT",
  established: "2008",
};

export function whatsappLink(message) {
  const text = encodeURIComponent(
    message ||
      "Hello Himalaya Crest, I would like to plan a journey in Nepal.",
  );
  return `https://wa.me/${company.whatsapp}?text=${text}`;
}

export const navLinks = [
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export const tripTypes = ["Culture", "Leisure", "Wildlife", "Trek", "Circuit"];

export const budgetOptions = [
  { value: "any", label: "Any budget" },
  { value: "400", label: "Under $400" },
  { value: "800", label: "Under $800" },
  { value: "1500", label: "Under $1,500" },
];

export const durationOptions = [
  { value: "any", label: "Any length" },
  { value: "5", label: "Up to 5 days" },
  { value: "8", label: "Up to 8 days" },
  { value: "14", label: "Up to 14 days" },
];

export const services = [
  {
    title: "Private guiding",
    text: "Licensed English-speaking leaders for city days, safaris, and high trails, sized to your group.",
  },
  {
    title: "Permits & logistics",
    text: "TIMS cards, national-park tickets, teahouse holds, and domestic flight seats arranged before you land.",
  },
  {
    title: "Heritage hosting",
    text: "Unhurried walks through Kathmandu, Patan, and Bhaktapur with time for courtyards, not just checklists.",
  },
  {
    title: "Jungle safaris",
    text: "Jeep, canoe, and walking outings in Chitwan with naturalists who know the buffer-zone villages.",
  },
  {
    title: "Airport care",
    text: "Meet-and-greet at Tribhuvan, hotel transfers, and a clear briefing the evening you arrive.",
  },
  {
    title: "Tailored routes",
    text: "Combine valley culture, Pokhara rest days, and a trek without packing three trips into one.",
  },
];

export const stats = [
  { value: "18", label: "Years planning Nepal routes" },
  { value: "8", label: "Signature departures" },
  { value: "5", label: "Regions we host in person" },
  { value: "2–12", label: "Guests on a private departure" },
];

export const values = [
  {
    title: "Small on purpose",
    text: "Departures stay small so lodges, jeeps, and trail days remain comfortable.",
  },
  {
    title: "Local leadership",
    text: "Guides and porters are employed for the season, not assembled the night before a flight to Lukla.",
  },
  {
    title: "Clear pricing",
    text: "Sample rates show what is included. International flights and insurance stay outside the quote.",
  },
  {
    title: "Room to change pace",
    text: "Acclimatization days and rest mornings are part of the plan, not an upsell.",
  },
];
