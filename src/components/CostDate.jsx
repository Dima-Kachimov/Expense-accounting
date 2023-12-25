function CostDate(props) {
    const { date } = props;

    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className="cost-card__date">
            <div className="cost-date__month">{month}</div>
            <div className="cost-data__year">{year}</div>
            <div className="cost-data__day">{day}</div>
        </div>
    );
}
export default CostDate;
