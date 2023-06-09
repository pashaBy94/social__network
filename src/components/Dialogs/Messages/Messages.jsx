import Messag from "./Messag/Messag";
import st from './Messages.module.css'
import { listComponentWriteMessag } from "../../../utils/helpers";
import Top from "./Top";
import { forwardRef, useRef } from "react";



export default function Messages({messages}){
  const ref = useRef(null);

  return (
    <div className={st.dialog__messages} >
        <Top ref={ref} text={'wwqd'}/>
      <div className={st.dialog__messages_wrap}>
        {listComponentWriteMessag(messages, Messag)}
      </div>
        <button onClick={()=>ref.current?.scrollIntoView({ behavior:'smooth'} )}>21312312</button>
    </div>
  )
}