import React, {useState} from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Auth from "../Routes/Auth";


export default () => {
    var isLoggedIn = useState(true)

        return (
            <div>
                header
            </div>
        // <div>
        //     <Link to="/">
        //         <Icon>DongBang 동방</Icon>
        //     </Link>
        //     isLoggedIn ? (
        //         <List>
        //             <Link to="/profile">
        //                 <Text>마이페이지</Text>
        //             </Link>
        //             <Text onClick={logOut}>로그아웃</Text>
        //         </List>
        //     ) : (
        //         <List>
        //             <Popup 
        //             trigger={
        //                 <Text>로그인/회원가입</Text>
        //             }
        //             modal
        //             contentStyle = {contentStyle}
        //             lockScroll={true}>
                        
        //                 <Auth/>
        //             </Popup>
        //         </List>
        //                 )
        // </div>
    );
}