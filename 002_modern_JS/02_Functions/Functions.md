# Keyword [ArrowFunction]

> Arrow Function 은 기본적으로 Anonymous Function 이다.
> 딱히 새로운 기능을 주지는 않지만, Anonymous Function 에 한정하여 훨씬 더 간결한 소스 코드를 작성할 수 있게 해준다.

# Keyword [this.]

> 일반적으로 this. 는 Event 호출자 등과 같이 부모요소를 호출하게 된다.
> 하지만 Arrow Function 에서는 부모요소가 아닌 Window를 호출하게 되는데,
> 그 이유는 Arrow Function 이 기본적으로 Anonymous Function 이기 때문에 최상위 부모 요소를 호출하기 때문이 아닐까?

- [예시1][function : combined]
  // 클릭한 버튼을 console 창에서 호출 : button 출력
  const button=document.querySelector("button");
  button.addEventListener("click", function() {
  console.log(this);
  });
- [예시2][function : seperated]
  // 클릭한 버튼을 console 창에서 호출 : button 출력
  const button=document.querySelector("button");
  function buttonClick() => {
  console.log(this);
  }
  button.addEventListener("click",buttonClick);
- [예시3][arrow function : combined]
  //클릭한 버튼을 console 창에서 호출 : window 출력
  const button=document.querySelector("button");
  button.addEventListener("click", () => {
  console.log(this);
  });

- [예시4][arrow function : seprated]
  //클릭한 버튼을 console 창에서 호출 : window 출력
  const button=document.querySelector("button");
  const buttonClick = () => {
  console.log(this);
  }
  button.addEventListener("click",buttonClick);

# Keyword [this.]

> Hi
