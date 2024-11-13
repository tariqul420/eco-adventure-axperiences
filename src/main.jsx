import './index.css'
import { StrictMode } from 'react'
import router from './Router/Router'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ContextProvider from './Context/ContextApi'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </ContextProvider>
  </StrictMode>,
)
