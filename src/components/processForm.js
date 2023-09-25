
export const processForm = (event, type, handleResume) => {
    event.preventDefault();
    console.log(event)
    const prepareData = {}
    if (type === 'basicDetails'){
        const form = event.target
        prepareData[type] = {}
        for (const elm of form ){
            if (elm.type === 'submit') continue
            prepareData[type][elm.name] = elm.value
        }
    }
    console.log(prepareData)
    handleResume(prepareData)
}