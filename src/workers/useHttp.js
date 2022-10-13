import { useDispatch } from "react-redux";
import { setinventory } from "../store/cartSlice";



const straatNamen = [
  { name: "Nieboerweg", key: 1, available: true },
  { name: "Sportlaan", key: 2, available: true },
  { name: "Laan van Meerdervoort", key: 3, available: false },
  { name: "Grote Markt", key: 4, available: true },
  { name: "Nieboerweg", key: 5, available: false },
  { name: "Sportlaan", key: 6, available: true },
  { name: "Laan van Meerdervoort", key: 7, available: true },
  { name: "Grote Markt", key: 8, available: false },
  { name: "Nieboerweg", key: 9, available: true },
  { name: "Sportlaan", key: 10, available: true },
  { name: "Laan van Meerdervoort", key: 11, available: true },
  { name: "Grote Markt", key: 12, available: false },
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

      const tData = data["-NEGZSCdlE9wu0wdo72B"];
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
