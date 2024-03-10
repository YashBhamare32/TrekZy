import React from "react";
import {Autocomplete} from '@react-google-maps/api';
import {Appbar , Toolbar , Typography , Inputbase , Box} from '@material-ui/core'
const Header = ()=>{
    return(
        <div>
            <Appbar position="static">
                <Toolbar className={classes.toolbar}>

                </Toolbar>
            </Appbar>

        </div>
    )
}
export default Header;