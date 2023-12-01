import './App.css'
import {ConfigProvider} from 'antd'
import RootLayout from './Components/RootLayout/RootLayout'

function App() {

  return (
    <>
      <ConfigProvider>
          <RootLayout/>
      </ConfigProvider>
    </>
  )
}

export default App
