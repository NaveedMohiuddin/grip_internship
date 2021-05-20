import React from 'react';
import {Container} from '@material-ui/core';

const ViewTransfer = (props) => {
    const data = props.props;
    return (
        <>
            <Container fixed>

                <table className="mytable" id="t1">
                    <thead>
                        <tr>
                            <th>To</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((val, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{val.to}</td>
                                        <td>{val.amount}</td>
                                        <td>{val.date}</td>
                                        <td>{val.time}</td>

                                    </tr>
                                </>
                            )
                        })}

                    </tbody>
                </table>
            </Container>
        </>
    );
}

export default ViewTransfer;