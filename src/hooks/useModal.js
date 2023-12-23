import {useState} from "react";

export function useModal() {
    const [isVisible, setIsVisible] = useState(false)

    const close = () => {
        setIsVisible(false)
    }

    const show = () => {
        setIsVisible(true)
    }

    return [isVisible, show, close]
}