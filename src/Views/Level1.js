import React, { Component } from 'react'
import {Input,Button,Progress,Divider} from "antd";
import {level1} from "../Datas";

export default class Level1 extends Component {

        state ={
            value:"",
            timeOut:false,
            round:0,
            timer:10,
            randomTense:"",
            wrongAnswer:"",
            wrongAnswers:[]
        }



    render() {
        return (
            <div style={{
                padding: '1rem',
                border: '1px solid grey',
                borderRadius: '4px',
                maxWidth: 400,
                margin: '3rem auto'
            }}>
                <h1>Vocaburary Game</h1>
                <Progress percent={70} status="active"/>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <h2>LEVEL 1</h2>
                    <h2>1/5</h2>
                </div>
                <span style={{
                    marginBottom: 0,
                    color: 'grey'
                }} >
                    Infinitive</span>
                <h2>Voca</h2>
                <div style={{ fontSize: '1rem' }}>
                    Answer the voca's<span style={{ color: 'red' }}> past participle</span></div>
                <form style={{ padding: '1rem 0' }}>
                    <div style={{ display: 'flex' }}>
                        <Input name="value"
                            onChange
                            value
                            id="voca"
                            type="text"
                        />
                        <Button className
                            type="submit"
                            onClick
                        >
                            submit
                        </Button>

                    </div>
                </form>
                {/* Timer */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'

                }}>
                    <Button>5</Button>
                    <Button>4</Button>
                    <Button>3</Button>
                    <Button>2</Button>
                    <Button>1</Button>
                    <Button>Click to start</Button>

                </div>

                <Divider/>
                {/* Result */}

                <h3>Wrong! Correct answer:</h3>
                <div>
                    <li style={{ display: 'block' }}>
                        <p>icon answer</p>
                    </li>
                </div>
                <h1>Reviews the wrong answers</h1>
                <div>
                    <ul>
                        <li>answer</li>
                    </ul>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    <Button>Retry</Button>
                    <Button>Leve2</Button>
                </div>
            </div>
        )
    }
}
