const { readFile } = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        resolve({ students, fields, length: length - 1 });
      }
    });
  });
}

module.exports = countStudents;



const http = require('http');

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  };
  if (req.url === '/students') {
    countStudents('database.csv').then(({students,fields,length})=>{
        let output = `Number of students: ${length}\n`;

        // Iterate through fields and students
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }

        // Send the result to the client
        res.end(output);
      }).catch((error)=>{
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      }
      )
  }
}
);
app.listen(port, host, () => {});

module.exports = app;
