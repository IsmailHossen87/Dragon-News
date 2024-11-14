import { useLoaderData } from "react-router-dom";
import SingleNews from "./SingleNews/SingleNews";

const CategoryNews = () => {
    const {data:newscard}= useLoaderData()

    return (
        <div>
           <h3 className="font-semibold text-xl">{newscard?.length} News found on this category</h3> 
           <div>
            {
                newscard?.map(category => <SingleNews key={category._id}  card= {category}></SingleNews>)
            }
            </div>
        </div>
    );
};

export default CategoryNews;