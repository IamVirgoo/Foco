import { useState } from "react";
import { animated, useSpring } from "react-spring";

export default function Stage(props : any) {
    const FirstCircleHandle = useSpring({
        from: {
            y: props.from || 100,
            opacity: 0
        },
        to: {
            y: 0,
            opacity: 1
        },
        config: {
            tension: 80,
            friction: 10
        },
    })
    let counter = 0;
    const [Color, setColor] = useState(false)
    const handle = () => {
        if (Color) {
            setColor(false)
        }
        else {
            counter += 1
            setColor(true)
        }
    }
    return <>
        <animated.div className="stage--content--first"
                      style={
                          {
                              ...FirstCircleHandle
                          }
                      }
        >
            <div className="stage--content--first--circle">
                <p className="stage--content--first--circle--number">
                    {props.number || "01"}
                </p>
            </div>
            <div className="stage--content--first--description">
                <p className="stage--content--first--description--heading">
                    {props.title || "Idea"}
                </p>
                <p className="stage--content--first--description--info">
                    {props.info ||
                        "The birth of an idea is the beginning of great things, from this moment a project is born"
                    }
                </p>
            </div>
        </animated.div>
    </>
}