import React from "react"
import _ from "lodash"

import { AptListItem } from "./AptListItem"
import { AddAppointment } from "./AddAppointment"
import { SearchAppointment } from "./SearchAppointment"


export class MainInterface extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayBody : false,
            appointments : [],
            orderBy: 'petName',
            sortDir: 'asc',
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/data.json', { method: 'get' })
            .then(response => response.json())
            .then(json => {
                this.setState({ appointments : json })
            })
    }

    onDelete = item => this.setState(prevState => {
        return {
            appointments: _.without(prevState.appointments, item)
        }
    })

    onDisplayToggle = () => this.setState(prevState => {
        return { displayBody: !prevState.displayBody }
    })

    onNewAppointment = item => this.setState(prevState => {
        prevState.appointments.push(item)
        return { ...prevState }
    })

    onSortChange = (orderBy, sortDir) => this.setState({ orderBy, sortDir })

    render() {
        let filteredApts = this.state.appointments
        const orderBy = this.state.orderBy
        const sortDir = this.state.sortDir
        filteredApts = _.orderBy(filteredApts, item => item[orderBy].toLowerCase(), sortDir)
        filteredApts = filteredApts.map((item, index) => {
            return (
                <AptListItem item={item} key={index} onDelete={this.onDelete} />
            )
        })
        const displayBody = this.state.displayBody
        return (
            <div className="inderface">
                <AddAppointment displayBody={displayBody}
                    onNewAppointment={this.onNewAppointment}
                    onDisplayToggle={this.onDisplayToggle} />
                <SearchAppointment
                    orderBy={orderBy}
                    sortDir={sortDir}
                    onSortChange={this.onSortChange}/>
                <ul className="item-list media-list">{filteredApts}</ul>
            </div>
        )
    }
}
