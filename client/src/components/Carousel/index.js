import React from "react";
import ReactDOM from "react-dom";
import Image1 from "../../assets/images/animalcrossing.jpg"
import Image2 from "../../assets/images/rocketleague.jpg"
import Image3 from "../../assets/images/fifa20.jpeg"


import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Transition, animated } from "react-spring/renderprops";

const TestScreen = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

const testScreens = [TestScreen1, TestScreen2, TestScreen3];

const Container = styled("div")`
  height: 400px;
  position: relative;
  width: 100%;
  cursor: pointer;
  & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  max-width: 100%;
`;

class Carousel extends React.Component {
    state = {
        index: 0
    };

    toggle = e =>
        this.setState(state => ({
            index: state.index === 2 ? 0 : state.index + 1
        }))
    render() {
        const { index } = this.state;
        var self = this
        setTimeout(function () {
            self.toggle()
        }, 5000)
        return (
            <div>
                <Container >
                    <Transition
                        native
                        reset
                        unique
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