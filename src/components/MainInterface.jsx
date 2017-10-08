import React from "react"
import _ from "lodash"

import { AptListItem } from "./AptListItem"
import { AddAppointment } from "./AddAppointment"


export class MainInterface extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayBody : false,
            appointments : []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/data.json', { method: 'get' })
            .then(response => response.json())
            .then(json => {
                this.setState({ appointments : json })
            })
    }

    onDelete = item => {
        this.setState((prevState, props) => {
            return {
                ...prevState,
                appointments: _.without(prevState.appointments, item)
            }
        })
    }

    onDisplayToggle = () => {
        this.setState((prevState, props) => {
            return {
                ...prevState,
                displayBody: !prevState.displayBody
            }
        })
    }

    render() {
        const filteredApts = this.state.appointments.map((item, index) => {
            return (
                <AptListItem item={item} key={index} onDelete={this.onDelete} />
            )
        })
        const displayBody = this.state.displayBody
        return (
            <div className="inderface">
                <AddAppointment displayBody={displayBody} onDisplayToggle={this.onDisplayToggle}/>
                <ul className="item-list media-list">{filteredApts}</ul>
            </div>
        )
    }
}

