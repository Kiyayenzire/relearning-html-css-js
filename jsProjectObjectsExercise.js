var employee = {
    names : "John Smith",
    job : "Programmer",
    age : 31,
    nameLength : function() {
        console.log(this.name.Length)
    },
    report : function() {
        alert("Name is " + this.names + ", job tittle: " + this.job + ", age is " + this.age)
    },
    lastName : function () {
        console.log(this.names.split("")[1])
    }
}