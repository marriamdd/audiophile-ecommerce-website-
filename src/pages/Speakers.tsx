import CategoriesContainerComponent from "../components/CategoriesContainerComponent";
import Hero from "../components/Hero";
import RenderCategories from "../components/RenderCategories";

function Speakers() {
  return (
    <>
      <RenderCategories category={"speakers"} />
      <CategoriesContainerComponent position={"static"} zindex={0} />
      <Hero />
    </>
  );
}

export default Speakers;
