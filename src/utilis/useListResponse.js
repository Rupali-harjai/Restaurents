import { useEffect, useState } from "react";
import { URL_ITEM } from "../utilis/constants";

const useListResponse = (resId) => {
  const [listResponse, setListResponse] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(URL_ITEM + resId);
    const response = await data.json();
    console.log(response.data);
    setListResponse(response.data);
  };

  return listResponse;
};
export default useListResponse;
