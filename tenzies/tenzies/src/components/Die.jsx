const Die = (props) => {
  const styles = { backgroundColor: props.isHeld ? "#59E391" : "white" }

  return (
    <div className="die" style={styles} onClick={(e) => props.holdDice(props.id)}>
      {props.value}
    </div>
  )
}
export default Die
