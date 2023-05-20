import { useState } from "react";
import style from '@/styles/Filters.module.scss'
import useFilter from "@/hooks/useFilter";

const PriceRange = () => {
    const { setPrice } = useFilter()
    const [input, setInput] = useState({ min: 0, max: 200_000 })
    const [containerState, setContainerState] = useState(true)

    return (
        <div className={style.asset} >
            <div onClick={() => setContainerState(!containerState)} className={style.title}>
                <h2>Price Range</h2>
                <div className={containerState ? 'arrow-down' : 'arrow-right'}></div>
            </div>
            <div style={{ maxHeight: containerState ? 80 : 0, transition: 'max-height 0.5s', overflow: 'hidden' }}>
                <div className={style.inputs} >
                    <input type='number' value={input.min} onChange={(e) => setInput({ max: parseInt(input.max), min: parseInt(e.target.value, 10) })} />
                    <h2>To</h2>
                    <input type='number' value={input.max} onChange={(e) => setInput({ min: parseInt(input.min), max: parseInt(e.target.value, 10) })} />
                    <button onClick={() => setPrice({ ...input })}>Go</button>
                </div>
            </div>
        </div>
    )
};

export default PriceRange;