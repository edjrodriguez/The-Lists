// const customHost = "http://localhost:3001/lists/"
const herokuHost = "https://pure-sands-51403.herokuapp.com/lists/"

let fetchLists = () => 
    fetch(herokuHost)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    })


let postItem = (newItem) => 
  fetch(herokuHost, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error(response.statusText);
    } else {
    return response.json()
    }
}) 

  let deleteData = (id) => 
    fetch(`https://pure-sands-51403.herokuapp.com/lists/${id}`, {
            method: 'DELETE'
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error(response.status);
      } else {
      return response.json()
      }
  }) 
  

  
export { fetchLists, postItem, deleteData } 