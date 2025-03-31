import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import NeuBtn from "@/components/ui/neuBnt";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import GlobalContext from "@/GlobalContext";
import { Activity, Angry } from "lucide-react";
import { RecordModel } from "pocketbase";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

function Login() {

    const globalContext = useContext(GlobalContext)

    const [data, setData] = useState<RecordModel[]>()
    const [loading, setLoading] = useState(true)
    const [fetch, setFetch] = useState(true)
    const [fetchCount, setFetchCount] = useState(0)

    
    useEffect(()=>{
      if(fetchCount>=5) {
        setLoading(false)
        return;
      }
      globalContext.client.collection("posts").getFullList({expand:"comments"}).then((data)=>{
        setData(data)
        setLoading(false)
      }).catch(()=>{
        setFetch(!fetch)
        setFetchCount(fetchCount+1)
      })
    },[fetch])

    

    return <>
    {loading?<Skeleton className="h-4 w-[250px]" />:<h2>Název článku: {data?data?.at(0)?.title:"Nepodařilo se kontaktovat server"}</h2>}
    
    <Button><Angry />woman</Button>
    <Button className="m-2"><Activity/></Button>
    
    <Separator/>
    <NeuBtn/>
    <Separator/>

    <Button onClick={()=>toast.info("ahoj")}>test me</Button>

    <Accordion type="single" collapsible className="w-200 p-2 max-w-lvw box-border">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </>;
}

export default Login