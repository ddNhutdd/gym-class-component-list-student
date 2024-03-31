import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class StudentInfoComponent extends Component {
    static propTypes = {
        students: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                age: PropTypes.number, // Optional: can be left undefined
                address: PropTypes.string, // Optional: can be left undefined
            })
        ).isRequired,
    };

    render() {
        const { students } = this.props;

        const renderListStudent = () => students.map(student => (
            <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.age !== undefined ? student.age : '-'}</td>
                <td>{student.address || '-'}</td>
            </tr>
        ))

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {renderListStudent()}
                </tbody>
            </table>
        )
    }
}
