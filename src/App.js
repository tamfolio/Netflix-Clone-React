import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Row from './Components/Row';
import requests from './request';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title='NETFLIX ORIGINAL'  fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} isLargeRow/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} isLargeRow/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} isLargeRow/>
    </div>
  );
}

export default App;
