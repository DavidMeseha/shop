import style from '@/styles/Display.module.scss';
import ProductCard from "@/components/ProductCard";
import Banner from '@/components/Banner';
import { useEffect, useState } from 'react';
import useFilter from '@/hooks/useFilter';

const Display = ({ laptops }) => {
    const filter = useFilter()
    const { filterData, displayType } = useFilter()
    const [data, setData] = useState(laptops)

    useEffect(() => {
        setData(filterData(laptops))
    }, [filter])

    return (
        <>
            <Banner />
            <div className={style[displayType]}>
                {data.map((laptop, i) => {
                    return (
                        <ProductCard
                            key={i}
                            image={laptop.image}
                            price={laptop.price}
                            title={
                                `${laptop.brand + ' ' +
                                laptop.model + ' ' +
                                laptop.specs.CPU.brand + ' ' +
                                laptop.specs.CPU.type + ' ' +
                                laptop.specs.CPU.speed + ' ' +
                                '/ ' +
                                laptop.specs.GPU.processor + ' ' +
                                laptop.specs.GPU.type + ' ' +
                                laptop.specs.GPU.size + ' ' +
                                '/ RAM ' +
                                laptop.specs.ram.size + ' ' +
                                laptop.specs.ram.type + ' '
                                }`
                            }
                            display={displayType}
                        />
                    )
                })}
            </div>
        </>
    )
};
export default Display;