import {useState} from 'react';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

const DetailsPage = (props) => {
    let [detail, setDetail] = useState({});
    fetch(`http://www.omdbapi.com/?apikey=28ad8eec&i=${props.url.query.movie}`)
    .then(response => response.json())
    .then( data => {
        setDetail(data);
    });
    return ( 
        <Layout>
            <Heading headingText={detail.Title}/>
            {detail && <div className="card mb-3">
                <img src={detail.Poster} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{detail.Title}</h5>
                <p className="card-text">{detail.Plot}</p>
                <p className="card-text"><small className="text-muted">{detail.Genre} - {detail.Year}</small></p>
                </div>
                <button className="btn btn-outline-primary" onClick={
                    () => {
                        if(window && window.localStorage){
                            let savedData = window.localStorage.getItem('learn_react');
                            if(savedData){
                                savedData = JSON.parse(savedData);
                            }else{
                                savedData = [];
                            }
                            savedData.push(detail);
                            localStorage.setItem('learn_react', JSON.stringify(savedData) );
                        }
                    }
                }>
                    Add to Favourites
                </button>
            </div>}
        </Layout>
  )
}
export default DetailsPage;
