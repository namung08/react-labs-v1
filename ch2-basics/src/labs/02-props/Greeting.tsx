type Greeting = {
    name: string;
}
export const Greeting = ({name}: Greeting) => {
    return (
        <p>{`"안녕하세요, ${name}님!"`}</p>
    )
}
