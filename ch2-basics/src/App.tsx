import "./App.css";
import { Greeting } from "./labs/02-props/Greeting.tsx";
import { Profile } from "./labs/02-props/Profile.tsx";
import { Welcome } from "./labs/02-props/Welcome.tsx";
import { Wrapper } from "./labs/02-props/Wrapper.tsx";
import { Button } from "./labs/02-props/Button.tsx";
import {UserList} from "./labs/02-props/UserList.tsx";

const users = [
    { id: 1, name: "윤유저" },
    { id: 2, name: "김유저" },
    { id: 3, name: "이유저" },
];

function App() {
  return (
    <>
      <Greeting name={"이상준"} />
      <Profile name={"이상준"} age={25} />
      <Welcome nickname={"야르~"} />
      <Welcome />
      <Wrapper>
        <h2>Wrapper 컴포넌트 테스트</h2>
        <p>이것은 Wrapper 안에 있는 첫 번째 문단입니다.</p>
        <p>이것은 Wrapper 안에 있는 두 번째 문단입니다.</p>
        <button>테스트 버튼</button>
      </Wrapper>
      <Button
        onClick={() => {
          alert("hit!");
        }}
      />
        <UserList users={users} />
    </>
  );
}

export default App;
