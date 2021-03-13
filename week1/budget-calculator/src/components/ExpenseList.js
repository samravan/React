import { ExpenseItem } from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

export const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />
        })}
      </ul>
      {expenses.length > 0 &&
        <button className="btn">
          Clear Expenses
          <MdDelete className='btn-icon' />
        </button>}
    </>
  )
}
