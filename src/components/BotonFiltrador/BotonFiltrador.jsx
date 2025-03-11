const BotonFiltrador = (props) => {

    return (
        <div className='customCheckBoxHolder'>
            <input onChange={props.onChange} type='checkbox' id={props.id} className='customCheckBoxInput' />
            <label htmlFor={props.id} className='customCheckBoxWrapper'>
                <div className='customCheckBox'>
                    <div className='inner'>{props.nombre}</div>
                </div>
            </label>
        </div>
    );
}

export default BotonFiltrador;
