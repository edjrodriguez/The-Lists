import React from 'react'
import './App.css'
import { Route, Link, Redirect, Switch } from "react-router-dom"
import Form from '../Form/Form'
import GroceryItems from '../ItemContainer/GroceryItems'
import ErrorPage from '../ErrorPage/ErrorPage'
import WhitsItems from '../ItemContainer/WhitsItems'
import EddiesItems from '../ItemContainer/EddiesItems'
import { fetchLists, postItem, deleteData } from "../../apiCalls"

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

    deleteItem = (id) => {
        deleteData(id)
        .then(() => {
            fetchLists()
                .then((response) => {
                    this.updateAppState(response)
                })
                .catch((error) => {
                this.setState({
                    err: error + ". Bad data from server. Refresh or try again later",
                })
            })
        })
        .catch((error) => {
            this.setState({
                err: error + ". Problem with deleting data",
            })
        }) 
    }

    addItem = (newItem) => {
        postItem(newItem)
        .then(() => {
            fetchLists()
                .then((response) => {
                    this.updateAppState(response)
                })
                .catch((error) => {
                this.setState({
                    err: error + ". Bad data from server. Refresh or try again later",
                })
            })
        })
        .catch((error) => {
            this.setState({
                err: error + ". Bad data from server. Refresh or try again later",
            })
        })
    }
    
    componentDidMount() {
        fetchLists()
        .then((response) => {
            this.updateAppState(response)
        })
        .catch((error) => {
            this.setState({
                err: error + ". Bad data from server. Refresh or try again later",
            })
        })
    }
    
    updateAppState = (response) => {
        const groceryList = response.groceries
        const wWishList = response.whitWishList
        const eWishList =  response.eddieWishList
        this.setState({
            groceryItems: groceryList,
            whitWishList: wWishList,
            eddieWishList: eWishList,
        })
    }
    
    render() {
        return(
            <main className='App'>
                {this.state.err && <Redirect to='/error' />}
                <Switch>
                <Route exact path='/' render={() => {
                    return (
                        <div>
                            <h1 className='header'>The Lists</h1>
                            <Link to='/groceries'><h1 className='grocery-btn'>Grocery List</h1></Link>
                            <br/>
                            <div className='bottom-btns'>
                            <Link to='/eddies-wish-list'><h3 className='e-wishList-btn'>Eddie's Wish List</h3></Link>
                            <br/>
                            <Link to='/whitneys-wish-list'><h3 className='w-wishList-btn'>Whitney's Wish List</h3></Link>

                            </div>
                        </div>
                    )
                }}/>
                <Route exact path='/groceries' render={() => {
                    return (
                        <div>
                            <Link to='/'><h3>Home</h3></Link>
                            <Form 
                                addItem={this.addItem}
                            />
                            <GroceryItems
                                deleteItem={this.deleteItem}
                                groceryItems={this.state.groceryItems}
                            />
                        </div>
                    )
                }}/>
                 <Route exact path='/whitneys-wish-list' render={() => {
                    return (
                        <div>
                            <Link to='/'><h3>Home</h3></Link>
                            <Form 
                                addItem={this.addItem}
                            />
                            <WhitsItems
                                deleteItem={this.deleteItem}
                                whitWishList={this.state.whitWishList}
                            />
                        </div>
                    )
                }}/>
                <Route exact path='/eddies-wish-list' render={() => {
                    return (
                        <div>
                            <Link to='/'><h3>Home</h3></Link>
                            <Form 
                                addItem={this.addItem}
                            />
                            <EddiesItems
                                deleteItem={this.deleteItem}
                                eddieWishList={this.state.eddieWishList}
                            />
                        </div>
                    )
                }}/>
                 <Route exact path='/error' render={() => {
                    return (
                        <div>
                            <Link to='/'><h3>Home</h3></Link>
                            <ErrorPage 
                                message={this.state.err}
                            />
                        </div>
                    )
                }}/>
                <Route path='*' render={() => {
                    return(
                        <div>
                            <Link to='/'><h3>Home</h3></Link>
                            <h1>404: Not found</h1>
                        </div>
                    )
                }}/>
                </Switch>
            </main>
        )
    }
}

export default App