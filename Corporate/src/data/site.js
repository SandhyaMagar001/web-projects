export const company = {
  name: 'Shikhar Group',
  legal: 'Shikhar Group Pvt. Ltd.',
  tagline: 'Practical enterprise for Nepal’s next decade.',
  nepali: 'नेपालको अर्को दशकका लागि।',
  founded: 2008,
  email: 'hello@shikhargroup.example',
  phone: '+977 1 4540 220',
  phoneHref: 'tel:+97714540220',
  hours: 'Sunday–Friday, 9:30–17:30 NPT',
  description:
    'Shikhar Group is a Kathmandu-based group working in infrastructure, energy, digital services, and agribusiness across Nepal.',
}

export const images = {
  ridge: {
    src: '/images/ridge.jpg',
    alt: 'A stupa and prayer flags on a ridge, with snow peaks behind',
  },
  trail: {
    src: '/images/road.jpg',
    alt: 'A person standing on a rocky summit above forested ridges',
  },
  build: {
    src: '/images/build.jpg',
    alt: 'A crew in hard hats on a concrete deck above reinforcing steel',
  },
  solar: {
    src: '/images/solar.jpg',
    alt: 'Rows of ground-mounted solar panels in an open field',
  },
  river: {
    src: '/images/river.jpg',
    alt: 'A waterfall dropping into a rocky pool in dense forest',
  },
  field: {
    src: '/images/field.jpg',
    alt: 'A grain field in low evening sun',
  },
  warehouse: {
    src: '/images/warehouse.jpg',
    alt: 'Racks of cartons inside a high-bay warehouse',
  },
  office: {
    src: '/images/office.jpg',
    alt: 'A long office corridor with glass rooms and a kitchen',
  },
}

export const nav = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
]

export const stats = [
  { value: '18', label: 'Years operating from Kathmandu' },
  { value: '40+', label: 'Project packages delivered' },
  { value: '480+', label: 'People on payroll and sites' },
  { value: '6', label: 'Provinces with active work' },
]

export const provinces = ['Bagmati', 'Gandaki', 'Lumbini', 'Koshi', 'Madhesh', 'Karnali']

export const marquee = [
  'Infrastructure',
  'Energy',
  'Digital services',
  'Agribusiness',
  'Kathmandu',
  'Hetauda',
  'Biratnagar',
  'Since 2008',
]

