import style from '@/styles/Filters.module.scss'
import { useEffect, useRef, useState } from 'react';

const CheckBoxList = ({ list, title, values, setValues }) => {
    const [containerState, setContainerState] = useState(true)
    const [selected, setSelected] = useState('')
    const checkboxesRef = useRef()
    checkboxesRef.current = []

    useEffect(() => {
        setSelectedHeader(values)
        setCheckedBoxes()
    }, [values])

    const change = (e) => {
        let temp = values.slice() || []

        if (e.target.checked) {
            temp.push(e.target.value)
        } else {
            temp.splice(temp.indexOf(e.target.value), 1)
        }

        setValues(temp)
        setSelectedHeader(temp)
    }

    const setSelectedHeader = (vals) => {
        let header = ''

        vals.map((value) => {
            header += `${value}; `
        })

        setSelected(header)
    }

    const setCheckedBoxes = () => {
        checkboxesRef.current.forEach(box => {
            if (values.includes(box.value)) box.checked = true
            else box.checked = false
        });
    }

    const setCheckBoxRef = (e) => {
        if (!e || e === null) return
        checkboxesRef.current.push(e)
    }

    return (
        <div className={style.asset} >
            <div onClick={() => setContainerState(!containerState)} className={style.title}>
                <div>{selected.length === 0 ? <h2>{`All ${title}`}</h2> : <h2>{title} <span>: {selected}</span></h2>}</div>
                <div className={containerState ? 'arrow-down' : 'arrow-right'}></div>
            </div>
            <div className={style.checkboxes} style={{ maxHeight: containerState ? 210 : 0 }}>
                {list.map((item, i) => {
                    return (
                        <label key={i} className='checkbox'>{item}
                            <input onChange={change} ref={(e) => setCheckBoxRef(e)} type='checkbox' value={item} />
                            <span></span>
                        </label>
                    )
                })}
            </div>
        </div >
    )
};

export default CheckBoxList;