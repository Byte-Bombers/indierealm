import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles.jsx";
import images from "../../images.js";
const { Action, Adventure, Horror, Platformer, Puzzle, RPGs, Simulation } =
  images;

const categories = [
  {
    id: 1,
    title: "action",
    imageUrl: Action,
    route: "shop/action",
  },
  {
    id: 2,
    title: "adventure",
    imageUrl: Adventure,
    route: "shop/adventure",
  },
  {
    id: 3,
    title: "horror",
    imageUrl: Horror,
    route: "shop/horror",
  },
  {
    id: 4,
    title: "platformer",
    imageUrl: Platformer,
    route: "shop/platformer",
  },
  {
    id: 5,
    title: "puzzle",
    imageUrl: Puzzle,
    route: "shop/puzzle",
  },
  {
    id: 6,
    title: "rpgs",
    imageUrl: RPGs,
    route: "shop/rpgs",
  },
  {
    id: 7,
    title: "simulation",
    imageUrl: Simulation,
    route: "shop/simulation",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
