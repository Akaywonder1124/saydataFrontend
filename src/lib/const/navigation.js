import {
  GoHome,
  GoFileDirectory,
  GoBookmark,
  GoTrash,
  GoGear,
  GoQuestion,
} from "react-icons/go";
import { FiShare2 } from "react-icons/fi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "home",
    label: "Home",
    path: "/",
    icon: <GoHome size={20} />,
  },
  {
    key: "files",
    label: "All Files",
    path: "/files",
    icon: <GoFileDirectory size={20} />,
  },
  {
    key: "saved",
    label: "Saved",
    path: "/saved",
    icon: <GoBookmark size={20} />,
  },
  {
    key: "integration",
    label: "Integration",
    path: "/integration",
    icon: <FiShare2 size={20} />,
  },
  {
    key: "trash",
    label: "Trash",
    path: "/trash",
    icon: <GoTrash size={20} />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/setting",
    icon: <GoGear size={20} />,
  },
  {
    key: "help",
    label: "Help and Support",
    path: "/help",
    icon: <GoQuestion size={20} />,
  },
];
