import { HStack, Icon, Text, useTheme } from 'native-base';
import { TouchableOpacity } from 'react-native';

import Checkbox from 'expo-checkbox';

import { Feather } from '@expo/vector-icons';

type Props = TaskDataProps & {
  onTagTask: () => void;
  onDelete: () => void;
}

export type TaskDataProps = {
  taskDescription: string;
  isDone?: boolean;
}

export function Task({ taskDescription, isDone = false, onTagTask, onDelete }: Props) {
  const { colors } = useTheme();

  return (
    <HStack
      bg="gray.500"
      minH={16}
      maxH={20}
      w="full"
      rounded={8}
      space={2}
      padding={3}
      borderColor="gray.400"
      borderWidth={isDone ? 0 : 1}
      alignItems="center"
      mb={2}
    >
      <Checkbox
        value={isDone}
        onValueChange={onTagTask}
        style={{
          borderRadius: 50,
          borderColor: !isDone ? colors.blue[500] : undefined
        }}
        color={isDone ? colors.purple[700] : undefined}
      />

      <Text
        color={isDone ? "gray.300" : "gray.100"}
        fontSize="sm"
        numberOfLines={2}
        flex={1}
        textDecorationLine={isDone ? "line-through" : undefined}
      >
        {taskDescription}
      </Text>

      <TouchableOpacity
        onPress={onDelete}
      >
        <Icon
          as={Feather}
          name="trash-2"
          size={5}
          color="gray.300"
        />
      </TouchableOpacity>
    </HStack>
  );
}