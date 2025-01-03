import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';

// profile menu component
// const profileMenuItems = [
//   {
//     label: "My Profile",
//     icon: UserCircleIcon,
//   },
//   {
//     label: "Edit Profile",
//     icon: Cog6ToothIcon,
//   },
//   {
//     label: "Inbox",
//     icon: InboxArrowDownIcon,
//   },
//   {
//     label: "Help",
//     icon: LifebuoyIcon,
//   },
//   {
//     label: "Sign Out",
//     icon: PowerIcon,
//   },
// ];

// function ProfileMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
//       <MenuHandler>
//         <Button
//           variant="text"
//           color="blue-gray"
//           className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
//         >
//           <Avatar
//             variant="circular"
//             size="sm"
//             alt="tania andrew"
//             className="border border-gray-900 p-0.5"
//             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//           />
//           <ChevronDownIcon
//             strokeWidth={2.5}
//             className={`h-3 w-3 transition-transform ${
//               isMenuOpen ? "rotate-180" : ""
//             }`}
//           />
//         </Button>
//       </MenuHandler>
//       <MenuList className="p-1">
//         {profileMenuItems.map(({ label, icon }, key) => {
//           const isLastItem = key === profileMenuItems.length - 1;
//           return (
//             <MenuItem
//               key={label}
//               onClick={closeMenu}
//               className={`flex items-center gap-2 rounded ${
//                 isLastItem
//                   ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
//                   : ""
//               }`}
//             >
//               {React.createElement(icon, {
//                 className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
//                 strokeWidth: 2,
//               })}
//               <Typography
//                 as="span"
//                 variant="small"
//                 className="font-normal"
//                 color={isLastItem ? "red" : "inherit"}
//               >
//                 {label}
//               </Typography>
//             </MenuItem>
//           );
//         })}
//       </MenuList>
//     </Menu>
//   );
// }

