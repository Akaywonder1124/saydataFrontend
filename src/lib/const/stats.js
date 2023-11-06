import { GoFileDirectory, GoBookmark } from "react-icons/go";

const stats = [
  {
    key: "files",
    icon: <GoFileDirectory size={25} />,
    value: 100,
    label: "Uploaded Files",
  },
  {
    key: "transcibed",
    icon: <GoFileDirectory size={25} />,
    value: 50,
    label: "Transcribed",
  },
  {
    key: "saved",
    icon: <GoBookmark size={25} />,
    value: 20,
    label: "saved",
  },
];

export default stats;
