import CategoriesContainerComponent from "../components/CategoriesContainerComponent";
import RenderCategories from "../components/RenderCategories";

function Speakers() {
  return (
    <>
      <RenderCategories category={"speakers"} />
      <CategoriesContainerComponent position={"static"} zindex={0} />
    </>
  );
}

export default Speakers;
