import './phoneNumber.css';
import PhoneIcon from '@mui/icons-material/Phone';

interface PhoneNumberProps {
    number: string;
}

export const PhoneNumber: React.FC<PhoneNumberProps> = ({ number }) => {
    return (
        <div className="phone_icon">
            <PhoneIcon />
            <a href={`tel:${number}`}>{number}</a>
        </div>
    );
}
