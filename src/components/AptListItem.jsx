import React from "react"


export class AptListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    onDelete = () => this.props.onDelete(this.props.item)

    render() {
        const item = this.props.item;
        return (
            <li className="pet-item media">
                <div className="media-left">
                    <button className="btn btn-xs pet-delete btn-danger" onClick={this.onDelete}>
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                </div>
                <div className="pet-info media-body">
                    <div className="pet-head">
                        <span className="pet-name">{item.petName}</span>
                        <span className="apt-date pull-right">{item.aptDate} {item.aptTime}</span>
                    </div>
                    <div className="owner-name"><span className="label-item">Owner: </span>
                    {item.ownerName}</div>
                    <div className="apt-notes">{item.aptNotes}</div>
                </div>
            </li>
        )
    }
}
