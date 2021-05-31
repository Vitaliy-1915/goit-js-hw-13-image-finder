import axios from 'axios';


export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages = () => {
    //  axios.defaults.baseURL = `https://pixabay.com/api/`;
    //  const API_KEY = `21859800-af94843fb327cc57780ddd667`;
     let params = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&key=21859800-af94843fb327cc57780ddd667
     &per_page=12&page=${this.page}&q=${this.searchQuery}`;
        return axios.get(params).then(response => response = response.data)
            .then(data => {
                // console.log(data);
                this.page += 1;
                return data.hits;
            });
    }
    
    resetPage() {
        this.page = 1;
    }
};
