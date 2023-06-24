import { HeroHeading } from "./heroHeading"
import { UploadForm } from "./uploadForm"

export const Hero = () => {
    return <div>
        <HeroHeading />
        <div className="mt-10">
            <UploadForm/>
        </div>
    </div>
}