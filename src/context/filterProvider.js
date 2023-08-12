import { createContext, useState } from "react";

const FilterContext = createContext({})

export const FilterStateProvider = ({ children }) => {
    const [state, setState] = useState(true)
    const [price, setPrice] = useState({ max: 0, min: 200_000 })
    const [type, setType] = useState([])
    const [ram, setRam] = useState([])
    const [brand, setBrand] = useState([])
    const [OS, setOS] = useState([])
    const [CPU, setCPU] = useState([])
    const [GPU, setGPU] = useState([])
    const [search, setSearch] = useState('')
    const [displayType, setDisplay] = useState('containerGrid') //[containerGrid, containerList]
    const [sort, setSort] = useState('none') //[none, ascending, descending]

    const sortData = (laptops) => {
        let sorted = laptops.slice()
        let temp, done = true

        if (sort === 'ascending') {
            for (let itrator = 0; itrator < sorted.length; itrator++) {
                done = true

                for (let index = 0; index < sorted.length - 1; index++) {
                    if (sorted[index + 1].price < sorted[index].price) {
                        temp = sorted[index]
                        sorted[index] = sorted[index + 1]
                        sorted[index + 1] = temp
                        done = false
                    }
                }

                if (done) break
            }
        }

        if (sort === 'descending') {
            for (let itrator = 0; itrator < sorted.length; itrator++) {
                done = true

                for (let index = 0; index < sorted.length - 1; index++) {
                    if (sorted[index + 1].price > sorted[index].price) {
                        temp = sorted[index]
                        sorted[index] = sorted[index + 1]
                        sorted[index + 1] = temp
                        done = false
                    }
                }

                if (done) break
            }
        }

        return sorted
    }

    const filterPriceRange = (laptops) => {
        return laptops.filter(laptop => {
            return (laptop.price > price.min && laptop.price < price.max)
        })
    }

    const filterTypes = (laptops) => {
        return laptops.filter(laptop => {
            return (type.includes(laptop.type))
        })
    }

    const filterBrands = (laptops) => {
        return laptops.filter(laptop => {
            return (brand.includes(laptop.brand))
        })
    }

    const filterRamSize = (laptops) => {
        return laptops.filter(laptop => {
            return (ram.includes(laptop.specs.ram.size))
        })
    }

    const filterOS = (laptops) => {
        return laptops.filter(laptop => {
            return (OS.includes(laptop.specs.OS))
        })
    }

    const filterCPU = (laptops) => {
        return laptops.filter(laptop => {
            return (CPU.includes(laptop.specs.CPU.brand + ' ' + laptop.specs.CPU.type))
        })
    }

    const filterGPU = (laptops) => {
        return laptops.filter(laptop => {
            return (GPU.includes(laptop.specs.GPU.processor))
        })
    }

    const find = (laptops) => {
        return laptops.filter(laptop => {
            let name = laptop.brand.toLowerCase() + ' ' + laptop.model.toLowerCase()
            return (name.includes(search))
        })
    }

    const filterData = (laptops) => {
        let filtered = laptops.slice()

        filtered = filterPriceRange(filtered)
        if (type.length !== 0) filtered = filterTypes(filtered).slice()
        if (brand.length !== 0) filtered = filterBrands(filtered).slice()
        if (ram.length !== 0) filtered = filterRamSize(filtered).slice()
        if (OS.length !== 0) filtered = filterOS(filtered).slice()
        if (CPU.length !== 0) filtered = filterCPU(filtered).slice()
        if (GPU.length !== 0) filtered = filterGPU(filtered).slice()
        if (search.length !== 0) filtered = find(filtered).slice()

        if (sort !== 'none') return sortData(filtered)

        return filtered
    }

    const clearFilter = () => {
        setBrand([])
        setCPU([])
        setGPU([])
        setOS([])
        setPrice({ min: 0, max: 200_000 })
        setRam([])
        setType([])
    }

    return (
        <FilterContext.Provider value={{
            state, setState,
            displayType, setDisplay,
            sort, setSort,

            filterData, clearFilter,

            price, setPrice,
            type, setType,
            brand, setBrand,
            ram, setRam,
            OS, setOS,
            CPU, setCPU,
            GPU, setGPU,

            search, setSearch
        }}>
            {children}
        </FilterContext.Provider >
    )
}

export default FilterContext