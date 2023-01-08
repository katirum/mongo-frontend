import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const AnimeDetails = () => {
  const [AnimeDetail, setMovieDetail] = useState([]);
  const { _id } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://project-mongo-api-thr246hagq-lz.a.run.app/animes/id/${_id}`)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [_id])

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <>
      <Link to="/">Go back</Link>
      <div>
        <h3>{AnimeDetail.title}</h3>
        <p>{AnimeDetail.synopsis}</p>
        <p>{AnimeDetail.status}</p>
      </div>
    </>

  )
}