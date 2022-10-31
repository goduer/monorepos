import React from 'react'
import logo from './logo.svg'
import { Button } from '@arco-design/web-react'
import '@/global.less'

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="primary">hello, arco!</Button>
      </header>
    </div>
  )
}

export default App