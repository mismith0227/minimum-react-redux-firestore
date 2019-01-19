import { connect } from 'react-redux'
import { compose, pure, lifecycle } from 'recompose'
import { authActions } from 'modules/Auth'
import { todosActions } from 'modules/Todos'

const mapStateToProps = state => ({
  auth: state.auth,
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  fetchTodosRequested: uid => dispatch(todosActions.fetchTodosRequested()),
})

const container = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchTodosRequested()
    },
  }),
  pure
)

export default container
