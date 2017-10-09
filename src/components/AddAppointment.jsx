import React from "react"


export class AddAppointment extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputPetName: '',
            inputOwnerName: '',
            inputAptDate: '',
        }
    }

    onDataChange = (input) => this.setState({ [input.target.name]: input.target.value })

    onDisplayToggle = () => this.props.onDisplayToggle()

    onSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        const displayBody = {
            display: this.props.displayBody? 'block' : 'none'
        }
        const inputPetName = this.state.inputPetName
        const inputOwnerName = this.state.inputOwnerName
        const inputAptDate = this.state.inputAptDate
        const inputAptTime = this.state.inputAptTime
        return (
            <div className="panel panel-primary">
                <div className="panel-heading apt-addheading" onClick={this.onDisplayToggle}>
                    <span className="glyphicon glyphicon-plus"></span>
                    Add Appointment
                </div>
                <div className="panel-body" style={displayBody}>
                    <form className="add-appointment form-horizontal"
                        onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="petName">Pet Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    name="inputPetName"
                                    value={inputPetName} onChange={this.onDataChange}
                                    id="petName" placeholder="Pet's Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="petOwner">Pet Owner</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    name="inputOwnerName"
                                    value={inputOwnerName} onChange={this.onDataChange}
                                    id="petOwner" placeholder="Owner's Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="aptDate">Date</label>
                            <div className="col-sm-4">
                                <input type="date" className="form-control"
                                    name="inputAptDate"
                                    value={inputAptDate} onChange={this.onDataChange}
                                    id="aptDate" />
                            </div>
                            <label className="col-sm-2 control-label" htmlFor="aptTime">Time</label>
                            <div className="col-sm-4">
                                <input type="time" className="form-control"
                                    name="inputAptTime"
                                    value={inputAptTime} onChange={this.onDataChange}
                                    id="aptTime" />
                            </div>

                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="aptNotes">Apt. Notes</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" rows="4" cols="50"
                                    id="aptNotes" ref="inputAptNotes" placeholder="Appointment Notes"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-primary pull-right">Add Appointment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
