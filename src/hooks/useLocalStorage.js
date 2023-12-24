import {useEffect, useState} from "react";

export function useLocalStorage(initialValue, key) {
    const getItem = () => {
        const item = localStorage.getItem(key)
        if (item) {
            return JSON.parse(item)
        }
        return initialValue
    }

    const [value, setValue] = useState(getItem)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}