import { Container } from '@mui/material'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client"
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Login from '../Login/Login'
import UserMainPage from '../UserMainPage/UserMainPage'
import './App.css'
import { textAlign } from '@mui/system'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='wrapper-app'>
        <Container className='app'>
          <Header title='Портал службы поддержки' />        
          <UserMainPage />
        </Container> 
        <Container>
          <Footer />
        </Container> 
      </div>
    </ApolloProvider>
  )
}

export default App
