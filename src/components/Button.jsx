import styles from '../styles/button.module.css';

export const Button = ({
    isDisabled = false,
    button = 'button',
    onClick,
    children,
    size,
}) => {
    return (
        <button
            className={
                size ? `${styles.button} ${styles[size]}` : styles.button
            }
            type={button}
            disabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
