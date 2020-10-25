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
        padding: '0.1rem',
        marginLeft: '0.1rem',
        marginRight: '0.1rem',
        marginTop: 0,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '0.5rem',
        border: '0.1rem solid #7D82B8'
    }

    const pairedButtons = {
        display: 'flex',
        flexDirection: 'row',
        //backgroundColor: 'orange',
        justifyContent: 'center',
        width: '100%',
        margin: '0.2rem'
    }

    const teamName = {
        fontSize: '2.3rem',
        padding: 0,
        margin: 0
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