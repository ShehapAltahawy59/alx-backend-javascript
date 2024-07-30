export default function getListStudentIds (_list){
    let arr=[]
    if (_list instanceof Array ){
        arr = _list.map((item)=>item.id)
    }
    return arr
}

