function outer() {
  return "hello"
}
// outer라는 이름의 함수를 선언

const outerTwo = function() {
  return "bye"
}
// 이름이 없고 함수이름에 대신하는 변수에다가 함수를 대입
// 함수리터럴
// 변수는 쓰지 않으면 메모리에서 없어짐

const outerThree = () => "wow";
const outerFour = function() {
  return "wow"
};
// arrow함수의 형식 예제; three와 Four는 같다

const outerFive = a => a;
const outerSix = function(a) {
  return a;
}
console.log(outer());
console.log(outerTwo());
console.log(outerThree());
console.log(outerFour());
console.log(outerFive());
// 함수의 파라미터가 입력되지 않아 undefined로 됨
console.log(outerSix(5));