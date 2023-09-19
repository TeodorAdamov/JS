function extract(content) {
    const text = document.getElementById(content).textContent
    const pattern = /\((?<text>[a-zA-Z0-9 ]+)\)/g
    const result = []
    let match = pattern.exec(text)

    while (match !== null) {
        result.push(match.groups.text)
        match = pattern.exec(text)
    }

    return result.join('; ')
    
}

