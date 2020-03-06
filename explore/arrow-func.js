const square = (x) => {
    return x**2

}


console.log(square(2))

const square1 = (x) => x**2

console.log(square1(3))



const event = {
    name: 'Birthday',
    drinks: ["soda", "lemon", "alcohol"],
    guestList(){
        console.log(`The people Attending the ${this.name} are many`)
    },
    choose(){
        this.drinks.forEach((drink) => {
            console.log(`Those attending the ${this.name} are required to come with the following: ${drink}`)
        })
    }
}

event.guestList()
event.choose()


const tasks = {
    tasks: [{
        text: 'Camping',
        completed: true
    }, {
        text: 'Reading',
        completed: true
    }, {
        text: 'Hiking',
        completed: true
    }],
    completed() {
        const completed1 = this.tasks.filter((task) => {
            if (task.completed) {
                console.log('Here are your completed projects' + " " + task.text)
                // return [{
                //     text: task.text
                // }]
                //return completed2
            } else {
                console.log("There are no completed tasks")
            }
        })
       return completed1
    }
}

tasks.completed()


function doHomework(subject, callback) {
    setTimeout(() => {
        console.log(`Starting my ${subject} homework.`);
    }, 2000)
    callback();
}
function alertFinished(){
    setTimeout(() => {
        console.log('Finished my homework');
    }, 1000)
}
doHomework('math', alertFinished);