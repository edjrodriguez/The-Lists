import React from 'react'
import { Route, Link, Redirect } from "react-router-dom"
import Form from '../Form/Form'
import GroceryItems from '../ItemContainer/GroceryItems'
import ErrorPage from '../ErrorPage/ErrorPage'
import WhitsItems from '../ItemContainer/WhitsItems'
import EddiesItems from '../ItemContainer/EddiesItems'
import { fetchLists, postItem } from "../../apiCalls"

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            groceryItems: [],
            whitWishList: [],
            eddieWishList: [],
            err: null
        }
    }

    addItem = (newItem) => {
        postItem(newItem)
        .then((response) => {
            if(!response.ok) {
                this.setState({
                    err: "Bad data from server. Refresh or try again later",
                  })
              throw new Error("Sorry, there was an error posting your information.");
            } else {
                response.json()
            }
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
              .catch((error) => {
                this.setState({
                  err: error + "Bad data from server. Refresh or try again later",
                })
              })
          });
    }

    componentDidMount() {
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
                {this.state.err && <Redirect to='/error' />}
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
                            <Form 
                                addItem={this.addItem}
                            />
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
                            <Form 
                                addItem={this.addItem}
                            />
                            <WhitsItems
                            whitWishList={this.state.whitWishList}
                            />
                        </div>
                    )
                }}/>
                <Route path='/eddies-wish-list' render={() => {
                    return (
                        <div>
                            <Link to='/'>Home</Link>
                            <Form 
                                addItem={this.addItem}
                            />
                            <EddiesItems
                                eddieWishList={this.state.eddieWishList}
                            />
                        </div>
                    )
                }}/>
                 <Route path='/error' render={() => {
                    return (
                        <div>
                            <Link to='/'>Home</Link>
                            <ErrorPage 
                            message={this.state.err}
                            />
                        </div>
                    )
                }}/>
                {/* <Route path='*'>
                        <h1>404: Not found</h1>
                </Route> */}
            </main>
        )
    }
}

export default App