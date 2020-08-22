import React from 'react'
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Max Schwarz',
        image: 'https://vignette.wikia.nocookie.net/disney/images/d/d0/Panchito_house_of_mouse_.jpg/revision/latest?cb=20160909061527',
        places: 3
    },
    {
        id: 'u2',
        name: 'Xam Zrawch',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b36be30e-c035-44ec-902b-4b09458e5141/d5zx33u-44e94a0c-0593-462a-8861-c85f3fbd51d0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9iMzZiZTMwZS1jMDM1LTQ0ZWMtOTAyYi00YjA5NDU4ZTUxNDEvZDV6eDMzdS00NGU5NGEwYy0wNTkzLTQ2MmEtODg2MS1jODVmM2ZiZDUxZDAuanBnIn1dXX0.M_txoIpdcyNAq41gKEZytfGgQnm6UC-WY2mLUrc9Cj0',
        places: 4
    }]


    return <UsersList items={USERS} />
}

export default Users; 