import RBButton from '../../../components/button';

const handleWithPhoto = () => {
    console.log("Handle Photo");
}

interface UploadPictoreData{

}

const UploadPicture: React.FC<UploadPictoreData> = () => {
    return (
        <div>
            
            <RBButton label="With Photo" onClick={handleWithPhoto}></RBButton>
        </div>

    );

}

export default UploadPicture