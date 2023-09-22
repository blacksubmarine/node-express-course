const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
//routes

//middleware
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Task Manager App')
});

app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id') // single task
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

const port = 3000


app.listen(port, console.log(`Server is listening on port ${port}...`))



