import {useState} from "react";

export function useFetching(request) {
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const requestMethod = async (...args) => {
        setLoadingStatus(true)
            try {
                await request(...args)
            } catch (e) {
                setErrorMsg(e)
            } finally {
                setLoadingStatus(false)
            }
    }

    return [requestMethod, loadingStatus, errorMsg]
}