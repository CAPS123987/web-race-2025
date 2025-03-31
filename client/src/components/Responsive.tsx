import MediaQuery from 'react-responsive'

const PCWrapper:React.FC<ChildrenProps> = ({children}) =>{
    return <MediaQuery minWidth={721}>{children}</MediaQuery>
}

const MobileWrapper:React.FC<ChildrenProps> = ({children}) =>{
    return <MediaQuery maxWidth={720}>{children}</MediaQuery>
}

export {PCWrapper, MobileWrapper}