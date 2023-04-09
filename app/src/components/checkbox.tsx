import { animated, config, useChain, useSpring, useSpringRef } from "react-spring";
import { useState } from "react";

export default function Checkbox(props : any) {
    const [IsCheck, setIsCheck] = useState(props.check);
    const [checkmarkLength, setCheckmarkLength] = useState<any | null>()

    const checkboxAnimationRef = useSpringRef();
    const checkboxAnimationStyle = useSpring({
        backgroundColor: IsCheck ? "#6839EF" : "#e3dfed",
        borderColor: IsCheck ? "#6839EF" : "#e3dfed",
        config: config.gentle,
        ref: checkboxAnimationRef
    });

    const checkmarkAnimationRef = useSpringRef();
    const checkmarkAnimation = useSpring({
        x: IsCheck ? 0 : checkmarkLength,
        config: config.gentle,
        ref: checkmarkAnimationRef
    })

    useChain(
        IsCheck
            ? [checkboxAnimationRef, checkmarkAnimationRef]
            : [checkmarkAnimationRef, checkboxAnimationRef],
        [0, 0.1]
    );
    return <>
        <label>
            <input type="checkbox"
                   onChange={() => setIsCheck(!IsCheck)}
            />
            <animated.svg
                style={checkboxAnimationStyle}
                className={'checkbox'}
                // This element is purely decorative, so
                // we hide it for screen readers
                aria-hidden="true"
                viewBox="0 0 15 11"
                fill="none"
            >
                <animated.path
                    d="M1 4.5L5 9L14 1"
                    strokeWidth="1"
                    stroke={IsCheck ? "#fff" : "none"}
                    ref={(ref) => {
                        if (ref) {
                            setCheckmarkLength(ref.getTotalLength())
                        }
                    }}
                    strokeDasharray={checkmarkLength}
                    strokeDashoffset={checkmarkAnimation.x}
                />
            </animated.svg>
        </label>
    </>
}