const mcqItems = [
  {
    title: "MCQs for Class 1",
    subjects: [
      {
        sub: "MCQs for Class 1 Hindi",
        chapters: [
          "Chapter 1: झूला",
          "Chapter 2: आम की कहानी",
          "Chapter 3: आम की टोकरी",
          "Chapter 4: पत्ते ही पत्ते",
          "Chapter 5: पकौड़ी",
          "Chapter 6: छुक-छुक गाड़ी",
          "Chapter 7: रसोईघर",
          "Chapter 8: चूहो! म्याऊँ सो रही है",
          "Chapter 9: बंदर और गिलहरी",
          "Chapter 10: पगड़ी",
          "Chapter 11: पतंग",
          "Chapter 12: गेंद-बल्ला",
          "Chapter 13: बंदर गया खेत में भाग",
          "Chapter 14: एक बुढ़िया",
          "Chapter 15: मैं भी",
          "Chapter 16: लालू और पीलू",
          "Chapter 17: चकई के चकदुम",
          "Chapter 18: छोटी का कमाल",
        ],
      },
      {
        sub: "MCQs for Class 1 English",
        chapters: [
          "Chapter 1: A Happy Child",
          "Chapter 2: Three Little Pigs",
          "Chapter 3: After a Bath",
          "Chapter 4: The Bubble, the Straw, and the Shoe",
          "Chapter 5: One Little Kitten",
          "Chapter 6: Lalu and Peelu",
          "Chapter 7: Once I Saw a Little Bird",
          "Chapter 8: Mittu and the Yellow Mango",
          "Chapter 9: Merry-Go-Round",
          "Chapter 10: Circle",
          "Chapter 11: If I Were an Apple",
          "Chapter 12: Our Tree",
          "Chapter 13: A Kite",
          "Chapter 14: Sundari",
        ],
      },
      {
        sub: "MCQs for Class 1 Math",
        chapters: [
          "Chapter 1: Shapes and Space",
          "Chapter 2: Numbers from One to Nine",
          "Chapter 3: Addition",
          "Chapter 4: Subtraction",
          "Chapter 5: Numbers from Ten to Twenty",
          "Chapter 6: Time",
          "Chapter 7: Measurement",
          "Chapter 8: Numbers from Twenty-one to Fifty",
          "Chapter 9: Data Handling",
          "Chapter 10: Patterns",
          "Chapter 11: Numbers",
          "Chapter 12: Money",
        ],
      },
    ],
  },
  {
    title: "MCQs for Class 2",
    subjects: [
      {
        sub: "MCQs for Class 2 Hindi",
        chapters: [
          "Chapter 1: ऊंट चला",
          "Chapter 2: भालू ने खेली फुटबॉल",
          "Chapter 3: म्याऊँ, म्याऊँ!!",
          "Chapter 4: अधिक बलवान कौन?",
          "Chapter 5: दोस्त की मदद",
          "Chapter 6: बहुत हुआ",
          "Chapter 7: मेरी किताब",
          "Chapter 8: तितली और कली",
          "Chapter 9: बुलबुल",
          "Chapter 10: मीठी सारंगी",
          "Chapter 11: टेसू राजा बीच बाजार",
          "Chapter 12: बस के नीचे बाघ",
          "Chapter 13: सूरज जल्दी आना जी",
          "Chapter 14: नटखट चूहा",
          "Chapter 15: एक्की-दोक्की",
        ],
      },
      {
        sub: "MCQs for Class 2 English",
        chapters: [
          "Chapter 1: First Day at School",
          "Chapter 2: Haldi’s Adventure",
          "Chapter 3: I am Lucky!",
          "Chapter 4: I Want",
          "Chapter 5: A Smile",
          "Chapter 6: The Wind and the Sun",
          "Chapter 7: Rain",
          "Chapter 8: Storm in the Garden",
          "Chapter 9: Zoo Manners",
          "Chapter 10: Funny Bunny",
          "Chapter 11: Mr. Nobody",
          "Chapter 12: Curlylocks and the Three Bears",
          "Chapter 13: On My Blackboard I Can Draw",
          "Chapter 14: Make it Shorter",
        ],
      },
      {
        sub: "MCQs for Class 2 Math",
        chapters: [
          "Chapter 1: What is Long, What is Round?",
          "Chapter 2: Counting in Groups",
          "Chapter 3: How Much Can You Carry?",
          "Chapter 4: Counting in Tens",
          "Chapter 5: Patterns",
          "Chapter 6: Footprints",
          "Chapter 7: Jugs and Mugs",
          "Chapter 8: Tens and Ones",
          "Chapter 9: My Funday",
          "Chapter 10: Add Our Points",
          "Chapter 11: Lines and Lines",
          "Chapter 12: Give and Take",
          "Chapter 13: The Longest Step",
          "Chapter 14: Birds Come, Birds Go",
          "Chapter 15: How Many Ponytails?",
        ],
      },
    ],
  },
  {
    title: "MCQs for Class 3",
    subjects: [
      {
        sub: "MCQs for Class 3 Hindi",
        chapters: [
          "Chapter 1: Bal Gopal",
          "Chapter 2: Ghar Ki Toli",
          "Chapter 3: Nani Ki Kahani",
          "Chapter 4: Badal Ka Khel",
          "Chapter 5: Bachpan Ki Yaadein",
          "Chapter 6: Dadi Maa Ki Kahani",
          "Chapter 7: Chhote Ka Bada Sapna",
          "Chapter 8: Rajeev Ki Kahani",
        ],
      },
      {
        sub: "MCQs for Class 3 English",
        chapters: [
          "Chapter 1: The First Day at School",
          "Chapter 2: A Dog Named Duke",
          "Chapter 3: The Kite",
          "Chapter 4: A Hero",
          "Chapter 5: Rip Van Winkle",
          "Chapter 6: The Ice-Cream Man",
          "Chapter 7: The Magic Garden",
          "Chapter 8: The Quarrel",
        ],
      },
      {
        sub: "MCQs for Class 3 Math",
        chapters: [
          "Chapter 1: Shapes and Designs",
          "Chapter 2: Numbers and Patterns",
          "Chapter 3: Addition and Subtraction",
          "Chapter 4: Multiplication and Division",
          "Chapter 5: Time",
          "Chapter 6: Length",
          "Chapter 7: Weight",
          "Chapter 8: Volume",
        ],
      },
    ],
  },
  {
    title: "MCQs for Class 4",
    subjects: [
      {
        sub: "MCQs for Class 4 Hindi",
        chapters: [
          "Chapter 1: Khushiyon Ki Chhoti Si Baatein",
          "Chapter 2: Mahatma Gandhi",
          "Chapter 3: Raat Ka Neela Aasmaan",
          "Chapter 4: Chhoti Si Baatein",
          "Chapter 5: Duniya Ki Sabse Achi Cheez",
          "Chapter 6: Ghar Mein",
          "Chapter 7: Kabir Ke Dohe",
        ],
      },
      {
        sub: "MCQs for Class 4 English",
        chapters: [
          "Chapter 1: The Boy Who Stopped Smoking",
          "Chapter 2: The Story of the Coconut Tree",
          "Chapter 3: The Chameleon",
          "Chapter 4: The Street of the Wild Geese",
          "Chapter 5: The Old Woman",
          "Chapter 6: The Pea Plant",
          "Chapter 7: Our Friendly Neighbour",
        ],
      },
      {
        sub: "MCQs for Class 4 Math",
        chapters: [
          "Chapter 1: Large Numbers",
          "Chapter 2: Understanding Shapes",
          "Chapter 3: Fractions",
          "Chapter 4: Decimals",
          "Chapter 5: Measurement of Length, Weight, and Capacity",
          "Chapter 6: Time and Calendar",
          "Chapter 7: Data Handling",
        ],
      },
    ],
  },
  {
    title: "MCQs for Class 5",
    subjects: [
      {
        sub: "MCQs for Class 5 Hindi",
        chapters: [
          "Chapter 1: Chhoti Si Baatein",
          "Chapter 2: Suraj Ka Naya Naam",
          "Chapter 3: Prakash Ka Pata",
          "Chapter 4: Humare Doston Ki Kahaniyan",
          "Chapter 5: Ghar Ki Yaadein",
          "Chapter 6: Khushiyan Aur Dukhiyaan",
        ],
      },
      {
        sub: "MCQs for Class 5 English",
        chapters: [
          "Chapter 1: The Invisible Man",
          "Chapter 2: An Adventure in the Jungle",
          "Chapter 3: A Day at the Seashore",
          "Chapter 4: The Story of the Life of a Tree",
          "Chapter 5: The Earth",
          "Chapter 6: The Four Friends",
        ],
      },
      {
        sub: "MCQs for Class 5 Math",
        chapters: [
          "Chapter 1: Large Numbers",
          "Chapter 2: Four Fundamental Operations",
          "Chapter 3: Factors and Multiples",
          "Chapter 4: Fractions",
          "Chapter 5: Decimals",
        ],
      },
      {
        sub: "MCQs for Class 5 Science",
        chapters: [
          "Chapter 1: Our Body",
          "Chapter 2: The Solar System",
          "Chapter 3: Materials",
          "Chapter 4: Plants",
          "Chapter 5: Animals",
        ],
      },
      {
        sub: "MCQs for Class 5 SSt",
        chapters: [
          "Chapter 1: The Earth",
          "Chapter 2: India – Our Country",
          "Chapter 3: Culture and Heritage",
          "Chapter 4: The Role of Government",
          "Chapter 5: History and Geography",
        ],
      },
    ],
  },
  {
    title: "MCQs for Class 6",
    subjects: [
      {
        sub: "MCQs for Class 6 Hindi",
        chapters: [
          "Chapter 1: Vachan",
          "Chapter 2: Mera Parivar",
          "Chapter 3: Hamare Gaon Ki Kahani",
          "Chapter 4: Chidiya Ki Kahani",
          "Chapter 5: Samasya Ka Hal",
          "Chapter 6: Dr. A.P.J. Abdul Kalam",
        ],
      },
      {
        sub: "MCQs for Class 6 English",
        chapters: [
          "Chapter 1: The Fun They Had",
          "Chapter 2: The Road Not Taken",
          "Chapter 3: The Lost Child",
          "Chapter 4: The Little Girl",
          "Chapter 5: The Friendly Mongoose",
          "Chapter 6: The Shepherd's Boy",
        ],
      },
      {
        sub: "MCQs for Class 6 Math",
        chapters: [
          "Chapter 1: Knowing Our Numbers",
          "Chapter 2: Whole Numbers",
          "Chapter 3: Playing with Numbers",
          "Chapter 4: Basic Geometrical Ideas",
          "Chapter 5: Understanding Elementary Shapes",
          "Chapter 6: Integers",
        ],
      },
      {
        sub: "MCQs for Class 6 Science",
        chapters: [
          "Chapter 1: Food: Where Does It Come From?",
          "Chapter 2: Components of Food",
          "Chapter 3: Fibre to Fabric",
          "Chapter 4: Sorting Materials into Groups",
          "Chapter 5: Separation of Substances",
          "Chapter 6: Changes Around Us",
        ],
      },
      {
        sub: "MCQs for Class 6 SSt",
        chapters: [
          "Chapter 1: Understanding Diversity",
          "Chapter 2: Diversity in India and the World",
          "Chapter 3: Globe: Latitudes and Longitudes",
          "Chapter 4: Motion of the Earth",
          "Chapter 5: Our Country – India",
        ],
      },
    ],
  },
  {
    title: "MCQs for Class 7",
    subjects: [
      {
        sub: "MCQs for Class 7 Hindi",
        chapters: [
          "Chapter 1: Sadrakshita Ka Sankalp",
          "Chapter 2: Bhrashtachar Ke Virudh",
          "Chapter 3: Samajik Nyay",
          "Chapter 4: Hindi Prem Ka Mahatva",
          "Chapter 5: Samajik Sudhar Ke Vichar",
        ],
      },
      {
        sub: "MCQs for Class 7 English",
        chapters: [
          "Chapter 1: Three Questions",
          "Chapter 2: The Duck and the Kangaroo",
          "Chapter 3: Taro’s Reward",
          "Chapter 4: The Ashes that Made Trees Bloom",
          "Chapter 5: The Elephant’s Child",
          "Chapter 6: The Wonder Called Sleep",
        ],
      },
      {
        sub: "MCQs for Class 7 Math",
        chapters: [
          "Chapter 1: Integers",
          "Chapter 2: Fractions and Decimals",
          "Chapter 3: Data Handling",
          "Chapter 4: Simple Equations",
          "Chapter 5: Lines and Angles",
          "Chapter 6: The Triangle and Its Properties",
        ],
      },
      {
        sub: "MCQs for Class 7 Science",
        chapters: [
          "Chapter 1: Nutrition in Plants",
          "Chapter 2: Nutrition in Animals",
          "Chapter 3: Fibre to Fabric",
          "Chapter 4: Heat",
          "Chapter 5: Acids, Bases and Salts",
        ],
      },
      {
        sub: "MCQs for Class 7 SSt",
        chapters: [
          "Chapter 1: Environment",
          "Chapter 2: Inside Our Earth",
          "Chapter 3: Our Changing Earth",
          "Chapter 4: Air",
          "Chapter 5: Water",
        ],
      },
    ],
  },
  {
    title: "MCQs for Class 8",
    subjects: [
      {
        sub: "MCQs for Class 8 Hindi",
        chapters: [
          "Chapter 1: ध्वनि",
          "Chapter 2: लाख की चूड़ियां",
          "Chapter 3: बस की यात्रा",
          "Chapter 4: दीवानों की हस्ती",
          "Chapter 5: चिट्ठियों की अनूठी दुनिया",
          "Chapter 6: भगवान के डाकिए",
          "Chapter 7: क्या निराश हुआ जाए",
          "Chapter 8: यह सबसे कठिन समय नहीं",
          "Chapter 9: कबीर की साखियाँ",
          "Chapter 10: कामचोर"
        ]
      },
      {
        sub: "MCQs for Class 8 English",
        chapters: [
          "Chapter 1: The Best Christmas Present in the World",
          "Chapter 2: The Tsunami",
          "Chapter 3: Glimpses of the Past",
          "Chapter 4: Bepin Choudhury’s Lapse of Memory",
          "Chapter 5: The Summit Within",
          "Chapter 6: This is Jody’s Fawn",
          "Chapter 7: A Visit to Cambridge",
          "Chapter 8: A Short Monsoon Diary",
          "Chapter 9: The Great Stone Face I",
          "Chapter 10: The Great Stone Face II"
        ]
      },
      {
        sub: "MCQs for Class 8 Math",
        chapters: [
          "Chapter 1: Rational Numbers",
          "Chapter 2: Linear Equations in One Variable",
          "Chapter 3: Understanding Quadrilaterals",
          "Chapter 4: Practical Geometry",
          "Chapter 5: Data Handling",
          "Chapter 6: Squares and Square Roots",
          "Chapter 7: Cubes and Cube Roots",
          "Chapter 8: Comparing Quantities",
          "Chapter 9: Algebraic Expressions and Identities",
          "Chapter 10: Visualizing Solid Shapes",
          "Chapter 11: Mensuration",
          "Chapter 12: Exponents and Powers",
          "Chapter 13: Direct and Inverse Proportions",
          "Chapter 14: Factorization",
          "Chapter 15: Introduction to Graphs",
          "Chapter 16: Playing with Numbers"
        ]
      },
      {
        sub: "MCQs for Class 8 Science",
        chapters: [
          "Chapter 1: Crop Production and Management",
          "Chapter 2: Microorganisms: Friend and Foe",
          "Chapter 3: Synthetic Fibres and Plastics",
          "Chapter 4: Materials: Metals and Non-Metals",
          "Chapter 5: Coal and Petroleum",
          "Chapter 6: Combustion and Flame",
          "Chapter 7: Conservation of Plants and Animals",
          "Chapter 8: Cell – Structure and Functions",
          "Chapter 9: Reproduction in Animals",
          "Chapter 10: Reaching the Age of Adolescence",
          "Chapter 11: Force and Pressure",
          "Chapter 12: Friction",
          "Chapter 13: Sound",
          "Chapter 14: Chemical Effects of Electric Current",
          "Chapter 15: Some Natural Phenomena",
          "Chapter 16: Light",
          "Chapter 17: Stars and the Solar System",
          "Chapter 18: Pollution of Air and Water"
        ]
      },
      {
        sub: "MCQs for Class 8 Social Science",
        chapters: [
          "History Chapter 1: How, When and Where",
          "History Chapter 2: From Trade to Territory",
          "History Chapter 3: Ruling the Countryside",
          "History Chapter 4: Tribals, Dikus, and the Vision of a Golden Age",
          "History Chapter 5: When People Rebel 1857 and After",
          "History Chapter 6: Colonialism and the City",
          "Geography Chapter 1: Resources",
          "Geography Chapter 2: Land, Soil, Water, Natural Vegetation and Wildlife Resources",
          "Geography Chapter 3: Mineral and Power Resources",
          "Civics Chapter 1: The Indian Constitution",
          "Civics Chapter 2: Understanding Secularism",
          "Civics Chapter 3: Why Do We Need a Parliament?",
          "Civics Chapter 4: Understanding Laws",
          "Civics Chapter 5: Judiciary"
        ]
      }
    ]
  },  
  {
    title: "MCQs for Class 9",
    subjects: [
      {
        sub: "MCQs for Class 9 Hindi",
        chapters: [
          "Chapter 1: अजनबी शहर में",
          "Chapter 2: कहानी का आखिरी पक्ष",
          "Chapter 3: नानी की कहानी",
          "Chapter 4: परियों की कहानी",
          "Chapter 5: हिंदी व्याकरण",
          "Chapter 6: ऐतिहासिक कथाएँ",
          "Chapter 7: स्वतंत्रता संग्राम की घटनाएँ",
          "Chapter 8: सुखी जीवन की कुंजी",
          "Chapter 9: भाषा और संस्कृति",
          "Chapter 10: बच्चों की दुनिया",
        ],
      },
      {
        sub: "MCQs for Class 9 English",
        chapters: [
          "Chapter 1: The Lost Child",
          "Chapter 2: The Sound of Music",
          "Chapter 3: The Adventures of Toto",
          "Chapter 4: A Truly Beautiful Mind",
          "Chapter 5: The Happy Prince",
          "Chapter 6: The Dog of Tetley",
          "Chapter 7: A House is Not a Home",
          "Chapter 8: The Rime of the Ancient Mariner",
          "Chapter 9: The Brook",
          "Chapter 10: The School for Good and Evil",
        ],
      },
      {
        sub: "MCQs for Class 9 Math",
        chapters: [
          "Chapter 1: Number System",
          "Chapter 2: Polynomials",
          "Chapter 3: Linear Equations in Two Variables",
          "Chapter 4: Coordinate Geometry",
          "Chapter 5: Introduction to Euclid’s Geometry",
          "Chapter 6: Lines and Angles",
          "Chapter 7: Triangles",
          "Chapter 8: Quadrilaterals",
          "Chapter 9: Areas of Parallelograms and Triangles",
          "Chapter 10: Circles",
          "Chapter 11: Constructions",
          "Chapter 12: Heron’s Formula",
          "Chapter 13: Surface Areas and Volumes",
          "Chapter 14: Statistics",
          "Chapter 15: Probability",
        ],
      },
      {
        sub: "MCQs for Class 9 Science",
        chapters: [
          "Chapter 1: Matter in Our Surroundings",
          "Chapter 2: Is Matter Around Us Pure?",
          "Chapter 3: Atoms and Molecules",
          "Chapter 4: Structure of the Atom",
          "Chapter 5: The Fundamental Unit of Life",
          "Chapter 6: Tissues",
          "Chapter 7: Diversity in Living World",
          "Chapter 8: Motion",
          "Chapter 9: Force and Laws of Motion",
          "Chapter 10: Gravitation",
          "Chapter 11: Work and Energy",
          "Chapter 12: Sound",
          "Chapter 13: Why Do We Fall Ill?",
          "Chapter 14: Natural Resources",
          "Chapter 15: Improvement in Food Resources",
        ],
      },
      {
        sub: "MCQs for Class 9 SSt",
        chapters: [
          "Chapter 1: India and the Contemporary World - I",
          "Chapter 2: The French Revolution",
          "Chapter 3: Nazism and the Rise of Hitler",
          "Chapter 4: Forest Society and Colonialism",
          "Chapter 5: Pastoralists in the Modern World",
          "Chapter 6: Democracy in the Contemporary World",
          "Chapter 7: Contemporary South Asia",
          "Chapter 8: United Nations and its Organizations",
          "Chapter 9: Forests, Wildlife, and Environmental Issues",
        ],
      },
    ],
  },
  {
    title: "MCQs for Class 10",
    subjects: [
      {
        sub: "MCQs for Class 10 Hindi",
        chapters: [
          "Chapter 1: एक बूँद",
          "Chapter 2: कहानी का आखिरी पक्ष",
          "Chapter 3: हिंदी साहित्य की विशेषताएँ",
          "Chapter 4: राष्ट्र निर्माण में हिंदी का योगदान",
          "Chapter 5: भारत में सामाजिक परिवर्तन",
          "Chapter 6: लोक साहित्य और संस्कृति",
          "Chapter 7: भारतीय साहित्य की समीक्षा",
          "Chapter 8: आधुनिक हिंदी कविता",
          "Chapter 9: भारत का हिंदी आंदोलन",
          "Chapter 10: भारत की साहित्यिक धारा",
        ],
      },
      {
        sub: "MCQs for Class 10 English",
        chapters: [
          "Chapter 1: A Letter to God",
          "Chapter 2: Nelson Mandela: Long Walk to Freedom",
          "Chapter 3: Two Stories About Flying",
          "Chapter 4: From the Diary of Anne Frank",
          "Chapter 5: The Hundred Dresses",
          "Chapter 6: The Sermon at Benares",
          "Chapter 7: Glimpses of India",
          "Chapter 8: Mijbil the Otter",
          "Chapter 9: The Spring of the Year",
          "Chapter 10: The Solitary Reaper",
        ],
      },
      {
        sub: "MCQs for Class 10 Math",
        chapters: [
          "Chapter 1: Real Numbers",
          "Chapter 2: Polynomials",
          "Chapter 3: Pair of Linear Equations in Two Variables",
          "Chapter 4: Quadratic Equations",
          "Chapter 5: Arithmetic Progressions",
          "Chapter 6: Triangles",
          "Chapter 7: Coordinate Geometry",
          "Chapter 8: Introduction to Trigonometry",
          "Chapter 9: Some Applications of Trigonometry",
          "Chapter 10: Circles",
          "Chapter 11: Constructions",
          "Chapter 12: Areas Related to Circles",
          "Chapter 13: Surface Areas and Volumes",
          "Chapter 14: Statistics",
          "Chapter 15: Probability",
        ],
      },
      {
        sub: "MCQs for Class 10 Science",
        chapters: [
          "Chapter 1: Chemical Reactions and Equations",
          "Chapter 2: Acids, Bases and Salts",
          "Chapter 3: Metals and Non-metals",
          "Chapter 4: Carbon and Its Compounds",
          "Chapter 5: Periodic Classification of Elements",
          "Chapter 6: Life Processes",
          "Chapter 7: Control and Coordination",
          "Chapter 8: How Do Organisms Reproduce?",
          "Chapter 9: Heredity and Evolution",
          "Chapter 10: Light – Reflection and Refraction",
          "Chapter 11: Human Eye and Colourful World",
          "Chapter 12: Electricity",
          "Chapter 13: Magnetic Effects of Electric Current",
          "Chapter 14: Sources of Energy",
          "Chapter 15: Our Environment",
          "Chapter 16: Management of Natural Resources",
        ],
      },
      {
        sub: "MCQs for Class 10 SSt",
        chapters: [
          "Chapter 1: Power Sharing",
          "Chapter 2: Federalism",
          "Chapter 3: Democracy and Diversity",
          "Chapter 4: Gender, Religion, and Caste",
          "Chapter 5: Popular Struggles and Movements",
          "Chapter 6: Political Parties",
          "Chapter 7: Outcomes of Democracy",
          "Chapter 8: Challenges to Democracy",
          "Chapter 9: Globalization and the Indian Economy",
          "Chapter 10: Consumer Rights",
        ],
      },
    ],
  },
];

