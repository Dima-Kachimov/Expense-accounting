import CostDate from './CostDate';

function CostCard(props) {
    const { date, title, amount, id, removeCost } = props;

    // From app delete cost
    const handleRemoveCost = () => {
        removeCost(id);
    };

    return (
        <div className="cost-card__wrap">
            <CostDate date={date} />
            <h2 className="cost-card__title">{title}</h2>
            <div className="cost-card__price">{amount}$</div>
            <button className="button-clear" onClick={handleRemoveCost}>
                <img
                    width={20}
                    height={20}
                    src="./img/icons/delete-icon.png"
                    alt="delete"
                />
            </button>
        </div>
    );
}
export default CostCard;
