function Student(name, subject, grade, yearInCollege, age, hasDegree, money) {
    if (typeof name === "string") {
        this.name = name
    }
    if (typeof subject === "string") {
        this.subject = subject
    }
    if ((typeof grade === 'number') && (grade >= 2) && (grade <= 6)) {
        this.grade = grade
    }
    if ((typeof yearInCollege === "number") && (yearInCollege >= 1) && (yearInCollege <= 4)) {
        this.yearInCollege = yearInCollege
    }
    if ((typeof age === "number") && (age >= 18)) {
        this.age = age;
    }
    if (typeof hasDegree === "boolean") {
        this.hasDegree = hasDegree
    }
    if ((typeof money === "number") && (money > 0)) {
        this.money = money
    }
}

Student.prototype.upYear = function() {
    if (this.hasDegree) {
        this.yearInCollege = 4
        console.log("This student is already graduated!")

    } else {
        this.yearInCollege++
            if (this.yearInCollege === 4) {
                this.hasDegree = true;
            }
    }
}

Student.prototype.receiveScholarship = function(min, amount) {
    if ((this.grade >= min) && (this.age < 30)) {
        this.money += amount
        console.log("The money after scholarship is: " + this.money)
        return this.money
    }
}

function StudentGroup(groupSubject) {
    this.groupSubject = groupSubject;
    this.students = []
    this.freePlaces = 5;
}

StudentGroup.prototype.addStudent = function(student) {
    if (!student.hasDegree) {
        if ((this.groupSubject.toLowerCase().trim() === student.subject.toLowerCase().trim()) &&
            (this.freePlaces >= 1) && (student instanceof Student)) {
            this.students.push(student)
            this.freePlaces--
        }
    } else {
        console.log(`${student.name} is already graduated `)
        console.log()
    }
}
StudentGroup.prototype.emptyGroup = function() {
    this.students = []
    this.freePlaces = 5;
}
StudentGroup.prototype.theBestStudentName = function() {
    if (!this.hasDegree) {
        var naiVisokUspehStudent = this.students[0].name
        var index = 0
        var bestGrade = this.students[0].grade
        for (index; index < this.students.length; index++) {
            if (this.students[index].grade > bestGrade) {
                naiVisokUspehStudent = this.students[index].name
                bestGrade = this.students[index].grade
            }
        }
        console.log(naiVisokUspehStudent + " is with highest marks : " + bestGrade)
        return bestGrade;
    }
}
StudentGroup.prototype.printStudentsInGroup = function() {
    var index = 0;
    for (index; index < this.students.length; index++) {
        console.log("Name :" + this.students[index].name)
        console.log("Subject :" + this.students[index].subject)
        console.log("Mark :" + this.students[index].grade)
        console.log("Year in University :" + this.students[index].yearInCollege)
        console.log("Has a degree :" + this.students[index].hasDegree)
        console.log("Age :" + this.students[index].age)
        console.log("Money :" + this.students[index].money)
        console.log()
    }
}
var spindi = new Student("Spiderman", 'drawing', 5.96, 2, 19, false, 200)
var bat = new Student("Batman", 'drawing', 5.11, 2, 19, false, 200)
var cap = new Student("Capitan Amerika", 'drawing', 5.06, 3, 26, true, 220)
var iron = new Student("IronMan", 'swimming', 4.56, 3, 19, false, 100)

spindi.upYear()
console.log(spindi.yearInCollege)
spindi.receiveScholarship(4, 10)

var drawGroup = new StudentGroup("drawing")
drawGroup.addStudent(spindi)
drawGroup.addStudent(bat)
drawGroup.addStudent(iron)
drawGroup.addStudent(cap)
console.log(drawGroup)
drawGroup.theBestStudentName()
console.log(drawGroup)
cap.hasDegree = true
drawGroup.addStudent(cap)
drawGroup.printStudentsInGroup()
drawGroup.theBestStudentName()
    // drawGroup.emptyGroup()
console.log(StudentGroup.prototype)
console.log(cap.constructor)