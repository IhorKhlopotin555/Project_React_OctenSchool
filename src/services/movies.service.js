import {axiosService} from "./axios.service";
import {urls} from "../constants";

const ApiKey = process.env.REACT_APP_API_KEY

const moviesService ={
    getAll:(page =1)=>axiosService.get(urls.allMovies, {params:{api_key:ApiKey, page}}),
    getSingle:(id = 333)=>axiosService.get(urls.movies+`/${id}`, {params:{api_key:ApiKey}})
}
export {
    moviesService
}