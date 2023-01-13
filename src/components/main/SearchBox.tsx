import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import classes from "./Header.module.scss";
import { FiSearch } from "react-icons/fi";


export default function Search() {
  return (
<InputGroup  className={classes.input} ml={5}>
      <InputLeftElement pointerEvents="none" children={<FiSearch />}
       style={{color: 'gray'}} />
      <Input
        placeholder="Search artists"
        
        
        style={{ backgroundColor: "#1D2123", border: 'none', color:'#fff', width:'1122px' }}
      />
    </InputGroup>
  );
}