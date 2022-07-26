class Person{
    constructor(name,dob,age,address,email,phonenumber,gender,job,salary,qualification,maritalstatus){
    this.name=name;
    this.dob=dob;
    this.age=age;
    this.address=address;
    this.email=email;
    this.phonenumber=phonenumber;
    this.gender=gender;
    this.job=job;
    this.salary=salary;
    this.qualification=qualification;
    this.maritalstatus=maritalstatus;
}
}
var p1=new Person("mike","1-1-1998","22","253A east street velacherry","mike@gmail.com","9999998965","male","webdeveloper","10lakhs","B.E","single");
console.log(p1);