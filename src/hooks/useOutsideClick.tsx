import React, { useEffect } from "react";

export const useOutSideClick = <T extends HTMLElement>(
    ref: React.RefObject<T>, 
    callback: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };
        //attach click outside event listener when the component mounts
        document.addEventListener("mousedown", handleClickOutside);
        //remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
};
