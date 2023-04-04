import CheckBoxList from '@/components/CheckBoxList';
import PriceRange from '@/components/PriceRange';
import SearchBar from '@/components/SearchBar';
import useFilter from '@/hooks/useFilter';
import style from '@/styles/Filters.module.scss'
import { useEffect, useState } from 'react';

import {
    Ascending as AscendingIcon,
    Descending as DescendingIcon,
    Grid as GridIcon,
    List as ListIcon
} from '@/components/Icons';

const FilterSection = ({ laptops }) => {
    const { clearFilter, setDisplay, displayType, sort, setSort } = useFilter()
    const {
        type, setType,
        brand, setBrand,
        ram, setRam,
        OS, setOS,
        CPU, setCPU,
        GPU, setGPU
    } = useFilter()

    //avilable Values.............
    const [types, setTypes] = useState([])
    const [brands, setBrands] = useState([])
    const [rams, setRams] = useState([])
    const [OSs, setOSs] = useState([])
    const [CPUs, setCPUs] = useState([])
    const [GPUs, setGPUs] = useState([])
    //............................

    useEffect(() => {

        const setSearchOptions = () => {
            let temp = []

            //types avilable .....
            laptops.forEach(laptop => {
                if (!temp.includes(laptop.type)) temp.push(laptop.type)
            })
            setTypes(temp)

            //brands avilable .....
            temp = []
            laptops.forEach(laptop => {
                if (!temp.includes(laptop.brand)) temp.push(laptop.brand)
            })
            setBrands(temp)

            //Ram-Sizes avilable .....
            temp = []
            laptops.forEach(laptop => {
                if (!temp.includes(laptop.specs.ram.size)) temp.push(laptop.specs.ram.size)
            })
            setRams(temp)

            //OSs Avilable .....
            temp = []
            laptops.forEach(laptop => {
                if (!temp.includes(laptop.specs.OS)) temp.push(laptop.specs.OS)
            })
            setOSs(temp)

            //CPUs Avilable ....
            temp = []
            laptops.forEach(laptop => {
                if (!temp.includes(laptop.specs.CPU.brand + ' ' + laptop.specs.CPU.type)) temp.push(laptop.specs.CPU.brand + ' ' + laptop.specs.CPU.type)
            })
            setCPUs(temp)

            //GPUs Avilable ....
            temp = []
            laptops.forEach(laptop => {
                if (!temp.includes(laptop.specs.GPU.processor)) temp.push(laptop.specs.GPU.processor)
            })
            setGPUs(temp)
        }

        setSearchOptions()
    }, [])

    const toggleAscending = () => {
        if (sort !== 'ascending') setSort('ascending')
        else setSort('none')
    }

    const toggleDescending = () => {
        if (sort !== 'descending') setSort('descending')
        else setSort('none')
    }

    return (
        <>
            <div className={style.topsection}>
                <p onClick={clearFilter} style={{ color: 'blue', cursor: 'pointer' }}>Clear</p>
                <div className={style.view}>
                    <div onClick={toggleAscending} className={`${style.icon} ${sort === 'ascending' ? style.selected : ''}`}><AscendingIcon /></div>
                    <div onClick={toggleDescending} className={`${style.icon} ${sort === 'descending' ? style.selected : ''}`}><DescendingIcon /></div>
                    <span className={style.split}></span>
                    <div onClick={() => setDisplay('containerGrid')} className={`${style.icon} ${displayType === 'containerGrid' ? style.selected : ''}`}><GridIcon /></div>
                    <div onClick={() => setDisplay('containerList')} className={`${style.icon} ${displayType === 'containerList' ? style.selected : ''}`}><ListIcon /></div>
                </div>
            </div>
            <div style={{ marginBottom: 40 }}>
                <div className={style.search}>
                    <SearchBar />
                </div>
                <PriceRange />
                <CheckBoxList list={types} title={'Types'} setValues={setType} values={type} />
                <CheckBoxList list={brands} title={'Brands'} setValues={setBrand} values={brand} />
                <CheckBoxList list={rams} title={'Ram Sizes'} setValues={setRam} values={ram} />
                <CheckBoxList list={OSs} title={'OS'} setValues={setOS} values={OS} />
                <CheckBoxList list={CPUs} title={'CPU'} setValues={setCPU} values={CPU} />
                <CheckBoxList list={GPUs} title={'GPU'} setValues={setGPU} values={GPU} />
            </div>
        </>
    )
}

export default FilterSection;