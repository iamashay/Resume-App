
export const processForm = (event, type, handleResume, arrData, setArrData) => {
    event.preventDefault();
    const prepareData = {}
    const form = event.target
    if (type === 'basicDetails'){
        prepareData[type] = {}
        for (const elm of form ){
            if (elm.type === 'submit') continue
            prepareData[type][elm.name] = elm.value
        }
    } else if (type === 'exp'){
        console.log(arrData)
        prepareData[type] = []
        const customExp = {}
        for (const elm of form ){
            if (elm.type === 'submit') continue
            if (elm.name === 'descArr') {
                customExp[elm.name] = elm.value.split()
                continue
            }
            customExp[elm.name] = elm.value
        }
        customExp.id = crypto.randomUUID()
        setArrData((currentData)=>{
            prepareData[type] = [...currentData, customExp]
            handleResume(prepareData)
            return [...currentData, customExp]
        })
        return false
    } else if (type === 'edu'){
        console.log(arrData)
        prepareData[type] = []
        const customExp = {}
        for (const elm of form ){
            if (elm.type === 'submit') continue
            customExp[elm.name] = elm.value
        }
        customExp.id = crypto.randomUUID()
        setArrData((currentData)=>{
            prepareData[type] = [...currentData, customExp]
            handleResume(prepareData)
            return [...currentData, customExp]
        })
        return false
    } else if (type === 'skills'){
        for (const elm of form ){
            if (elm.type === 'submit') continue
            prepareData[elm.name] = elm.value
        }
        console.log(prepareData)
    } else if (type === 'projects'){
        console.log(arrData)
        prepareData[type] = []
        const customExp = {}
        for (const elm of form ){
            if (elm.type === 'submit') continue
            customExp[elm.name] = elm.value
        }
        customExp.id = crypto.randomUUID()
        setArrData((currentData)=>{
            prepareData[type] = [...currentData, customExp]
            handleResume(prepareData)
            return [...currentData, customExp]
        })
        return false
    }
    handleResume(prepareData)
}