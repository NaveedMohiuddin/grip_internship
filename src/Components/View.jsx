import React from 'react';
import { useState,useEffect } from 'react';
import '../index.css';
import { Container } from '@material-ui/core';
import axios from 'axios';
import Transfer from './Transfer';


const View = (props) => {
    
    const [view,setView] =useState({});
    console.log(props.id);
    useEffect(()=>{
        axios.get(`https://banking-world.herokuapp.com/customers/${props.id}`).then((response)=>{
            setView(response.data[0]);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <>
        <Container maxWidth="sm">
            <div className="view">
                <table id="viewTable">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Details</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>Acc No.</td>
                            <td>{view.Accountno}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{view.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{view.email}</td>
                        </tr>
                        <tr>
                            <td>Current Balance</td>
                            <td>{view.Amount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Transfer data={props} />
            </Container>
        </>
    );
}

export default View;
