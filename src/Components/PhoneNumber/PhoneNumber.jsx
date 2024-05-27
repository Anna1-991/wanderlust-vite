import './phoneNumber.css';
import PhoneIcon from '@mui/icons-material/Phone';

export const PhoneNumber = ({ number }) => {
    return (
        <div className="phone_icon">
            <PhoneIcon/>
            <a href={`tel:${number}`}>{number}</a>
        </div>
    );
}