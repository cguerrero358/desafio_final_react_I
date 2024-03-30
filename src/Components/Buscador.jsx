

const Buscador = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => props.handlerInput(e.target.value)}
      />
      <button type="button" onClick={props.handlerButton}>Buscar</button>
    </>
  );
};

export default Buscador

