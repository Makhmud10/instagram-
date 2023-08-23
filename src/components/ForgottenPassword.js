import React, { useState } from 'react'

import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'



const ForgotPassword = () => {
    const {login, forgotPassword} = useAuth()
    const [email, setEmail] = useState("")
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError()
        await forgotPassword(email).then((res) => {
            console.log(res)
            setSuccess('Check inbox for further instructions')
        }).catch((err) => {
            setError(err.message)
            // console.log(err.message)
        })
    }
  return (
    <MDBContainer className='d-flex align-items-center justify-content-center'>
        <MDBCard  style={{width: "600px"}} >
            <MDBCardTitle className='mt-2 text-center' >
                <strong style={{fontWeight: "400", color: "#000", marginBottom: "10px"}}>Reset Account</strong>
            </MDBCardTitle>
            {
                success && <MDBTypography className='ms-4 me-4' note noteColor='success'>
                <strong>Success:</strong> {success}
            </MDBTypography>
            }
            {
                    error && <MDBTypography className='ms-4 me-4' note noteColor='danger'>
                    <strong>Error:</strong> {error}
                </MDBTypography>
            }
            <MDBCardBody>
                <form noValidate onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder='Enter your email' size='lg' required />
                <div className='d-flex align-items-center justify-content-end'>
                <button type='submit' className='mt-2' outline style={{fontWeight: "600"}} rounded >
                    Submit
                </button>
                </div>
                </form>
                
            </MDBCardBody>
            <MDBCardFooter>
                
                <div className='d-flex align-item-center justify-content-center'>
                    <span>Back to? </span>
                    <a href= '/login'>
                        <span className='ms-1'>Login</span>
                    </a>
                </div>
            </MDBCardFooter>
        </MDBCard>
    </MDBContainer>
  )
}

const MDBContainer = styled.div`
    text-align: center;
    width: 30%;
    margin: 0 auto;
    margin-top: 200px;
    height: 200px;
    border: 1px solid lightgray;
`;

const MDBCard = styled.div``;
const MDBCardBody = styled.div`
    input {
        width: 50%;
        height: 30px;
        border: 1px solid lightgray;
        outline: none;
        margin-bottom: 5px;
        padding-left: 3px;
        border-radius: 5px;
    }

    button {
        width: 50%;
        height: 30px;
        border: none;
        outline: none;
        border-radius: 5px;
        background-color: #59bbfc;
        margin-bottom: 30px;
    }
`;
const MDBCardTitle = styled.div`
    margin: 30px;
    font-size: 18px;
`;
const MDBTypography = styled.div``;
const MDBCardFooter = styled.div`
    a {
        text-decoration: none;
        span {
            color: blue;
        }
    }
`;

export default ForgotPassword