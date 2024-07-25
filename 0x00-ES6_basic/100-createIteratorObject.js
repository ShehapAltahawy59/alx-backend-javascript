export default function createIteratorObject(report) {
    let arr=[]
for (let value of Object.values(report.allEmployees))
    arr.push(...value)
    
return arr
}
