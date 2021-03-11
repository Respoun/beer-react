import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Details = () => {
  const [beers, setBeers] = useState([])
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const url = 'https://api.punkapi.com/v2/beers/' + id
    axios({
      method: 'GET',
      url: url
    })
      .then(res => {
        console.log(res)
        setBeers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])
    if (beers[0] !== undefined){
      return (
        <div>
          <CenterDiv>
          <img class="beer-picture" src={beers[0].image_url} alt={beers[0].name} height="20%" width="20%"></img>
              <p><b>{beers[0].name}</b></p>
              <p>{beers[0].description}</p>
              <p>Food Pairing: {beers[0].food_pairing[0]}</p>
              <p>{beers[0].ingredients.yeast}</p>
          </CenterDiv>
        </div>
        )
    }
    else{
        return(
            <div>
                <p>chargement...</p>
            </div>
        )
    }
}

const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default Details
