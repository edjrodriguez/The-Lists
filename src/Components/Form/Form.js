import React from "react";

class Form extends React.Component{
    constructor() {
        super()
        this.state={
            item: '',
            quantity: '',
            description:''
        }
    }

    render() {
        return(
            <form>
                <input/>
                <input/>
                <input/>
                <button>Add to list</button>
            </form>
        )
    }
}

export default Form