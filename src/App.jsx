import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import {getGitHubUser} from "./servicies/users";
import Searcher from "./Components/Searcher";
import UserCard from './containers/UserCard'

const App = () => {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser);
  const [notFound,setNotFound] = useState(false);

  const gettingUser = async (user) =>{
    const userResponse = await getGitHubUser(user)

    if(userState === 'octocat'){
      localStorage.setItem('octocat', JSON.stringify(userResponse))
    }

    if(userResponse.message === 'Not Found'){
      const { octocat } = localStorage;
      setInputUser(octocat);
      setUserState(JSON.parse(octocat))
      setNotFound(true);
    } else {
      setUserState(userResponse)
      setNotFound(false)
    }
  }

  useEffect(() =>{
    gettingUser(inputUser)
  },[inputUser])

  return(
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }} >
      <Searcher 
      inputUser={inputUser} 
      setInputUser={setInputUser} 
      notFound={notFound} 
      />
      <UserCard userState={userState}/>
    </Container>
  )
};

export default App;


