export default function App() {
  const title =
    import.meta.env.VITE_APP_TITLE ?? "dFlow deployment test";
  return (
    <main style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>{title}</h1>
      <p>React + Vite starter for testing dFlow deployments.</p>
    </main>
  );
}
