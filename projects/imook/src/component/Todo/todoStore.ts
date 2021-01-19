import {createLocalStore, ActUtil} from '@efox/imook'

export type TodoType = {
  id: number
  title: string
  completed: boolean
}

type State = {
  todos: TodoType[]
}

const initialState: State = {
  todos: [
    {id: 1, title: 'Wash dishes', completed: false},
    {id: 2, title: 'Study JS', completed: false},
    {id: 3, title: 'Buy ticket', completed: false},
  ],
}

type CounterActUtil = ActUtil<typeof initialState>

const todoStore = createLocalStore(initialState, {
  toggleTodo({commit}: CounterActUtil, id: TodoType['id']) {
    commit(draftStore => {
      const toggleTodo = draftStore.state.todos.find(todo => todo.id === id)
      if (toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed
      }

      //  bug issues: https://github.com/dai-shi/react-tracked/issues/79
      // draftStore.state.todos.map(todo => (todo.id === id ? {...todo, completed: !todo.completed} : todo))
    })
  },
})

export default todoStore
