import React from "react";
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
    title: "MCQs for class 1",
    subjects: [
      {
        sub: "MCQs for class 1 Hindi",
        chapters: ["Chapter 1 Hindi", "Chapter 2 Hindi"],
      },
      {
        sub: "MCQs for class 1 English",
        chapters: ["Chapter 1 English", "Chapter 2 English"],
      },
      {
        sub: "MCQs for class 1 Math",
        chapters: ["Chapter 1 Math", "Chapter 2 Math"],
      },
    ],
  },
  {
    title: "MCQs for class 2",
    subjects: [
      {
        sub: "MCQs for class 2 Hindi",
        chapters: ["Chapter 1 Hindi", "Chapter 2 Hindi"],
      },
      {
        sub: "MCQs for class 2 English",
        chapters: ["Chapter 1 English", "Chapter 2 English"],
      },
      {
        sub: "MCQs for class 2 Math",
        chapters: ["Chapter 1 Math", "Chapter 2 Math"],
      },
    ],
  },
  {
    title: "MCQs for class 3",
    subjects: [
      {
        sub: "MCQs for class 3 Hindi",
        chapters: ["Chapter 1 Hindi", "Chapter 2 Hindi"],
      },
      {
        sub: "MCQs for class 3 English",
        chapters: ["Chapter 1 English", "Chapter 2 English"],
      },
      {
        sub: "MCQs for class 3 Math",
        chapters: ["Chapter 1 Math", "Chapter 2 Math"],
      },
    ],
  },
  {
    title: "MCQs for class 4",
    subjects: [
      {
        sub: "MCQs for class 4 Hindi",
        chapters: ["Chapter 1 Hindi", "Chapter 2 Hindi"],
      },
      {
        sub: "MCQs for class 4 English",
        chapters: ["Chapter 1 English", "Chapter 2 English"],
      },
      {
        sub: "MCQs for class 4 Math",
        chapters: ["Chapter 1 Math", "Chapter 2 Math"],
      },
    ],
  },
  {
    title: "MCQs for class 5",
    subjects: [
      {
        sub: "MCQs for class 5 Hindi",
        chapters: ["Chapter 1 Hindi", "Chapter 2 Hindi"],
      },
      {
        sub: "MCQs for class 5 English",
        chapters: ["Chapter 1 English", "Chapter 2 English"],
      },
      {
        sub: "MCQs for class 5 Math",
        chapters: [
          "Chapter 1 Large Numbers",
          "Chapter 2 Four Fundamental Operations",
          "Chapter 3 Factor and Multiple",
        ],
      },
      {
        sub: "MCQs for class 5 Science",
        chapters: ["Chapter 1 Science", "Chapter 2 Science"],
      },
      {
        sub: "MCQs for class 5 SSt",
        chapters: ["Chapter 1 SSt", "Chapter 2 SSt"],
      },
    ],
  },
  {
    title: "MCQs for class 6",
    subjects: [
      {
        sub: "MCQs for class 6 Hindi",
        chapters: ["Chapter 1 Hindi", "Chapter 2 Hindi"],
      },
      {
        sub: "MCQs for class 6 English",
        chapters: ["Chapter 1 English", "Chapter 2 English"],
      },
      {
        sub: "MCQs for class 6 Math",
        chapters: ["Chapter 1 Math", "Chapter 2 Math"],
      },
      {
        sub: "MCQs for class 6 Science",
        chapters: ["Chapter 1 Science", "Chapter 2 Science"],
      },
      {
        sub: "MCQs for class 6 SSt",
        chapters: ["Chapter 1 SSt", "Chapter 2 SSt"],
      },
    ],
  },
  {
    title: "MCQs for class 7",
    subjects: [
      {
        sub: "MCQs for class 7 Hindi",
        chapters: ["Chapter 1 Hindi", "Chapter 2 Hindi"],
      },
      {
        sub: "MCQs for class 7 English",
        chapters: ["Chapter 1 English", "Chapter 2 English"],
      },
      {
        sub: "MCQs for class 7 Math",
        chapters: ["Chapter 1 Math", "Chapter 2 Math"],
      },
      {
        sub: "MCQs for class 7 Science",
        chapters: ["Chapter 1 Science", "Chapter 2 Science"],
      },
      {
        sub: "MCQs for class 7 SSt",
        chapters: ["Chapter 1 SSt", "Chapter 2 SSt"],
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
    title: "MCQs for class 9",
    subjects: [
      {
        sub: "MCQs for class 9 Hindi",
        chapters: ["Chapter 1 Hindi", "Chapter 2 Hindi"],
      },
      {
        sub: "MCQs for class 9 English",
        chapters: ["Chapter 1 English", "Chapter 2 English"],
      },
      {
        sub: "MCQs for class 9 Math",
        chapters: ["Chapter 1 Math", "Chapter 2 Math"],
      },
      {
        sub: "MCQs for class 9 Science",
        chapters: ["Chapter 1 Science", "Chapter 2 Science"],
      },
      {
        sub: "MCQs for class 9 SSt",
        chapters: ["Chapter 1 SSt", "Chapter 2 SSt"],
      },
    ],
  },
  {
    title: "MCQs for class 10",
    subjects: [
      {
        sub: "MCQs for class 10 Hindi",
        chapters: ["Chapter 1 Hindi", "Chapter 2 Hindi"],
      },
      {
        sub: "MCQs for class 10 English",
        chapters: ["Chapter 1 English", "Chapter 2 English"],
      },
      {
        sub: "MCQs for class 10 Math",
        chapters: ["Chapter 1 Math", "Chapter 2 Math"],
      },
      {
        sub: "MCQs for class 10 Science",
        chapters: ["Chapter 1 Science", "Chapter 2 Science"],
      },
      {
        sub: "MCQs for class 10 SSt",
        chapters: ["Chapter 1 SSt", "Chapter 2 SSt"],
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

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openClass, setOpenClass] = React.useState(null);
  const navigate = useNavigate();

  const handleClassToggle = (classTitle) => {
    setOpenClass(openClass === classTitle ? null : classTitle);
  };

  const handleSubjectClick = (classTitle, subject) => {
    const formattedClass = classTitle
      .toLowerCase()
      .replace("ncert solution for class ", "")
      .trim();
    const formattedSubject = subject
      .toLowerCase()
      .replace(/ncert solution for class \d+ /, "")
      .trim();
    navigate(`/ncert/${formattedClass}/${formattedSubject}`);
  };

  const renderItems = ncertSolItems.map(({ title, subjects }) => (
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
          {subjects.map((subject) => (
            <li key={subject}>
              <a
                href="#"
                onClick={() => handleSubjectClick(title, subject)}
                className="block px-4 py-2 hover:bg-[#fe4c1c] hover:text-white"
              >
                {subject}
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
        <ul className="absolute w-[18rem] bg-[#510bdb] text-white rounded shadow-lg z-20 mt-1 text-sm">
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
