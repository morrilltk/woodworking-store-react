import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  Badge,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useState } from "react";

const CartDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={() => setDropdownOpen(!dropdownOpen)}
    >
      <DropdownToggle tag='div'>
        <FontAwesomeIcon className='me-1' icon={faCartShopping} />
        Cart <Badge pill={true}>3</Badge>
      </DropdownToggle>
      <DropdownMenu
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <DropdownItem toggle={false}>bob</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CartDropdown;
