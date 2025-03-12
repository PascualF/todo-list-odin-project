function setAttributes(element, attribute){
    for(var key in attribute){
        element.setAttribute(key, attribute[key])
    }
}

export default setAttributes;