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

const ncertSolItems = [
  {
    title: "Study Material for Nursery",
  },
  {
    title: "Study Material for KG",
  },
  {
    title: "NCERT Solution for class 1",
    subjects: ["Hindi", "English", "Math"],
  },
  {
    title: "NCERT Solution for class 2",
    subjects: ["Hindi", "English", "Math"],
  },
  {
    title: "NCERT Solution for class 3",
    subjects: ["Hindi", "English", "Math"],
  },
  {
    title: "NCERT Solution for class 4",
    subjects: ["Hindi", "English", "Math"],
  },
  {
    title: "NCERT Solution for class 5",
    subjects: ["Hindi", "English", "Math"],
  },
  {
    title: "NCERT Solution for class 6",
    subjects: ["Hindi", "English", "Math"],
  },
  {
    title: "NCERT Solution for class 7",
    subjects: ["Hindi", "English", "Math"],
  },
  {
    title: "NCERT Solution for class 8",
    subjects: ["Hindi", "English", "Math"],
  },
  {
    title: "NCERT Solution for class 9",
    subjects: ["Hindi", "English", "Math"],
  },
  {
    title: "NCERT Solution for class 10",
    subjects: ["Hindi", "English", "Math"],
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
    link: "https://search.app?link=https%3A%2F%2Fwww.typing.com%2Fstudent%2Fgame%2Fztype&utm_campaign=aga&utm_source=agsadl2%2Csh%2Fx%2Fgs%2Fm2%2F4"
  },
  {
    title: "MONKEY TYPE",
    link: "https://search.app?link=https%3A%2F%2Fmonkeytype.com%2F&utm_campaign=aga&utm_source=agsadl2%2Csh%2Fx%2Fgs%2Fm2%2F4"
  },
]


function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openClass, setOpenClass] = React.useState(null); // Track open dropdown for a specific class

  const handleClassToggle = (classTitle) => {
    setOpenClass(openClass === classTitle ? null : classTitle);
  };

  const renderItems = ncertSolItems.map(({ title, subjects }) => (
    <li key={title} className="relative group">
      <MenuItem
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
      </MenuItem>
      {subjects && openClass === title && (
        <ul className="absolute left-full top-0 bg-[#510bdb] text-white w-40 mt-0 rounded shadow-lg z-10">
          {subjects.map((subject) => (
            <li key={subject}>
              <a
                href="#"
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
    <React.Fragment>
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
          <ul className="absolute w-[18rem] bg-[#510bdb] text-white rounded shadow-lg z-20 mt-2 text-sm">
            {renderItems}
          </ul>
        )}
      </div>
    </React.Fragment>
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
        <Typography variant="small" >
          {description}
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
        <Typography variant="small" >
          {description}
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
    <a  href={link} key={title}>
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
