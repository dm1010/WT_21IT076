class Student {
    constructor(name, ID, dob) {
        this.name = name;
        this.ID = ID;
        this.dob = dob;
    }
    getDetails() {
        return "Name: " + this.name + "<br>" + " ID: " + this.ID + "<br>" + " DOB: " + this.dob;
    }
    getAge() {
        var today = new Date();
        var birthDate = new Date(this.dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return "The Age Of Student Is " + age + "<br>";
    }
}
let p1 = new Student("Dalpat", "21IT001", "10-10-2003");
let p2 = new Student("Bhuri", "21IT002", "11-11-2003");
document.write(p1.getDetails() + "<br>" + p1.getAge() + "<br>");
document.write(p2.getDetails() + "<br>" + p2.getAge() + "<br>");