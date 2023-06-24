import { EXCEL_FORMATS } from "../common/constants"
import { FormContainer } from "./formContainer"


export const UploadForm = () => {
    return <div>
        <div>
            <FormContainer>
                <Label required labeFor='Employee Excel'>
                    <input role='input' accept={EXCEL_FORMATS} required name="emplyees" type="file"/>
                </Label>
                <div className="mt-8">
                <Label labeFor='Previous Year Excel'>
                    <input role='input' accept={EXCEL_FORMATS} name="previousYear" type="file"/>
                </Label>
                </div>
            </FormContainer>
        </div>
    </div>
}

const Label = ({ children, labeFor, required } : { children: React.ReactNode, labeFor: React.ReactNode,required?: boolean }) => {
    return (
        <label>
            <div className="text-xl text-slate-200">{labeFor} { required ? <span className="text-orange-400">*</span> : '' }</div>
            { children }
        </label>
    )
}