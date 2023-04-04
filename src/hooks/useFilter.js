import { useContext } from "react";
import FilterContext from "@/context/filterProvider";

const useFilter = () => {
    return (useContext(FilterContext))
};
export default useFilter;