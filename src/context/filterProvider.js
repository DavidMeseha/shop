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

    const filterData = (laptops) => {
        let filtered = laptops.slice()
        let temp = []

        //price filter....
        temp = filtered.filter(laptop => {
            return (laptop.price > price.min && laptop.price < price.max)
        })

        if (temp.length !== 0) {
            filtered = temp.slice()
        }

        //type filter....
        if (type.length !== 0) {
            temp = filtered.filter(laptop => {
                return (type.includes(laptop.type))
            })

            filtered = temp.slice()
        }

        //brand filter....
        if (brand.length !== 0) {
            temp = filtered.filter(laptop => {
                return (brand.includes(laptop.brand))
            })

            filtered = temp.slice()
        }

        //Ram-Size filter....
        if (ram.length !== 0) {
            temp = filtered.filter(laptop => {
                return (ram.includes(laptop.specs.ram.size))
            })

            filtered = temp.slice()
        }

        //OS filter....
        if (OS.length !== 0) {
            temp = filtered.filter(laptop => {
                return (OS.includes(laptop.specs.OS))
            })

            filtered = temp.slice()
        }

        //CPU filter....
        if (CPU.length !== 0) {
            temp = filtered.filter(laptop => {
                return (CPU.includes(laptop.specs.CPU.brand + ' ' + laptop.specs.CPU.type))
            })

            filtered = temp.slice()
        }

        //GPU filter....
        if (GPU.length !== 0) {
            temp = filtered.filter(laptop => {
                return (GPU.includes(laptop.specs.GPU.processor))
            })

            filtered = temp.slice()
        }

        if (search.length !== 0) {
            temp = filtered.filter(laptop => {
                return (laptop.model.toLowerCase().includes(search.toLowerCase()))
            })

            filtered = temp.slice()
        }

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