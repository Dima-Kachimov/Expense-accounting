function OpenForm(props) {
    const { hanleOpenForm } = props;
    return (
        <div className="open-fprm__wrap">
            <button
                className="button-clear"
                onClick={() => hanleOpenForm(true)}
            >
                Record an expense
            </button>
        </div>
    );
}
export default OpenForm;
