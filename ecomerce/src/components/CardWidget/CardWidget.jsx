function CardWidget() {
    return (
        <a className="nav-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-12.83-2h13.23c.79 0 1.44-.55 1.63-1.32l1.81-7.24c.16-.64-.24-1.32-.89-1.32h-14.29l-.95-4h-2.04v2h1.51l1.33 5.34-1.45 5.79c-.18.75.3 1.53 1.08 1.53zm3.83-8h11.12l-1.25 5h-9.88l-1.99-5z"/>
            </svg>
            <span className="badge text-bg-secondary">4</span>
        </a>
    );
}

export default CardWidget;