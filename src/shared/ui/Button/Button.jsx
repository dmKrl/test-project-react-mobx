import cls from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={cls.Button}>
            {children}
        </button>
    );
};

export default Button;
