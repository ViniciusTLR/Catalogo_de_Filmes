
import {useEffect, useState} from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './home.css'

//https://api.themoviedb.org/3/movie/now_playing?api_key=6aefb579813c16340a6f2750004df203&language=pt-BR

function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);


    // TODA VEZ QUE O SITE ABRIR FAZER A REQUISICO NA API
    useEffect(() => {

        //traz os parametros da API
        async function loadFilmes(){
            const response = await api.get("movie/now_playing",{
                params:{
                    api_key:"6aefb579813c16340a6f2750004df203",
                    language: "pt-BR",
                    page: 1,
                }
            })

            // traz só o results da API de 0 a 10
           // console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results.slice(0,10));
            setLoading(false);
        }

        loadFilmes();

    }, [])


    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }


    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}

            </div>
        </div>
    )
}


export default Home;