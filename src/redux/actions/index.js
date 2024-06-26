export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES";
export const GET_JOBS = "GET_JOBS";

export const addToFavorites = (data) => ({
  //senza return uso le tonde prima delle graffe
  type: ADD_TO_FAVORITES,
  payload: data,
});

export const deleteFromFavorites = (i) => {
  return {
    type: DELETE_FROM_FAVORITES,
    payload: i,
  };
};

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const getJobs = (query) => {
  return (dispatch, getState) => {
    fetch(baseEndpoint + query + "&limit=20")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching results");
        }
      })
      .then(({ data }) => {
        console.log("GETSTATE, SECONDO PARAMETRO DELLA FUNZIONE ASINCRONA", getState());
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// export const getJobs = (query) => {
//   return async (dispatch, getState) => {
//     try {
//       const response = await fetch(baseEndpoint + query + "&limit=20");
//       if (response.ok) {
//         const { fetchedJobs } = await response.json();
//         dispatch({
//           type: GET_JOBS,
//           payload: fetchedJobs,
//         });
//       } else {
//         alert("Error fetching results");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