export const services = [
  {
    slug: 'infrastructure',
    name: 'Infrastructure',
    summary:
      'Hill roads, public buildings, and the drainage that keeps them usable after the first real rain.',
    lede: 'Civil works with our own supervision, a yard in Hetauda, and a manager who stays through defects liability.',
    paragraphs: [
      'The infrastructure practice is the oldest part of the group. It still sets the standard the other businesses are measured against: a surveyed alignment, a priced monsoon, and a named lead.',
      'We take packages we can staff. Hill roads, market sheds, clinics, and small bridges. Materials testing sits in Hetauda so quality is a record, not a speech at the monthly meeting.',
      'Where a client wants more length than the season can finish, we shorten the programme. A completed kilometre with drains is worth more than a long cut waiting for next year.',
    ],
    capabilities: [
      'Hill and feeder roads',
      'Retaining structures and culverts',
      'Municipal markets and public buildings',
      'Site supervision and materials testing',
      'Defects-liability support',
    ],
    outcomes: [
      { value: '42 km', label: 'Hill alignment upgraded in Rasuwa' },
      { value: '2013', label: 'Hetauda works yard established' },
    ],
    image: images.build,
  },
  {
    slug: 'energy',
    name: 'Energy',
    summary:
      'Small hydropower civil works and ground-mounted solar, then an operating crew if we stay on the asset.',
    lede: 'We develop and run modest plants sized to the grid connection and the community around them.',
    paragraphs: [
      'The energy practice grew out of hydro civil works and stayed there on purpose. We are not chasing utility-scale headlines. A 6-megawatt plant that operates, and a solar yard with a maintenance contract, are the work.',
      'Community agreements and access roads are part of the programme, not a late annex. If the haul road is not honest, the plant date is not honest either.',
      'After commissioning we prefer to keep a small crew on site. Generation figures belong to the people who can still walk the intake.',
    ],
    capabilities: [
      'Small hydro civil packages',
      'Ground-mounted solar yards',
      'Access and river-protection works',
      'Commissioning coordination',
      'Long-term operations and maintenance',
    ],
    outcomes: [
      { value: '12 MWp', label: 'Solar yard at North Banke' },
      { value: '6.4 MW', label: 'Solu Ridge small hydro' },
    ],
    image: images.solar,
  },
  {
    slug: 'digital',
    name: 'Digital',
    summary:
      'Ward-service software that starts at the counter: a token, a receipt, and a status that still means something later in the week.',
    lede: 'Counterline is the product. Hosting, training, and the first Mondays on site are part of the same contract.',
    paragraphs: [
      'Municipal software fails when it is designed for the dashboard and handed to a queue. Counterline opens on the officer at the desk: who is waiting, what they asked for, and what was promised.',
      'We sit in the ward office for the first two Mondays after go-live. If a secretary cannot close a case without calling us, the launch is not finished.',
      'The practice is based in Kathmandu and deploys outward. Karnali is the current desk. The product is the same one used closer to home: fewer features, kept running.',
    ],
    capabilities: [
      'Ward service desks and receipts',
      'Simple revenue and status tracking',
      'Staff training in the office, not a hotel ballroom',
      'Hosting and weekday support',
      'Quiet reporting after the queue works',
    ],
    outcomes: [
      { value: '2022', label: 'Counterline first went live' },
      { value: '2026', label: 'Karnali ward desks in use' },
    ],
    image: images.office,
  },
  {
    slug: 'agribusiness',
    name: 'Agribusiness',
    summary:
      'Collection routes and cold storage for produce that can actually reach the door before the heat does.',
    lede: 'The Biratnagar desk runs intake for the Janakpur cold hub. The route was drawn before the building.',
    paragraphs: [
      'A cold room does not create a buyer. It protects volume that already has a destination and a pickup time. We refuse catchments that look good on a map and arrive ruined.',
      'Growers are paid on intake weight with a written grade deduction. The receipt is the relationship. Handshake pricing at the gate is how trust gets lost in a week.',
      'The team sits in Biratnagar and the rooms sit in Janakpur, because the collection geography worked out that way. We did not move the building to suit the office.',
    ],
    capabilities: [
      'Morning collection routes',
      'Intake grading and written settlements',
      'Cold storage and evening dispatch',
      'Buyer bookings before harvest pressure',
      'Catchments we will not stretch',
    ],
    outcomes: [
      { value: '4000 t', label: 'Capacity at the Janakpur hub' },
      { value: '2', label: 'Desks, Biratnagar and Janakpur' },
    ],
    image: images.field,
  },
]

