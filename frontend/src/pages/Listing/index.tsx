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

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    } 

    //a função abaixo será executada () sempre que alguma variável dentro de [] mude seu valor
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
            .then(res => {
                const data = res.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]);

    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />
            <div className="container">
                <div className="row">
                    {page.content.map(item => 
                        (
                        <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3"><MovieCard movie={item} /></div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing;