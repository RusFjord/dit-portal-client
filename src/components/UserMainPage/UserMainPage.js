import { useQuery, gql } from '@apollo/client'
import { CircularProgress, Box } from '@mui/material'
import IncidentsTable from '../IncidentsTable/IncidentsTable'
import './UserMainPage.css'

const INCIDENTS = gql`
    query {
        incidents {
            id
            number
            title
            type
            customer {
                name
            }
            region {
                description
            }
            date
        }
    }
`

function UserMainPage() {

    const { loading, error, data } = useQuery(INCIDENTS);

    if (loading) return (
        <Box sx={{ display: 'flex', padding: '3em', justifyContent: 'center'}}>
            <CircularProgress />
        </Box>
    )
    if (error) return <p>Error :(</p>

    return (
        <div>
            <div>
                Меню
            </div>
            <div>
                <IncidentsTable rows={data}/>
            </div>
        </div>
    )
}

export default UserMainPage