export const projects = [
  {
    slug: 'rasuwa-ridge-road',
    name: 'Rasuwa Ridge Road',
    sector: 'Infrastructure',
    location: 'Rasuwa, Bagmati',
    year: '2023',
    status: 'Completed',
    summary: 'Forty-two kilometres of hill road with drainage and retaining structures finished inside one build season.',
    paragraphs: [
      'The alignment was walked before it was drawn. Ward chairs marked the slips they already knew, and the programme was cut to the length that could be drained before the rains.',
      'Retaining structures and culverts were sequenced ahead of the wearing course. The Hetauda lab kept cube and compaction records on the same weekly sheet as the plant log.',
      'Defects liability sat with the same manager who had priced the job. That was the point of the contract, and it is why the package is still the one we show first.',
    ],
    facts: [
      { value: '42 km', label: 'Alignment upgraded' },
      { value: '1', label: 'Build season for the drains' },
      { value: '2023', label: 'Handed over' },
    ],
    image: images.trail,
  },
  {
    slug: 'phewa-market-sheds',
    name: 'Phewa Market Sheds',
    sector: 'Infrastructure',
    location: 'Pokhara, Gandaki',
    year: '2024',
    status: 'Completed',
    summary: 'Covered stalls, floors that can be washed, and drainage for a municipal market that floods at the edges.',
    paragraphs: [
      'The brief was more stalls. The useful brief was a floor that drains and a roof that does not drip onto the day’s stock. We redesigned the shed spacing around those two facts.',
      'Traders stayed open on a temporary line while the bays were poured in sections. Closing the whole market for a cleaner photograph was never on offer.',
      'The municipality kept the maintenance plan we wrote: a monthly wash, a named plumber, and a place to put waste that is not the drain.',
    ],
    facts: [
      { value: '86', label: 'Covered stalls' },
      { value: '2024', label: 'Opened in sections' },
      { value: 'Gandaki', label: 'Province' },
    ],
    image: images.build,
  },
  {
    slug: 'north-banke-solar',
    name: 'North Banke Solar Yard',
    sector: 'Energy',
    location: 'Banke, Lumbini',
    year: '2025',
    status: 'In operation',
    summary: 'A 12 MWp ground-mounted yard with an on-site crew and a maintenance contract we actually staff.',
    paragraphs: [
      'The site was chosen for the connection, the haul road, and the flood line, in that order. Generation on a plot that the river visits is not a project.',
      'Modules, inverters, and fencing were procured against a spares list, not only a capital list. The first year of operation is when missing fuses become a philosophy.',
      'A local crew handles cleaning and first-line faults. Kathmandu reads the same log they write. We do not run this yard from a group chat.',
    ],
    facts: [
      { value: '12 MWp', label: 'Installed' },
      { value: '2025', label: 'Commissioned' },
      { value: 'Lumbini', label: 'Province' },
    ],
    image: images.solar,
  },
  {
    slug: 'solu-ridge-hydro',
    name: 'Solu Ridge Hydro',
    sector: 'Energy',
    location: 'Solukhumbu, Koshi',
    year: '2024',
    status: 'In operation',
    summary: 'Civil works and commissioning support for a 6.4 MW small hydro, with a crew left behind to operate it.',
    paragraphs: [
      'Access was the long pole. Until the road could take a load in the wet, the intake date was a wish. We rebased the programme on that road and said so in the monthly letter.',
      'Our scope was civil works, river protection, and coordination of electro-mechanical installation. We did not pretend to be the turbine maker.',
      'After commissioning, four operators stayed. The plant is small enough that they know the sounds it should not make.',
    ],
    facts: [
      { value: '6.4 MW', label: 'Installed capacity' },
      { value: '4', label: 'Operators retained' },
      { value: 'Koshi', label: 'Province' },
    ],
    image: images.river,
  },
  {
    slug: 'janakpur-cold-hub',
    name: 'Janakpur Cold Hub',
    sector: 'Agribusiness',
    location: 'Janakpur, Madhesh',
    year: '2025',
    status: 'In operation',
    summary: 'Four thousand tonnes of cold rooms fed by morning routes and emptied against bookings, not against hope.',
    paragraphs: [
      'The collection radius was drawn before the slab. If a grower could not reach intake before the heat, they were outside the catchment, even when the volume was tempting.',
      'Grade deductions are written on the intake receipt. People argue with a number they can see. They stop coming back when the number changes at the office later.',
      'The Biratnagar desk books evening dispatch. The rooms in Janakpur are the tool. The route is the business.',
    ],
    facts: [
      { value: '4000 t', label: 'Cold capacity' },
      { value: '2025', label: 'Intake began' },
      { value: 'Madhesh', label: 'Province' },
    ],
    image: images.warehouse,
  },
  {
    slug: 'counterline-karnali',
    name: 'Counterline Karnali',
    sector: 'Digital',
    location: 'Surkhet, Karnali',
    year: '2026',
    status: 'Live',
    summary: 'Ward service desks in Surkhet running the same counter product we host from Kathmandu.',
    paragraphs: [
      'The rollout started with two wards, not a province-wide announcement. Officers issued tokens and receipts for a fortnight before anyone was shown a chart.',
      'Training happened at the counter, on their queue, in Nepali. A slide deck in a hotel would have photographed better and taught less.',
      'We still pick up the phone on weekdays. The contract includes hosting because a desk that expires with the inauguration is not a service.',
    ],
    facts: [
      { value: '2026', label: 'Desks went live' },
      { value: '2', label: 'Wards in the first wave' },
      { value: 'Karnali', label: 'Province' },
    ],
    image: images.office,
  },
]

export const principles = [
  {
    number: '01',
    title: 'Walk the alignment first',
    text: 'We survey, talk to wards, and price the monsoon before we publish a programme.',
  },
  {
    number: '02',
    title: 'One lead, one account',
    text: 'Every job has a named manager who stays through defects liability, not a rotating desk.',
  },
  {
    number: '03',
    title: 'Hire near the work',
    text: 'Site crews and support staff are recruited in the district when the skill is there.',
  },
  {
    number: '04',
    title: 'Stay for operations',
    text: 'Where we can, we operate what we build: plants, cold rooms, and the software after go-live.',
  },
]

