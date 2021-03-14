import type { Card } from "./types";

const cards = [
  {
    name: "Doge",
    category: "Celebrity",
    description:
      'An internet meme that showas a Shiba Inu surrounded by colorful Comic Sans text that describes its inner monologue such as "Wow," "Concern," and "so scare." There is much confuse over the name\'s pronounciation, yet it was recently used to brand a Bitcoin competitor.',
    points: 3
  },
  {
    name: "A Russian Nesting Doll",
    category: "Et cetera",
    description:
      "A set of colorful wooden figurines that decrease in size and are placed inside of one another. Associated with a former Communist nation, they are often painted as women, but themes vary from babushkas to Star Wars characters to just Batmans all the way down.",
    points: 2
  },
  {
    name: "Rick Santorum",
    category: "Celebrity",
    description:
      'The former Republican Senator whose name, in retribution for comparing homosexuality to bestiality, was redefined in a contest held by sex columnist Dan Savage as "the frothy mixture of lube and fecal matter that is sometimes the byproduct of anal sex."',
    points: 2
  },
  {
    name: "Blacula",
    category: "Fictional Character",
    description:
      "The title character from a horror film about an 18th centry African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 70s Los Angeles",
    points: 4
  },
  {
    name: "Georgia O'Keeffe",
    category: "Historical Figure",
    description:
      "An American modernist painter whose work was inspired by the New Mexico landscape surrounding her home. She is perhaps most famous for the uncanny resemblance of many of her painted flowers to female genitalia, though she denied any similarity.",
    points: 2
  },
  {
    name: "Ebola",
    category: "Et cetera",
    description:
      "A virus that causes hemorrhagic fever, typically acquired by contact with an infected monkey, fruit bat, or person. Its most severe symptions can include bleeding from the eyes, nose, ears, mouth, and rectum. There is no specific treatment for the disease.",
    points: 2
  },
  {
    name: "A Furry",
    category: "Et cetera",
    description:
      "A person who wears a full body animal suit, often for conventions, roleplaying, or personal recreation. Their use in sexual activity is a controversial topic in the community. In a recent survey, 37% reported that it was an important part of their interest in the activity.",
    points: 3
  },
  {
    name: "Gallagher",
    category: "Celebrity",
    description:
      "A prop comic famouse for smashing watermelons with his trademark Sledge-O-Matic. He once sued his brother for touring under the comedian's name and walked out of a Marc Maron interview when asked about the use of racist, homophobic, and xenophoboic slurs in his act.",
    points: 1
  },
  {
    name: "Kobayashi",
    category: "Celebrity",
    description:
      "A Japanese competitive eater who shocked the world in 2001 by eating 50 hot dogs and buns (HBD) in 12 minutes at Nathan's Hot Dog Eating Contest, doubling the previous record. He once lost a hot dog eating contest (no buns) to a 1089 lb. Kodiak bear (31–50)",
    points: 2
  },
  {
    name: "Flying Spaghetti Monster",
    category: "Fictional Character",
    description:
      "A deity of Pastafarianism, a parody religion opposing intelligent design. A contemporary version of Russell's teapot, it is portrayed as a clump of pasta and meatballs with two eye stalks. It often appears touching Adam's finger in Michelangelo's Sistin Chapel ceiling painting.",
    points: 3
  },
  {
    name: "Syliva Plath",
    category: "Historical Figure",
    description:
      "Poet, author, and wife of Ted Hughes, who was known for her confessional style of poetry as well as her novel The Bell Jar. She had a history of depressiong, leading to her suicide at 30 from carbon monoxide poisoning after sticking her head into an unlit oven.",
    points: 2
  },
  {
    name: "The Unabomber (Ted Kaczynski)",
    category: "Celebrity",
    description:
      'A terrorist math professor who sent explosive packages through the mail. When Penthouse offered to publish his manifesto, Industrial Society and Its Future, he asked to reserve the right o plant one more bomb, since the magazine was less "respectable" than others he solicitied.',
    points: 2
  },
  {
    name: "Pablo Escobar",
    category: "Historical Figure",
    description:
      'A Colombian drug lord and "King of Cocaine," who at his peak trafficked 15 tons of the drug into the US per year. He was killed by authorities in a firefight in Medellin. According to a recent BBC report, a number of hippos from his menagerie still roam the Colombian countryside.',
    points: 3
  },
  {
    name: "El Chupacabra",
    category: "Et cetera",
    description:
      'Literrally "goat sucker," this legendary American cryptid is often describe as a reptile-like creature that attacks and drinks the blood of sheep and other livestock. Most supposed sightings have been attributed to dogs or wolves affected by the skin disease mange.',
    points: 4
  },
  {
    name: "Bill Cosby",
    category: "Celebrity",
    description:
      'One of the most famous comedians of all time. He created Fat Albert and played Cliff Huxtable on the show bearing his name. He is known for wearing sweaters, eating "Puddin\' Pops," and blaming much of the Black incarceration rate on poor parenting.',
    points: 1
  },
  {
    name: "Bob Fossee",
    category: "Historical Figure",
    description:
      "A dancer and choreographer, who created musicals like All That Jazz and Cabaret. His style included turned-in knees, bowler hats, canes, and copious use of jazz hands—a technique where the performer's hands are shown palms open to the audience with fingers splayed wide.",
    points: 3
  },
  {
    name: "Heisenberg",
    category: "Historical Figure",
    description:
      "A German theoretical physicist, creator of the uncertainty principle, and winner of a Nobel Prize in Physics for his development of quantum mechanics. His name was also used as an alias for the meth manufacturer Walter White in the series Breaking Bad.",
    points: 2
  },
  {
    name: "Rosie the Riveter",
    category: "Historical Figure",
    description:
      'A World War II icon, who represents American women working factory jobs. She is most often associated with the "We Can Do it!" Westinghouse poster, depcing her flexing in a blue work shirt and red kerchief. Her Canadian percursor was Ronnie the Bren Gun Girl.',
    points: 2
  },
  {
    name: "A Narwhal",
    category: "Et cetera",
    description:
      'An Arctic whale with a large protruding tusk, which is actually canine tooth. Its name translated to "corpse whale" from the Old Norse, due to the similarity of its flesh tone with a drowned sailer. According to the Weebl\'s Stuff song, they are so awesome.',
    points: 4
  },
  {
    name: "Hitler's Brain",
    category: "Historical Figure",
    description:
      "A trope first featured in 60s sci-fi film, where Nazi scientists remove this organ from the Führer's head and hide it in the fictional South American country of Madoras. The film currently holds an approval ratigin of 0% on the metareview site Rotten Tomatoes.",
    points: 2
  },
  {
    name: "100 Duck-Sized Horses",
    category: "Et cetera",
    description:
      "From a hypothetical scenario that poses the question of who would win in a fight: a single equine-sized fowl or fivescore fowl-sized equines. The question was made famouse in a 2012 Reddit AMA with President Barack Obama. The comment received over 1,000 upvotes.",
    points: 4
  },
  {
    name: "Achilles",
    category: "Fictional Character",
    description:
      "An Ancient Greek hero and demigod from Homer's Iliad, who defeated the Trojan warrior Hector as revenger for killing his friend and lover Patroclus. He was later killed by an arrow to his heel---the only part of his body that was vulnerable to physical injury.",
    points: 2
  },
  {
    name: "Che Guevara",
    category: "Historical Figure",
    description:
      "A Marxist leader in the Cuban Revolution, whose rebellious image has been commodified on T-shirts worldwide. The image, a high contrast version of the Guerrillero Heroica photograph by Alberto Korda, depicts him with a mustache, beret, and implacable expression.",
    points: 2
  },
  {
    name: "A Velociraptor",
    category: "Card by Patrick Klepek",
    description:
      "A bipedial, feathered carnivore from the Cretaceous Period. It is one of the most well-known dinosaurs due to its prominent role in the 1993 film Jurassic Park, where it was depicted inaccurately as large and feather-less, but quite accurately as a clever girl.",
    points: 2
  },
  {
    name: "Homo Erectus",
    category: "Historical Figure",
    description:
      'A distant relative of humans that went extinct approximately 100,000 years ago. Latin for "upright man," this hominid walked vertically and likely lived in small hunter-gatherer bands, but lacked the large cranial capacity of anatomically modern humans.',
    points: 2
  },
  {
    name: "William Howard Taft",
    category: "Historical Figure",
    description:
      "Secretary of War, 10th Chief Justice of the Supreme Court, and most obese president in US history. It is unclear whether the story of his getting stuck in a White House bathtub is true, but it was confirmed that on at least one occasion, he caused it to overflow.",
    points: 3
  },
  {
    name: "L. Ron Hubbard",
    category: "Historical Figure",
    description:
      'A science fiction author and the founder of Scientology. The religion derives from his self-help program Dianetics, which me modestly described as "a milestone for man comparable to his discovery of fire and superior to his invention of the wheel and the arch."',
    points: 2
  },
  {
    name: "Shirtless Vladimir Putin",
    category: "Celebrity",
    description:
      'Former KGB officer and current President of Russia. Under his rule, Russia has grown increasingly undemocratic. He cultivates a rugged image in state media, being show riding half-dressed on horseback and "discovering" two Ancient Greek urns in the Black Sea.',
    points: 3
  },
  {
    name: "Christopher Walken",
    category: "Celebrity",
    description:
      'An actor known for his odd line readings, dancing skills, and creepily handsome face. Despite being an Academy Award winning actor, he is perhaps best known for the "Weapon of Choice" music video and as Bruce Dickinson, an SNL character who asks for more cowbell.',
    points: 2
  },
  {
    name: "Baby Jessica",
    category: "Celebrity",
    description:
      'The subject of a 24-hour media frenzy in 1987 when she fell down a well, setting a precedent for how cable news networks cover small local tragedies. At the time, President Reagan claimed that "everybody in America became [her] godmothers and godfathers."',
    points: 4
  },
  {
    name: "Jackson Pollock",
    category: "Historical Figure",
    description:
      'An abstract expressionist painter known for his drip paintings, which were created by laying the canvas on the floor and pouring paint from above. His painting, "No. 5, 1948," was sold for $140M in 2006 by David Geffen—the second most expensive painting ever sold.',
    points: 2
  },
  {
    name: "Caligula",
    category: "Historical Figure",
    description:
      "A Roman emperor known for his cruelty, extravagance, and sexual perversity. He was the first Roman emperor to be assassinated. He is best known for being the title character of a semi-pornographic film starring Malcom McDowell that depicted his orgies in lengthy detail.",
    points: 2
  },
  {
    name: "Julian Assange",
    category: "Historical Figure",
    description:
      "The Editor-in-chief of WikiLeaks and alleged sexual predator. Fearing extradition to Sweden for sexual assault and the US for expionage relating to the Chelsea Manning leaks, he has been living in the Ecuadorian embassy in London since June 2012.",
    points: 2
  }
];

export default cards.map(
  ({ name, category, description, points }, i) =>
    ({
      id: String(i),
      name,
      category,
      description,
      points
    } as Card)
);
