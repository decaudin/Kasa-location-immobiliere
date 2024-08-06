import { useState } from "react";

// HOOK POUR OUVRIR ET FERMER LES COLLAPSES

export const useCollapse = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return { isOpen, toggleCollapse}
}