export const values = [
  {
    title: 'Place',
    text: 'Designs start from the ward, the monsoon, and the haul road, not from a drawing made for somewhere else.',
  },
  {
    title: 'Clarity',
    text: 'Programmes, variations, and defects are written in language a client can audit without a translator.',
  },
  {
    title: 'Continuity',
    text: 'The manager who prices the job is still the person you call at handover.',
  },
  {
    title: 'Care',
    text: 'Sites hire locally, pay on time, and leave the camp in better order than they found it.',
  },
]

export const milestones = [
  { year: '2008', text: 'The partnership opens in Naxal with a roads team of fourteen.' },
  { year: '2013', text: 'The Hetauda works yard opens, with planning and materials testing under one roof.' },
  { year: '2016', text: 'A public-buildings crew is added for clinics, classrooms, and municipal sheds.' },
  { year: '2019', text: 'The energy practice starts with small-hydro civil works.' },
  { year: '2022', text: 'Counterline, the ward-service desk, goes live in its first offices.' },
  { year: '2025', text: 'The Janakpur cold hub takes its first intake from Madhesh collection routes.' },
]

export const leaders = [
  {
    initials: 'AS',
    name: 'Anisha Shrestha',
    role: 'Managing Director',
    bio: 'Anisha has led the group since 2016. She still chairs the monthly review where late programmes have to be explained in person.',
  },
  {
    initials: 'BT',
    name: 'Bikash Tamang',
    role: 'Chief Operating Officer',
    bio: 'Bikash runs the yards, the plant, and the rule that a site without a named lead does not mobilise.',
  },
  {
    initials: 'RA',
    name: 'Rajan Adhikari',
    role: 'Chief Financial Officer',
    bio: 'Rajan keeps each business on its own accounts. Group overhead is a line clients are allowed to ask about.',
  },
  {
    initials: 'SG',
    name: 'Sneha Gurung',
    role: 'Head of Infrastructure',
    bio: 'Sneha started as a site engineer on hill roads and still walks new alignments before the group bids them.',
  },
  {
    initials: 'PK',
    name: 'Pramesh Karki',
    role: 'Head of Energy',
    bio: 'Pramesh looks after hydro civil works, the Banke solar yard, and the small crews who stay after commissioning.',
  },
  {
    initials: 'MR',
    name: 'Mina Rai',
    role: 'Head of Digital',
    bio: 'Mina built Counterline around the ward counter. She spends launch weeks in the office, not on the slide.',
  },
  {
    initials: 'DY',
    name: 'Dipesh Yadav',
    role: 'Head of Agribusiness',
    bio: 'Dipesh runs the Biratnagar desk and the Janakpur rooms. He will drop a catchment before he will bruise the fruit.',
  },
]

export const articles = [
  {
    slug: 'price-the-monsoon',
    title: 'Price the monsoon before you price the rock',
    category: 'Infrastructure',
    date: '12 March 2026',
    author: 'Sneha Gurung',
    excerpt:
      'Hill contracts still fail in the same fortnight: the cut is open, the drains are not, and the rain arrives.',
    paragraphs: [
      'Hill contracts in Nepal still fail in the same fortnight. The cut is open, the drains are not, and the rain arrives. The expensive item is rarely the asphalt. It is the week the road becomes the stream.',
      'We now lock three dates into every hill programme before mobilisation: the last day to open a fresh cut, the week drains must be flowing, and the day plant leaves the ridge. If those dates slip, the variation is ours to explain, not the monsoon’s.',
      'Clients who want a dry-season miracle in a wet district are offered a shorter length instead of a braver calendar. A finished kilometre is more useful than a long scar that has to be rebuilt in Kartik.',
      'The Hetauda yard keeps the rainfall log next to the plant log. When someone asks why a week was lost, the answer is a sheet, not a story told after the fact.',
    ],
  },
  {
    slug: 'start-at-the-counter',
    title: 'Start at the counter, not the dashboard',
    category: 'Digital',
    date: '2 July 2026',
    author: 'Mina Rai',
    excerpt:
      'Most municipal demos open on a chart. A resident’s morning opens on a queue. The software should do the same.',
    paragraphs: [
      'Most municipal software demos open on a chart. The resident’s morning opens on a queue. Counterline was built the other way: a token, a named officer, a receipt, and a status that still means something on Thursday.',
      'Dashboards come after a month of real tickets. If the ward secretary cannot close a case without calling the vendor, the chart is decoration and the contract is not finished.',
      'We host the desks we build, and we sit in the office on the first two Mondays. That is less glamorous than a launch and much closer to the work. Training is in Nepali, at the counter, on that morning’s queue.',
      'Karnali was rolled out as two wards first. A province-wide announcement can wait until those two desks have a boring week. Boring is the target.',
    ],
  },
  {
    slug: 'a-cold-room-is-a-route',
    title: 'A cold room is a route with a roof',
    category: 'Agribusiness',
    date: '28 August 2026',
    author: 'Dipesh Yadav',
    excerpt:
      'Storage does not create a market. It only protects produce that can reach the door before the heat does.',
    paragraphs: [
      'Storage does not create a market. It only protects produce that can reach the door before the heat does. At the Janakpur hub we drew the collection radius before we drew the building: morning pickup, midday intake, evening dispatch to buyers who had already booked volume.',
      'Growers are paid on intake weight with a written deduction for grade, not a handshake at the gate. People can argue with a number on a receipt. They leave when the number is revised later by someone they never met.',
      'When the route is longer than the crop can bear, we refuse the catchment instead of buying a bigger truck. Extra steel on the roof will not repair tomatoes that cooked on the highway.',
      'The Biratnagar desk and the Janakpur rooms are one business split across the geography that made sense. We did not put the building next to the office for the convenience of the signboard.',
    ],
  },
]

