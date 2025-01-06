import { FC } from "react";
import { IRecipes } from "../types";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { savedRecept } from "../redux/slices/saved-slices";
import { useNavigate } from "react-router-dom";

interface IRecipiesProps {
  recepies: IRecipes[] | null;
}

const Recipies: FC<IRecipiesProps> = ({ recepies }) => {
  const saved = useSelector((state: RootState) => state.saved.value);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const resepiseItems = recepies?.map((recept: IRecipes) => (
    <div
      key={recept.id}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
    >
      <img
        className="w-full h-[400px] object-cover"
        src={recept.image}
        alt=""
        onClick={() => navigate(`/recipes/${recept.id}`)}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{recept.name}</h2>
      </div>
      <button
        onClick={() => dispatch(savedRecept(recept))}
        className="absolute top-3 right-3 text-3xl text-blue-400"
      >
        {saved?.some((item) => item.id === recept.id) ? (
          <FaBookmark />
        ) : (
          <FaRegBookmark />
        )}
      </button>
    </div>
  ));

  return (
    <div className="container px-4 py-6">
      <div className="grid grid-cols-4 gap-5">{resepiseItems}</div>
    </div>
  );
};

export default Recipies;
