import React, { useEffect, useState } from 'react'
import PlaceList from '../components/PlaceList'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import { useParams } from 'react-router-dom'
import { useHttpClient } from '../../shared/hooks/http-hook'
import { API } from "../../config";

const UserPlaces = () => {

    const [loadedPlaces, setLoadedPlaces] = useState()
    const { isLoading, error, sendRequest, clearError } = useHttpClient()
    const userId = useParams().userId

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const responseData = await sendRequest(
                    `${API.URL}places/user/${userId}`
                )
                setLoadedPlaces(responseData.places)
            } catch (error) { }
        }
        fetchPlaces()
    }, [sendRequest, userId])

    return <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (
            <div className="center">
                <LoadingSpinner />
            </div>
        )}
        {
            !isLoading &&
            loadedPlaces &&
            <PlaceList items={loadedPlaces} />
        }
    </React.Fragment>
}

export default UserPlaces