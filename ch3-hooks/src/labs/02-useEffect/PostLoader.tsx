import axios from "axios";
import { useEffect, useState } from "react";

interface data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getData = async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((r) => r.data)
    .catch((e) => "에러!");
};

export const PostLoader = () => {
  const [info, setInfo] = useState<data | string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const d = await getData();
      setInfo(d);
    };
    fetchData();
  }, []);

  return (
    <div>
      {info ? (
        typeof info === "string" ? (
          <p>{info}</p>
        ) : (
          <>
            <p>{info.title}</p>
            <p>{info.body}</p>
          </>
        )
      ) : (
        <p>로딩중...</p>
      )}
    </div>
  );
};
