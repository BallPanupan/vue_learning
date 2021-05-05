var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
                text: 'Learn JavaScript'
            },
            {
                text: 'Learn Vue'
            },
            {
                text: 'Build something awesome'
            }
        ]
    }
})

const app3 = new Vue({
    el: '#app-3',
    data: {
        message: 'Ahoy Vue!',
        isMe: false,
        users: [{
                id: 1,
                name: 'John',
                lname: 'Doe'
            },
            {
                id: 2,
                name: 'Jane',
                lname: 'Doe'
            },
            {
                id: 3,
                name: 'Panupan',
                lname: 'Tantiwacharapan'
            }
        ]
    }
})