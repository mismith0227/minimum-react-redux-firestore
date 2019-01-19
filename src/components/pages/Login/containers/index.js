import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { authActions } from 'modules/Auth'

const mapStateToProps = state => ({
  auth: state.auth,
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  loginRequested: () => dispatch(authActions.loginRequested()),
})

const container = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  pure
)

export default container
