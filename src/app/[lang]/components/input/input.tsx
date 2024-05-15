import { ComponentProps, forwardRef } from 'react'

interface InputProps extends ComponentProps<'input'> { }

export const Input = forwardRef<HTMLInputElement>((props: InputProps, ref) => {
  return (
    <input
      id="todo"
      type="text"
      name="text"
      className="pd-2 border-cyan-300 border-2 w-full"
      placeholder="Digite uma tarefa"
      ref={ref}
      {...props}
    // onChange={(e) => setTodo(e.target.value)}
    // value={todo}
    // ref={inputRef}
    // value={todoContent}
    // onFocus={inputRef.current.focus()}
    />
  )
})

Input.displayName = 'Input'