const ncertSolItems = [
  {
    title: "Study Material for Nursery",
  },
  {
    title: "Study Material for KG",
  },
  {
    title: "NCERT Solution for class 1",
    subjects: [
      "NCERT Solution for class 1 Hindi",
      "NCERT Solution for class 1 English",
      "NCERT Solution for class 1 Math",
    ],
  },
  {
    title: "NCERT Solution for class 2",
    subjects: [
      "NCERT Solution for class 2 Hindi",
      "NCERT Solution for class 2 English",
      "NCERT Solution for class 2 Math",
    ],
  },
  {
    title: "NCERT Solution for class 3",
    subjects: [
      "NCERT Solution for class 3 Hindi",
      "NCERT Solution for class 3 English",
      "NCERT Solution for class 3 Math",
    ],
  },
  {
    title: "NCERT Solution for class 4",
    subjects: [
      "NCERT Solution for class 4 Hindi",
      "NCERT Solution for class 4 English",
      "NCERT Solution for class 4 Math",
    ],
  },
  {
    title: "NCERT Solution for class 5",
    subjects: [
      "NCERT Solution for class 5 Hindi",
      "NCERT Solution for class 5 English",
      "NCERT Solution for class 5 Math",
      "NCERT Solution for class 5 Science",
      "NCERT Solution for class 5 SSt",
    ],
  },
  {
    title: "NCERT Solution for class 6",
    subjects: [
      "NCERT Solution for class 6 Hindi",
      "NCERT Solution for class 6 English",
      "NCERT Solution for class 6 Math",
      "NCERT Solution for class 6 Science",
      "NCERT Solution for class 6 SSt",
    ],
  },
  {
    title: "NCERT Solution for class 7",
    subjects: [
      "NCERT Solution for class 7 Hindi",
      "NCERT Solution for class 7 English",
      "NCERT Solution for class 7 Math",
      "NCERT Solution for class 7 Science",
      "NCERT Solution for class 7 SSt",
    ],
  },
  {
    title: "NCERT Solution for class 8",
    subjects: [
      "NCERT Solution for class 8 Hindi",
      "NCERT Solution for class 8 English",
      "NCERT Solution for class 8 Math",
      "NCERT Solution for class 8 Science",
      "NCERT Solution for class 8 SSt",
    ],
  },
  {
    title: "NCERT Solution for class 9",
    subjects: [
      "NCERT Solution for class 9 Hindi",
      "NCERT Solution for class 9 English",
      "NCERT Solution for class 9 Math",
      "NCERT Solution for class 9 Science",
      "NCERT Solution for class 9 SSt",
    ],
  },
  {
    title: "NCERT Solution for class 10",
    subjects: [
      "NCERT Solution for class 10 Hindi",
      "NCERT Solution for class 10 English",
      "NCERT Solution for class 10 Math",
      "NCERT Solution for class 10 Science",
      "NCERT Solution for class 10 SSt",
    ],
  },
];

