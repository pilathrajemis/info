import React from "react"
import Joke from "./Joke"

const App = () =>(
    <div>
        <Joke question="q1" punchLine="1"/>
        <Joke question="q2" punchLine="2"/>
        <Joke question="q3" punchLine="3"/>
        <Joke question="q4" punchLine="4" />
        <Joke question="q5" punchLine="5"/>
    </div>
)
export default App