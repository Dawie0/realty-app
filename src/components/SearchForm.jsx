import axios from 'axios'
import { useState } from "react";
import CardContainer from './CardContainer';


const SearchForm = () => {
    const [keyword, setKeyword] = useState('');
    const [sort, setSort] = useState('');
    const [beds, setBeds] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);


    const getProperties = async () => {
      try {
        setLoading(true);
        const location = await axios.get("https://rapid-api-backends.vercel.app/api/location", {
          params: { keyword },
        });
        const { city, state_code } = location.data.autocomplete[0];
  
        const res = await axios.get("https://rapid-api-backends.vercel.app/api/properties", {
          params: { city, state_code, sort, beds },
        });
        const { data } = res;
        setLoading(false);
        setResponse(data.listings);
      } catch (error) {
        setLoading(false);
      }
    }
      
    return (
        <div className="row  mt-4">
          <div className='row d-flex justify-content-center'>
            <div className="col-8">
                <label htmlFor='location' >Enter a location to search for properties</label>
                <div className="input-group mb-3" id='location'>
                    <input 
                      type="text" 
                      placeholder="eg: New York" 
                      className="form-control" 
                      aria-label="Sizing example input" 
                      aria-describedby="inputGroup-sizing-default" 
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}/>
                </div>
            </div>
            <div className='col-5'>
              <label htmlFor='sort' >Sort by</label>
              <select id='sort' className="form-select" aria-label="Default select example" onChange={(e) => setSort(e.target.value)}>
                <option defaultValue={`relevance`} value="relevance">Relevance</option>
                <option value="newest">newest</option>
                <option value="price_high">Price High</option>
                <option value="price_low">Price Low</option>
                <option value="price_reduced_date">Price Reduced Date</option>
                <option value="sqft_high">Square Footage</option>
                <option value="open_house_date">Open House Date</option>
                <option value="photos">Photos</option>
              </select>
            </div>
            <div className='col-5'>
              <label htmlFor='beds' >Minimum number of bedrooms</label>
              <div className="input-group mb-3">                
                <input 
                  id='beds'
                  type="text" 
                  placeholder="1" 
                  className="form-control" 
                  aria-label="Sizing example input" 
                  aria-describedby="inputGroup-sizing-default" 
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}/>
              </div>
            </div>
            <div className='col-8 d-flex m-3 justify-content-center'>
              <button onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                getProperties()}}>
                  {loading ? <>Loading...</> : <>Search</>}
              </button>
            </div>
            
          </div> 
          <div className='row'>
          
            {response && <CardContainer properties={response}/>}
          </div> 
        </div>
    )
}

export default SearchForm