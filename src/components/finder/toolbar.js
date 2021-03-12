import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Toolbar = () => {

    const [ query, setquery ] = useState('')
    const history = useHistory()

    const onSubmit= e => {
        e.preventDefault()
          history.push('/find/'+query)
    }

  return (
    <StyledForm onSubmit={onSubmit}>
        <StyledSpan>Find a Beer</StyledSpan>
        <StyledInput onChange={e => {setquery(e.target.value)}} placeholder="query" type='text'></StyledInput>
        <StyledInput type='submit'></StyledInput>
    </StyledForm>
  )
}

const StyledSpan = styled.span`
    color: blue;
    margin-bottom: 15px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledInput = styled.input`
    margin: 6px 0px;
    border-radius: 2px;
    border: none;
`
export default Toolbar
