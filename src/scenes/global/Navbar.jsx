import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import Login from "../../components/Login";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{padding:'10px'}}>
    <a class="navbar-brand" onClick={() => navigate("/")} style={{cursor:'pointer'}}>MeOnRent</a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

 <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" onClick={() => navigate("/")}>Home <span class="sr-only">(current)</span></a>
      </li>
     </ul>

    
      <div class="form-inline my-2 my-lg-0">

        <Badge
                badgeContent={cart.length}
                color="secondary"
                invisible={cart.length === 0}
                sx={{
                  "& .MuiBadge-badge": {
                    right: 5,
                    top: 5,
                    padding: "0 4px",
                    height: "14px",
                    minWidth: "13px",
                  },
                }}
              >
                <IconButton
                  onClick={() => dispatch(setIsCartOpen({}))}
                  sx={{ color: "black" }}
                >
                  <ShoppingBagOutlined />
                </IconButton>
              </Badge>
              <Link to="/login">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">LogOut</button>
          </Link>
      </div>
    </div>
</nav>
    // <nav className="navbar  navbar-dark bg-dark">
    //     <a className="navbar-brand" onClick={() => navigate("/")}>Ecom</a>
        

    //     <button className="btn btn-outline-success my-2 my-sm-0">Logout</button>
    //     <Badge
    //         badgeContent={cart.length}
    //         color="secondary"
    //         invisible={cart.length === 0}
    //         sx={{
    //           "& .MuiBadge-badge": {
    //             right: 5,
    //             top: 5,
    //             padding: "0 4px",
    //             height: "14px",
    //             minWidth: "13px",
    //           },
    //         }}
    //       >
    //         <IconButton
    //           onClick={() => dispatch(setIsCartOpen({}))}
    //           sx={{ color: "black" }}
    //         >
    //           <ShoppingBagOutlined />
    //         </IconButton>
    //       </Badge>
    // </nav>   
    // <Box
    //   display="flex"
    //   alignItems="center"
    //   width="100%"
    //   height="60px"
    //   backgroundColor="rgba(255, 255, 255, 0.95)"
    //   color="black"
    //   position="fixed"
    //   top="0"
    //   left="0"
    //   zIndex="1"
    // >
    //   <Box
    //     width="80%"
    //     margin="auto"
    //     display="flex"
    //     justifyContent="space-between"
    //     alignItems="center"
    //   >
    //     <Box
    //       onClick={() => navigate("/")}
    //       sx={{ "&:hover": { cursor: "pointer" } }}
    //       color={shades.secondary[500]}
    //     >
    //       ECOMMER
    //     </Box>
    //     <Box
    //       display="flex"
    //       justifyContent="space-between"
    //       columnGap="20px"
    //       zIndex="2"
    //     >
    //       <Link to="/login">
    //         Logout
    //       </Link>
          // <Badge
          //   badgeContent={cart.length}
          //   color="secondary"
          //   invisible={cart.length === 0}
          //   sx={{
          //     "& .MuiBadge-badge": {
          //       right: 5,
          //       top: 5,
          //       padding: "0 4px",
          //       height: "14px",
          //       minWidth: "13px",
          //     },
          //   }}
          // >
          //   <IconButton
          //     onClick={() => dispatch(setIsCartOpen({}))}
          //     sx={{ color: "black" }}
          //   >
          //     <ShoppingBagOutlined />
          //   </IconButton>
          // </Badge>
    //       {/* <IconButton sx={{ color: "black" }}>
    //         <MenuOutlined />
    //       </IconButton> */}
    //     </Box>
    //   </Box>
    // </Box>
  );
}

export default Navbar;
