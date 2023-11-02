export function save (thing, stuff) {
    try {
        localStorage.setItem(thing, JSON.stringify(stuff))
        console.log(`${thing} saved sucessfully`)
    } catch (error) {
        console.log(error)
    }
}

export function add (thing, stuff) {
    const data = localStorage.getItem(thing)
    let _data = data ? { ...JSON.parse(data), ...stuff } : stuff
    try {
        localStorage.setItem(thing, JSON.stringify(_data))
        console.log(`${thing} updated sucessfully`)
    } catch (error) {
        console.log(error)
    }
}

export function load (thing) {
    const data = localStorage.getItem(thing)
    if (data) {
        return JSON.parse(data)
    } else {
        console.log(`couldnt find ${thing}`)
    }
}

export function clear (thing) {
    localStorage.removeItem(thing)
    console.log(`cleared thing: ${thing}`)
}