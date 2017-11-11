// import axios from 'axios'
//
// import { config } from '../config'
//
// export const FETCH_POSTS = 'FETCH_POSTS'
// export const FETCH_PROJECTS = 'FETCH_PROJECTS'
// export const FETCH_POSITIONS = 'FETCH_POSITIONS'
//
// const API_BASE_URL = config.API_BASE_URL
// const API_SPACE_ID = config.API_SPACE_ID
// const API_TOKEN = config.API_TOKEN
//
// export function fetchPosts () {
//   const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=2wKn6yEnZewu2SCCkus4as&order=-sys.updatedAt`)
//   return {
//     type: FETCH_POSTS,
//     payload: request
//   }
// }
//
// export function fetchProjects () {
//   const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=projects`)
//   return {
//     type: FETCH_PROJECTS,
//     payload: request
//   }
// }
//
// export function fetchPositions () {
//   const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=positions`)
//   return {
//     type: FETCH_POSITIONS,
//     payload: request
//   }
// }
