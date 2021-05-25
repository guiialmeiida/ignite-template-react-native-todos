import React, { useState } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';


interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkTheme, setDarkTheme] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    setTasks([...tasks, {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }]);
  }

  function handleMarkTaskAsDone(id: number) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        };
      } else {
        return task;
      }
    })

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  }

  function alterTheme() {
    setDarkTheme(!darkTheme)
  }

  return (
    <View style={
      darkTheme ? { backgroundColor: '#191D3A', flex: 1 } : { backgroundColor: '#ffffff' }
    }>
      <Header isDark={darkTheme} changeTheme={alterTheme} />

      <TodoInput isDark={darkTheme} addTask={handleAddTask} />

      <MyTasksList
        isDark={darkTheme}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  )
}