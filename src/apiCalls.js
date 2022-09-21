const customHost = "http://localhost:3001/lists/"

let fetchLists = () => 
    fetch(customHost)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    })

export { fetchLists } 