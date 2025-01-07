import { FC, useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true); // Loading holati
  const saved = useSelector((state: RootState) => state.saved.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (recepies) {
      setIsLoading(false); // Data kelgach loadingni o'chirib qo'yamiz
    }
  }, [recepies]);

  const resepiseItems = recepies?.map((recept: IRecipes) => (
    <div
      key={recept.id}
      className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 relative group"
    >
      <img
        className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-all duration-500"
        src={recept.image}
        alt={recept.name}
        onClick={() => navigate(`/recipes/${recept.id}`)}
      />
      <div className="p-6 bg-gradient-to-t from-black via-transparent to-transparent absolute bottom-0 w-full">
        <h2 className="text-2xl font-bold text-white">{recept.name}</h2>
      </div>
      <button
        onClick={() => dispatch(savedRecept(recept))}
        className="absolute top-3 right-3 text-3xl text-blue-400 hover:text-yellow-500 transition-colors duration-300"
      >
        {saved?.some((item) => item.id === recept.id) ? (
          <FaBookmark className="text-violet-600" />
        ) : (
          <FaRegBookmark className="text-red-600" />
        )}
      </button>
    </div>
  ));

  return (
    <div className="container px-4 py-6">
      {/* Loading Spinner */}
      {isLoading ? (
        <div className="flex justify-center items-center h-[500px]">
          <div className="animate-spin rounded-full border-4 border-t-4 border-blue-500 w-16 h-16"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {resepiseItems}
        </div>
      )}
    </div>
  );
};

export default Recipies;
