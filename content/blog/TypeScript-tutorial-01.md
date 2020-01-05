---
title: 타입스크립트 튜토리얼 정리 01
date: "2020-01-04T18:00"
description: "TypeScript in 5 minute"
tags: ['TypeScript', 'tutorial']
---

# TypeScript in 5minute
[원본 주소](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

타입스크립트를 사용해서 간단한 웹 어플리케이션을 만들어보자.

## 타입스크립트 설치

- 타입스크립트를 설치하는 2가지 방법이있다.
  - npm을 통해서 설치
  - VSCode 플러그인을 통해서 설치

npm을 통해서 설치하는 방법은 아래와 같다.

```bash
npm install -g typescript
```

## 첫 타입스크립트 파일 만들기

에디터에서, `greeter.ts`파일을 생성하고 아래와 같이 코딩한다.

```typescript{numberLines: true}
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```

## 타입스크립트 파일 컴파일하기

우리는 앞선 예제에서 `.ts` 확장자를 사용했다, 하지만 그 예제의 코드는 순수한 Javascript 코드다. 다른 .js파일에 코드를 그대로 사용할 수도 있다.

명령줄에서, 타입스크립트 컴파일러를 실행시켜보자.

```bash
tsc greeter.ts
```
<br/>

결과는 앞서 입력한 코드로 이루어져 있는 `greeter.js`파일이 될 것이다. 즉 자바스크립트 어플리케이션을 타입스크립트를 사용해서 준비하고 실행할 수 있다.

이제부터는 타입스크립트가 제공하는 몇 가지 도구들을 사용해서 얻을 수 있는 이점을 알아보자. `: string` 타입 주석을 greeter 함수의 person 인자에 추가해보자.

```typescript{numberLines: true}
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```

## 타입 주석 ( Type annotations )

타입스크립트의 `타입 주석`은 함수나 변수에 일종의 설명서를 기록하는 간략한 방법을 제공한다. 앞선 예제의 경우, 우리는 greeter 함수가 하나의 문자열 파라미터를 받도록 의도한 것이 된다. 그렇다면 이번엔 greeter 함수의 파라미터로 문자열 대신 배열을 전달해보자.

```typescript{numberLines: true}
function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.textContent = greeter(user);
```

<br/>

다시 컴파일링을 하면, 아래와 같은 에러가 발생할 것이다.

```bash
error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

<br/>

타입스크립트는 코드 구조와 작성자가 제공한 타입 주석을 기반으로 해서 `정적인 분석`을 제공한다.

> 정적 분석이란? 정적 프로그램 분석은 실제 실행 없이 컴퓨터 소프트웨어를 분석하는 것을 말한다. ... 이에 반하여 실행 중인 프로그램을 분석하는 것을 동적 프로그램 분석이라고 한다.
>
> 출처 : 위키피디아

## 인터페이스 ( Interfaces )

좀 더 깊이 들어가 보자. `firstName`과 `lastName` 필드를 갖는 객체를 묘사하기 위해서 `interface`를 사용해보자. 타입스크립트에서는, 서로의 내부 구조가 호환이 된다면 서로의 타입을 호환할 수 있다. 이러한 특징은 우리가 따로 규정된 규칙없이 `interface`가 필요한 형태를 갖추는 것 만으로도 `interface`를 사용할 수 있도록 해준다.

```typescript{numberLines: true}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(user);
```

## Classes

마지막으로, classes를 알아본다. 타입스크립트는 자바스크립트의 class 기반 객체지향 프로그래밍과 같은 최신 기능들을 제공한다.

`생성자(constructor)`와 몇 가지 `public` 필드를 갖는 `Student` class를 만들어 볼 것이다. `classes`와 `interfaces`는 서로 잘 어울리므로 프로그래머가 적절한 수준의 추상화를 결정할 수 있도록 도와준다는 것을 알아두자.

> constructor 메서드는 class 내에서 객체를 생성하고 초기화하기 위한 특별한 메서드이다.
>
> 출처 : MDN

또한, 생성자의 인자에 `public` 키워드를 사용하면 해당 인자의 이름으로 자동으로 프로퍼티를 생성해준다는 것도 기억해두자.

```typescript{numberLines: true}
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);ㄴ
```

<br/>

다시 `tsc greeter.ts`를 실행하면, 앞선 예제와 동일한 기능을 하는 자바스크립트 파일이 생성된다. 타입스크립트에서 `Classes`는 자바스크립트에서 자주 사용되는 프로토타입 기반 프로그래밍의 축약형일 뿐이다.