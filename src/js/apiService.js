import axios from 'axios';
import { data } from 'browserslist';

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages = () => {
     axios.defaults.baseURL = `https://pixabay.com/api/`;
     const API_KEY = `21859800-af94843fb327cc57780ddd667`;
     let params = `?image_type=photo&orientation=horizontal&key=${API_KEY}
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
