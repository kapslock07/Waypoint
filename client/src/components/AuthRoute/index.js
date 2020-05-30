import React from 'react'
import Home from "../../pages/Home";
import Login from "../../pages/Login"
import Options from "../../pages/Options"
import Chat from "../../pages/Chat";
import Profile from "../../pages/Profile";
import NoMatch from "../../pages/NoMatch";

function Wrapper() {

    const [state, setState] = useState({
        name: "",
        error: null,
        isAuthenticated: false
    })

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={["/", "/login"]} component={Login} />
                    <Route exact path="/options" component={Options} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/profile" >
                        <Profile username={"JerryGarcia"} userImage="https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2019/07/60698636_DATEBOOK_MER2018100515460770kahn0801.jpg" favConsolesImgs={["https://www.clipartkey.com/mpngs/m/178-1788860_clip-art-logo-ps4-png-ps4-playstation-4.png", "https://tuxbyte.com/wp-content/uploads/2018/01/512px-nintendoswitchlogo-svg-e1516201277674.png"]} favGamesImgs={["https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP9000-CUSA17357_00-MLBTHESHOW20STND/1590538852000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000", "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2002-CUSA01163_00-ROCKETLEAGUENA01/1590453522000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7dSK4WGwixhn3M2J40ekgaWs05P2WXnXusL1vLccNFy9EQYhO&usqp=CAU"]} />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Wrapper
