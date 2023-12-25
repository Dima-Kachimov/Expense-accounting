function DiagramBar(props) {
    const { value, maxValue, label } = props;

    let barFiilHeight = '0%';
    if (maxValue > 0) {
        barFiilHeight = Math.round((value / maxValue) * 100) + '%';
    }

    return (
        <div className="diagram-bar">
            <div className="diagram-bar__inner">
                <div
                    className="diagram-bar__fill"
                    style={{ height: barFiilHeight }}
                ></div>
            </div>
            <div className="diagram-bar__label">{label}</div>
        </div>
    );
}
export default DiagramBar;
