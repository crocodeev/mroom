import { Select, Button } from 'react-materialize';
import 'materialize-css'
export default function Channel(){

   return(
    <div>
        <Button>123123</Button>
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
    value="Option 1"
  >
    <option
      disabled
      value=""
    >
      Choose your option
    </option>
    <option value="1">
      Option 1
    </option>
    <option value="2">
      Option 2
    </option>
    <option value="3">
      Option 3
    </option>
  </Select>
  </div>
   )
}