import { useContext } from "react";
import UserContext from "@/context/userProvider";

const useClientInfo = () => {
    return (useContext(UserContext))
};
export default useClientInfo;