import Image from "next/image"
import React, { MouseEventHandler } from "react"

export const Button = ({
    children,
    onClick,
    className
} : { children: React.ReactNode, className?: string, onClick?: MouseEventHandler<HTMLButtonElement> }) =>
{
    return <button role='button' onClick={ onClick } className={ "bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded " + ( className ?? '' ) }>
        
        {
            children
        }
    </button>
}


export const ButtonBlue = ({
    children,
    onClick,
    className
} : { children: React.ReactNode, className?: string, onClick?: MouseEventHandler<HTMLButtonElement> }) =>
{
    return <button role='button'  onClick={ onClick } className={ "w-full hover:bg-blue-700 font-bold py-2 px-4 rounded border-2 border-solid border-slate-200 bg-blue-400 text-white  " + ( className ?? '' ) }>
        
        {
            children
        }
    </button>
}

export const ButtonSecondary = ({
    children,
    onClick,
    className
} : { children: React.ReactNode, className?: string, onClick?: MouseEventHandler<HTMLButtonElement> }) =>
{
    return <button role='button' onClick={ onClick } className={ "w-full hover:bg-slate-700 font-bold py-2 px-4 rounded border-2 border-solid border-slate-200 bg-transparent text-white  " + ( className ?? '' ) }>
        
        {
            children
        }
    </button>
}