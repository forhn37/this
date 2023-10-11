function Student(name, number) {
  this.name = name; 
  this.number = number;
}
// 객체를 찍어내는 생성자 함수
// return이 없어도 값을 냄

let list = ["이민구", "윤준현"];
let studentArr = [];

for(let i = 0; i < list.length; i++) {
  studentArr[i] = new student(list[i], i+1)
};


console.log(studentArr);
// 인스턴스 명이 나오고 배열이 나옴
