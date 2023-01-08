import React, { useEffect, useState } from 'react';
import { useParams/* , Link  */ } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink } from 'utils/GlobalsStyles';

export const AnimeDetails = () => {
  const [animeDetail, setAnimeDetail] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://project-mongo-api-thr246hagq-lz.a.run.app/animes/id/${id}`)
      .then((res) => res.json())
      .then((data) => setAnimeDetail(data.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <Wrapper>
      <StyledLink to="/">Go back</StyledLink>
      <div>
        <h3>{animeDetail.title}</h3>
        <p>{animeDetail.synopsis}</p>
        <p>{animeDetail.status}</p>
      </div>

    </Wrapper>

  )
}

const Wrapper = styled.div`
  background-color: #5a8854;
`