const courseItems = [
  {
    title: "JNVST",
  },
  {
    title: "JNB",
  },
  {
    title: "SANIK SCHOOL (AISSEE)",
  },
  {
    title: "CHS",
  },
  {
    title: "RMS",
  },
  {
    title: "NMMS Scholarship",
  },
  {
    title: "OLYMPIAD",
  },
];
const bookItems = [
  {
    title: "JNVST",
  },
  {
    title: "JNB",
  },
  {
    title: "SANIK SCHOOL (AISSEE)",
  },
  {
    title: "CHS",
  },
  {
    title: "RMS",
  },
  {
    title: "NMMS Scholarship",
  },
  {
    title: "OLYMPIAD",
  },
];

const gamesItems = [
  {
    title: "TYPING.COM",
    link: "https://search.app?link=https%3A%2F%2Fwww.typing.com%2Fstudent%2Fgame%2Fztype&utm_campaign=aga&utm_source=agsadl2%2Csh%2Fx%2Fgs%2Fm2%2F4",
  },
  {
    title: "MONKEY TYPE",
    link: "https://search.app?link=https%3A%2F%2Fmonkeytype.com%2F&utm_campaign=aga&utm_source=agsadl2%2Csh%2Fx%2Fgs%2Fm2%2F4",
  },
];

