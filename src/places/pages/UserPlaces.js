import React from 'react'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers of the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St, New York, NY 10001, Estados Unidos',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers of the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St, New York, NY 10001, Estados Unidos',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    }
]

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} />
}

export default UserPlaces