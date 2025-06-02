const a = 5;
const b = 3;

export const add = (a: number, b: number) => {
  return a + b;
};

export const Question2 = () => {
    return(
        <div>
            <ul>
                <li>{`a = ${a}`}</li>
                <li>{`b = ${b}`}</li>
                <li>{`a + b = ${add(a, b)}`}</li>
                <li>{`add(a, b) = ${add(a, b)}`}</li>
            </ul>
        </div>
    )
}