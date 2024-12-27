import React from 'react'
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
       <div>
      <h1 style={{margin: 50 , color: "orangered" , textAlign : "center"}}>Welcome To Farid Chef's Magazine</h1>
      <p style={{textAlign:"center"}}>Click the menu tab to view the catalog</p>
       </div>
    </>
 
  )
}

export default Home