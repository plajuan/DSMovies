import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "pages/Pagination";
import { useEffect } from "react";
import { useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {
    //valor inicial do estado será zero
    const [pageNumber, setPageNumber] = useState(0);
    //a função abaixo será executada () sempre que alguma variável [] mude seu valor
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
            .then(res => {
                const data = res.data as MoviePage;
                setPageNumber(data.number);
            })
    }, []);

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"><MovieCard /></div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"><MovieCard /></div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"><MovieCard /></div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"><MovieCard /></div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"><MovieCard /></div>
                </div>
            </div>
        </>
    );
}

export default Listing;