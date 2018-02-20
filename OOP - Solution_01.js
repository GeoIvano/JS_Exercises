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
        console.log("Toz student e zavur6il ve !")

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
        console.log("Parite sled stipedniqta sa : " + this.money)
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
        console.log(`Tos ${student.name}  e zavur6il ve `)
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
        console.log(naiVisokUspehStudent + " e s nai-dobur useph : " + bestGrade)
        return bestGrade;
    }
}
StudentGroup.prototype.printStudentsInGroup = function() {
    var index = 0;
    for (index; index < this.students.length; index++) {
        console.log("Ime :" + this.students[index].name)
        console.log("Predmet :" + this.students[index].subject)
        console.log("Ocenka :" + this.students[index].grade)
        console.log("Godina v Universiteta :" + this.students[index].yearInCollege)
        console.log("Ima li diploma :" + this.students[index].hasDegree)
        console.log("Godini :" + this.students[index].age)
        console.log("Kolko pari ima :" + this.students[index].money)
        console.log()
    }
}
var spindi = new Student("BatSpindi", 'risuvane', 5.96, 2, 19, false, 200)
var bat = new Student("Batman", 'risuvane', 5.11, 2, 19, false, 200)
var cap = new Student("Capitan Amerika", 'risuvane', 5.06, 3, 26, true, 220)
var iron = new Student("IronMan", 'gimnastika', 4.56, 3, 19, false, 100)

spindi.upYear()
console.log(spindi.yearInCollege)
spindi.receiveScholarship(4, 10)

var ris = new StudentGroup("risuvane")
ris.addStudent(spindi)
ris.addStudent(bat)
ris.addStudent(iron)
ris.addStudent(cap)
console.log(ris)
ris.theBestStudentName()
console.log(ris)
cap.hasDegree = true
ris.addStudent(cap)
ris.printStudentsInGroup()
ris.theBestStudentName()
    // ris.emptyGroup()
console.log(StudentGroup.prototype)
console.log(cap.constructor)