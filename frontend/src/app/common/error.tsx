import { Button } from "./button"
import { MouseEventHandler } from "react"

const ErrorMessage = ({ message, onRetry } : { message: string, onRetry : MouseEventHandler<HTMLButtonElement> }) => {
    return ( 
    <div className='flex justify-center items-center text-center'>
        <div>
        <h2 className='text-bold'>Something went wrong!</h2>
        <div className='text-red-400'>{message}</div>
        {
            onRetry &&
            <Button 
                onClick={onRetry}
                className='mt-6 text-white'
            >
                Try again
            </Button>
        }
        </div>
    </div>)
}
export { ErrorMessage }