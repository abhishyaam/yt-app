import axios from 'axios'
const KEY = "AIzaSyD29NrmtjtHggJObQpdecuR6pyWBVFmAmA";

export default axios.create({
  baseURL : 'https://www.googleapis.com/youtube/v3',
  params : {
    part : 'snippet',
    maxResults : 5,
    key : KEY,
    type : 'video'
  }
})
