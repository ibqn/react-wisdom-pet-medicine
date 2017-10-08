import React from "react"


export class MainInterface extends React.Component {
    constructor(props) {
        super(props)
        this.state = { appointments : [] }
    }

    componentDidMount() {
        console.log('did mount')
        fetch('http://localhost:3000/data.json', { method: 'get' })
            .then(response => response.json())
            .then(json => {
                this.setState({ appointments : json })
                console.log(`data ${this.state.appointments}`)
            })
    }

    render() {
        const filteredApts = this.state.appointments.map((item, index) => {
            return (
                <li className="pet-item media" key={index}>
                    <div className="pet-info media-body">
                        <div className="pet-head">
                            <span className="pet-name">{item.petName}</span>
                            <span className="apt-date pull-right">{item.aptDate}</span>
                        </div>
                        <div className="owner-name"><span className="label-item">Owner: </span>
                        {item.ownerName}</div>
                        <div className="apt-notes">{item.aptNotes}</div>
                    </div>
                </li>
            )
        })
        return (
            <div className="interface">
                <ul className="item-list media-list">{filteredApts}</ul>
            </div>
        )
    }
}
