import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IRecipes } from "../types";

const Details: FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<null | IRecipes>(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  return (
    <div className="container mx-auto mt-10 mb-10 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-105"
            src={data?.image}
            alt={data?.name}
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-[50%] text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800">{data?.name}</h2>

          <div className="mt-6">
            <div>
              <span className="text-xl font-semibold text-gray-700">Ingredients</span>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                {data?.ingredients?.map((ingredient, index) => (
                  <li key={index} className="mt-1">{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <span className="text-xl font-semibold text-gray-700">Instructions</span>
              <ul className="list-decimal ml-6 mt-2 text-gray-600">
                {data?.instructions?.map((instruction, index) => (
                  <li key={index} className="mt-1">{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
