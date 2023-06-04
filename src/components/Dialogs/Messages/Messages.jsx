import Messag from "./Messag/Messag";
import st from './Messages.module.css'
import { listComponentWriteMessag } from "../../../utils/helpers";

export default function Messages({messages}){
  console.log(messages);
  return (
    <div className={st.dialog__messages}>
      <div className={st.dialog__messages_wrap}>
        {listComponentWriteMessag(messages, Messag)}
      </div>
    </div>
  )
}