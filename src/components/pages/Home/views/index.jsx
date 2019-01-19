import React from 'react'
import AppBar from '../../../organisms/AppBar'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  addTodo() {
    const { name } = this.state
    this.props.addTodoRequested(name)
  }

  changeCompleted(key, completed) {
    this.props.changeCompletedRequested({ key: key, completed: !completed })
  }

  onDelete(key) {
    this.props.deleteTodoRequested(key)
  }

  onLogin() {
    this.props.loginRequested()
  }

  onLogout() {
    this.props.logoutRequested()
  }

  onGetList() {
    this.props.fetchTodosRequested()
  }

  render() {
    return (
      <div>
        <AppBar />
        {this.props.auth.uid ? (
          <button onClick={() => this.onLogout()}>ログアウト</button>
        ) : (
          <button onClick={() => this.onLogin()}>ログイン</button>
        )}

        <button onClick={() => this.onGetList()}>取得</button>

        <div>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
            value={this.state.name}
          />
          <button onClick={() => this.addTodo()}>送信</button>
        </div>
        {this.props.auth.uid && (
          <ul>
            {this.props.todos &&
              this.props.todos.map(todo => {
                return (
                  <li key={todo.key}>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() =>
                        this.changeCompleted(todo.key, todo.completed)
                      }
                    />
                    {todo.name}
                    <button onClick={() => this.onDelete(todo.key)}>
                      削除
                    </button>
                  </li>
                )
              })}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
