import {useState} from "react";
import {UserItem} from "./UserItem.tsx";

export const UserList = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "윤유저" },
        { id: 2, name: "김유저" },
    ]);

    return <UserItem users={users}/>
}
