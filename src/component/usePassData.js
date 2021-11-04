import React, {useState} from 'react'

function usePassData(props) {

    const [completedTask, setCompletedTask] = useState([])
    
    (()=> {
        setCompletedTask([...completedTask], props)
    })();

    return completedTask
}

export default usePassData
