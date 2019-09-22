import React from 'react';
import PropTypes from 'prop-types';

const Table = props => {

    const tableBody = props.datas.length > 0 ? props.datas.map(data => 
    <tr key={data}>
        {
            Object.keys(data).map(col => 
                <td key={col}>
                    {data[col]}
                </td>
            )
        }
        {
            props.view || props.remove ?
            <td>
                {props.view ? <button onClick={props.viewClickAction}>View</button> : null}
                {props.remove ? <button onClick={props.removeClickAction}>Remove</button> : null}
            </td>
            : null
        }
    </tr>
    ) : 
    (
        <tr>
            <td colSpan={props.tableheader.length} className="text-center">{props.emptymessage}</td>
        </tr>
    );

    const tableHeader = props.tableheader.length > 0 ? 
        props.tableheader.map(header => 
            <th>{header}</th>
        ) : 
        Object.keys(props.datas[0]).map(dataKey => 
            <th>{dataKey}</th>
        );

    return (
        <table {...props}>
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
    dark: PropTypes.string,
    cellPadding: PropTypes.string,
    cellSpacing: PropTypes.string,
    border: PropTypes.string,
    width: PropTypes.string,
    actions: PropTypes.array,
    datas: PropTypes.array,
    emptymessage: PropTypes.string,
    tableheader: PropTypes.array,
    datacount: PropTypes.number,
    view: PropTypes.bool,
    remove: PropTypes.bool,
    viewClickAction: PropTypes.string,
    removeClickAction: PropTypes.string,
}

Table.defaultProps = {
    className: "table table-striped table-hover table-bordered",
    dark: "false",
    cellPadding: "0",
    cellSpacing: "0",
    border: "0",
    width: "100%",
    datas: [],
    emptymessage: "No data Found!",
    tableheader: [],
    datacount: 0,
    view: false,
    remove: false,
    viewClickAction: 'viewAction',
    removeClickAction: 'removeAction'
}

export default Table;