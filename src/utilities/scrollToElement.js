const scrollToElement = (element) => {
    const el = document.querySelector(`#${element}`)
    return (
        el.scrollIntoView()
    )
};

export default scrollToElement;
