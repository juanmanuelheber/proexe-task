import { useState } from "react"

// Custom hook to show or hide modals
export const useModal = (initialMode = false) => {
    const [visible,setVisible] = useState(initialMode)

    const toggle = () => {
        setVisible(!visible)
    }

    return {
        visible, toggle
    }
}
