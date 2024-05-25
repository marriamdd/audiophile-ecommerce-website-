import CategoriesContainerComponent from "../components/CategoriesContainerComponent";
import Hero from "../components/Hero";
import RenderCategories from "../components/RenderCategories";

function HeadPhones() {
  return (
    <>
      <RenderCategories category={"headphones"} />
      <CategoriesContainerComponent position={"static"} zindex={0} />
      <Hero />
    </>
  );
}

export default HeadPhones;
