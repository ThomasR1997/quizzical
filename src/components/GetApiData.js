import { useEffect, useContext } from "react";
import { ApiContext } from "../contextState/ApiContext";

export const GetApiData = () => {
  const { setApiData } = useContext(ApiContext);

  const fetchData = async (getData) => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=5&category=15&type=multiple"
    );

    const data = await response.json();

    getData(data);
  };

  useEffect(() => {
    fetchData(setApiData);
  }, [setApiData]);
};
