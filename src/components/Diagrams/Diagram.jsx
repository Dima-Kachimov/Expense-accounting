import DiagramBar from './DiagramBar';

function Diagram(props) {
    const { dataSets } = props;
    const dataSetsValues = dataSets.map((month) => month.value);
    const maxMonthCost = Math.max(...dataSetsValues);
    return (
        <div className="diagram">
            {dataSets.map((dataSet) => (
                <DiagramBar
                    key={dataSet.label}
                    value={dataSet.value}
                    maxValue={maxMonthCost}
                    label={dataSet.label}
                />
            ))}
        </div>
    );
}
export default Diagram;
