class Person 
{
	private nid: number;
	private name: string;
	private age: number;

	constructor(nid: number, fuel: string, age: number)
	{
	this.nid = nid;
	this.name = name;
	this.age = age;
	}

	getnid():number {
 	return this.nid;
 	}
	setNid(nid: number): void{
	this.nid = nid;
	}

	getname():string {
	return this.name;
	}

	setName(name: string): void{
		this.name = name;
	}
	getage():number {
		return this.age;
	}
	setAge(age: number): void{
		this.age = age;
	}

}

class Student extends Person
{
	id: number;
	classes: string [];
	constructor(nid: number, name: string, age: number) 
	{
	super(nid, name , age);
	this.id= nid;
	}

	getclasses():string []{
 	return this.classes;
 	}
	setClasses(classes: string[]): void{
	this.classes = classes;
	}

}

class Teacher extends Person 
{
	id: number;
	classroom: string [];
	grade: string [];

	constructor(nid: number, name: string, age: number) {
	super(nid, name, age);
	this.id = nid;
	}

	getclassroom():string []{
	return this.classroom;
	}
	setClassroom(classroom: string[]): void{
	this.classroom = classroom;
	}

}

var teac = new Teacher (10,'daniel',45);
teac.classroom=['f','a'];
console.log(teac);

var stud = new Student (11,'camilo',20);
stud.classes=['a','b'];
console.log(stud);




