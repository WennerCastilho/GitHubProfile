import { ContainerSC, ImageSC } from "./coverPhotoStyles"
import image from '../../../assets/hero-image-github-profile.png'

export const CoverPhoto = () => {
    return (
        <ContainerSC>
            <ImageSC src={image} alt="Cover Photo" />
        </ContainerSC>
    )
}