import React from "react"


export class SearchAppointment extends React.Component {
    constructor(props) {
        super(props)
    }

    onOrderByChange = event => this.props.onSortChange(event.target.id, this.props.sortDir)

    onSortDirChange = event => this.props.onSortChange(this.props.orderBy, event.target.id)

    onSearch = event => this.props.onSearch(event.target.value)

    render() {
        const ok = <span className="glyphicon glyphicon-ok"></span>
        const selectOrder = orderBy => {
            return this.props.orderBy === orderBy ? ok : null
        }
        const selectDir = sortDir => {
            return this.props.sortDir === sortDir ? ok : null
        }
        return (
            <div className="row search-appointments">
                <div className="col-sm-offset-3 col-sm-6">
                    <div className="input-group">
                        <input id="SearchApts" placeholder="Search" type="text"
                            value={this.props.searchText}
                            onChange={this.onSearch}
                            className="form-control" aria-label="Search Appointments" />
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort by: <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                    <a href="#" id="petName" onClick={this.onOrderByChange}>
                                        Pet Name {selectOrder("petName")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" id="aptDate" onClick={this.onOrderByChange}>
                                        Date {selectOrder("aptDate")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" id="ownerName" onClick={this.onOrderByChange}>
                                        Owner {selectOrder("ownerName")}
                                    </a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li>
                                    <a href="#" id="asc" onClick={this.onSortDirChange}>
                                        Asc {selectDir("asc")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" id="desc" onClick={this.onSortDirChange}>
                                        Desc {selectDir("desc")}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
