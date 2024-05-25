import CategoriesContainerComponent from "../components/CategoriesContainerComponent";
import RenderCategories from "../components/RenderCategories";

function HeadPhones() {
  return (
    <>
      <RenderCategories category={"headphones"} />
      <CategoriesContainerComponent position={"static"} zindex={0} />
    </>
  );
}

export default HeadPhones;
