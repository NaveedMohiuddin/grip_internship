import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import ViewTransfer from './ViewTransfer';
import Info from './Info';
import ViewAll from './ViewAll';
import '../index.css';

const Home = () => {
    const [data, setData] = useState([]);
    const [cstate, setCState] = useState(false);
    const [tstate, setTState] = useState(false);
    const [transfer, setTransfer] = useState([])

    const showCustomer = () => {
        if (cstate === false) {
            axios.get('https://banking-world.herokuapp.com/customers').then((response) => {
                const customerData = response.data;
                console.log(customerData);
                setData(customerData);
            }).catch((err) => { console.log(err); });
            setCState(true);
            setTState(false);
        }
        else {
            setCState(false);
        }
    }

    const showTransfer = () => {
        if (tstate === false) {
            axios.get('https://banking-world.herokuapp.com/transfer').then((response) => {
                const customerData = response.data;
                setTransfer(customerData);
            }).catch((err) => { console.log(err); });
            setTState(true);
            setCState(false);
        } else {
            setTState(false);
        }
    }

    return (
        <>
            <section id="home_section">
                <div className="home">
                    <h3>To Transfer Amount View the Customer</h3>
                    <Button variant="outlined" color="primary" onClick={showCustomer}>View Customers</Button><br></br><br></br>
                    <Button variant="outlined" color="primary" onClick={showTransfer}>Transfer History</Button>
                    {cstate === true ? <ViewAll props={data} /> : tstate === true ? <ViewTransfer props={transfer} /> : <Info />}
                </div>
            </section>

        </>
    )
}

export default Home;
