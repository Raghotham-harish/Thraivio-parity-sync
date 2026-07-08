import { useState } from "react";

import CategoriesHero from "@/components/categories/CategoriesHero";
import CategoriesGrid from "@/components/categories/CategoriesGrid";
import FeaturedCategoryMentors from "@/components/categories/FeaturedCategoryMentors";
import CategoriesCTA from "@/components/categories/CategoriesCTA";

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("");

  return (
    <>
      <CategoriesHero />

      <CategoriesGrid
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FeaturedCategoryMentors
        selectedCategory={selectedCategory}
      />

      <CategoriesCTA />
    </>
  );
};

export default CategoriesPage;