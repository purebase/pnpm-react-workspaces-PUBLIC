function SharedButton(props: any) {
    return <button onClick={() => props.onClick()}>{props.children}</button>
}

export default SharedButton;
