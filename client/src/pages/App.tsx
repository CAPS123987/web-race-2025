import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'

import { Button } from "@/components/ui/button"

import { toast } from "sonner"
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MobileWrapper, PCWrapper } from '@/components/Responsive'

function App() {
  const [count, setCount] = useState(0)
  
  const [popValue, setPopValue] = useState("")

  function randomIntFromInterval(min : number, max : number) : number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  document.title = "Home";

  return (
    <>
      <ModeToggle />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react animate-spin duration-10000" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button>Click me</Button>
      <div className="card">
        <Button onClick={() => {setCount((count) => count + 1);toast.error("This is testing error",{
          description: "not a real error",
          closeButton: true,
          duration: 3000,
        })}}>
          count is {count}
        </Button>
        <Button variant="outline" onClick={() => {toast.loading("Loading...",{
            description: "waiting for the server",
            duration: 1000,
            }
          )}
        }>
          loading
        </Button>
        <Button onClick={() => {toast.dismiss();}}>
          dismiss
        </Button>
        <Button onClick={() => {
          const promise = () => new Promise<{ name: string, ping: number}>((resolve) => setTimeout(() => resolve({ name: 'Sonner server', ping: randomIntFromInterval(1,200)}), randomIntFromInterval(1000,2000)));

          toast.promise(promise, {
            loading: 'Establishing connection...',
            success: (data) => {
              return {
                message: `${data.name} has been contacted`,
                description: 'Connection show ping of '+data.ping+'ms',
              };  
            },
            error: (error) => {
              return {
                message: 'Failed to contact server',
                description: error.message,
              };
            },
            duration: 1500
          });
        }}>
          contact server
        </Button>
        <Popover>
          <PopoverTrigger asChild><Button>Open popover</Button></PopoverTrigger>
          <PopoverContent>
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Popover</h4>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="popoverValue">Value</Label>
                <Input value={popValue} className="col-span-2 h-8" id="popoverValue" placeholder='value data' onInput={(e)=>{setPopValue(e.currentTarget.value)}}/>
              </div>
            </div>
            </PopoverContent>
        </Popover>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PCWrapper>
        <p>You are on pc</p>
      </PCWrapper>
      <MobileWrapper>
        <p>You are on mobile</p>
      </MobileWrapper>
    </>
  )
}

export default App
