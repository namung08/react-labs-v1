interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
}

export const UserList = ({ users }: UserListProps) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
