import { Input as InputNativeBase, IInputProps } from 'native-base';

export function Input({...rest}: IInputProps) {
  return (
    <InputNativeBase
      w="full"
      h={14}
      rounded={8}
      padding={4}
      bgColor="gray.500"
      borderColor="gray.700"
      borderWidth={2}
      color="gray.100"
      fontSize="md"
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="gray.300"
      autoCorrect={false}
      returnKeyType="send"
      _focus={{
        borderColor: "purple.700",
        borderWidth: 2
      }}
      {...rest}
    />
  );
}