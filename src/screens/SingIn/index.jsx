import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
  Image,
  Switch,
  useColorMode,
} from 'native-base';

export default function SingIn() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center height='full' _dark={{ bg: 'black' }} _light={{ bg: 'white' }}>
      <VStack>
        <Image
          size={150}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/22546269?v=4',
          }}
          alt='Foto do usuário'
        />
      </VStack>

      <VStack width='full' p={10}>
        <Box width='full'>
          <Heading
            color={'colorGray.700'}
            _dark={{ color: 'white' }}
            _light={{ color: 'black' }}
          >
            Entrar
          </Heading>

          <FormControl>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              placeholder='seu@email.com.br'
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name='person' />}
                  size={5}
                  ml={2}
                  color='muted.400'
                />
              }
            />
            <FormControl.ErrorMessage>E-mail Inválido</FormControl.ErrorMessage>
          </FormControl>
          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              placeholder='sua senha'
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name='lock' />}
                  size={5}
                  ml={2}
                  color='muted.400'
                />
              }
            />
            <FormControl.ErrorMessage></FormControl.ErrorMessage>
          </FormControl>

          <Button mt='12' colorScheme='purple'>
            Entrar
          </Button>
        </Box>

        <HStack mt={5}>
          <Checkbox value='agree' />
          <Text ml={3}>Concordo com a politica de segurança.</Text>
        </HStack>

        <HStack alignItems='center' space={4}>
          <Text>Dark</Text>
          <Switch
            isChecked={colorMode === 'light'}
            onToggle={toggleColorMode}
            aria-label={colorMode === 'light' ? 'Tema escuro' : 'Tema claro'}
          />
          <Text>Light</Text>
        </HStack>
      </VStack>
    </Center>
  );
}
