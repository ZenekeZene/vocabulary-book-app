const CustomButton = ({ icon, children }) => {
  return (
    <button className="button">
      <span className="button__icon">{ icon }</span>
      { children }
    </button>
  )
}

export default CustomButton
