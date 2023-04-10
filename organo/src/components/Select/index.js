import './Select.css'

const Select = (props) => {
    
    const onChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="select">
            <label>{props.label}</label>
            <select 
            required={props.required} 
            onChange={onChange}
            value={props.value}>
                <option></option>
                {props.lista && props.lista.map(it => {
                  return  <option key={it}>{it}</option>
                })}
            </select>
        </div>
    )
}

export default Select