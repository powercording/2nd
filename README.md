```bash
os: window 11
package-manager : npm
framework: next.js 14

npm install
npm run server //  GET: items / POST: orders
npm run dev
```

## 카운터 컴포넌트에 대해

```tsx
export function Counter() {
  return (
    <div>
      <button onClick={decrement}>-</button>

      <input
        type="number"
        value={(count + "").startsWith("0") ? count : count}
        onChange={onInputChange}
      />

      <button onClick={increment}>+</button>
    </div>
  );
}
```

- 카운터 컴포넌트가 현재 카운팅 벨류를 랜더링하기 위한 태그로 일반적인 텍스트나 span 태그 등을 고려하였지만, 최대 주문 개수가 999 개인데, 해당 값을 오직 클릭으로만 처리하는것은 비효율 적이라고 판단했습니다.
- 따라서 input 태그를 사용 하였습니다. 이제 원하는 값을 직접 입력할 수 있습니다.

- 로직은 의도한 대로 처리 되지만 인풋태그의 기본값이 0인 상태에서 키보드 숫자 입력시 숫자가
  01 처럼 표시되는 현상이 있습니다 ( 데이터 상으로는 1 ). 해당 값은 버튼클릭이나 인풋태그의 값을 전체 드래그 하여 선택한 뒤에 키보드를 입력하면 올바른 값으로 표시가 됩니다.

## 전역 상태 관리 라이브러리 Recoil 사용

- 처음에는 주문상태를 객체로 만들고 배열에 저장시키려 하였습니다. 하지만 매번 플러스 마이너스 버튼 클릭에 대하여 주문 배열을 순회하는것은 비효율적이라 생각했습니다.

```tsx
//ex)
function increment(id) {
  const orders = getOrders();
  const order = orders.find((order) => order.id === id);
  order.quantity += 1;
}
```

- 엄청나게 긴 주문 배열은 거의 일반적으로 생성되지 않겠지만 주문배열이 거의 한계치인 990 에 근접 했다고 가정 했을때 아이템추가나 감소를 위하여 배열을 순회하지않는 방법이 필요해보였습니다.
- 따라서 주문은 아이템 아이디를 키값으로 가지는 객체가 되었습니다. 해당 키에 대한 벨류로는 아이템의 아이디와 함께 필요한 정보가 포함 됩니다. Object.values(obj) 로 주문 배열을 바로 생성할 수 있습니다.

```tsx
//ex)
const orders = {};
//...
orders[id].quantity += 1;
```

## 999개의 제한에 관하여

- 아이템당 999개 인지 도합 999개인지 정확하지 않아서 모든 아이템 도합 999개로 구현하였습니다.
