import CategoriesContainerComponent from "../components/CategoriesContainerComponent";
import Hero from "../components/Hero";

import RenderCategories from "../components/RenderCategories";

function Earphones() {
  return (
    <>
      <RenderCategories category={"earphones"} />
      <CategoriesContainerComponent position={"static"} zindex={0} />
      <Hero />
    </>
  );
}

export default Earphones;
