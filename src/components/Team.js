import React, {useState, forwardRef, useImperativeHandle} from 'react'
import ScoreLabel from './ScoreLabel'
import ScoreButton from './ScoreButton'

const Team = forwardRef(({ name }, ref) => {
    const [score, setScore] = useState(0)

    useImperativeHandle(ref, () => ({
        reset
    }))

    const reset = () => setScore(0)

    const addToWe = amount => setScore(score + amount)

    const teamStyle = {
        display: 'flex',
        flexDirection: 'column',
        //backgroundColor: 'yellow',
        width: '50%',
        height: '100%',
        margin: '2px',
        padding: '5px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: '7px',
        border: '1px solid #7D82B8'
    }

    const pairedButtons = {
        display: 'flex',
        flexDirection: 'row',
        //backgroundColor: 'orange',
        justifyContent: 'center',
        width: '100%',
        height: '14%',
        margin: '2px'
    }

    const teamName = {
        fontSize: '35px'
    }

    const generateButtons = () => {
        const buttons = []
        for (let i = 1; i <= 13; i+=2) {
            buttons.push(
                <div key={`buttonPair-${i}`} style={pairedButtons}>
                    <ScoreButton value={i} incrementBy={addToWe} />
                    <ScoreButton value={i+1} incrementBy={addToWe} />
                </div>
                )
        }
        return buttons
    }

    return (
        <div style={teamStyle}>
            <span style={teamName}>{name}</span>
            <ScoreLabel score={score} />
            {generateButtons()}
        </div>
    )
})

export default Team