export const jobs = [
  {
    id: 'site-engineer',
    title: 'Site Engineer',
    team: 'Infrastructure',
    location: 'Rasuwa and Hetauda',
    type: 'Full-time',
    summary:
      'Supervise a hill package: daily quantities, drainage ahead of the cut, and a weekly note the client can read.',
  },
  {
    id: 'solar-technician',
    title: 'Solar O&M Technician',
    team: 'Energy',
    location: 'Banke, Lumbini',
    type: 'Full-time',
    summary:
      'First-line faults, module cleaning rotas, and a log that Kathmandu reads instead of requesting.',
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    team: 'Digital',
    location: 'Kathmandu, with ward visits',
    type: 'Full-time',
    summary:
      'Design Counterline around the officer at the desk. You will spend launch weeks in the ward office.',
  },
  {
    id: 'procurement-officer',
    title: 'Procurement Officer',
    team: 'Group',
    location: 'Kathmandu and Hetauda',
    type: 'Full-time',
    summary:
      'Buy plant, spares, and materials against a list that includes the second year, not only mobilisation.',
  },
  {
    id: 'cold-chain-supervisor',
    title: 'Cold-chain Supervisor',
    team: 'Agribusiness',
    location: 'Janakpur, Madhesh',
    type: 'Full-time',
    summary:
      'Run intake grading, written settlements, and the evening dispatch the Biratnagar desk has booked.',
  },
]

export const benefits = [
  {
    title: 'Posted like a site, not a favour',
    text: 'Field allowances are written into the offer for roles that live on a package, including travel home.',
  },
  {
    title: 'The Saturday weekend',
    text: 'The week runs Sunday to Friday, with Nepal’s public holidays and a festival bonus around Dashain.',
  },
  {
    title: 'A quarter for learning',
    text: 'Every role has training hours each quarter: plant, safety, software, or a week on someone else’s site.',
  },
  {
    title: 'Health cover',
    text: 'Cover for the employee and one dependent, arranged at group level so site contracts are not the exception.',
  },
]

export const offices = [
  {
    city: 'Kathmandu',
    role: 'Head office',
    address: 'Naxal, Kathmandu, Nepal',
    note: 'Group leadership, digital, and client meetings.',
  },
  {
    city: 'Hetauda',
    role: 'Works office',
    address: 'Industrial Area, Hetauda, Bagmati',
    note: 'Planning room, plant yard, and materials testing.',
  },
  {
    city: 'Biratnagar',
    role: 'Terai office',
    address: 'Main Road, Biratnagar, Morang',
    note: 'Agribusiness desk for routes into the Janakpur hub.',
  },
]

export function readingMinutes(paragraphs) {
  const words = paragraphs.join(' ').trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}

export function mailHref({ subject, body }) {
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function findBySlug(list, slug) {
  return list.find((item) => item.slug === slug)
}
