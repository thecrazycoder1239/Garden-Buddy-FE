

export default function DailyTasks({date, tasks}: {date: string, tasks: Task[] | undefined}) {
   
    const today = new Date().toDateString();
   const tomorrow = new Date(Date.now() + 1000 * 60 * 60 * 24).toDateString()
   const dayAfterTommorow =  new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toDateString()
    
   const dateHeading = (date === today) ? "Today" 
    : (date === tomorrow) ? "Tomorrow" : `${date}`;
    

  return (
    <li>
    <h2> {`${dateHeading}`}</h2>
    <ul className="task-cards">
    {tasks?.map((task) => {
       return <li>
            <p>{task.task_slug}</p>
        </li>
    })}
    </ul>
    </li>
    
  )
      
}

