import React from 'react';
import {useState} from 'react';
import {TextField,Container,Button} from '@material-ui/core';
import axios from 'axios';
import { Alert } from '@material-ui/lab';

const Transfer = (props) => {
    const [amount,setAmount] = useState("");
    let bal = 0;
    const [alert,setAlert] = useState(false);
    const handleChange = (event) => {
        const value = event.target.value;
        setAmount(value);
    }
    const submitFunc = (event) => {
        event.preventDefault();
        axios.get(`https://banking-world.herokuapp.com/${props.data.id}`).then((response)=>{
           const updateData = response.data[0];
           bal = updateData.Amount;
            const updatedAmt = updateData.Amount+parseInt(amount);
            axios.put(`https://banking-world.herokuapp.com/${updateData._id}`,{
                Accountno : updateData.Accountno,
                name : updateData.name,
                email : updateData.email,
                Amount : updatedAmt
            }).then((response)=>{console.log(response)}).catch((err)=>{console.log(err)})
           setAlert(true);
        });

        axios({
            url:'https://banking-world.herokuapp.com/transfer',
            method: 'POST',
            data: {
                to : props.data.id,
                amount : bal+parseInt(amount),
                date : new Date().toLocaleDateString(),
                time : new Date().toLocaleTimeString()
            }
        }).then(()=>{console.log("success")}).catch((err)=>{console.log(err)})
        setAmount("");   
    }
    return(
        <>
        <Container maxWidth="sm">
        { alert === true ? 
                <Alert style={{marginTop:"20px"}}
                    action={
                        <Button color="primary" size="small"
                            onClick={()=>{window.location.reload()}}>
                            Details
                        </Button>
                    }
                    className="alert"
                >
                    Amount successfully transferred to A/c No. {props.data.id}
                </Alert> : null }
            <div className="transfer">
                <form onSubmit={submitFunc} autoComplete="off">
                    <TextField id="text" label="Amount" variant="standard" onChange={handleChange} name="amount" value={amount} />
                    <Button id="btn" variant="contained" color="primary" type="submit">Transfer</Button>
                </form>
            </div>
        </Container>
        </>
    );
}

export default Transfer;
