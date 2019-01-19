import { connect } from 'react-redux'
import { compose, pure, lifecycle } from 'recompose'
import { authActions } from 'modules/Auth'
import { todosActions } from 'modules/Todos'

const mapStateToProps = state => ({
  auth: state.auth,
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  loginRequested: () => dispatch(authActions.loginRequested()),
  logoutRequested: () => dispatch(authActions.logoutRequested()),
  addTodoRequested: newTodo => dispatch(todosActions.addTodoRequested(newTodo)),
  changeCompletedRequested: updateTodo =>
    dispatch(todosActions.changeCompletedRequested(updateTodo)),
  deleteTodoRequested: key => dispatch(todosActions.deleteTodoRequested(key)),
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
    componentWillReceiveProps(nextProps) {
      if (nextProps.auth.uid !== this.props.auth.uid) {
        this.props.fetchTodosRequested()
      }
    },
  }),
  pure
)

export default container
