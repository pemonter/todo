import { VStack } from 'native-base';

import LogoSvg from '@assets/logo.svg';

export function Header() {
  return (
    <VStack 
      bg="gray.700" 
      pt={24} 
      pb={16}
      alignItems="center"
    >
      <LogoSvg />
    </VStack>
  );
}