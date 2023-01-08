/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePage = () => {
  const [animes, SetAnimes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://project-mongo-api-thr246hagq-lz.a.run.app/animes')
      // eslint-disable-next-line no-undef
      .then((res) => res.json())
      .then((data) => SetAnimes(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [])

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <Wrapper>
      {animes.data.map((anime) => {
        return (
          <LinkToDetails key={anime.id} to={`animes/id/${anime.id}`}>
            <h3>{anime.title}</h3>
            <p>{anime.synopsis}</p>
          </LinkToDetails>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: #7d3e25;
    margin: 0 5%;
`

const LinkToDetails = styled(Link)`
  text-decoration: none;
  color: #fff;
`