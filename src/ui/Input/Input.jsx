import './input.scss';


export const Input = ({ label, register, required, read, inputName, color, name, type}) => (
   <>
     <label className='form__label'><span className='form__span'>{label}</span>
     <input type={type} style={{borderColor: color}} readOnly={read} defaultValue={inputName} {...register(name, { required })} />
     </label>
   </>
 );