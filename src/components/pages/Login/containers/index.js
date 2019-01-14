import { connect } from "react-redux";
import { compose, pure, lifecycle } from "recompose";
import { push } from "connected-react-router";
import { authActions } from "modules/Auth";
import { todosActions } from "modules/Todos";

const mapStateToProps = state => ({
  auth: state.auth,
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  loginRequested: () => dispatch(authActions.loginRequested())
});

const container = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  pure
);

export default container;
