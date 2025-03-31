import {useState, lazy, Suspense, useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Toaster } from '@/components/ui/sonner.tsx'

import GlobalContext from '@/GlobalContext'

import LoadingPage from '@/components/LoadingPage.tsx'
import { ThemeProvider } from '@/components/theme-provider'

import PocketBase from 'pocketbase'
const apiPath = "http://127.0.0.1:8090"

const App = lazy(() => import('@/pages/App'))
const Login = lazy(() => import('@/pages/Login'))
const Header = lazy(() => import('@/components/Header'))
const Register = lazy(() => import('@/pages/register/Register'))
const Scroll = lazy(() => import('@/pages/scroll/Scroll'))

const LazyLoader:React.FC<ChildrenProps> = ({children}) => {
  return(
    <Suspense fallback={<LoadingPage/>}>{children}</Suspense>
  )
}

const routes = [
  {
    path: '/',
    element: <LazyLoader><Header/></LazyLoader>,
    children: [
      {
        path: '/',
        element: <LazyLoader><App/></LazyLoader>
      },
      {
        path: '/login',
        element: <LazyLoader><Login/></LazyLoader>
      },
      {
        path: '/register',
        element: <LazyLoader><Register/></LazyLoader>
      },
      {
        path: '/scroll',
        element: <LazyLoader><Scroll/></LazyLoader>
      },
    ]
  },
]

const router = createBrowserRouter(routes);

const ContextWrapper:React.FC<ChildrenProps> = ({children}) => {
  const client = new PocketBase(apiPath);

  const [value, setValue] = useState("true");

  useEffect(() => {
    client.collection('posts').getFullList({expand : "comments"}).then((data) => {
      console.log(data);
    });
  }, []);
  
  return(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GlobalContext.Provider value={{value,setValue,client}}>
        <Toaster richColors  position="bottom-left" visibleToasts={3} />
        {children}
      </GlobalContext.Provider>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    <ContextWrapper>
      <RouterProvider router={router} />
    </ContextWrapper>
  //</StrictMode>,
)
