import './input.scss';


export const Input = ({ label, register, required, read, inputName, color, name}) => (
   <>
     <label className='form__label'><span className='form__span'>{label}</span>
     <input style={{borderColor: color}} readOnly={read} defaultValue={inputName} {...register(name, { required })} />
     </label>
   </>
 );