import ThemeContext from "./theme_context"
function withTheme(X) {
  return props => {
    return (
      <ThemeContext.Consumer>
        {
          value => {
            return <X {...value} {...props} />
          }
        }
      </ThemeContext.Consumer>
    )
  }
}

export default withTheme