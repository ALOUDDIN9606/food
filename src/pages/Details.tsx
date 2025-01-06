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
  }, []);

  console.log(data);

  return (
    <div className="container mt-10">
      <div className="flex">
        <div className="w-[50%]">
          <img className="object-cover" src={data?.image} alt="" />
        </div>
        <div className="w-[50%] text-center content-center">
          <h2 className="text-2xl font-bold">{data?.name}</h2>
          <div>
            <ul className="mt-4">
              <span className="text-xl font-medium">Ingredients</span>
              {data?.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <ul className="mt-4">
              <span className="text-xl font-medium">Instructions</span>
              {data?.instructions?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
