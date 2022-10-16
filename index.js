import React from 'react'
import ReactDOM from 'react-dom/client'
import { AddNewItem } from './AddNewItem'

const root = ReactDOM.createRoot(
  document.getElementById("root")
)

root.render(<AddNewItem element="p" />)
