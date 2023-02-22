import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import classes from "./Header.module.scss";
import { FiSearch } from "react-icons/fi";


export default function Search() {
  return (
<InputGroup ml={2.5}>
      <InputLeftElement pointerEvents="none" children={<FiSearch />}
       style={{color: 'gray',height: '63px'}} />
      <Input
        placeholder="Search artists"
        focusBorderColor="#1D2123"
        style={{ backgroundColor: "#1D2123", border: 'none', color:'#fff', width:'1200px', height: '63px' }}
      />
    </InputGroup>
  );
}