import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login"
import Onboarding from "../../pages/Onboarding"
import Chat from "../../pages/Chat";
import Profile from "../../pages/Profile";
import NoMatch from "../../pages/NoMatch";
import Loading from "../../pages/Loading"
import Auth from "../../utils/Auth";
// import UserContext from '../../utils/UserContext';
import { ChatProvider } from "../../utils/contexts/chatContext";
import GameContext from '../Context/GameContext';


function AuthRoute() {
    const [search, setSearch] = useState({
        game: '',
        platform: '',


    });

    // console.log(search.game, search.platform);

    const [loading, setLoading] = useState(true)

    const [state, setState] = useState({
        id: "",
        error: null,
        isAuthenticated: false,
        changeState: (name, value) => setState({ ...state, [name]: value })
    })

    const [onboard, setOnboard] = useState(false)


    useEffect(() => {
        checkAuthentication();
    }, [state.isAuthenticated])

    const checkAuthentication = async () => {
        await Auth.isLoggedIn()
            .then(async res => {
                setLoading(true);
                if (res.data.success === true) {
                    setState({
                        ...state,
                        id: res.data.user.id,
                        isAuthenticated: true,
                    });
                    await checkOnboarding(res.data.user.id)

                    setLoading(false);
                };
                setLoading(false)
            });
    };

    const checkOnboarding = async id => {
        await Auth.onboardStatus(id)
            .then(res => {
                console.log("Onboard status:", res.data.onboard)
                setOnboard(res.data.onboard)

            })
    }


    return (
        <Switch>
            {loading ? <Loading /> :
                state.isAuthenticated ?
                    onboard ?
                        (
                            <ChatProvider startChat={true} userObj={{ id: state.id }}>
                                <GameContext.Provider value={{ search, setSearch }}>
                                    <Route exact path={["/", "/home"]} component={Home} />
                                </GameContext.Provider>
                                <Route
                                    exact
                                    path="/home?game=:game&platform=:platform"
                                    component={Chat}
                                />
                                <Route exact path="/chat" component={Chat} />
                                <Route exact path="/profile">
                                    <Profile username={"JerryGarcia"} userImage="https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2019/07/60698636_DATEBOOK_MER2018100515460770kahn0801.jpg" favPlatformsImgs={["https://www.clipartkey.com/mpngs/m/178-1788860_clip-art-logo-ps4-png-ps4-playstation-4.png", "https://tuxbyte.com/wp-content/uploads/2018/01/512px-nintendoswitchlogo-svg-e1516201277674.png"]} favGamesImgs={["https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP9000-CUSA17357_00-MLBTHESHOW20STND/1590538852000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000", "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2002-CUSA01163_00-ROCKETLEAGUENA01/1590453522000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7dSK4WGwixhn3M2J40ekgaWs05P2WXnXusL1vLccNFy9EQYhO&usqp=CAU"]} changeState={state.changeState} />
                                </Route>
                            </ChatProvider>)
                        : (
                            <Route exact path={["/", "/onboarding"]} render={() => <Onboarding changeState={state.changeState} onboard={state.onboard} id={state.id} />} />
                        )
                    : (
                        <Route><Login isAuthenticated={state.isAuthenticated} changeState={state.changeState} /></Route>
                    )}
            <Route>
                <NoMatch />
            </Route>
        </Switch>
    )
}

export default AuthRoute;


