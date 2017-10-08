import React from "react"
import { AptListItem } from "./AptListItem"


export class MainInterface extends React.Component {
    constructor(props) {
        super(props)
        this.state = { appointments : [] }
    }

    componentDidMount() {
        fetch('http://localhost:3000/data.json', { method: 'get' })
            .then(response => response.json())
            .then(json => {
                this.setState({ appointments : json })
            })
    }

    onDelete = item => {
        console.log(`delete ${item}`)
    }

    render() {
        const filteredApts = this.state.appointments.map((item, index) => {
            return (
                <AptListItem item={item} key={index} onDelete={this.onDelete} />
            )
        })
        return (
            <div className="interface">
                <ul className="item-list media-list">{filteredApts}</ul>
            </div>
        )
    }
}
