export default function getStudentsByLocation(arr,city){
    let new_arr=[]
    if (arr instanceof Array ){
        new_arr = arr.filter((item)=> item.location ===city) 
    }
    return new_arr
}

