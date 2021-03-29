import Tippy from "@tippyjs/react";

export function Input(props) {
   return <Tippy content={props.content}>
       <input {...props}/>
   </Tippy> 
}


export function Button(props) {
    return <Tippy content={props.content}>
       <button {...props}>{props.children}</button>
   </Tippy>
}