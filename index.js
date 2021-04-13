//imports
const express = require('express');
const http = require('http');
const cors = require('cors');

//init zone
const app = express();
app.use(cors());

app.use((req, res, next) => {
    if (typeof req.headers["secret-key"] == String){
        res.status(403).json({message: 'Forbiden'});
        console.log('')
    } else if (req.headers["secret-key"] == "lesson"){
        console.log('all ok');
        next();
    } else {
        res.status(403).json({message: 'Forbiden'});
    }
})

app.post('/testPost', (req, res) => {
    res.status(200).json({message: 'It is POST'})

})

app.get('/testGet', (req, res) => {
    res.status(200).json({ message: 'It is GET' });
})

app.delete('/testDelete', (req, res) => {
    res.status(400).json({message: 'Sorry, this method not work'})
})

app.put('/testPut', (req, res) => {
    res.status(500).json({message: 'Server error'})
})

app.patch('/testPatch', (req, res) => {
    res.status(403).json({message: 'Your token incorrect'})
})

app.post('/addToDo', (req, res) => {
    res.status(200).json({message: 'Add ToDo success'})
})

app.delete('/deleteToDo', (req, res) => {
    res.status(200).json({message: 'Delete ToDo success'})
})

app.post('/updateToDo', (req, res) => {
    res.status(200).json({message: 'Update ToDo success'})
})

app.get('/todoList', (req, res) => {

	let todolist = []
	for (let i = 0; i < 10; i++){
		let todo = {
			id: i,
			title: "title = " + i,
			description: `descr ${i}`,
		}
		todolist.push(todo);
	}
	res.status(200).json({todolist})
    //Добавляем метод: GET /todoList, ответ: 200, { todoList: [...] }. Модель одной ToDo: { _id: ‘...’, title: ‘...’, description: ‘...’ }. Список должен генериться методом for, где toDo._id = index.    
})

http.createServer(app).listen(3000, () => {
    console.log('Hello');
})

//request
// app.all("/", (req, res) => {
// app.all('/', (req, res) => {
//     console.log('URL = ',req.url);
//     console.log('Method = ', req.method);
//     console.log('IsSecure = ' ,req.secure);
//     console.log('Query = ' ,req.query);
//     console.log('Body = ', req.body);
//     console.log('HI!');
//     res.status(200).json({message:'All is ok!'});
// })
