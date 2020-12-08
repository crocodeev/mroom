import { Select } from 'react-materialize';
import 'materialize-css'
export default function Channel(props){

   return(
    <div className="container container-content-center">
    <form onChange={ event => props.onChange(event)}>
    <Select
    id="Channel"
    multiple={false}
    onChange={function noRefCheck(){}}
    options={{
      classes: 'white-dropdown-trigger',
      dropdownOptions: {
        alignment: 'left',
        autoTrigger: true,
        closeOnClick: true,
        constrainWidth: true,
        coverTrigger: true,
        hover: false,
        inDuration: 150,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 250,
      }
    }}
    value="hard"
  >
    <option
      disabled
      value=""
    >
      Choose your option
    </option>
    <option value="soft">
      Soft
    </option>
    <option value="hard">
      Hard
    </option>
  </Select>
  </form> 
  </div>
  
   )
}