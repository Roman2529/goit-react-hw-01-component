function Color() {
    const el = () => Math.floor(Math.random() * 255);
    return `rgb(${el()}, ${el()}, ${el()})`;
}
export default Color;