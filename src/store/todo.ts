'use client'

import { create } from 'zustand'


type Todo = {
  text: string
  done: boolean
}

interface State {
  todos: Map<number, Todo>
  todo(id: number): Todo | undefined
  create: (todo: Todo) => void
}

export const useTodoStore = create<State>((set, get) => ({
  todos: new Map<number, Todo>(),
  todo: (id) => get().todos.get(id),
  create: (todo: Todo) => set((state) => {
    state.todos.set(state.todos.size, todo)
    return {
      ...state,
      todos: new Map(state.todos)
    }
  }),
  // create: (todo: Todo) => set((state) => {
  //   state.todos.set(state.todos.size, todo)
  //   return state
  // }),
  // remove: () => {
  //   const todos = get().todos
  // },
  // update: () => set({ bears: 0 }),
}))
