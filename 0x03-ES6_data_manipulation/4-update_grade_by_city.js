export default function updateStudentGradeByCity(students,city,newGrades){
    
    return students.map(
        (student) => {
          for (const gradeInfo of newGrades) {
            if (student.id === gradeInfo.studentId) {
              student.grade = gradeInfo.grade; // eslint-disable-line no-param-reassign
            }
          }
          if (student.grade === undefined) {
            student.grade = 'N/A'; // eslint-disable-line no-param-reassign
          }
          return student;
        },).filter((student)=> student.location  === city)
}
