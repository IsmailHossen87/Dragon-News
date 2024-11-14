import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="font-bold mb-3">All Category({category.length})</h2>
      <div className="flex flex-col gap-4 w-2/3 ">
        {category.map((data) => (
          <NavLink to={`/category/${data.category_id}`} className='btn' key={data.category_id}>
            {data.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
