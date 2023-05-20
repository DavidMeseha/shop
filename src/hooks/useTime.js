import { useEffect, useState } from "react";

export const useTime = () => {
    const locale = 'en';
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => clearInterval(timer);
    }, []);

    const time = date.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' });

    return {
        date,
        time,
    };
};