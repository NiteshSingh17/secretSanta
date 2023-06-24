export const Form = ({ children, onSubmit } : { children : React.ReactNode, onSubmit?: any } ) => {
    return (<form role='form' action={onSubmit} onSubmit={onSubmit}>
        {children}
    </form>)
 }