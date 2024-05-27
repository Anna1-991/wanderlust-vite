export const WhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a className="icon whats_app" to={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span className="tooltip">WhatsApp</span>
            <span><i className="fa-brands fa-whatsapp"></i></span>
        </a>
    );
}