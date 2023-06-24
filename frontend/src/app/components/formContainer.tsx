'use client'
import { useState } from "react";
import { postSecretSanta } from "../../utils/apis";
import { Button, ButtonBlue, ButtonSecondary } from "../common/button";
import { Form } from "../common/form";
import { ErrorMessage } from "../common/error";

export const FormContainer = ({ children } : { children : React.ReactNode } ) => {

    const [ excleRes, setExcelRes ] = useState<null | any>(null);
    const handleSubmit = async (e: FormData)  => {
        const data = await postSecretSanta(e);
        console.log("datadata",data)
        setExcelRes(data);
    }
    
    const handlDownload = () => {
        if(!excleRes || !excleRes?.file) return;
        window.open(excleRes.file, '_blank');
    }
    const retry = () => {
        setExcelRes(null);
    }

    console.log("excleRes",excleRes)
    return (
        <>
            {
                excleRes?.error ?
                <ErrorMessage message={excleRes.message} onRetry={ retry } />
                : excleRes?.file ?
                    <div>
                    <ButtonBlue onClick={handlDownload}>Download Excel</ButtonBlue>
                    <div>
                        <ButtonSecondary onClick={ retry } className="mt-3">Upload New</ButtonSecondary>
                    </div>
                    </div>
                :
                <Form onSubmit={handleSubmit}>
                    {
                        children
                    }
                    <div className="mt-10 flex justify-center">
                        <Button>Submit</Button>
                    </div>
                </Form>
            }
        </>
    )
    
}