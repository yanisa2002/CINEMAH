import React, { useState, useEffect, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import { Wrapper, Content } from "./SearchStyle";

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('');

    return(
        <Wrapper>
            <Content>
                <FaIcons.FaSearch  />
                <input 
                    type='text' 
                    placeholder='Serch Movie' 
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                    />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;