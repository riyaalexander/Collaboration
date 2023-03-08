const URL = process.env.REACT_APP_API_BASE_URL;

export function getAllShows() {
    return fetch(`${URL}/shows`).then((response) => response.json());
  }

  export function getOneShow(id) {
    return fetch(`${URL}/shows/${id}`).then((response) => response.json());
  }

  export function createShow(show) {
    const options = {
      method: "POST",
      body: JSON.stringify(show),
      headers: { "Content-Type": "application/json" },
    };
    return fetch(`${URL}/shows/`, options).then((response) => {
      return response.json();
    });
  }