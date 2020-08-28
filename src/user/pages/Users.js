import React, { useEffect, useState } from 'react'
import UsersList from "../components/UsersList";
import { API } from "../../config";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Users = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [loadedUsers, setLoadedUsers] = useState()

    useEffect(() => {

        const sendRequest = async () => {

            try {
                setIsLoading(true)
                const response = await fetch(`${API.URL}users`)
                const responseData = await response.json()

                if (!response.ok) {
                    throw new Error(responseData.message)
                }

                setLoadedUsers(responseData.users)

            } catch (error) {
                setError(error.message)
            }

            setIsLoading(false)
        }
        sendRequest()
    }, [])

    const errorHandler = () => {
        setError(null)
    }

    return <React.Fragment>

        <ErrorModal error={error} onClear={errorHandler} />
        {isLoading &&
            <div className="center">
                <LoadingSpinner />
            </div>
        }
        {
            !isLoading &&
            loadedUsers &&
            <UsersList items={loadedUsers} />
        }

    </React.Fragment>
}

export default Users; 