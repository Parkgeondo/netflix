import React from 'react'
import Banner from '../../components/Banner'
import Row from '../../components/Row';
import requests from '../../api/requests';

export default function MainPage() {
  return (
    <div>
    <Banner></Banner>
      <Row title="NETFLIX ORIGINALS" id="NO" fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Actio nMovies" id="AM" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" id="HM" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" id="RM" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" id="DM" fetchUrl={requests.fetchDocumentarise}></Row>
    </div>
  )
}
