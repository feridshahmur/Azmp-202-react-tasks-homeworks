import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider/index'
import { Button } from 'antd'
const ChangeTheme = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <Button onClick={()=>toggleTheme()}>{theme === "light" ? "dark mode" : "light mode"}</Button>
  )
}

export default ChangeTheme