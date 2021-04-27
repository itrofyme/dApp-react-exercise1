const ColorSelector = ({onColorChange, selectedColor}) => {
    const allColors = [
        {name: "none", value: "#F4F4F4"},
        {name: "red", value: "#FF5733"},
        {name: "green", value: "#2ECC71"},
        {name: "blue", value: "#2980B9"},
        {name: "purple", value: "#76448A"}
    ]

    return (
        <div className='color-selector'>
            <select onChange={onColorChange} value={selectedColor}>
                {allColors.map((color) => (
                    <option value={color.value}>{color.name}</option>
                ))}
            </select>
        </div>
    )
}

export default ColorSelector
