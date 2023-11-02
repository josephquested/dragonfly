import * as data from './util/data.js'

import Header from './components/Header.js'
import NewGameButton from './components/NewGameButton.js'

function render () {
    const app = document.getElementById('app')
    
    app.innerHTML = `
        ${Header({ title: 'dragonfly.net' })}
        ${NewGameButton()}
    `
}

render()


// db examples 
// data.add('users', {"Jello" : "Hello"})
// console.log(data.load('users'))
// data.clear('users')