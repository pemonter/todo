import { Button as ButtonNativeBase, IButtonProps, Icon, useTheme } from 'native-base';

import { AntDesign } from '@expo/vector-icons';

export function Button({...rest}: IButtonProps) {
  return (
    <ButtonNativeBase
      w={13}
      h={13}
      bg="blue.700"
      rounded="sm"
      _pressed={{
        bg: "blue.500"
      }}
      leftIcon={
        < Icon
          as={AntDesign}
          name="pluscircleo"
          color="gray.100"
          size="md"
        />
      }
      {...rest}
    />
  );
}