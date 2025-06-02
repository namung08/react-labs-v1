interface UserItem {
    id: number;
    name: string;
}

interface UserItemProps {
    users: UserItem[]
}
export const UserItem = ({users}: UserItemProps) => {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}
