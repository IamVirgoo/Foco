import { useSpring, animated } from "react-spring";
import { InView } from "react-intersection-observer";

import Header from "../components/header";
import ArrowInfo from "../components/arrowInfo";
import Footer from "../components/footer";
import Stage from "../components/stage";

import Iphone from '../assets/landing/icons/iPhone 11 Pro Max.svg';
import Ipad from '../assets/landing/icons/iPad Pro 12.svg'

import * as info from '../devtools/info';

export default function IndexPage() {
    const IphoneStyles = useSpring({
        from: {
            x: 500,
            opacity: 0
        },
        to: {
            x: 0,
            opacity: 1
        },
        config: {
            tension: 100
        }
    })
    const IpadStyles = useSpring({
        from: {
            y: 300,
            opacity: 0
        },
        to: {
            y: 0,
            opacity: 1
        },
        config: { tension: 80 }
    })

    return <>
        <Header/>
        <section className="hero">
            <div className="container hero--container">
                <div className="hero--heading">
                    <h1 className="hero--heading--title">
                        <span>Foco</span> Smart System
                    </h1>
                    <p className="hero--heading--description">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Nunc neque ante, fringilla
                        vel luctus quis, volutpat a lacus.
                    </p>
                </div>
            </div>
            <div className="devices">
                <animated.div className="devices--iphone"
                              style={
                                  {
                                      ...IphoneStyles
                                  }
                              }
                >
                    <img src={Iphone} alt=""/>
                </animated.div>
                <animated.div className="devices--ipad"
                              style={
                                  {
                                      ...IpadStyles
                                  }
                              }
                >
                    <img src={Ipad} alt=""/>
                </animated.div>
            </div>
        </section>
        <section className="about" id="about">
            <div className="container">
                <h2 className="about--title">
                    A <span>smart</span> home is...
                </h2>
            </div>
            <InView>
                {({inView, ref}) => (
                    <div className="about--content" ref={ref}>
                        {inView
                            ? <><ArrowInfo type="right"/>
                                <ArrowInfo type="left"/></>
                            : <></>
                        }
                    </div>
                )
                }
            </InView>
        </section>
        <section className="stage" id='stage'>
            <div className="container">
                <h2 className="stage--title">
                    <span>Stages</span> of Work
                </h2>
                <InView>
                    {({inView, ref}) => (
                        <div className="stage--content" ref={ref}>
                            {inView
                                ? info.scope_info.map(
                                    (value) => <>
                                        <Stage id="elem"
                                               number={value.number}
                                               title={value.title}
                                               description={value.description}
                                               from={value.from}
                                        />
                                    </>
                                )
                                : <></>
                            }
                        </div>
                    )
                    }
                </InView>
            </div>
        </section>
        <section className="architecture" id="architecture">
            <div className="container">
                <h2 className="architecture--title">
                    Project <span>Architecture</span>
                </h2>
                <div className="architecture--content">
                    {/*TODO:...*/}
                </div>
            </div>
        </section>
        <Footer/>
    </>
}