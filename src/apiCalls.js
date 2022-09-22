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


let postItem = (newItem) => 
  fetch(customHost, {
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
    fetch(`http://localhost:3001/lists/${id}`, {
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