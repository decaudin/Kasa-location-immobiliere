import { useEffect, useState, useRef } from "react";

// HOOK POUR RECUPERER LES DONNEES

export const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const data = await response.json();
              setData(data);
          } catch (error) {
              console.error("Erreur lors du chargement des logements :", error);
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, [url]);

  return { data, loading };

};

// HOOK POUR OUVRIR ET FERMER LES COLLAPSES

export const useCollapse = () => {

    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null); // Le hook useref crée une référence à un élément du DOM initialisé à null, on pourra utiliser cette réf pour cibler n'importe quel élément du DOM (le contenu du collapse pour nous)

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return { isOpen, contentRef, toggleCollapse}
}


