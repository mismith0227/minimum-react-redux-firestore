import { combineSagas } from 'lib/redux/sagaHelpers'
import { authSaga } from 'modules/Auth'
import { TodosSaga } from 'modules/Todos'

export default combineSagas([authSaga, TodosSaga])
