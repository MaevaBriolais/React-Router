import { useRouteLoaderData } from "react-router-dom";

function Home() {
  const weather = useRouteLoaderData("app");

  return (
    <>
      <h1>Hello from Home</h1>
      <p>Today is a {weather} day</p>
      <p>Je comprends pas pourquoi mes pages articles ne fonctionnent pas</p>
    </>
  );
}

export default Home;
