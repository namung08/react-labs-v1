import { useState } from "react"

export const useCustomToggle = (initial = false) => {
    const [isVisible, setIsVisible] = useState(initial);
    const toggleVisible = () => setIsVisible(!isVisible);

    return [isVisible, toggleVisible] as const;
}