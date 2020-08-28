import { useState, useCallback, useRef, useEffect } from 'react'

export const useHttpClient = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const activeHttpRequest = useRef([])

    const sendRequest = useCallback(async (
        url,
        method = 'GET',
        body = null,
        headers = {}) => {

        setIsLoading(true)
        const httpAbortCtll = new AbortController()
        activeHttpRequest.current.push(httpAbortCtll)

        try {

            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtll.signal
            })

            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData.message)
            }

            return responseData

        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }, [])

    const clearError = () => {
        setError(null)
    }

    useEffect(() => {
        return () => {
            activeHttpRequest.current.forEach(abortCtl => abortCtl.abort())
        }
    }, [])

    return { isLoading, error, sendRequest }
}