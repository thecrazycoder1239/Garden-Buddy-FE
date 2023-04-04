import CalendarPicker from './CalendarPicker'; 
import React, { useState } from 'react';
import Modal from 'react-modal';

type TaskFormProps = {
    isOpen: boolean;
    onRequestClose: () => void;
  };
  
  const TaskForm: React.FC<TaskFormProps> = ({ isOpen, onRequestClose }) => {
    const [selectedTask, setSelectedTask] = useState('');
  
    const handleTaskChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedTask(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      onRequestClose();
    };

    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          contentLabel="Add Task"
        >
          <h2>Add Task</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Task:
              <select value={selectedTask} onChange={handleTaskChange}>
                <option value="">Select a task</option>
                <option value="watering">Watering</option>
                <option value="pruning">Pruning</option>
                <option value="fertilizing">Fertilizing</option>
              </select>
            </label>
            <CalendarPicker />
            <button type="submit">Submit</button>
            <button type="button" onClick={onRequestClose}>
              Cancel
            </button>
          </form>
        </Modal>
      );
    };
    
    export default TaskForm;