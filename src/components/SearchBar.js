import { Search } from "@/components/Icons";

const SearchBar = ({placeholder}) => {
    const icon = {
        width: 18,
        height: 18,
        marginLeft: -28,
        fill: 'gray'
    }

    return (
        <>
            <input type='text' placeholder={placeholder} />
            <div style={icon}><Search /></div>
        </>
    )
};
export default SearchBar;