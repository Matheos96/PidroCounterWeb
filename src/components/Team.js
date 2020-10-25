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
        backgroundColor: 'yellow',
        margin: '5px',
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }

    const pairedButtons = {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'orange',
        justifyContent: 'center',
        width: '100%',
        height: '14%',
        margin: '2px'
    }

    const teamName = {
        fontSize: '30px'
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
            <h3 style={teamName}>{name}</h3>
            <ScoreLabel score={score} />
            {generateButtons()}
        </div>
    )
})

export default Team