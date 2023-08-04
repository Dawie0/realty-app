import axios from 'axios'
import { useState } from "react";

const SearchForm = () => {
    const [keyword, setKeyword] = useState(null);
    const [sort, setSort] = useState(null);
    const [beds, setBeds] = useState(null);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);


    const getLocations = async (req, res) => {
        const options = {
            method: "GET",
            url: "https://realty-in-us.p.rapidapi.com/locations/auto-complete",
            params: { input: req.query.keyword },
            headers: {
              "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
              "x-rapidapi-key": NEXT_PUBLIC_RAPIDAPI_KEY,
            },
          };
        
          axios
            .request(options)
            .then(function (response) {
              res.status(200).json(response.data);
            })
            .catch(function (error) {
              console.error(error);
            })
    }

    const getProporties = async (req, res) => {
        const options = {
            method: "GET",
            url: "https://realty-in-us.p.rapidapi.com/properties/list-for-sale",
            params: {
              state_code: req.query.state_code,
              city: req.query.city,
              offset: "0",
              limit: "20",
              sort: req.query.sort,
              beds_min: req.query.beds,
            },
            headers: {
              "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
              "x-rapidapi-key": NEXT_PUBLIC_RAPIDAPI_KEY,
            },
          };
        
          axios
            .request(options)
            .then(function (response) {
              res.status(200).json(response.data);
            })
            .catch(function (error) {
              console.error(error);
            })
    }

      

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-6">
                <div className="input-group mb-3">
                    <input type="text" placeholder="" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>
            <button onClick={() => getInfo()}>
                get info
            </button>
            
        </div>
    )
}

export default SearchForm