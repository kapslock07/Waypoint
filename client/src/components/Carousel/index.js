import React from "react";
import Image1 from "../../assets/images/animalcrossing.jpg"
import Image2 from "../../assets/images/halo.jpg"
import Image3 from "../../assets/images/fifa20.jpeg"
import Image4 from "../../assets/images/callofduty.png"
import Image5 from "../../assets/images/rocketleague.jpg"
import Image6 from "../../assets/images/overwatch.jpg"
import Image7 from "../../assets/images/NBA.jpg"
import Image8 from "../../assets/images/fortnite.jpg"
import Image9 from "../../assets/images/destiny2.jpg"

import styled from "@emotion/styled";
import { Transition, animated } from "react-spring/renderprops";

const TestScreen = styled("div")`
  width: 100vw;
  height: 100vh;
  display: block;
  background-repeat: no-repeat;
  background-cover: cover;
  background-image: url(${props => props.imgUrl})
`;

function TestScreen1(props) {
    return <TestScreen imgUrl={Image1}> </TestScreen>;
}
function TestScreen2(props) {
    return <TestScreen imgUrl={Image2}> </TestScreen>;
}
function TestScreen3(props) {
    return <TestScreen imgUrl={Image3}> </TestScreen>;
}
function TestScreen4(props) {
    return <TestScreen imgUrl={Image4}> </TestScreen>;
}
function TestScreen5(props) {
    return <TestScreen imgUrl={Image5}> </TestScreen>;
}
function TestScreen6(props) {
    return <TestScreen imgUrl={Image6}> </TestScreen>;
}
function TestScreen7(props) {
    return <TestScreen imgUrl={Image7}> </TestScreen>;
}
function TestScreen8(props) {
    return <TestScreen imgUrl={Image8}> </TestScreen>;
}
function TestScreen9(props) {
    return <TestScreen imgUrl={Image9}> </TestScreen>;
}

const testScreens = [TestScreen1, TestScreen2, TestScreen3, TestScreen4, TestScreen5, TestScreen6, TestScreen7, TestScreen8, TestScreen9];

const Container = styled("div")`
  width: 100%;
  cursor: pointer;
  & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
    clear: both;
    margin-left: 0;
  }
  max-width: 100%;
`;

class Carousel extends React.Component {
    state = {
        index: 0
    };

    toggle = e => {
        this.setState(state => ({
            index: state.index === 8 ? 0 : state.index + 1
        }))
    }
    render() {
        const { index } = this.state;
        var self = this
        setInterval(function () {
            self.toggle()
        }, 10000)
        return (
            <div style={{ height: "100vh" }}>
                <Container >
                    <Transition
                        native
                        reset="false"
                        unique="false"
                        items={index}
                        from={{ opacity: 0, transform: "translate3d(100%, 0 ,0)" }}
                        enter={{ opacity: 1, transform: "translate3d(0%, 0, 0)" }}
                        leave={{ opacity: 0, transform: "translate3d(-50%, 0, 0)" }}
                    >
                        {index => style => (
                            <animated.div style={{ ...style }}>
                                {React.createElement(testScreens[index])}
                            </animated.div>
                        )}
                    </Transition>
                </Container>
            </div>
        );
    }
}

export default Carousel;