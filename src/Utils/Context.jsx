import { createContext, useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";
import FetchDatabyQuery from "./API";

let initialState = {
  query: "",
  data: [],
  loading: true,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async () => {
    try {
      const result = await FetchDatabyQuery();
      dispatch({
        type: "Get_datas",
        payload: {
          data: result,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useApiData = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApiData must be used within an AppProvider");
  }
  return context;
};

export { AppContext, AppProvider, useApiData };
