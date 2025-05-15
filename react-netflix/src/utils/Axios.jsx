import axios from 'axios'

const instance=axios.create({
    baseURL:"https://developer.themoviedb.org/"
});

export default instance