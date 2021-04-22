const API_KEY = process.env.API_KEY;
const LANGUAGE = "&language=en-US";
const GENRES = "&with_genres";

/**
 *
 * this part here just for make it easy for me to generate all these catgories
 */
// // ! start here
const all = {
  Action: "28",
  Animated: "16",
  Documentary: "99",
  Drama: "18",
  Family: "10751",
  Fantasy: "14",
  History: "36",
  Comedy: "35",
  War: "10752",
  Crime: "80",
  Music: "10402",
  Mystery: "9648",
  Romance: "10749",
  SciFi: "878",
  Horror: "27",
  TVmovie: "10770",
  Thriller: "53",
  Western: "37",
  Adventure: "12",
};

let my = {}
Object.entries(all).map(([key, value]) => {
  let url = `/discover/movie/?api_key=${API_KEY}${GENRES}=${value}`;
  let title = `fetch${key}Movies`;
//   let obj = `
//         fetch${key}Movies: {
//         title: "${key}",
//         url: "${url}"
//     },`;
    let p = {}
    // p[1] =
    console.log(p);
});
// // ! end here



/**
 * 
 * this part here just for make it easy for me to generate all these catgories
 */
// // ! start here
// const all = {
//   Action: "28",
//   Animated: "16",
//   Documentary: "99",
//   Drama: "18",
//   Family: "10751",
//   Fantasy: "14",
//   History: "36",
//   Comedy: "35",
//   War: "10752",
//   Crime: "80",
//   Music: "10402",
//   Mystery: "9648",
//   Romance: "10749",
//   SciFi: "878",
//   Horror: "27",
//   TVmovie: "10770",
//   Thriller: "53",
//   Western: "37",
//   Adventure: "12",
// };
// Object.entries(all).map(([key, value]) => {
//   let url = `/discover/movie/?api_key=${API_KEY}${GENRES}=${value}`;
//   let obj = `
//         fetch${key}Movies: {
//         title: "${key}",
//         url: "${url}"
//     },`;
//   const main = JSON.parse(obj);
//   console.log(typeof main);
//   console.log(typeof obj);
//   console.log(obj);
// });
// // ! end here
