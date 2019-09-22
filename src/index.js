import React from 'react';
import PropTypes from 'prop-types';

const Table = props => {

    let data = [{
        _id: 'qweqwe23123',
        name: 'name',
    }];
    
    const tableBody = () => {
        props.datas.map(data => {
            return props.dataCount > 0 ? (
                <tr>{
                    data.map(col => <td>{col}</td>)
                }</tr>
            ) :
            (
                <tr>
                    <td className="text-center" colSpan={tableHeader.length}></td>
                </tr>
            )
        });
    };

    const tableHeader = () => {
        props.tableHeader.map(header => <th>{header}</th>)
    }

    return (
        <table>
            <thead>
                {tableHeader}
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    className: PropTypes.string,
    dark: PropTypes.bool,
    cellPadding: PropTypes.string,
    cellSpacing: PropTypes.string,
    border: PropTypes.string,
    width: PropTypes.string,
    actions: PropTypes.array,
    datas: PropTypes.array,
    emptyMessage: PropTypes.string,
    tableHeader: PropTypes.array,
    dataCount: PropTypes.number
}

Table.defaultProps = {
    className: "table table-striped table-hover table-bordered",
    dark: false,
    cellPadding: "0",
    cellSpacing: "0",
    border: "0",
    width: "100%",
    datas: [],
    emptyMessage: "No data Found!",
    tableHeader: [],
    dataCount: PropTypes.datas.length > 0 ? PropTypes.datas.length : 0
}

export default Table;