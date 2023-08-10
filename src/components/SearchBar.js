import { Search } from "@/components/Icons";

const SearchBar = (props) => {
    const icon = {
        width: 18,
        height: 18,
        marginLeft: -28,
        fill: 'gray'
    }

    return (
        <>
            <input type='text' {...props} />
            <div style={icon}><Search /></div>
        </>
    )
};
export default SearchBar;