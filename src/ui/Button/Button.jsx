import './button.scss';

export const Button = (props) => {
   return (
      <button className="button" type="button" onClick={props.action}>{props.name}</button>
   )
}