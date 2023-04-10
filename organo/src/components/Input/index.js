import './Input.css'

const Input = ({type='text', value, onChange, required, placeholder, label}) => {

    const onChangeValue = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className={`input input-${type}`}>
            <label>{label}</label>
            <input 
                type={type}
                value={value}
                onChange={onChangeValue}
                required={required} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input