import { useSpring, animated } from "react-spring";

import Arrow from '../assets/landing/icons/arrow.svg';

export default function ArrowInfo(props : any) {
    return <>
        {
            props.type === "left" ?
                <animated.div className="about--content__left-info"
                              style={
                                  useSpring({
                                      from: {
                                          x: -500,
                                          opacity: 0
                                      },
                                      to: {
                                          x: 100,
                                          opacity: 1
                                      },
                                      config: {
                                          tension: 80
                                      },
                                  })
                              }
                >
                    <img className="about--content__left-info--img" src={Arrow} alt=""/>
                    <p className="about--content__left-info--description">
                        Lorem ipsum dolor sit<br/>amet, consectetur<br/>adipiscing elit.
                    </p>
                </animated.div> :
                <animated.div className="about--content__right-info"
                              style={
                                  useSpring({
                                      from: {
                                          x: 500,
                                          opacity: 0
                                      },
                                      to: {
                                          x: -100,
                                          opacity: 1
                                      },
                                      config: {
                                          tension: 80
                                      },
                                  })
                              }
                >
                    <p className="about--content__right-info--description">
                        Lorem ipsum dolor sit<br/>amet, consectetur<br/>adipiscing elit.
                    </p>
                    <img className="about--content__right-info--img" src={Arrow} alt=""/>
                </animated.div>
        }
    </>
}