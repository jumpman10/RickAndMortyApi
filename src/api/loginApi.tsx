import axios from 'axios'



  const url = 'https://cb81i5mr29.execute-api.sa-east-1.amazonaws.com/v1'

const loginApi = axios.create({url})



export default loginApi