import { useContext, useEffect } from "react";
import CategoriesContainerComponent from "../components/CategoriesContainerComponent";
import Hero from "../components/Hero";
import RenderCategories from "../components/RenderCategories";
import { Audiophile_Context } from "../App";

function HeadPhones() {
  const { setCategory, category } = useContext(Audiophile_Context);
  useEffect(() => {
    setCategory("headphones");
  }, []);
  return (
    <>
      <RenderCategories category={category} />
      <CategoriesContainerComponent position={"static"} zindex={0} />
      <Hero />
    </>
  );
}

export default HeadPhones;
