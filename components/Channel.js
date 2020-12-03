import { Select } from 'react-materialize';
import 'materialize-css'
export default function Channel(){

   return(
    <div className="container container-content-center">
    <Select
    id="Select-9"
    multiple={false}
    onChange={function noRefCheck(){}}
    options={{
      classes: '',
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
        outDuration: 250
      }
    }}
    value="SOFT"
  >
    <option
      disabled
      value=""
    >
      Choose your option
    </option>
    <option value="1">
      Soft
    </option>
    <option value="2">
      Hard
    </option>
  </Select>
  </div>
   )
}