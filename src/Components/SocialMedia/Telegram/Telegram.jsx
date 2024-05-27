export const Telegram = () => {
    const telegramUrl = `https://t.me/wanderlustanna`;

    return (
        <a className="icon telegram" to={telegramUrl} target="_blank" rel="noopener noreferrer">
            <span className="tooltip">Telegram</span>
            <span><i className="fa-brands fa-telegram"></i></span>
        </a>
    );
}