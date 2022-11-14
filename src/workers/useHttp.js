import { useDispatch } from "react-redux";
import { setinventory } from "../store/cartSlice";



const straatNamen = [
  { name: "Nieboerweg", key: 1, available: true },
  { name: "Sportlaan", key: 2, available: true },
  { name: "Laan van Meerdervoort", key: 3, available: false },
  { name: "Grote Markt", key: 4, available: true },
  { name: "Denneweg", key: 5, available: false },
  { name: "De Lange Poten", key: 6, available: true },
  { name: "Het Plein", key: 7, available: true },
  { name: "Klaverstraat", key: 8, available: false },
  { name: "Scheveningseweg", key: 9, available: true },
  { name: "Ohmstraat", key: 10, available: true },
  { name: "Loosduinsekade", key: 11, available: true },
  { name: "Ommetje", key: 12, available: false },
  { name: "Weimarstraat", key: 13, available: true },
  { name: "Amsterdamsestraat", key: 14, available: true },
  { name: "Duinstraat", key: 15, available: false },
  { name: "Koningsplein", key: 16, available: true },
  { name: "Bierkade", key: 17, available: true },
  { name: "Fietskade", key: 18, available: false },
];


const useHttp = () => {
  const dispatch = useDispatch();

  const PushStraatNamen = async () => {
    console.log("starting the push");

    const response = await fetch(
      "https://reacthooks-40f00-default-rtdb.europe-west1.firebasedatabase.app/straatnamen.json",
      {
        method: "POST",
        body: JSON.stringify(straatNamen),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  };

  const fetchMoviesHandler = async () => {
    try {
      const response = await fetch(
        "https://reacthooks-40f00-default-rtdb.europe-west1.firebasedatabase.app/straatnamen.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const tData = data["-NGqZ3ToH6FW5HnKSTie"];
      const loadedMovies = [];

      for (const key in tData) {
        loadedMovies.push({
          key: key,
          available: tData[key].available,
          name: tData[key].name,
        });
      }
      dispatch(setinventory(loadedMovies));
    } catch (error) {
      console.log(error);
    }
  };
  return [PushStraatNamen, fetchMoviesHandler];
};

export default useHttp;
