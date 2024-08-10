import { useEffect, useState } from "react";

// HOOK POUR RECUPERER LES DONNEES

export const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    if (!url) return 
    setIsLoading(true);

    const fetchData = async () => {

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setData(data);
        }   catch (error) {
                console.error("Erreur lors du chargement des logements :", error);
                setIsError(true);
        }   finally {
                setIsLoading(false);
        }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError }
};




