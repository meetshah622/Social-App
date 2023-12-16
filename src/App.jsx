import "./App.css";
import { ConfigProvider, Spin } from "antd";
import RootLayout from "./Components/RootLayout/RootLayout";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="loader">
            <Spin size="large" />
          </div>
        }
      >
        <ConfigProvider>
          <RootLayout />
        </ConfigProvider>
      </Suspense>
    </>
  );
}

export default App;
