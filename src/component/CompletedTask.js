import React, {useEffect} from 'react'


function CompletedTask({ textHeader, completeItems }) {

    useEffect(() => {
    }, [completeItems] )

    return (
        <div className="container">
            <h2>{textHeader}</h2>

            <div className="tasks">
                {
                    completeItems.length === 0 ? <h1 style={{color:'red'}}>No Completed Items Yet!</h1> :
                    completeItems.map((completed, index) => <div key={index} className="completedTask">{completed} <i class="fas fa-check-circle done"></i></div>)
                }
                 
            </div>
        </div>
    )
}

export default CompletedTask
