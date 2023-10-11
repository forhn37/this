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

console.log(outer());
console.log(outerTwo());