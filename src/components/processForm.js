import Resume from "./Resume";

export const processForm = ({e, type, handleResume, arrData, setArrData}) => {
    e.preventDefault();
    const prepareData = {}
    const form = e.target
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
                if (elm.value === '') continue
                customExp[elm.name] = elm.value.split('\n')
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

        form.reset()
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
        form.reset()
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
        form.reset()
        return false
    }
    console.log('process form data', prepareData)
    handleResume(prepareData)
}