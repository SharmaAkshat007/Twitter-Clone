import react from "react"
import "./SidebarOption.css"

function SidebarOption({active, Icon, name}){
    return(
    <div className={`sidebarOption ${active && 'sidebar__active'}` }>
       <Icon/>
       <h2>{name}</h2>
    </div>
    )
}

export default SidebarOption