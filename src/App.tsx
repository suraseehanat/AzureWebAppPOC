import { UserList } from './components/UserList'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Azure Function API Demo</h1>
        <p className="app-subtitle">ข้อมูลผู้ใช้งานจาก Azure Function</p>
      </header>

      <main className="app-main">
        <UserList />
      </main>
    </div>
  )
}

export default App
