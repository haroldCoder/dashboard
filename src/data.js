import woman from './imgs/woman.png'
import man from './imgs/man.png'

const users = [
    {
        "name": "Laura Hernandez",
        "email": "lauhez22@gmail.com",
        "photo": woman
    },
    {
        "name": "Andrez lopez",
        "email": "lopezandre4@gmail.com",
        "photo": man
    }
]
if(localStorage.getItem("users") == undefined){
    localStorage.setItem('users', JSON.stringify(users))
}

export const data = JSON.parse(localStorage.getItem("users") || [])