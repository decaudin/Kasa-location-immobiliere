import { useEffect, useState } from "react";

// HOOK POUR RECUPERER LES DONNEES

export const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    if (!url) return 
    setLoading(true);

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
                setError(true);
        }   finally {
                setLoading(false);
        }
    };
    fetchData();
  }, [url]);

  return { data, loading, error }
};




