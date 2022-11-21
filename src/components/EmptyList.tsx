import { Text, Center } from "native-base";

import ClipboardSvg from '@assets/clipboard.svg';

export function EmptyList() {
  return (
    <Center mt={10}>
      <ClipboardSvg />

      <Text color="gray.300" fontFamily="heading" fontSize="sm" mt={4}>
        Você ainda não tem tarefas cadastradas
      </Text>

      <Text color="gray.300" fontSize="sm">
        Crie tarefas e organize seus itens a fazer
      </Text>
    </Center>
  );
}