const adminListItems = [
  {
    title: "ADD FILE",
    link: "/uploadFile",
  },
  {
    title: "ADD NEWS",
    link: "/addNews",
  },
  {
    title: "MANAGE PDFS",
    link: "/managePdfs",
  },
]

function AdminMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleLogout(){
    Cookies.remove("token");
    window.location.reload();
  }

  const renderItems = adminListItems.map(({ title, link }) => (
    <a href={link} key={title}>
      <MenuItem className="hover:bg-[#fe4c1c] hover:text-white">
        <Typography variant="small" className="mb-1">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden text-xs items-center gap-2 font-semibold hover:bg-[#510bdb] hover:text-white lg:flex lg:rounded-full">
              ADMIN{" "}
              <ChevronDownIcon
                strokeWidth={2}
                color="gray"
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[18rem] overflow-visible lg:grid">
          <ul className="flex w-full flex-col gap-1 bg-[#510bdb] text-white">
            {renderItems}
          </ul>
          <button className="bg-blue-500 text-white rounded-full p-2 mt-2" onClick={() => handleLogout()}>Logout</button>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openClass, setOpenClass] = useState(null);
  const [ncertSolItems, setNcertSolItems] = useState([]); // State to store the fetched data
  const navigate = useNavigate();

  const handleClassToggle = (className) => {
    setOpenClass(openClass === className ? null : className);
  };

  const handleSubjectClick = (className, subject) => {
    const formattedClass = className.toLowerCase().trim();
    const formattedSubject = subject.toLowerCase().trim();
    navigate(`/ncert/${formattedClass}/${formattedSubject}`);
  };

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ambitionstudies-server.vercel.app/ncertList", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // Use the response data directly to populate ncertSolItems
        setNcertSolItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs only once when the component mounts

  // Sort and structure the items by class and subject
  const sortedItems = ncertSolItems
    .reduce((acc, { className, subject }) => {
      const classItem = acc.find((item) => item.className === className);
      if (classItem) {
        if (!classItem.subjects.includes(subject)) {
          classItem.subjects.push(subject);
        }
      } else {
        acc.push({
          className,
          subjects: [subject],
        });
      }
      return acc;
    }, [])
    .sort((a, b) => a.className - b.className); // Sort classes by className (numerically)

  const renderItems = sortedItems.map(({ className, subjects }) => (
    <li key={className} className="relative group">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleClassToggle(className);
        }}
        className="flex items-center justify-between hover:bg-[#fe4c1c] hover:text-white p-2 rounded"
      >
        <Typography variant="small" className="mb-1">
          NCERT Solutions for Class {className}
        </Typography>
        <ChevronDownIcon
          strokeWidth={2}
          color="gray"
          className={`h-3 w-3 transition-transform ${
            openClass === className ? "rotate-180" : ""
          }`}
        />
      </a>
      {openClass === className && (
        <ul className="absolute left-full top-0 bg-[#510bdb] text-white w-[18rem] mt-0 rounded shadow-lg z-10">
          {subjects.map((subject) => (
            <li key={subject}>
              <a
                href="#"
                onClick={() => handleSubjectClick(className, subject)}
                className="block px-4 py-2 hover:bg-[#fe4c1c] hover:text-white"
              >
                NCERT Solutions for Class {className} {subject}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  return (
    <div
      className="relative"
      onMouseLeave={() => {
        setIsMenuOpen(false);
        setOpenClass(null);
      }}
    >
      <Typography
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="font-semibold cursor-pointer p-2 text-xs flex items-center gap-2 hover:bg-[#510bdb] hover:text-white lg:rounded-full"
      >
        NCERT SOLUTIONS
        <ChevronDownIcon
          strokeWidth={2}
          color="gray"
          className={`h-3 w-3 transition-transform ${
            isMenuOpen ? "rotate-180" : ""
          }`}
        />
      </Typography>
      {isMenuOpen && (
        <ul className="absolute w-[18rem] bg-[#510bdb] text-white rounded shadow-lg z-20 mt-0 text-sm">
          {renderItems}
        </ul>
      )}
    </div>
  );
}
function McqListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openClass, setOpenClass] = React.useState(null);
  const [openSubject, setOpenSubject] = React.useState(null); // Track the selected subject
  const [chapters, setChapters] = React.useState([]); // Store chapters for the selected subject
  const navigate = useNavigate();

  const handleClassToggle = (classTitle) => {
    setOpenClass(openClass === classTitle ? null : classTitle);
    setOpenSubject(null); // Reset subject and chapters when toggling class
    setChapters([]);
  };

  const handleSubjectToggle = (subject) => {
    setOpenSubject(openSubject === subject ? null : subject); // Toggle the subject's dropdown
    const selectedSubject = mcqItems
      .find((item) => item.title === openClass)
      .subjects.find((item) => item.sub === subject);

    setChapters(selectedSubject ? selectedSubject.chapters : []); // Set chapters for the selected subject
  };

  const handleSubjectClick = (classTitle, subject, chapter) => {
    const formattedClass = classTitle
      .toLowerCase()
      .replace("mcqs for class ", "")
      .trim();
    const formattedSubject = subject
      .toLowerCase()
      .replace(/mcqs for class \d+ /, "")
      .trim();
    navigate(`/mcqs/${formattedClass}/${formattedSubject}/${chapter}`);
  }

  const renderItems = mcqItems.map(({ title, subjects }) => (
    <li key={title} className="relative group">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (subjects) handleClassToggle(title);
        }}
        className="flex items-center justify-between hover:bg-[#fe4c1c] hover:text-white p-2 rounded"
      >
        <Typography variant="small" className="mb-1">
          {title}
        </Typography>
        {subjects && (
          <ChevronDownIcon
            strokeWidth={2}
            color="gray"
            className={`h-3 w-3 transition-transform ${
              openClass === title ? "rotate-180" : ""
            }`}
          />
        )}
      </a>
      {subjects && openClass === title && (
        <ul className="absolute left-full top-0 bg-[#510bdb] text-white w-[18rem] mt-0 rounded shadow-lg z-10">
          {subjects.map(({ sub }) => (
            <li key={sub}>
              <a
                href="#"
                onClick={() => handleSubjectToggle(sub)}
                className="block px-4 py-2 hover:bg-[#fe4c1c] hover:text-white"
              >
                {sub}
              </a>
              {/* Render chapters when a subject is selected */}
              {openSubject === sub && (
                <ul className="absolute text-xs left-full top-0 bg-[#510bdb] text-white w-[16rem] mt-0 rounded shadow-lg z-10">
                  {chapters.map((chapter) => (
                    <li
                      key={chapter}
                      className="px-4 py-2 hover:bg-[#fe4c1c] hover:text-white"
                    >
                      <a
                        href="#"
                        onClick={() => handleSubjectClick(title, sub, chapter)}
                        className="block px-2 py-1 hover:bg-[#fe4c1c] hover:text-white"
                      >
                        {chapter}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  return (
    <div
      className="relative"
      onMouseLeave={() => {
        setIsMenuOpen(false);
        setOpenClass(null);
        setOpenSubject(null);
        setChapters([]);
      }}
    >
      <Typography
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="font-semibold cursor-pointer p-2 text-xs flex items-center gap-2 hover:bg-[#510bdb] hover:text-white lg:rounded-full"
      >
        MCQs
        <ChevronDownIcon
          strokeWidth={2}
          color="gray"
          className={`h-3 w-3 transition-transform ${
            isMenuOpen ? "rotate-180" : ""
          }`}
        />
      </Typography>
      {isMenuOpen && (
        <ul className="absolute w-[18rem] bg-[#510bdb] text-white rounded shadow-lg z-20 mt-1 text-sm">
          {renderItems}
        </ul>
      )}
    </div>
  );
}
function CourseMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = courseItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem className="hover:bg-[#fe4c1c] hover:text-white">
        <Typography variant="small" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small">{description}</Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden text-xs items-center gap-2 font-semibold hover:bg-[#510bdb] hover:text-white lg:flex lg:rounded-full">
              COURSES{" "}
              <ChevronDownIcon
                strokeWidth={2}
                color="gray"
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[18rem] overflow-visible lg:grid">
          <ul className="flex w-full flex-col gap-1 bg-[#510bdb] text-white">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      {/* <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul> */}
    </React.Fragment>
  );
}
function BooksMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = bookItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem className="hover:bg-[#fe4c1c] hover:text-white">
        <Typography variant="small" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small">{description}</Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden text-xs items-center gap-2 font-semibold hover:bg-[#510bdb] hover:text-white lg:flex lg:rounded-full">
              BOOKS{" "}
              <ChevronDownIcon
                strokeWidth={2}
                color="gray"
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[18rem] overflow-visible lg:grid">
          <ul className="flex w-full flex-col gap-1 bg-[#510bdb] text-white">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      {/* <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul> */}
    </React.Fragment>
  );
}
function GamesMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = gamesItems.map(({ title, link }) => (
    <a href={link} key={title}>
      <MenuItem className="hover:bg-[#fe4c1c] hover:text-white">
        <Typography variant="small" className="mb-1">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden text-xs items-center gap-2 font-semibold hover:bg-[#510bdb] hover:text-white lg:flex lg:rounded-full">
              GAMES{" "}
              <ChevronDownIcon
                strokeWidth={2}
                color="gray"
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[18rem] overflow-visible lg:grid">
          <ul className="flex w-full flex-col gap-1 bg-[#510bdb] text-white">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      {/* <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul> */}
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "ONLINE WORKSHEET",
    icon: UserCircleIcon,
    link: "/tests",
  },
  {
    label: "EDUCATIONAL NEWS",
    icon: UserCircleIcon,
    link: "/news",
  },
  // {
  //   label: "TYPING GAME",
  //   icon: CubeTransparentIcon,
  //   link: "https://search.app?link=https%3A%2F%2Fmonkeytype.com%2F&utm_campaign=aga&utm_source=agsadl2%2Csh%2Fx%2Fgs%2Fm2%2F4"
  // },
  // {
  //   label: "SAMPLE PAPERS",
  //   icon: CodeBracketSquareIcon,
  // },
  // {
  //   label: "NCERT BOOKS",
  //   icon: CodeBracketSquareIcon,
  // },
  // {
  //   label: "SYLLABUS",
  //   icon: CodeBracketSquareIcon,
  // },
  // {
  //   label: "CONTACT US",
  //   icon: CodeBracketSquareIcon,
  //   link: "/contact",
  // },
  {
    label: "GALLERY",
    icon: CodeBracketSquareIcon,
    link: "/gallery",
  },
];

function NavList() {
  const token = Cookies.get("token");
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <McqListMenu />
      <NavListMenu />
      <CourseMenu />
      <BooksMenu />
      <GamesMenu />
      {navListItems.map(({ label, icon, link }, key) => (
        <Typography
          key={label}
          as="a"
          href={link}
          variant="small"
          color="gray"
          className="font-medium "
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full hover:bg-[#510bdb] hover:text-white">
            {/* {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "} */}
            <span className="font-semibold text-xs"> {label}</span>
          </MenuItem>
          {/* <CourseMenu />
          <GamesMenu /> */}
        </Typography>
      ))}
      {token && <AdminMenu />}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="p-2 lg:pl-6">
      <div className="relative  flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-bold text-2xl text-purple-700 lg:mr-0 lg:ml-0"
        >
          <span className="text-[#fe4c1c]">H4</span>STUDY
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {/* <Button size="sm" variant="text">
          <span>Log In</span>
        </Button> */}
        {/* <ProfileMenu /> */}
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
