import React from 'react'
import { Route, Link } from "react-router-dom"
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
                <Route exact path='/' render={() => {
                    return (
                        <div>
                            <h1>The Lists</h1>
                            <Link to='/groceries'>Grocery List</Link>
                            <br/>
                            <Link to='/whitneys-wish-list'>Whitney's Wish List</Link>
                            <br/>
                            <Link to='/eddies-wish-list'>Eddie's Wish List</Link>
                        </div>
                    )
                }}/>
                <Route path='/groceries' render={() => {
                    return (
                        <div>
                            <Link to='/'>Home</Link>
                            <Form />
                            <GroceryItems
                            groceryItems={this.state.groceryItems}
                            />
                        </div>
                    )
                }}/>
                 <Route path='/whitneys-wish-list' render={() => {
                    return (
                        <div>
                            <Link to='/'>Home</Link>
                            <Form />
                            {/* <GroceryItems
                            whitWishList={this.state.whitWishList}
                            /> */}
                        </div>
                    )
                }}/>
                <Route path='/eddies-wish-list' render={() => {
                    return (
                        <div>
                            <Link to='/'>Home</Link>
                            <Form />
                            {/* <GroceryItems
                            whitWishList={this.state.whitWishList}
                            /> */}
                        </div>
                    )
                }}/>
            </main>
        )
    }
}

export default App