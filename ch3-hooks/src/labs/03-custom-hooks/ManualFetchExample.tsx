import { useManualFetch } from "./useManualFetch";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const ManualFetchExample = () => {
  const { data, loading, error, fetchData } = useManualFetch<Post>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "로딩 중..." : "데이터 가져오기"}
      </button>

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          에러 발생: {error.message}
        </div>
      )}

      {data && (
        <div style={{ marginTop: "20px" }}>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}; 