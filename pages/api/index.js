import axios from 'axios'

const url = 'http://localhost:8000/posts'


export const fetchStudents= ()=> axios.get(url);