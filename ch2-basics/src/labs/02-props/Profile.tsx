interface User {
    name: string;
    age: number;
}

export const Profile = (user: User) => {
    return (
        <>
            <h1>{`이름은 ${user.name}이고, 나이는 ${user.age}입니다.`}</h1>
        </>
    )
}