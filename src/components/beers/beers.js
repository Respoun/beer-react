import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'

const Beers = () => {
  const [beers, setBeers] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const url = 'https://api.punkapi.com/v2/beers'
    axios({
      method: 'GET',
      url: url,
    })
      .then(res => {
        console.log(res.data)
        setBeers(res.data)
        setTotal(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [currentPage])

  return (
    <div>
      <CenterDiv>
      <p>Beers List</p>
      </CenterDiv>
      {beers.map(beers => (
      <Card>
          <img class="beer-picture" src={beers.image_url} alt={beers.name} height="10%" width="10%"></img>
          <Link to={"/details/" + beers.id}>{beers.name}</Link>
      </Card>
      ))}
  </div>
  )
}

const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Card = styled.div`
  background: #e9ecef;
  border-radius: 2px;
  display: inline-block;
  margin: 3rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  display: flex;
  flex-direction: column;
  align-items: center;
`


export default Beers
