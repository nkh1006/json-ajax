// JSON
// JavaScript Objecy Notation

// 1. Object to JSON
// stringify

let json = JSON.stringify(['apple','banana']); 
console.log(json);

const sample = {
   name: "sample name",
   age: 15,
   sex: "male",
   birthDate: new Date(),
   sayHi : () => {
      console.log(`Hi ${this.name}`);
   },
}

// object를 stringify 시키면 함수나 기타 자바스크립관련 문법은 사라진다.

let json2 = JSON.stringify(sample);
console.log(json2);

// object값을 같이 던져줘서 특정 값만 바꿀수도 있다.

let json3 = JSON.stringify(sample,['name', 'age']);
console.log(json3);

// 2. JSON TO Object
// parse

// stringify시킨 string에는 함수가 없기때문에 다시 object화 시켜도 함수는 돌아오지 않는다.

let sampleObject = JSON.parse(json2);
console.log(sampleObject);