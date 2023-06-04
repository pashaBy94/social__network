import st from './Error.module.css'

export default function Error(props) {
    console.log(props);
    return (
        <div>
            <div className={st.header}></div>
            <div className={st.body}>
                <h1>Oops!</h1>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {props.state.error && props.state.error.toString()}
                    <br />
                    {props.state.errorInfo.componentStack}
                </details>
            </div>
            <div className={st.footer}></div>
        </div>
    )
}