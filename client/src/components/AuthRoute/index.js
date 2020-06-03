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
    const [userData, setUserData] = useState({
        img: "",
        userName: "",
        platforms: "",
        games: ""
    });

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
                console.log(res.data);
                setOnboard(res.data.onboard)
                setUserData({
                    img: res.data.profileImage,
                    userName: res.data.userName,
                    platforms: res.data.platforms,
                    games: res.data.games
                });
            })
    }


    return (
        <Switch>
            {loading ? <Loading /> :
                state.isAuthenticated ?
                    onboard ?
                        (
                            <ChatProvider startChat={true} userObj={{ id: state.id }}>
                                <Route exact path={["/", "/home"]}>
                                    <Home navImg={userData.img}/>
                                </Route>
                                <Route exact path="/chat">
                                    <Chat navImg={userData.img}/>
                                </Route>
                                <Route exact path="/profile">
                                    <Profile username={userData.userName} userImage={userData.img} favPlatforms={userData.platforms} favGames={userData.games} changeState={state.changeState} />
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


