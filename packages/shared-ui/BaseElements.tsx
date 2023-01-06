import {ReactNode} from "react";

export function Button(props: {onClick: () => void, children: ReactNode}) {
    return <button onClick={() => props.onClick()}>{props.children}</button>
}

export function Headline(props: {text: string}) {
    return <h1>{props.text}</h1>
}
