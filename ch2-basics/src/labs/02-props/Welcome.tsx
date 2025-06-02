type Welcome = {
    nickname?: string;
}

export const Welcome = ({nickname}: Welcome) => {
    return (
        <>
            {nickname ?
                <p>{`"환영합니다, ${nickname}님!"`}</p>
                : <p>"방문자님, 환영합니다!"</p>
            }
        </>
    )
}
