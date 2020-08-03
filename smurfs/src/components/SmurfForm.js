import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../components/actions/actions";


const SmurfsForm = (props) => {
    const [smurf, setSmurf] = useState ({
        name: '',
        age: '',
        height: ''
    })
    const inputHandler = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault();
        props.postSmurfs(smurf)
    }
    return(
        <div>
            <form id = "smurfForm">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    labe="name"
                    placeholder="EnterName"
                    value = {props.name}
                    onChange = {inputHandler}
                    className="input"/>
                <label htmlFor="age">Age</label>
                <input
                    type="text"
                    name="Age"
                    labe="Age"
                    placeholder="EnterAge"
                    value = {props.age}
                    onChange = {inputHandler}
                    className="input"/>
                <label htmlFor="name">Height</label>
                <input
                    type="text"
                    name="height"
                    labe="height"
                    placeholder="EnterHeight"
                    value = {props.height}
                    onChange = {inputHandler}
                    className="input"/>
                    <button onClick={submitHandler}>Submit Smurf</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, {postSmurfs})(SmurfsForm)