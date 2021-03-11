import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'

const Beers = () => {
  const [beers, setBeers] = useState([])
  const valueOffset = 20
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
    <CenterDiv>
      <p>Beers List</p>
      {beers.map(beers => (
      <div>
        <div>
          <img class="beer-picture" src={beers.image_url} alt={beers.name} height="10%" width="10%"></img>
        </div>
          <Link to={"/details/" + beers.id}>{beers.name}</Link>
        </div>
      ))}
    </CenterDiv>
  )
}

const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Beers
