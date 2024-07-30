export default function getStudentIdsSum (students){
    let new_arr=[]
    if (students instanceof Array ){
        return students.reduce((agg,student)=>agg +student.id,0)
    }
   else{
    return new_arr
   }
}
