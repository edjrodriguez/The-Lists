import React from "react";
import { Route } from "react-router-dom"


class Form extends React.Component{
    constructor() {
        super()
        this.state={
            item: '',
            whitneyItem: '',
            eddieItem: '',
            quantity: '',
            link: '',
            description:''
        }
    }

    handleChange = (event) =>{
        console.log(event)
    }

    render() {
        return(
        <div>
            <Route path='/groceries' render={() => {
                return(
                    <form>
                        <input
                            placeholder="Grocery Item"
                            name='groceryItem'
                            value={this.state.item}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="How many?"
                            name='quantity'
                            value={this.state.quantity}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Details? Specific Brand? Specific store?"
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                        <button>Add to list</button>
                    </form>
                )
            }}/>
            <Route path='/whitneys-wish-list' render={() => {
                return(
                    <form>
                         <input 
                            placeholder="Item"
                            name='whitneyItem'
                            value={this.state.whitneyItem}
                            onChange={this.handleChange}
                            
                        />
                        <input
                            placeholder="Link?"
                            name='link'
                            value={this.state.link}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Details? Specific Brand? Specific store?"
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                        <button>Add to list</button>
                    </form>
                )
            }}/>
              <Route path={'/eddies-wish-list' } render={() => {
                return(
                    <form>
                        <input 
                            placeholder="Item"
                            name='eddieItem'
                            value={this.state.eddieItem}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Link?"
                            name='link'
                            value={this.state.link}
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Details? Specific Brand? Specific store?"
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                        <button>Add to list</button>
                    </form>
                )
            }}/>

        </div>    

    )}
}

export default Form