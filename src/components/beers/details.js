import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { IoBeerOutline } from 'react-icons/io5';
import { GiKnifeFork } from 'react-icons/gi'

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
            <Card>
            <img class="beer-picture" src={beers[0].image_url} alt={beers[0].name} height="20%" width="20%"></img>
                <p><IoBeerOutline/> <b>{beers[0].name}</b></p>
                <p>{beers[0].description}</p>
                <p><GiKnifeFork/>{beers[0].food_pairing[0]}</p>
                <p>{beers[0].ingredients.yeast}</p>
            </Card>
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

export default Details
