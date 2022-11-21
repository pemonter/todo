import { Divider, FlatList, HStack, Text, useToast, VStack } from "native-base";
import { Input } from '@components/Input';
import { Task, TaskDataProps } from "@components/Task";
import { useState } from "react";
import { useEffect } from "react";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Alert } from "react-native";
import { EmptyList } from "@components/EmptyList";

export function Home() {
  const [tasks, setTasks] = useState<TaskDataProps[]>([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [completedTasks, setCompletedTasks] = useState(0);

  const toast = useToast();

  function handleNewTask() {
    if (!taskDescription.trim().length) {
      return toast.show({
        title: 'Por favor informe uma descrição para a tarefa.',
        placement: 'top',
        bgColor: 'danger'
      })
    }

    const alreadyExists = tasks.find(taskData => taskData.taskDescription === taskDescription);

    if (alreadyExists) {
      return toast.show({
        title: 'Já existe uma tarefa com essa descrição.',
        placement: 'top',
        bgColor: 'danger'
      })
    };

    const task = {
      taskDescription,
      isDone: false
    }

    setTaskDescription('');
    setTasks(prevState => [...prevState, task]);
  }

  function handleTagTask(taskDescription: string) {
    const updatedTasks = tasks.map(task => ({ ...task }));

    const task = updatedTasks.find(taskData => taskData.taskDescription === taskDescription);

    if (!task) return;

    task.isDone = !task.isDone;

    setTasks(updatedTasks);
  }

  function handleDeleteTask(taskDescription: string) {
    Alert.alert('Desejar excluir a tarefa selecionada?', '', [
      {
        text: 'Sim',
        onPress: () => (
          setTasks(prevState => prevState.filter(task => task.taskDescription !== taskDescription)),
          toast.show({
            title: 'Tarefa excluída.',
            placement: 'top',
            bgColor: 'orange.500'
          })
        )
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  async function countCompletedTasks() {
    setCompletedTasks(0);

    tasks.map(task => {
      if (task.isDone) {
        setCompletedTasks((count) => count + 1);
      }
    })
  }

  useEffect(() => {
    countCompletedTasks();
  }, [tasks]);

  return (
    <VStack flex={1} bg="gray.600" >
      <Header />

      <HStack space={1} px={4} pb={8} mt={-7}>
        <Input
          onChangeText={setTaskDescription}
          value={taskDescription}
          flex={1}
        />

        <Button onPress={handleNewTask} />
      </HStack>

      <HStack px={4}>
        <HStack space={2} flex={1}>
          <Text color="blue.500" fontFamily="heading" fontSize="sm">
            Criadas
          </Text>

          <VStack bgColor="gray.400" w={8} rounded="full" alignItems="center" px={2}>
            <Text color="gray.200" fontFamily="heading" fontSize="sm">
              {tasks.length}
            </Text>
          </VStack>
        </HStack>

        <HStack space={2}>
          <Text color="purple.500" fontFamily="heading" fontSize="sm">
            Concluídas
          </Text>

          <VStack bgColor="gray.400" w={8} rounded="full" alignItems="center" px={2}>
            <Text color="gray.200" fontFamily="heading" fontSize="sm">
              {completedTasks}
            </Text>
          </VStack>
        </HStack>
      </HStack>

      {
        !tasks.length &&
        <Divider ml={4} my={5} width={358} color="gray.300" orientation="horizontal" />
      }

      <VStack flex={1} px={4} mt={5}>
        <FlatList
          data={tasks}
          keyExtractor={item => item.taskDescription}
          renderItem={({ item }) => (
            <Task
              taskDescription={item.taskDescription}
              isDone={item.isDone}
              onDelete={() => handleDeleteTask(item.taskDescription)}
              onTagTask={() => handleTagTask(item.taskDescription)}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyList />
          )}
          showsVerticalScrollIndicator={false}
        />
      </VStack>

    </VStack>
  );
}