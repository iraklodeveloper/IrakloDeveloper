[
  { "name": "Lasha", "subject": "Math", "grade": 85, "active": true },
  { "name": "Ana", "subject": "History", "grade": 92, "active": true },
  { "name": "Gio", "subject": "Math", "grade": 45, "active": false },
  { "name": "Nino", "subject": "Physics", "grade": 78, "active": true },
  { "name": "Irakli", "subject": "Math", "grade": 95, "active": true }
]

const fs = require('fs').promises

async function analyzeStudents() {
    try {
        const data = await fs.readFile('students.json', 'utf8')
        const students = JSON.parse(data)
        if (students.length > 0) {
            const activeStudents = students.filter(s => s.active)
            const topStudent = activeStudents.reduce((prev, current) => (prev.grade > current.grade) ? prev : current, 0)
            const studentGrades = activeStudents.reduce((acc, cur) => acc + cur.grade, 0)
            const averageGrade = studentGrades / activeStudents.length
            const academicReport = {
                totalActiveStudents: activeStudents.length,
                averageGrade: averageGrade,
                // ⬇ Set არ არის ჩვეულებრივი მეთოდი, ის არის Built-In ობიექტი(კონსტრუქტორი) - მისი მთავარი თვისება: მასში მნიშვნელობები არ მეორდება. როცა მასივს Set კონსტრუქტორ-ობიექტში ვათავსებ, ის ავტომატურად შლის დუბლიკატებს.
                // ... - Spread (გაშლის) ოპერატორი ჰქვია. იგივე ტრანსპორტერია.
                subjects: [...new Set(students.map(s => s.subject))],
                topStudent: topStudent
            }
            await fs.writeFile('student_stats.json', JSON.stringify(academicReport, null, 2))
            console.log('ფაილი წარმატებით დაემატა!')
        }   
    } catch (error) {
        console.error('უი შეცდომაა: ', error)
    }
}
analyzeStudents()
