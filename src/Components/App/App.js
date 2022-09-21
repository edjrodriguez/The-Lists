import React from 'react'
import Form from '../Form/Form'
import GroceryItems from '../ItemContainer/GroceryItems'
import { fetchLists } from "../../apiCalls"

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            groceryItems: [],
            whitWishList: [],
            eddieWishList: [],
            error: null
        }
    }

    componentDidMount() {
        console.log('working')
        fetchLists()
        .then((response) => {
            console.log(response)
            const groceryList = response.groceries
            const wWishList = response.whitWishList
            const eWishList =  response.eddieWishList
            this.setState({
                groceryItems: groceryList,
                whitWishList: wWishList,
                eddieWishList: eWishList,
            })
          })
          .catch((err) => {
            this.setState({
              error: err + ". Bad data from server. Refresh or try again later",
            })
          })
    }

    render() {
        return(
            <main className='App'>
                <h1>The Lists</h1>
                <GroceryItems
                    groceryItems={this.state.groceryItems}
                />
                <Form />
            </main>
        )
    }
}


export default App